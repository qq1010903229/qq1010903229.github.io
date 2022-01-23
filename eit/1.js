import { ExponentialCost, FirstFreeCost, CustomCost } from "../api/Costs";
import { Localization } from "../api/Localization";
import { parseBigNumber, BigNumber } from "../api/BigNumber";
import { theory } from "../api/Theory";
import { Utils } from "../api/Utils";

var id = "l3229_first";
var name = "loader3229's First Theory";
var description = "loader3229's First Theory";
var authors = "loader3229";
var version = 1;

var currency;
var c1, c2;
var c1Exp, c2Exp;

var achievement1, achievement2;
var chapter1, chapter2;

var init = () => {
    currency = theory.createCurrency();

    {
        let getDesc = (level) => "q=" + getQ(level).toString(0);
        q = theory.createUpgrade(0, currency, new FirstFreeCost(new ExponentialCost(5, Math.log2(5))));
        q.getDescription = (_) => Utils.getMath(getDesc(q.level));
        q.getInfo = (amount) => Utils.getMathTo(getDesc(q.level), getDesc(q.level + amount));
    }
	
    {
        let getDesc = (level) => "x_1=" + getX1(level).toString(0);
        x1 = theory.createUpgrade(1, currency, new ExponentialCost(1, Math.log2(12)));
        x1.getDescription = (_) => Utils.getMath(getDesc(x1.level));
        x1.getInfo = (amount) => Utils.getMathTo(getDesc(x1.level), getDesc(x1.level + amount));
    }
	
    {
        let getDesc = (level) => "x_2=" + getX1(level).toString(0);
        x2 = theory.createUpgrade(2, currency, new ExponentialCost(1, Math.log2(1e5)));
        x2.getDescription = (_) => Utils.getMath(getDesc(x2.level));
        x2.getInfo = (amount) => Utils.getMathTo(getDesc(x2.level), getDesc(x2.level + amount));
    }
	
    {
        let getDesc = (level) => "x_3=" + getX1(level).toString(0);
        x3 = theory.createUpgrade(3, currency, new ExponentialCost(1, Math.log2(10)));
        x3.getDescription = (_) => Utils.getMath(getDesc(x3.level));
        x3.getInfo = (amount) => Utils.getMathTo(getDesc(x3.level), getDesc(x3.level + amount));
    }
	
    {
        let getDesc = (level) => "y=" + getY(level).toString(0);
        let getDesc1 = (level) => (y1.level > 0 ? "y=y_1\\times 2000 + " + level:"y=" + getY(level).toString(0));
        y = theory.createUpgrade(4, currency, new CustomCost(function(level){
			let l=(y1.level * 2000 + level + 10)/10;
			l = l ** 2;
			if(y1.level > 0){
				l = l ** (y1.level + y.level / 2000);
			}
			return BigNumber.TEN.pow(l);
		}));
        y.getDescription = (_) => Utils.getMath(getDesc1(y.level));
        y.getInfo = (amount) => Utils.getMathTo(getDesc(y.level), getDesc(y.level + amount));
    }
	
    {
        let getDesc = (level) => "y_1=" + getY1(level).toString(0);
        y1 = theory.createUpgrade(5, currency, new CustomCost(function(level){
			let l=(level * 2000 + 2009)/10;
			l = l ** (2 + 2 * y1.level);
			return BigNumber.TEN.pow(l);
		}));
        y1.getDescription = (_) => Utils.getMath(getDesc(y1.level));
        y1.getInfo = (amount) => Utils.getMathTo(getDesc(y1.level), getDesc(y1.level + amount));
        y1.bought = (_) => (y.level = 0);
    }
    theory.createPublicationUpgrade(0, currency, 1e4);
    theory.createBuyAllUpgrade(1, currency, 1e20);
    theory.createAutoBuyerUpgrade(2, currency, 1e100);
    theory.setMilestoneCost(new CustomCost(function(a){
		if(a==0)return BigNumber.from(9.15);
		if(a==1)return BigNumber.from(9.65);
		if(a==2)return BigNumber.from(10.99);
		if(a==3)return BigNumber.from(12.28);
		if(a==4)return BigNumber.from(13.46);
		return BigNumber.from(1e99);
	}));
    {
        qb = theory.createMilestoneUpgrade(0, 1);
        qb.description = "Make q better";
        qb.info = "Make q better";
        qb.boughtOrRefunded = () => { theory.invalidatePrimaryEquation(); updateAvailability(); };
    }
    {
        xu = theory.createMilestoneUpgrade(1, 2);
        xu.description = Localization.getUpgradeUnlockDesc(xu.level == 0 ? "x_2" : "x_3");
        xu.info = Localization.getUpgradeUnlockInfo(xu.level == 0 ? "x_2" : "x_3");
        xu.boughtOrRefunded = () => { theory.invalidatePrimaryEquation(); updateAvailability(); };
    }
    {
        po = theory.createMilestoneUpgrade(2, 1);
        po.description = Localization.getUpgradeMultCustomDesc("\\dot{\\rho}", "(1+\\rho)^{z}");
        po.info = Localization.getUpgradeMultCustomInfo("\\dot{\\rho}", "(1+\\rho)^{z}");
        po.boughtOrRefunded = () => { theory.invalidatePrimaryEquation(); updateAvailability(); };
    }
    {
        z = theory.createMilestoneUpgrade(3, 6);
        let getDesc = (level) => "z=0." + (1+level);
        z.getDescription = (_) => Utils.getMath(getDesc(z.level));
        z.getInfo = (amount) => Utils.getMathTo(getDesc(z.level), getDesc(z.level + amount));
        z.boughtOrRefunded = () => { theory.invalidatePrimaryEquation(); updateAvailability(); };
    }

    updateAvailability();
}

var updateAvailability = () => {
    y1.isAvailable = y1.level > 0 || y.level >= 2000;
    xu.isAvailable = qb.level > 0;
    xu.description = Localization.getUpgradeUnlockDesc(xu.level == 0 ? "x_2" : "x_3");
    xu.info = Localization.getUpgradeUnlockInfo(xu.level == 0 ? "x_2" : "x_3");
    x2.isAvailable = xu.level > 0;
    x3.isAvailable = xu.level > 1;
    z.isAvailable = po.level > 0;
}

var tick = (elapsedTime, multiplier) => {
    let dt = BigNumber.from(elapsedTime * multiplier);
    let bonus = theory.publicationMultiplier;
    currency.value += dt * bonus * getQ(q.level) * (po.level > 0 ? ((currency.value+1).pow(0.1+0.1*z.level)) : BigNumber.ONE) * BigNumber.from((1 + getX1(x1.level) / 10) * (xu.level > 0 ? 1 + getX1(x2.level) / 100 : 1) * (xu.level > 1 ? 1 + getX1(x3.level) / 1000 : 1)).pow(getY(y.level));
    theory.invalidateTertiaryEquation();
}

var getPrimaryEquation = () => {
    theory.primaryEquationHeight = 60;
    let result = "\\dot{\\rho} = pqx^{y}, x = \\prod_{i=1}^{"+(1 + xu.level)+"}(1 + \\frac{x_i}{10^{i}})";
    if(po.level > 0)result = "\\dot{\\rho} = pqx^{y}(1+\\rho)^{z}, x = \\prod_{i=1}^{"+(1 + xu.level)+"}(1 + \\frac{x_i}{10^{i}})";
    return result;
}

var getSecondaryEquation = () => theory.latexSymbol + "=\\max(\\ln(\\rho + 1)^{4})";

var getTertiaryEquation = () => {
    let bonus = theory.publicationMultiplier;
	let x = BigNumber.from((1 + getX1(x1.level) / 10) * (xu.level > 0 ? 1 + getX1(x2.level) / 100 : 1) * (xu.level > 1 ? 1 + getX1(x3.level) / 1000 : 1));
    let result = "p = "+bonus.toString(2)+", x = "+x.toString(2);
	if(po.level > 0)result += ", z = 0."+(1+z.level);
	result += ", \\dot{\\rho} = " + ((bonus * (getQ(q.level) * (po.level > 0 ? ((currency.value+1).pow(0.1+0.1*z.level)) : BigNumber.ONE) * BigNumber.from(x).pow(getY(y.level)))).toString(2));
    return result;
}

var getPublicationMultiplier = (tau) => tau.pow(0.5) / BigNumber.from(25);
var getPublicationMultiplierFormula = (symbol) => "p = \\frac{{" + symbol + "}^{0.5}}{25}";
var getTau = () => ((currency.value + 1).log10()/Math.log10(Math.E)) ** 4;
var get2DGraphValue = () => (currency.value + 1).log10().toNumber();

var getQ = (level) => (qb.level ? Utils.getStepwisePowerSum(level, 2, 10, 0) : BigNumber.from(level));
var getX1 = (level) => BigNumber.from(level);
var getY1 = (level) => BigNumber.from(level);
var getY = (level) => (BigNumber.from(level) + getY1(y1.level) * 2000);


init();