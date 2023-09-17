//类型：0 - 普通/Normal
//      1 - 多押/Multipress
//      2 - 反手/Cross-Finger
//      3 - 7K  /7K
//      4 - 观赏/Unplayable
var charts=[
//id,bestdoriid,name,                                 englishname,                          difficulty,  diffnum, level,newsp,type,notes,bpm1,bpm2,comment,commentEN
//ID,BestdoriID,名称,                                 英文名称,                             难度名称,    难度类型,等级, 新SP, 类型,物量, BPM1,BPM2,备注,英文备注


[60, 122637,    "[FULL] メランコリック",              "[FULL] Melancholic",                 "Expert",    4,       25,   0,    0,   1175, 140, 140, "",""],
[59, 122636,    "[FULL] メランコリック",              "[FULL] Melancholic",                 "Hard",      3,       19,   0,    0,   869,  140, 140, "",""],
[58, 122635,    "[FULL] メランコリック",              "[FULL] Melancholic",                 "Normal",    2,       14,   0,    0,   608,  140, 140, "",""],
[57, 122633,    "[FULL] メランコリック",              "[FULL] Melancholic",                 "Easy",      1,       9,    0,    0,   377,  140, 140, "",""],
//[48, 30759,     "デイタイム♪ （主菜单BGM）",          "BanG Dream! GBP Main Menu BGM",      "Expert",    4,       18,   0,    0,   288,  189, 189, "",""],


[157,121971,    "[FULL] Five Letters",                "[FULL] Five Letters",                "Special",   5,       26,   0,    0,   1455, 128, 128, "",""],
[156,121570,    "Five Letters",                       "Five Letters",                       "Special",   5,       25,   0,    0,   555,  128, 128, "",""],
[155,114745,    "Future Place",                       "Future Place",                       "Special",   5,       27,   1,    0,   888,  183, 183, "谱师：loader3229's Campus","Charter: loader3229's Campus"],
[154,111110,    "B.B.K.K.B.K.K.",                     "B.B.K.K.B.K.K.",                     "Special",   5,       27,   0,    2,   676,  170, 170, "注意，CHUNITHM EXPERT谱面半还原警告！",""],
[153,110440,    "Breakthrough!",                      "Breakthrough!",                      "Special",   5,       27,   1,    0,   1000, 184, 184, "",""],
[152,100753,    "Eltaw",                              "Eltaw",                              "ULTIMATE",  6,       40,   1,    1,   1888, 193, 193, "",""],
[151,97859,     "SAKURA MEMORIES",                    "SAKURA MEMORIES",                    "Special",   5,       26,   0,    0,   789,  176, 176, "",""],
[150,99214,     "See you! 〜それぞれの明日へ〜",      "See you!",                           "Special",   5,       26,   1,    0,   800,  190, 190, "",""],
[149,95181,     "Sweets BAN!",                        "Sweets BAN!",                        "Special",   5,       27,   1,    0,   888,  156, 156, "",""],
[148,92220,     "ガールズコード",                     "Girl's Code",                        "Special",   5,       26,   1,    0,   777,  125, 125, "",""],
[147,88208,     "Glaciaxion",                         "Glaciaxion",                         "Easy",      1,       6,    0,    0,   100,  140, 140, "",""],
[146,88207,     "Glaciaxion",                         "Glaciaxion",                         "Normal",    2,       8,    0,    0,   169,  140, 140, "",""],
[145,86913,     "[FULL] Moonlight Walk",              "[FULL] Moonlight Walk",              "Special",   5,       28,   0,    0,   1956, 190, 190, "",""],
[144,86781,     "Moonlight Walk",                     "Moonlight Walk",                     "Special",   5,       28,   0,    0,   777,  190, 190, "",""],
[142,83130,     "す、好きなんかじゃない！",           "I-I Never Said Love!",               "MASTER",    5,       29,   1,    0,   888,  166, 166, "",""],
[141,83129,     "す、好きなんかじゃない！",           "I-I Never Said Love!",               "Special",   5,       27,   1,    0,   700,  166, 166, "",""],
[140,81019,     "神奈川電脳暗渠",                     "Kanagawa Cyber Culvert",             "Hard",      3,       19,   0,    0,   473,  180, 180, "",""],
[139,80956,     "神奈川電脳暗渠",                     "Kanagawa Cyber Culvert",             "Expert",    4,       26,   0,    0,   670,  180, 180, "",""],
[138,80782,     "神奈川電脳暗渠",                     "Kanagawa Cyber Culvert",             "Special",   5,       30,   1,    0,   902,  180, 180, "",""],
[137,80478,     "声音大小决定谱面难度",               "Volume Determines Chart Difficulty", "Expert",    4,       26,   0,    0,   76,   177, 177, "整活谱",""],
[136,79037,     "DataErr0r",                          "DataErr0r",                          "Easy",      1,       6,    0,    0,   62,   180, 180, "Phigros EZ还原谱，loader3229故意把谱面描述中的#136写成了#135。。。",""],
[135,78301,     "Hardrain",                           "Hardrain",                           "Special",   5,       30,   0,    0,   1446, 60,  1080,"这个谱面只有蓝键，即使你开了节奏辅助。","This chart contains only blue taps, even if off-beat gray notes is on."],
[134,78010,     "The Limit Does Not Exist",           "The Limit Does Not Exist",           "Special",   5,       31,   0,    0,   1666, 260, 260, "",""],
[133,77291,     "[FULL] Reinvent",                    "[FULL] Reinvent",                    "Expert",    4,       27,   0,    0,   943,  87,  174, "这个谱面Neta了BMS和Arcaea谱面",""],
[132,76716,     "Reinvent",                           "Reinvent",                           "Expert",    4,       27,   0,    0,   805,  87,  174, "这个谱面Neta了BMS和Arcaea谱面",""],
[131,75325,     "勇気Limit！",                        "Courage Limit!",                     "Special",   5,       29,   1,    0,   951,  224, 224, "谱师：loader3229-Limit!","Charter: loader3229-Limit!"],
[130,74534,     "你这背景太假了",                     "Your Background Is Too Fake",        "",          6,       63,   0,    4,   233,  505, 505, "整活谱",""],
[129,73910,     "qualia -ideaesthesia-",              "qualia -ideaesthesia-",              "ANOTHER",   6,       35,   0,    1,   1234, 144, 144, "谱师：-loadesthesia3229_BMS_Version- 全押警告！这个谱面Neta了BMS谱面","Charter: -loadesthesia3229_BMS_Version-"],
[126,75198,     "qualia -ideaesthesia-",              "qualia -ideaesthesia-",              "MASTER",    5,       30,   1,    0,   1024, 144, 144, "谱师：-loadesthesia3229-","Charter: -loadesthesia3229-"],
[125,73598,     "qualia -ideaesthesia-",              "qualia -ideaesthesia-",              "Special",   5,       28,   1,    0,   929,  144, 144, "谱师：-loadesthesia3229-","Charter: -loadesthesia3229-"],
];