import { Recipe } from '../types';

export const STATIC_RECIPES: Recipe[] = [
  // --- 传统鄂湘黔系 (1-15) ---
  {
    id: "static-1",
    category: "传统鄂湘黔系",
    name: "鲊海椒炒腊肉",
    description: "最经典的土家风味，腊肉的烟熏油脂与鲊海椒的酸辣焦香完美融合，下饭神器。",
    ingredients: [{name:"鲊海椒",amount:"150g"},{name:"腊肉",amount:"200g"},{name:"蒜苗",amount:"2根"},{name:"干红椒",amount:"3个"},{name:"姜蒜末",amount:"适量"}],
    steps: ["腊肉煮20分钟去咸味，切薄片。", "锅中不放油，下鲊海椒中小火炒至酥脆金黄，盛出备用。", "锅留底油，下腊肉煸炒出透明油脂，加入姜蒜干红椒爆香。", "倒入炒好的鲊海椒翻炒均匀。", "加入蒜苗段，大火快炒30秒即可出锅。"],
    tips: "鲊海椒一定要先耐心炒酥，否则吃起来会有生粉味且口感发粘。",
    flavorProfile: "咸鲜酸辣，焦香浓郁，腊味十足。"
  },
  {
    id: "static-2",
    category: "传统鄂湘黔系",
    name: "鲊海椒蒸五花肉",
    description: "五花肉切片拌入鲊海椒蒸制，肉质软糯，油脂被玉米面吸收，肥而不腻。",
    ingredients: [{name:"五花肉",amount:"300g"},{name:"鲊海椒",amount:"200g"},{name:"生抽",amount:"1勺"},{name:"料酒",amount:"1勺"},{name:"葱花",amount:"少许"}],
    steps: ["五花肉切0.5cm厚片，用生抽、料酒腌制15分钟。", "将鲊海椒均匀裹满每一片肉。", "码入蒸碗中，稍微压实。", "上汽后蒸45-60分钟，至肉软烂。", "倒扣入盘，撒上葱花。"],
    tips: "五花肉尽量选肥瘦相间的，油脂渗入鲊海椒才好吃。",
    flavorProfile: "软糯醇厚，酸辣回甘，入口即化。"
  },
  {
    id: "static-3",
    category: "传统鄂湘黔系",
    name: "鲊海椒炒肥肠",
    description: "利用鲊海椒的酸味去除肥肠腥味，大火爆炒，焦脆鲜香，重口味爱好者的首选。",
    ingredients: [{name:"熟肥肠",amount:"250g"},{name:"鲊海椒",amount:"100g"},{name:"青红椒",amount:"各1个"},{name:"洋葱",amount:"半个"},{name:"花椒",amount:"10粒"}],
    steps: ["肥肠切滚刀块，鲊海椒先炒酥盛出。", "锅中宽油烧热，下肥肠炸至表面微焦，捞出控油。", "留底油爆香花椒、姜蒜，下洋葱青红椒块炒断生。", "倒入肥肠和鲊海椒，快速翻炒。", "加少许白糖提鲜，淋锅边醋出锅。"],
    tips: "肥肠提前卤过或煮熟再炒，口感更好。",
    flavorProfile: "外焦里嫩，酸辣爽口，异香扑鼻。"
  },
  {
    id: "static-4",
    category: "传统鄂湘黔系",
    name: "鲊海椒炒土鸡蛋",
    description: "农家土鸡蛋金黄蓬松，包裹着红润的鲊海椒，简单却极致的美味。",
    ingredients: [{name:"土鸡蛋",amount:"4个"},{name:"鲊海椒",amount:"80g"},{name:"小葱",amount:"3根"},{name:"盐",amount:"少许"}],
    steps: ["鸡蛋打散，加少许盐和葱花。", "热锅凉油，倒入鲊海椒炒散炒酥。", "将鸡蛋液淋在炒好的鲊海椒上，快速划散。", "待鸡蛋凝固，两面金黄即可。", "撒上剩余葱花点缀。"],
    tips: "鸡蛋液可以多放点油，鲊海椒吸油后更香。",
    flavorProfile: "蛋香浓郁，酸辣开胃，口感松软。"
  },
  {
    id: "static-5",
    category: "传统鄂湘黔系",
    name: "土家鲊海椒糊",
    description: "也就是“鲊海椒汤”，加水煮成糊状，酸辣开胃，适合拌饭或作为蘸水。",
    ingredients: [{name:"鲊海椒",amount:"100g"},{name:"清水",amount:"500ml"},{name:"猪油",amount:"1勺"},{name:"葱花",amount:"适量"}],
    steps: ["锅中放猪油化开，下鲊海椒炒香。", "加入清水，大火烧开。", "转小火煮5-8分钟，期间不断搅拌防止糊底。", "煮至汤汁浓稠，撒葱花出锅。"],
    tips: "用猪油煮更香，适合冬天喝，暖胃发汗。",
    flavorProfile: "酸爽顺滑，汤浓味鲜，暖身暖胃。"
  },
  {
    id: "static-6",
    category: "传统鄂湘黔系",
    name: "鲊海椒扣肉",
    description: "借鉴梅菜扣肉的做法，将底料换成鲊海椒，酸香解腻，肉皮红亮。",
    ingredients: [{name:"五花肉方",amount:"500g"},{name:"鲊海椒",amount:"200g"},{name:"老抽",amount:"适量"},{name:"糖",amount:"少许"}],
    steps: ["整块五花肉煮至七成熟，趁热在皮上抹老抽。", "下油锅炸肉皮至起泡，切厚片。", "鲊海椒加糖炒香。", "肉皮朝下码入碗中，铺上鲊海椒。", "蒸1.5小时，倒扣装盘。"],
    tips: "炸肉皮时要注意防溅，这是虎皮形成的关键。",
    flavorProfile: "肥而不腻，软烂入味，酸甜微辣。"
  },
  {
    id: "static-7",
    category: "传统鄂湘黔系",
    name: "鲊海椒蒸排骨",
    description: "排骨腌制后裹满鲊海椒蒸熟，骨肉分离，玉米粉吸饱了肉汁。",
    ingredients: [{name:"肋排",amount:"400g"},{name:"鲊海椒",amount:"150g"},{name:"生姜",amount:"3片"},{name:"蚝油",amount:"1勺"}],
    steps: ["排骨泡出血水，加姜片、蚝油腌制30分钟。", "将排骨均匀裹上鲊海椒。", "放入高压锅或蒸笼，大火蒸40分钟。", "撒上葱花即可。"],
    tips: "排骨要选小排，更容易蒸透。",
    flavorProfile: "肉嫩骨香，酸辣适中，老少皆宜。"
  },
  {
    id: "static-8",
    category: "传统鄂湘黔系",
    name: "鲊海椒爆猪肝",
    description: "大火快炒，猪肝嫩滑，鲊海椒焦香，口感层次丰富。",
    ingredients: [{name:"猪肝",amount:"200g"},{name:"鲊海椒",amount:"80g"},{name:"泡椒",amount:"3个"},{name:"淀粉",amount:"1勺"}],
    steps: ["猪肝切片，加淀粉、料酒抓匀上浆。", "热锅多油，滑炒猪肝至变色盛出。", "留底油炒香鲊海椒和泡椒。", "倒入猪肝，大火翻炒10秒。", "加盐调味出锅。"],
    tips: "猪肝炒制时间不能长，否则会老。",
    flavorProfile: "鲜嫩爽滑，酸辣刺激，锅气十足。"
  },
  {
    id: "static-9",
    category: "传统鄂湘黔系",
    name: "鲊海椒焖猪蹄",
    description: "猪蹄软烂Q弹，鲊海椒的酸味中和了胶原蛋白的腻感，风味独特。",
    ingredients: [{name:"猪蹄",amount:"2个"},{name:"鲊海椒",amount:"100g"},{name:"八角桂皮",amount:"少许"},{name:"冰糖",amount:"10g"}],
    steps: ["猪蹄焯水去腥。", "糖色炒好，下猪蹄上色，加香料炖煮1小时至软烂。", "收汁时加入炒香的鲊海椒。", "翻炒均匀，让鲊海椒裹在猪蹄上。"],
    tips: "猪蹄要炖得够烂，最后收汁是关键。",
    flavorProfile: "软糯Q弹，酸甜微辣，胶原满满。"
  },
  {
    id: "static-10",
    category: "传统鄂湘黔系",
    name: "鲊海椒炒腊猪脸",
    description: "腊猪脸肉质紧实有嚼劲，配上鲊海椒，是绝佳的下酒硬菜。",
    ingredients: [{name:"腊猪脸",amount:"200g"},{name:"鲊海椒",amount:"100g"},{name:"干辣椒",amount:"5个"},{name:"大蒜叶",amount:"2根"}],
    steps: ["腊猪脸煮熟切薄片。", "鲊海椒炒酥备用。", "爆香干辣椒，下猪脸肉煸炒出油。", "加入鲊海椒和大蒜叶翻炒均匀。"],
    tips: "猪脸肉比较硬，一定要先煮透。",
    flavorProfile: "嚼劲十足，咸香浓郁，越嚼越香。"
  },
  {
    id: "static-11",
    category: "传统鄂湘黔系",
    name: "鲊海椒蒸腊鱼",
    description: "咸鲜的风干鱼块与酸辣鲊海椒同蒸，腊味与发酵味的碰撞。",
    ingredients: [{name:"腊鱼块",amount:"300g"},{name:"鲊海椒",amount:"150g"},{name:"姜丝",amount:"适量"},{name:"茶油",amount:"1勺"}],
    steps: ["腊鱼温水泡软，洗净沥干。", "盘底铺姜丝，放上腊鱼。", "覆盖一层鲊海椒，淋上茶油。", "上锅蒸30分钟。"],
    tips: "淋茶油能让鱼肉更润，鲊海椒更香。",
    flavorProfile: "咸鲜适口，鱼肉紧实，风味独特。"
  },
  {
    id: "static-12",
    category: "传统鄂湘黔系",
    name: "鲊海椒炒酸豆角",
    description: "酸上加酸，极致开胃，专治各种没食欲。",
    ingredients: [{name:"酸豆角",amount:"150g"},{name:"鲊海椒",amount:"100g"},{name:"肉末",amount:"50g"},{name:"小米辣",amount:"3个"}],
    steps: ["酸豆角切丁，肉末炒散。", "下鲊海椒和小米辣炒香。", "倒入酸豆角丁翻炒。", "加少许糖中和酸味即可。"],
    tips: "这道菜非常下饭，建议多煮点米饭。",
    flavorProfile: "酸辣爽脆，开胃解腻，米饭杀手。"
  },
  {
    id: "static-13",
    category: "传统鄂湘黔系",
    name: "鲊海椒回锅土豆片",
    description: "鄂西经典吃法，土豆片煎至两面金黄，再与鲊海椒同炒，淀粉的双重快乐。",
    ingredients: [{name:"土豆",amount:"2个"},{name:"鲊海椒",amount:"80g"},{name:"葱花",amount:"适量"},{name:"盐",amount:"少许"}],
    steps: ["土豆切厚片，下油锅煎至两面金黄焦脆。", "锅中留油，炒香鲊海椒。", "倒入土豆片翻炒均匀。", "撒葱花出锅。"],
    tips: "土豆片不要切太薄，煎焦一点更好吃。",
    flavorProfile: "外焦里嫩，粉糯香辣，简单美味。"
  },
  {
    id: "static-14",
    category: "传统鄂湘黔系",
    name: "鲊海椒酿油豆腐",
    description: "油豆腐吸满汤汁，内馅塞入炒香的鲊海椒肉末，一口爆汁。",
    ingredients: [{name:"大油豆腐",amount:"8个"},{name:"肉馅",amount:"100g"},{name:"鲊海椒",amount:"50g"},{name:"高汤",amount:"1碗"}],
    steps: ["鲊海椒炒香拌入肉馅。", "油豆腐开小口，填入馅料。", "锅中加高汤，放入油豆腐焖煮10分钟。", "收浓汤汁即可。"],
    tips: "馅料不要塞太满，防止煮的时候膨胀出来。",
    flavorProfile: "汁水丰盈，口感丰富，鲜香微辣。"
  },
  {
    id: "static-15",
    category: "传统鄂湘黔系",
    name: "鲊海椒炒烟熏笋",
    description: "两种山珍的结合，烟熏味与发酵酸味相得益彰。",
    ingredients: [{name:"烟熏笋干",amount:"150g"},{name:"鲊海椒",amount:"100g"},{name:"腊肉丁",amount:"50g"},{name:"蒜蓉",amount:"适量"}],
    steps: ["笋干泡发切丝，焯水备用。", "腊肉丁煸炒出油。", "加入鲊海椒和蒜蓉炒香。", "倒入笋丝翻炒均匀。"],
    tips: "笋干要多泡发几次，去除多余的烟熏苦味。",
    flavorProfile: "脆嫩爽口，烟熏风味，回味悠长。"
  },
  
  // --- 传统菜系融合 (16-30) ---
  {
    id: "static-16",
    category: "传统菜系融合",
    name: "鲊海椒粉蒸牛肉",
    description: "川菜灵感，将米粉换成鲊海椒，牛肉更加入味，酸辣适口。",
    ingredients: [{name:"牛里脊",amount:"300g"},{name:"鲊海椒",amount:"150g"},{name:"豆瓣酱",amount:"1勺"},{name:"花椒粉",amount:"少许"}],
    steps: ["牛肉切片，加豆瓣酱、花椒粉、油腌制。", "拌入鲊海椒，加少许水抓匀。", "上笼蒸40分钟。", "出锅撒香菜。"],
    tips: "加水抓匀是为了让蒸出来的肉不干。",
    flavorProfile: "麻辣鲜香，肉质嫩滑，别具一格。"
  },
  {
    id: "static-17",
    category: "传统菜系融合",
    name: "鲊海椒肉末茄子煲",
    description: "粤菜灵感，茄子软糯吸油，鲊海椒代替咸鱼，咸鲜变酸辣。",
    ingredients: [{name:"长茄子",amount:"2根"},{name:"肉末",amount:"100g"},{name:"鲊海椒",amount:"50g"},{name:"蒜末",amount:"适量"}],
    steps: ["茄子切条炸软。", "砂锅炒香肉末和鲊海椒。", "铺上茄子，加少许水焖煮5分钟。", "撒葱花上桌。"],
    tips: "茄子先炸后煲，更能吸味且保持形状。",
    flavorProfile: "软糯多汁，酸辣下饭，香气扑鼻。"
  },
  {
    id: "static-18",
    category: "传统菜系融合",
    name: "鲊海椒干煸四季豆",
    description: "川菜灵感，用鲊海椒替代芽菜或肉末，增加酥脆口感。",
    ingredients: [{name:"四季豆",amount:"300g"},{name:"鲊海椒",amount:"80g"},{name:"干辣椒",amount:"5个"},{name:"花椒",amount:"少许"}],
    steps: ["四季豆炸至表皮起皱。", "锅留底油，炒香鲊海椒、花椒、干辣椒。", "倒入四季豆快速翻炒。", "加盐糖调味即可。"],
    tips: "四季豆一定要炸熟，防止中毒。",
    flavorProfile: "干香酥脆，麻辣微酸，口感丰富。"
  },
  {
    id: "static-19",
    category: "传统菜系融合",
    name: "鲊海椒小炒黄牛肉",
    description: "湘菜灵感，野山椒搭配鲊海椒，辣度升级，锅气十足。",
    ingredients: [{name:"黄牛肉",amount:"250g"},{name:"鲊海椒",amount:"50g"},{name:"野山椒",amount:"5个"},{name:"香菜",amount:"1把"}],
    steps: ["牛肉逆纹切片，腌制上浆。", "滑油变色盛出。", "炒香野山椒和鲊海椒。", "倒入牛肉大火爆炒。", "放入香菜段翻匀出锅。"],
    tips: "全程大火快炒，保持牛肉嫩度。",
    flavorProfile: "鲜辣爽滑，野味十足，极其下饭。"
  },
  {
    id: "static-20",
    category: "传统菜系融合",
    name: "鲊海椒红烧狮子头",
    description: "淮扬灵感，肉馅中混入少量鲊海椒，解腻增香，口感更丰富。",
    ingredients: [{name:"五花肉馅",amount:"400g"},{name:"鲊海椒",amount:"50g"},{name:"马蹄",amount:"3个"},{name:"青菜",amount:"4棵"}],
    steps: ["肉馅加鲊海椒、马蹄碎搅打上劲。", "团成大肉丸，炸至金黄定型。", "加高汤红烧20分钟。", "青菜焯水垫底，摆上狮子头。"],
    tips: "鲊海椒不要放太多，以免影响团型。",
    flavorProfile: "肉质细嫩，酸香解腻，汤汁浓郁。"
  },
  {
    id: "static-21",
    category: "传统菜系融合",
    name: "鲊海椒鱼香肉丝",
    description: "川菜重构，不放泡椒，改用鲊海椒调制鱼香汁，别有一番风味。",
    ingredients: [{name:"里脊丝",amount:"200g"},{name:"鲊海椒",amount:"30g"},{name:"木耳丝",amount:"适量"},{name:"笋丝",amount:"适量"},{name:"糖醋汁",amount:"1碗"}],
    steps: ["肉丝上浆滑熟。", "炒香鲊海椒（剁碎）。", "下配菜翻炒。", "倒入肉丝和糖醋汁勾芡。"],
    tips: "鲊海椒要剁碎一点，才能融入酱汁。",
    flavorProfile: "酸甜微辣，口感丰富，创意十足。"
  },
  {
    id: "static-22",
    category: "传统菜系融合",
    name: "鲊海椒宫保鸡丁",
    description: "鲁/川融合，糊辣荔枝味中透着一股玉米发酵的醇香。",
    ingredients: [{name:"鸡腿肉丁",amount:"250g"},{name:"鲊海椒",amount:"30g"},{name:"花生米",amount:"50g"},{name:"宫保汁",amount:"1碗"}],
    steps: ["鸡丁腌制滑熟。", "小火炒香鲊海椒。", "下干辣椒段花椒。", "倒入鸡丁和宫保汁大火翻炒。", "撒花生米出锅。"],
    tips: "鲊海椒要在干辣椒之前炒，防止焦糊。",
    flavorProfile: "酸甜糊辣，玉米醇香，鸡肉嫩滑。"
  },
  {
    id: "static-23",
    category: "传统菜系融合",
    name: "鲊海椒东坡肉",
    description: "杭帮菜灵感，慢火炖煮时加入鲊海椒包，肉质带有微微酸辣。",
    ingredients: [{name:"五花肉块",amount:"500g"},{name:"鲊海椒料包",amount:"50g"},{name:"绍酒",amount:"200ml"},{name:"冰糖",amount:"30g"}],
    steps: ["五花肉焯水，锅底垫葱姜。", "放入肉块，加入酒、糖、酱油。", "放入鲊海椒料包。", "小火慢炖2小时。"],
    tips: "用料包是为了取味而不见形，保持汤汁清爽。",
    flavorProfile: "酒香肉酥，微酸解腻，入口即化。"
  },
  {
    id: "static-24",
    category: "传统菜系融合",
    name: "鲊海椒酿苦瓜",
    description: "客家酿菜，苦瓜的苦味被鲊海椒的酸辣平衡，清热下火。",
    ingredients: [{name:"苦瓜",amount:"1根"},{name:"肉馅",amount:"150g"},{name:"鲊海椒",amount:"30g"},{name:"豆豉",amount:"少许"}],
    steps: ["苦瓜切段去瓤。", "肉馅拌入鲊海椒，酿入苦瓜。", "两面煎黄。", "加少许水和豆豉焖煮至苦瓜软烂。"],
    tips: "苦瓜焯水可以去苦，但酿菜一般直接煎焖。",
    flavorProfile: "甘苦回甜，酸辣开胃，清热解暑。"
  },
  {
    id: "static-25",
    category: "传统菜系融合",
    name: "鲊海椒盐煎肉",
    description: "川菜灵感，豆豉换成鲊海椒，干香酥脆。",
    ingredients: [{name:"后腿肉",amount:"200g"},{name:"鲊海椒",amount:"80g"},{name:"蒜苗",amount:"3根"},{name:"豆瓣酱",amount:"半勺"}],
    steps: ["肉切片，下锅煸炒至吐油。", "下豆瓣酱和鲊海椒炒香上色。", "加入蒜苗段炒至断生。", "出锅装盘。"],
    tips: "肉片要切得稍薄，煸干才香。",
    flavorProfile: "干香滋润，咸鲜微辣，下酒好菜。"
  },
  {
    id: "static-26",
    category: "传统菜系融合",
    name: "鲊海椒蒜泥白肉卷",
    description: "凉菜热做，白肉卷裹炒酥的鲊海椒，淋上蒜泥红油。",
    ingredients: [{name:"带皮五花肉",amount:"300g"},{name:"鲊海椒",amount:"100g"},{name:"黄瓜条",amount:"适量"},{name:"蒜泥酱汁",amount:"1碗"}],
    steps: ["五花肉煮熟冷藏切薄片。", "鲊海椒炒酥。", "肉片卷入黄瓜条和鲊海椒。", "码盘，淋上蒜泥红油酱汁。"],
    tips: "肉片要切得极薄，考验刀工。",
    flavorProfile: "爽口不腻，层次丰富，蒜香浓郁。"
  },
  {
    id: "static-27",
    category: "传统菜系融合",
    name: "鲊海椒避风塘炒虾",
    description: "粤菜避风塘料换成炸酥的鲊海椒，金蒜与玉米香交织。",
    ingredients: [{name:"基围虾",amount:"300g"},{name:"鲊海椒",amount:"100g"},{name:"蒜末",amount:"50g"},{name:"面包糠",amount:"30g"}],
    steps: ["虾开背炸至酥脆。", "炸蒜末至金黄。", "锅中炒酥鲊海椒和面包糠。", "倒入虾和炸蒜翻炒均匀。"],
    tips: "鲊海椒要炸干一点，口感才接近避风塘料。",
    flavorProfile: "蒜香浓郁，酥脆可口，风味独特。"
  },
  {
    id: "static-28",
    category: "传统菜系融合",
    name: "鲊海椒麻婆豆腐",
    description: "替代豆瓣酱，色泽金红，酸辣开胃，拌饭一绝。",
    ingredients: [{name:"嫩豆腐",amount:"1块"},{name:"牛肉末",amount:"50g"},{name:"鲊海椒",amount:"50g"},{name:"花椒面",amount:"适量"}],
    steps: ["豆腐焯水去豆腥。", "炒酥牛肉末。", "下鲊海椒炒出红油。", "加水煮豆腐，勾芡收汁。", "撒花椒面和葱花。"],
    tips: "全程中小火，保持豆腐完整。",
    flavorProfile: "麻辣鲜烫，嫩滑入味，别样风味。"
  },
  {
    id: "static-29",
    category: "传统菜系融合",
    name: "鲊海椒水煮鱼",
    description: "汤底创新，酸汤鱼的变种，汤汁浓稠，鱼片嫩滑。",
    ingredients: [{name:"草鱼片",amount:"300g"},{name:"鲊海椒",amount:"150g"},{name:"豆芽",amount:"200g"},{name:"干辣椒",amount:"适量"}],
    steps: ["豆芽焯水垫底。", "炒香鲊海椒加水煮开。", "下浆好的鱼片滑熟。", "倒入碗中，撒干辣椒蒜末，泼热油。"],
    tips: "鱼片要厚薄均匀，煮的时间不宜过长。",
    flavorProfile: "鱼肉滑嫩，汤底酸辣，重口过瘾。"
  },
  {
    id: "static-30",
    category: "传统菜系融合",
    name: "鲊海椒口水鸡",
    description: "淋酱创新，红油中加入炒酥的鲊海椒碎，增加颗粒感。",
    ingredients: [{name:"三黄鸡腿",amount:"2个"},{name:"鲊海椒酥",amount:"30g"},{name:"花生碎",amount:"10g"},{name:"红油料汁",amount:"1碗"}],
    steps: ["鸡腿煮熟冰镇，切块装盘。", "鲊海椒炸酥，拌入红油料汁中。", "淋在鸡块上，撒花生碎芝麻。"],
    tips: "鸡肉要冰镇才皮脆肉紧。",
    flavorProfile: "麻辣鲜香，皮脆肉嫩，口感丰富。"
  },

  // --- 海鲜/河鲜融合 (31-45) ---
  {
    id: "static-31",
    category: "海鲜/河鲜融合",
    name: "鲊海椒烧黄辣丁",
    description: "鲜嫩河鲜配酸辣，黄辣丁肉质细嫩，汤汁浓郁。",
    ingredients: [{name:"黄辣丁",amount:"500g"},{name:"鲊海椒",amount:"100g"},{name:"紫苏",amount:"少许"},{name:"姜蒜",amount:"适量"}],
    steps: ["黄辣丁煎至两面微黄。", "锅底炒香鲊海椒和姜蒜。", "加水烧开，放入鱼煮8分钟。", "加紫苏收汁。"],
    tips: "黄辣丁不要频繁翻动，容易碎。",
    flavorProfile: "肉质细嫩，汤鲜味美，紫苏增香。"
  },
  {
    id: "static-32",
    category: "海鲜/河鲜融合",
    name: "鲊海椒炒鱿鱼须",
    description: "鱿鱼须Q弹，鲊海椒包裹其上，每一口都是脆爽。",
    ingredients: [{name:"鲜鱿鱼须",amount:"300g"},{name:"鲊海椒",amount:"80g"},{name:"韭苔",amount:"1把"},{name:"洋葱",amount:"少许"}],
    steps: ["鱿鱼须焯水沥干。", "炒酥鲊海椒。", "爆香洋葱，下鱿鱼须大火快炒。", "加入韭苔段翻炒断生。"],
    tips: "火要大，动作要快，保持鱿鱼脆嫩。",
    flavorProfile: "脆嫩弹牙，酸辣鲜香，佐酒佳品。"
  },
  {
    id: "static-33",
    category: "海鲜/河鲜融合",
    name: "鲊海椒蒸鲍鱼",
    description: "高端食材接地气做法，鲊海椒提升了鲍鱼的鲜味层次。",
    ingredients: [{name:"小鲍鱼",amount:"8个"},{name:"鲊海椒",amount:"50g"},{name:"粉丝",amount:"1把"},{name:"葱花",amount:"少许"}],
    steps: ["鲍鱼刷洗干净，打花刀。", "粉丝泡软垫底。", "鲊海椒炒香铺在鲍鱼上。", "蒸8分钟，淋热油酱油。"],
    tips: "鲍鱼不要蒸久了，否则口感像橡胶。",
    flavorProfile: "鲜美Q弹，粉丝入味，档次十足。"
  },
  {
    id: "static-34",
    category: "海鲜/河鲜融合",
    name: "鲊海椒爆炒花甲",
    description: "夜市风味升级，鲊海椒吸附了花甲的鲜汁，比肉还好迟。",
    ingredients: [{name:"花甲",amount:"500g"},{name:"鲊海椒",amount:"80g"},{name:"姜丝",amount:"适量"},{name:"啤酒",amount:"少许"}],
    steps: ["花甲焯水开口洗净。", "炒香鲊海椒和姜丝。", "倒入花甲翻炒，淋入啤酒。", "大火收汁即可。"],
    tips: "鲊海椒能吸附汤汁，吃起来特别鲜。",
    flavorProfile: "鲜味浓郁，酸辣过瘾，吮指回味。"
  },
  {
    id: "static-35",
    category: "海鲜/河鲜融合",
    name: "鲊海椒香煎带鱼",
    description: "带鱼腌制后裹鲊海椒干煎，外酥里嫩，去腥效果极佳。",
    ingredients: [{name:"带鱼段",amount:"300g"},{name:"鲊海椒粉",amount:"50g"},{name:"花椒粒",amount:"少许"},{name:"料酒",amount:"1勺"}],
    steps: ["带鱼加花椒料酒腌制去腥。", "表面拍一层薄薄的鲊海椒粉。", "平底锅煎至两面金黄酥脆。"],
    tips: "带鱼要吸干水分再裹粉，防止粘锅。",
    flavorProfile: "外酥里嫩，干香无腥，刺少肉厚。"
  },
  {
    id: "static-36",
    category: "海鲜/河鲜融合",
    name: "鲊海椒烧泥鳅",
    description: "乡土风味，泥鳅软烂，鲊海椒汤汁浓稠挂勺。",
    ingredients: [{name:"泥鳅",amount:"300g"},{name:"鲊海椒",amount:"100g"},{name:"大蒜",amount:"1头"},{name:"青椒",amount:"2个"}],
    steps: ["泥鳅煎至两面定型。", "爆香大量蒜瓣和鲊海椒。", "加水焖煮泥鳅15分钟。", "收汁加青椒块。"],
    tips: "泥鳅要先煎透，汤汁才会奶白浓郁。",
    flavorProfile: "肉质细嫩，汤浓味鲜，补肾佳品。"
  },
  {
    id: "static-37",
    category: "海鲜/河鲜融合",
    name: "鲊海椒清炒虾仁",
    description: "简单的鲜美，虾仁的甜与鲊海椒的微酸形成对比。",
    ingredients: [{name:"鲜虾仁",amount:"200g"},{name:"鲊海椒",amount:"50g"},{name:"豌豆",amount:"30g"},{name:"蛋清",amount:"半个"}],
    steps: ["虾仁上浆滑熟。", "炒香鲊海椒和豌豆。", "倒入虾仁快速翻炒均匀。", "调盐出锅。"],
    tips: "虾仁要保持清爽，油温不宜过高。",
    flavorProfile: "清爽鲜美，口感弹嫩，色彩丰富。"
  },
  {
    id: "static-38",
    category: "海鲜/河鲜融合",
    name: "鲊海椒蒸扇贝",
    description: "蒜蓉粉丝的替代方案，金黄诱人，风味独特。",
    ingredients: [{name:"扇贝",amount:"6个"},{name:"鲊海椒",amount:"50g"},{name:"蒜蓉",amount:"少许"},{name:"葱花",amount:"少许"}],
    steps: ["扇贝处理干净。", "鲊海椒加蒜蓉炒香。", "铺在扇贝肉上。", "蒸6分钟，淋油。"],
    tips: "鲊海椒本身有咸味，不用再加酱油。",
    flavorProfile: "鲜甜多汁，蒜香浓郁，别具风味。"
  },
  {
    id: "static-39",
    category: "海鲜/河鲜融合",
    name: "鲊海椒炭烤生蚝",
    description: "独特的发酵香味在炭火激发下更加浓郁。",
    ingredients: [{name:"生蚝",amount:"6个"},{name:"鲊海椒酱",amount:"适量"},{name:"葱花",amount:"少许"},{name:"柠檬汁",amount:"少许"}],
    steps: ["生蚝开壳，上火烤。", "将炒熟的鲊海椒酱浇在生蚝上。", "烤至滋滋冒油，滴几滴柠檬汁。"],
    tips: "柠檬汁能提鲜解腻。",
    flavorProfile: "肥美多汁，焦香扑鼻，鲜味爆炸。"
  },
  {
    id: "static-40",
    category: "海鲜/河鲜融合",
    name: "鲊海椒烧大闸蟹",
    description: "浓郁酱香，蟹黄与鲊海椒混合，鲜香爆棚。",
    ingredients: [{name:"大闸蟹",amount:"2只"},{name:"鲊海椒",amount:"100g"},{name:"年糕",amount:"100g"},{name:"姜片",amount:"适量"}],
    steps: ["螃蟹对半切，切面沾淀粉煎封。", "炒香鲊海椒和姜片。", "下螃蟹翻炒，加水焖煮。", "放入年糕煮软收汁。"],
    tips: "年糕吸饱了蟹味和鲊海椒味，比蟹还好迟。",
    flavorProfile: "酱香浓郁，鲜甜可口，软糯入味。"
  },
  {
    id: "static-41",
    category: "海鲜/河鲜融合",
    name: "鲊海椒鱼头煲",
    description: "借鉴剁椒鱼头，但更侧重于酱香味和玉米香。",
    ingredients: [{name:"胖头鱼头",amount:"1个"},{name:"鲊海椒",amount:"200g"},{name:"洋葱",amount:"半个"},{name:"啤酒",amount:"1罐"}],
    steps: ["鱼头煎至金黄。", "砂锅炒香洋葱垫底。", "放入鱼头，铺满鲊海椒。", "倒入啤酒焖煮15分钟。"],
    tips: "用啤酒代替水，去腥增香。",
    flavorProfile: "鱼肉嫩滑，酱香浓郁，汤汁拌饭。"
  },
  {
    id: "static-42",
    category: "海鲜/河鲜融合",
    name: "鲊海椒炒螺蛳肉",
    description: "下酒神器，螺肉劲道，鲊海椒入味，一口一个停不下来。",
    ingredients: [{name:"螺蛳肉",amount:"250g"},{name:"鲊海椒",amount:"80g"},{name:"韭菜",amount:"1把"},{name:"姜蒜末",amount:"适量"}],
    steps: ["螺肉焯水洗净。", "爆香姜蒜鲊海椒。", "下螺肉爆炒。", "加韭菜段炒断生出锅。"],
    tips: "螺肉要爆炒才脆，久煮会韧。",
    flavorProfile: "爽脆弹牙，鲜辣开胃，佐酒必备。"
  },
  {
    id: "static-43",
    category: "海鲜/河鲜融合",
    name: "鲊海椒干烧对虾",
    description: "收汁浓郁，虾壳酥脆，连壳都能吃。",
    ingredients: [{name:"对虾",amount:"8只"},{name:"鲊海椒",amount:"50g"},{name:"糖",amount:"1勺"},{name:"醋",amount:"少许"}],
    steps: ["大虾煎至两面金黄。", "下鲊海椒炒香。", "加少许水、糖、醋焖烧收汁。", "待汤汁收干亮油出锅。"],
    tips: "这道菜讲究“自来芡”，把汤汁收浓裹在虾上。",
    flavorProfile: "酸甜咸鲜，壳酥肉嫩，色泽红亮。"
  },
  {
    id: "static-44",
    category: "海鲜/河鲜融合",
    name: "鲊海椒墨鱼仔",
    description: "Q弹爽口，一口咬下，酸辣汁水四溢。",
    ingredients: [{name:"墨鱼仔",amount:"200g"},{name:"鲊海椒",amount:"80g"},{name:"芹菜",amount:"2根"},{name:"泡椒",amount:"3个"}],
    steps: ["墨鱼仔焯水至卷曲。", "炒香鲊海椒和泡椒。", "下墨鱼仔和芹菜段翻炒。", "大火快炒即可。"],
    tips: "墨鱼仔焯水时间要短，保持嫩度。",
    flavorProfile: "Q弹爽脆，酸辣开胃，芹菜清香。"
  },
  {
    id: "static-45",
    category: "海鲜/河鲜融合",
    name: "鲊海椒烧鳝段",
    description: "补血益气，鳝鱼肥美，鲊海椒去除了土腥味。",
    ingredients: [{name:"黄鳝",amount:"300g"},{name:"鲊海椒",amount:"100g"},{name:"整瓣蒜",amount:"10个"},{name:"黄酒",amount:"2勺"}],
    steps: ["黄鳝切段，大蒜炸黄。", "锅中炒香鲊海椒。", "下鳝段翻炒，烹入黄酒。", "加水和蒜瓣焖烧20分钟。"],
    tips: "鳝鱼要烧透才好吃，大蒜要多放。",
    flavorProfile: "软糯鲜香，浓郁滋补，蒜香扑鼻。"
  },

  // --- 时蔬/菌菇派 (46-60) ---
  {
    id: "static-46",
    category: "时蔬/菌菇派",
    name: "鲊海椒炒藕丁",
    description: "洪湖莲藕的脆嫩与鲊海椒的酸辣结合，口感丰富。",
    ingredients: [{name:"莲藕",amount:"1节"},{name:"鲊海椒",amount:"80g"},{name:"葱花",amount:"适量"},{name:"白醋",amount:"少许"}],
    steps: ["藕切丁焯水。", "炒酥鲊海椒。", "倒入藕丁翻炒。", "沿锅边淋白醋提脆。"],
    tips: "藕丁焯水时加点醋防止氧化变黑。",
    flavorProfile: "脆嫩酸爽，清香开胃，口感丰富。"
  },
  {
    id: "static-47",
    category: "时蔬/菌菇派",
    name: "鲊海椒煎魔芋",
    description: "鄂西特色，魔芋Q弹，表面煎至微焦，裹满鲊海椒。",
    ingredients: [{name:"魔芋豆腐",amount:"300g"},{name:"鲊海椒",amount:"100g"},{name:"蒜苗",amount:"2根"},{name:"盐",amount:"少许"}],
    steps: ["魔芋切厚片，焯水去碱味。", "下油锅煎至两面起皮。", "加入鲊海椒同炒。", "撒蒜苗出锅。"],
    tips: "魔芋煎得越干越有嚼劲。",
    flavorProfile: "Q弹有嚼劲，酸辣入味，低卡健康。"
  },
  {
    id: "static-48",
    category: "时蔬/菌菇派",
    name: "鲊海椒炒鲜香菇",
    description: "菌香浓郁，香菇滑嫩，吸收了鲊海椒的油脂。",
    ingredients: [{name:"鲜香菇",amount:"200g"},{name:"鲊海椒",amount:"80g"},{name:"青椒",amount:"1个"},{name:"蚝油",amount:"1勺"}],
    steps: ["香菇切片，焯水挤干水分。", "炒香鲊海椒。", "下香菇片和青椒丝翻炒。", "加蚝油提鲜。"],
    tips: "挤干水分是为了让香菇更好地吸味。",
    flavorProfile: "滑嫩鲜香，菌味浓郁，简单快手。"
  },
  {
    id: "static-49",
    category: "时蔬/菌菇派",
    name: "鲊海椒虎皮青椒",
    description: "辣上加辣，青椒表皮起皱，吸满鲊海椒的味道。",
    ingredients: [{name:"薄皮青椒",amount:"6个"},{name:"鲊海椒",amount:"50g"},{name:"豆豉",amount:"少许"},{name:"糖",amount:"少许"}],
    steps: ["青椒拍扁，干锅煸至起虎皮。", "加油炒香鲊海椒和豆豉。", "倒入青椒翻炒，加糖调味。"],
    tips: "选薄皮青椒口感更好，不会太辣。",
    flavorProfile: "焦香软烂，微辣回甜，超级下饭。"
  },
  {
    id: "static-50",
    category: "时蔬/菌菇派",
    name: "鲊海椒干煸花菜",
    description: "爽脆入味，花菜焦黄，鲊海椒增添了风味层次。",
    ingredients: [{name:"有机花菜",amount:"300g"},{name:"鲊海椒",amount:"50g"},{name:"五花肉片",amount:"30g"},{name:"蒜片",amount:"适量"}],
    steps: ["花菜焯水30秒捞出。", "五花肉煸出油。", "下鲊海椒蒜片炒香。", "倒入花菜大火干煸至焦黄。"],
    tips: "一定要沥干水分再炒，否则口感不脆。",
    flavorProfile: "脆嫩焦香，咸鲜微辣，家常美味。"
  },
  {
    id: "static-51",
    category: "时蔬/菌菇派",
    name: "鲊海椒炒春笋",
    description: "鲜嫩时令，春笋的清甜与鲊海椒的酸辣完美平衡。",
    ingredients: [{name:"春笋",amount:"200g"},{name:"鲊海椒",amount:"80g"},{name:"雪菜",amount:"少许"}],
    steps: ["春笋切片焯水去涩。", "炒香鲊海椒和雪菜。", "倒入春笋翻炒均匀。"],
    tips: "春笋必须焯水，否则有涩味。",
    flavorProfile: "鲜嫩爽口，春天的味道。"
  },
  {
    id: "static-52",
    category: "时蔬/菌菇派",
    name: "鲊海椒红烧冬瓜",
    description: "吸味高手，冬瓜晶莹剔透，入口即化，满口鲊海椒香。",
    ingredients: [{name:"冬瓜",amount:"300g"},{name:"鲊海椒",amount:"80g"},{name:"海米",amount:"少许"}],
    steps: ["冬瓜切块煎黄。", "加鲊海椒和水焖煮。", "收汁至冬瓜透明。"],
    tips: "冬瓜煎一下煮起来更香。",
    flavorProfile: "软烂入味，清淡不失风味。"
  },
  {
    id: "static-53",
    category: "时蔬/菌菇派",
    name: "鲊海椒拌折耳根",
    description: "挑战味蕾，折耳根的特殊气味与发酵酸辣的强强联合。",
    ingredients: [{name:"折耳根",amount:"150g"},{name:"炒熟鲊海椒",amount:"50g"},{name:"香醋",amount:"适量"}],
    steps: ["折耳根洗净切段。", "鲊海椒炒熟放凉。", "混合拌匀，加调料。", "腌制10分钟更入味。"],
    tips: "适合重口味爱好者。",
    flavorProfile: "异香扑鼻，酸辣爽脆。"
  },
  {
    id: "static-54",
    category: "时蔬/菌菇派",
    name: "鲊海椒炒香干",
    description: "朴实家常，豆干劲道，越嚼越香。",
    ingredients: [{name:"香干",amount:"5块"},{name:"鲊海椒",amount:"80g"},{name:"芹菜",amount:"2根"}],
    steps: ["香干切条，芹菜切段。", "炒酥鲊海椒。", "下香干芹菜炒熟。"],
    tips: "选卤过的香干味道更好。",
    flavorProfile: "咸香适口，家常下饭。"
  },
  {
    id: "static-55",
    category: "时蔬/菌菇派",
    name: "鲊海椒蒸南瓜",
    description: "咸甜交织，南瓜的甜糯中和了鲊海椒的辣度。",
    ingredients: [{name:"老南瓜",amount:"300g"},{name:"鲊海椒",amount:"100g"},{name:"油",amount:"少许"}],
    steps: ["南瓜切块。", "拌入鲊海椒和油。", "蒸20分钟至软烂。"],
    tips: "一定要选老南瓜，才够甜糯。",
    flavorProfile: "甜咸微辣，软糯可口。"
  },
  {
    id: "static-56",
    category: "时蔬/菌菇派",
    name: "鲊海椒炒高山蕨菜",
    description: "山野之味，蕨菜滑润，鲊海椒提鲜。",
    ingredients: [{name:"蕨菜",amount:"200g"},{name:"鲊海椒",amount:"80g"},{name:"蒜末",amount:"适量"}],
    steps: ["蕨菜焯水去涩。", "爆香鲊海椒。", "快速翻炒蕨菜。"],
    tips: "蕨菜不要炒太久，保持滑嫩。",
    flavorProfile: "滑润爽口，山野清香。"
  },
  {
    id: "static-57",
    category: "时蔬/菌菇派",
    name: "鲊海椒烧茄子",
    description: "软烂入味，茄子像海绵一样吸饱了鲊海椒的汤汁。",
    ingredients: [{name:"茄子",amount:"2根"},{name:"鲊海椒",amount:"80g"},{name:"西红柿",amount:"1个"}],
    steps: ["茄子切块煎软。", "炒香西红柿出汁。", "下茄子和鲊海椒焖煮。"],
    tips: "加西红柿可以增加鲜味。",
    flavorProfile: "酸甜软烂，汤汁浓郁。"
  },
  {
    id: "static-58",
    category: "时蔬/菌菇派",
    name: "鲊海椒油焖茭白",
    description: "江南食材融合，茭白鲜嫩，鲊海椒增香。",
    ingredients: [{name:"茭白",amount:"200g"},{name:"鲊海椒",amount:"50g"},{name:"糖",amount:"少许"}],
    steps: ["茭白切滚刀块煎黄。", "下鲊海椒同炒。", "加少许水焖煮收汁。"],
    tips: "茭白要选嫩的，老的有渣。",
    flavorProfile: "鲜甜脆嫩，油润适口。"
  },
  {
    id: "static-59",
    category: "时蔬/菌菇派",
    name: "鲊海椒凉拌木耳",
    description: "爽口开胃，木耳脆爽，鲊海椒红油提色。",
    ingredients: [{name:"木耳",amount:"1把"},{name:"鲊海椒红油",amount:"2勺"},{name:"陈醋",amount:"适量"}],
    steps: ["木耳泡发焯水。", "鲊海椒炸出红油。", "淋在木耳上拌匀。"],
    tips: "用鲊海椒炸的油特别香。",
    flavorProfile: "爽脆开胃，酸辣解腻。"
  },
  {
    id: "static-60",
    category: "时蔬/菌菇派",
    name: "鲊海椒炒空心菜梗",
    description: "变废为宝，菜梗脆嫩，酸辣下饭。",
    ingredients: [{name:"空心菜梗",amount:"1把"},{name:"鲊海椒",amount:"50g"},{name:"蒜末",amount:"适量"}],
    steps: ["菜梗切小段。", "炒酥鲊海椒。", "大火爆炒菜梗断生。"],
    tips: "叶子可以煮汤，梗用来炒。",
    flavorProfile: "脆嫩爽口，简单美味。"
  },

  // --- 现代/西式跨界 (61-75) ---
  {
    id: "static-61",
    category: "现代/西式跨界",
    name: "鲊海椒肉酱意面",
    description: "中式Bolognese，鲊海椒肉酱代替番茄肉酱，风味独特。",
    ingredients: [{name:"意大利面",amount:"100g"},{name:"猪肉糜",amount:"100g"},{name:"鲊海椒",amount:"50g"},{name:"番茄膏",amount:"1勺"}],
    steps: ["煮意面至八分熟。", "炒香肉糜和鲊海椒。", "加番茄膏和水煮成酱。", "拌入意面收汁。"],
    tips: "面汤不要倒掉，加一点进酱汁更浓稠。",
    flavorProfile: "酸甜微辣，中西合璧，浓郁挂面。"
  },
  {
    id: "static-62",
    category: "现代/西式跨界",
    name: "鲊海椒芝士焗饭",
    description: "拉丝的酸辣，芝士的奶香与鲊海椒的酸辣意外和谐。",
    ingredients: [{name:"米饭",amount:"1碗"},{name:"鲊海椒炒肉",amount:"1份"},{name:"马苏里拉芝士",amount:"50g"}],
    steps: ["做一份鲊海椒炒饭。", "装入烤碗，铺满芝士。", "200度烤10分钟至表面金黄。"],
    tips: "芝士要多放，拉丝才过瘾。",
    flavorProfile: "奶香浓郁，酸辣底层，口感丰富。"
  },
  {
    id: "static-63",
    category: "现代/西式跨界",
    name: "鲊海椒牛肉汉堡",
    description: "汉堡肉饼中混入鲊海椒，多汁且带有独特的玉米香。",
    ingredients: [{name:"牛肉馅",amount:"150g"},{name:"鲊海椒",amount:"30g"},{name:"洋葱碎",amount:"20g"},{name:"汉堡胚",amount:"1个"}],
    steps: ["牛肉馅混入鲊海椒和洋葱碎摔打上劲。", "煎熟肉饼。", "组装汉堡。"],
    tips: "鲊海椒代替了面包糠，增加颗粒感。",
    flavorProfile: "多汁肉香，微辣解腻，创意十足。"
  },
  {
    id: "static-64",
    category: "现代/西式跨界",
    name: "鲊海椒风情披萨",
    description: "替代番茄底酱或作为Topping，中西合璧的创意。",
    ingredients: [{name:"披萨饼底",amount:"1个"},{name:"鲊海椒酱",amount:"3勺"},{name:"腊肠片",amount:"适量"},{name:"芝士",amount:"适量"}],
    steps: ["饼底抹鲊海椒酱。", "铺芝士和腊肠。", "烤箱200度烤15分钟。"],
    tips: "鲊海椒酱要炒干一点，防止饼底湿。",
    flavorProfile: "薄脆香浓，中式风味，独特体验。"
  },
  {
    id: "static-65",
    category: "现代/西式跨界",
    name: "鲊海椒和牛Taco",
    description: "玉米饼与玉米粉的呼应，墨西哥风味的中国表达。",
    ingredients: [{name:"玉米饼",amount:"2张"},{name:"和牛粒",amount:"100g"},{name:"鲊海椒",amount:"30g"},{name:"酸奶油",amount:"适量"}],
    steps: ["和牛粒与鲊海椒同炒。", "放在加热的玉米饼上。", "加蔬菜丝和酸奶油。"],
    tips: "玉米饼和鲊海椒都是玉米制品，非常搭。",
    flavorProfile: "玉米飘香，牛肉鲜嫩，异域风情。"
  },
  {
    id: "static-66",
    category: "现代/西式跨界",
    name: "鲊海椒土豆泥沙拉",
    description: "绵密中的颗粒感，鲊海椒作为调味，增加口感层次。",
    ingredients: [{name:"土豆泥",amount:"200g"},{name:"炒酥鲊海椒",amount:"30g"},{name:"黄瓜丁",amount:"少许"},{name:"沙拉酱",amount:"少许"}],
    steps: ["土豆煮熟压泥。", "拌入炒酥的鲊海椒和黄瓜丁。", "挤少许沙拉酱调整湿度。"],
    tips: "鲊海椒一定要酥脆，增加口感对比。",
    flavorProfile: "绵密酥脆，酸辣清爽，开胃前菜。"
  },
  {
    id: "static-67",
    category: "现代/西式跨界",
    name: "鲊海椒烤鸡翅",
    description: "腌料中加入鲊海椒，烤出焦香，新奥尔良外的选择。",
    ingredients: [{name:"鸡中翅",amount:"6个"},{name:"鲊海椒粉",amount:"30g"},{name:"蜂蜜",amount:"少许"}],
    steps: ["鸡翅划刀，用鲊海椒粉腌制2小时。", "烤箱200度烤20分钟。", "刷蜂蜜再烤5分钟。"],
    tips: "鲊海椒粉容易糊，注意观察火候。",
    flavorProfile: "皮焦肉嫩，酸甜微辣，吮指美味。"
  },
  {
    id: "static-68",
    category: "现代/西式跨界",
    name: "鲊海椒奶油蘑菇汤",
    description: "微微的酸辣奶香，温暖治愈。",
    ingredients: [{name:"口蘑",amount:"100g"},{name:"淡奶油",amount:"50ml"},{name:"鲊海椒",amount:"2g"},{name:"面粉",amount:"10g"}],
    steps: ["口蘑炒香。", "用黄油炒面粉和鲊海椒。", "加水煮开，加口蘑和奶油。", "煮至浓稠。"],
    tips: "鲊海椒的酸味能解奶油的腻。",
    flavorProfile: "奶香浓郁，微酸顺滑，独特暖汤。"
  },
  {
    id: "static-69",
    category: "现代/西式跨界",
    name: "鲊海椒贝果三明治",
    description: "将鲊海椒炒干作为抹酱，搭配滑蛋和培根。",
    ingredients: [{name:"贝果",amount:"1个"},{name:"鲊海椒酱",amount:"2勺"},{name:"滑蛋",amount:"1份"},{name:"生菜",amount:"1片"}],
    steps: ["贝果复烤切开。", "抹上厚厚一层鲊海椒酱。", "夹入滑蛋和生菜。"],
    tips: "贝果要有嚼劲，配上颗粒感酱料很棒。",
    flavorProfile: "层次丰富，能量满满，早餐首选。"
  },
  {
    id: "static-70",
    category: "现代/西式跨界",
    name: "鲊海椒培根卷",
    description: "烟熏味的双重奏，培根卷裹鲊海椒饭团煎烤。",
    ingredients: [{name:"培根",amount:"4片"},{name:"鲊海椒拌饭",amount:"4团"}],
    steps: ["米饭拌入鲊海椒捏成长条。", "用培根卷紧。", "煎至培根焦黄收紧。"],
    tips: "接口处朝下先煎，防止散开。",
    flavorProfile: "烟熏咸鲜，软糯焦香，一口一个。"
  },
  {
    id: "static-71",
    category: "现代/西式跨界",
    name: "鲊海椒法式煎鹅肝",
    description: "解腻圣品，鲊海椒的酸味平衡鹅肝的丰腴。",
    ingredients: [{name:"鹅肝",amount:"2片"},{name:"鲊海椒酱汁",amount:"少许"},{name:"面包片",amount:"2片"}],
    steps: ["鹅肝两面煎焦黄。", "面包片烤脆。", "盘中淋鲊海椒浓缩酱汁。", "摆盘即可。"],
    tips: "利用鲊海椒的酸度代替果酱。",
    flavorProfile: "入口即化，酸香解腻，高端享受。"
  },
  {
    id: "static-72",
    category: "现代/西式跨界",
    name: "鲊海椒班尼迪克蛋",
    description: "荷兰酱中加入少量鲊海椒，酸辣丝滑。",
    ingredients: [{name:"水波蛋",amount:"1个"},{name:"英式马芬",amount:"1个"},{name:"荷兰酱",amount:"适量"},{name:"鲊海椒粉",amount:"少许"}],
    steps: ["制作水波蛋。", "荷兰酱中拌入细鲊海椒粉。", "淋在蛋上。"],
    tips: "粉末要细，保持酱汁顺滑。",
    flavorProfile: "流心蛋液，酸辣奶香，Brunch经典。"
  },
  {
    id: "static-73",
    category: "现代/西式跨界",
    name: "鲊海椒牛排酱汁",
    description: "创新风味，浓缩的鲊海椒酱汁淋在牛排上。",
    ingredients: [{name:"牛排",amount:"1块"},{name:"鲊海椒",amount:"50g"},{name:"红酒",amount:"少许"},{name:"黄油",amount:"1块"}],
    steps: ["煎完牛排的锅不用洗。", "加黄油炒鲊海椒，烹红酒。", "煮至浓稠过滤（或不过滤保留颗粒）。", "淋在牛排上。"],
    tips: "带颗粒感更有口感。",
    flavorProfile: "肉汁浓郁，酸辣提味，中西融合。"
  },
  {
    id: "static-74",
    category: "现代/西式跨界",
    name: "鲊海椒凯撒沙拉",
    description: "替代面包丁，或者混入凯撒酱中，增加风味。",
    ingredients: [{name:"罗马生菜",amount:"1颗"},{name:"鲊海椒脆片",amount:"适量"},{name:"凯撒酱",amount:"适量"}],
    steps: ["鲊海椒加面粉煎成薄脆片，掰碎。", "拌入沙拉中。", "撒帕玛森芝士。"],
    tips: "脆片要极薄，口感才好。",
    flavorProfile: "清脆爽口，酥脆点缀，健康美味。"
  },
  {
    id: "static-75",
    category: "现代/西式跨界",
    name: "鲊海椒摇摇薯条",
    description: "将鲊海椒烘干磨粉，作为薯条的撒料。",
    ingredients: [{name:"薯条",amount:"1份"},{name:"鲊海椒极细粉",amount:"1包"}],
    steps: ["炸好薯条。", "撒入鲊海椒粉。", "疯狂摇晃均匀。"],
    tips: "粉越细越好挂味。",
    flavorProfile: "外酥里嫩，酸辣咸香，零食伴侣。"
  },

  // --- 主食/点心类 (76-90) ---
  {
    id: "static-76",
    category: "主食/点心类",
    name: "鲊海椒黄金炒饭",
    description: "米饭粒粒分明，鲊海椒裹满每一粒米，酸辣焦香。",
    ingredients: [{name:"隔夜饭",amount:"1碗"},{name:"鲊海椒",amount:"50g"},{name:"鸡蛋",amount:"1个"},{name:"葱花",amount:"适量"}],
    steps: ["蛋黄拌入米饭。", "先炒酥鲊海椒。", "下米饭大火炒散。", "粒粒金黄时出锅。"],
    tips: "饭要干爽，火要大。",
    flavorProfile: "颗粒分明，干香扑鼻，经典主食。"
  },
  {
    id: "static-77",
    category: "主食/点心类",
    name: "鲊海椒鲜肉锅盔",
    description: "酥脆掉渣，内馅咸鲜酸辣，咬一口满嘴香。",
    ingredients: [{name:"面粉",amount:"200g"},{name:"肉馅",amount:"100g"},{name:"鲊海椒",amount:"50g"}],
    steps: ["发面团。", "肉馅拌鲊海椒。", "包入馅料擀成薄饼。", "先煎后烤至酥脆。"],
    tips: "饼要擀薄，烤干水分。",
    flavorProfile: "外酥里软，馅料十足，街头风味。"
  },
  {
    id: "static-78",
    category: "主食/点心类",
    name: "鲊海椒爆汁生煎包",
    description: "底部焦脆，内馅融入鲊海椒，汤汁浓郁。",
    ingredients: [{name:"发面团",amount:"300g"},{name:"肉皮冻",amount:"100g"},{name:"肉馅",amount:"200g"},{name:"鲊海椒",amount:"50g"}],
    steps: ["肉馅加皮冻和鲊海椒拌匀。", "包成小包子。", "平底锅煎底，加水焖熟。", "撒芝麻葱花。"],
    tips: "鲊海椒吸油，皮冻多放点。",
    flavorProfile: "底脆皮喧，爆汁酸辣，口感丰富。"
  },
  {
    id: "static-79",
    category: "主食/点心类",
    name: "鲊海椒大肉包",
    description: "发酵面皮包裹发酵馅料，松软可口。",
    ingredients: [{name:"面粉",amount:"500g"},{name:"五花肉丁",amount:"300g"},{name:"鲊海椒",amount:"150g"}],
    steps: ["五花肉丁煸炒出油，加鲊海椒炒熟。", "包入发面皮中。", "醒发后蒸20分钟。"],
    tips: "馅料要炒熟再包，更香。",
    flavorProfile: "暄软咸香，老面风味，早餐最佳。"
  },
  {
    id: "static-80",
    category: "主食/点心类",
    name: "鲊海椒玉米饺子",
    description: "独特口感，玉米面饺子皮或内馅加入鲊海椒。",
    ingredients: [{name:"饺子皮",amount:"20皮"},{name:"猪肉白菜馅",amount:"200g"},{name:"鲊海椒",amount:"50g"}],
    steps: ["肉馅中拌入鲊海椒。", "包成饺子。", "水煮或蒸食。"],
    tips: "鲊海椒本身是熟的玉米面，增加颗粒感。",
    flavorProfile: "鲜香微辣，口感扎实，粗粮细作。"
  },
  {
    id: "static-81",
    category: "主食/点心类",
    name: "鲊海椒荷香糯米鸡",
    description: "荷叶香与酸辣味交织，糯米软糯入味。",
    ingredients: [{name:"糯米",amount:"200g"},{name:"鸡腿肉",amount:"100g"},{name:"鲊海椒",amount:"50g"},{name:"干荷叶",amount:"3张"}],
    steps: ["糯米浸泡蒸熟。", "鸡肉加鲊海椒炒熟。", "荷叶包入糯米和馅料。", "复蒸20分钟。"],
    tips: "荷叶要提前泡软清洗。",
    flavorProfile: "清香软糯，酸辣内芯，层次分明。"
  },
  {
    id: "static-82",
    category: "主食/点心类",
    name: "鲊海椒煎饼果子",
    description: "刷酱创新，用鲊海椒酱替代部分甜面酱。",
    ingredients: [{name:"面糊",amount:"1勺"},{name:"鸡蛋",amount:"1个"},{name:"薄脆",amount:"1块"},{name:"鲊海椒酱",amount:"1勺"}],
    steps: ["摊面饼，打鸡蛋。", "翻面刷鲊海椒酱。", "放薄脆卷起。"],
    tips: "酱不要太稀，挂得住饼。",
    flavorProfile: "软糯酥脆，酱香浓郁，地气十足。"
  },
  {
    id: "static-83",
    category: "主食/点心类",
    name: "鲊海椒香煎土豆饼",
    description: "软糯香煎，土豆泥中混合鲊海椒，早餐首选。",
    ingredients: [{name:"土豆泥",amount:"200g"},{name:"鲊海椒",amount:"50g"},{name:"面粉",amount:"少许"}],
    steps: ["土豆泥拌入鲊海椒和面粉。", "团成小饼。", "平底锅煎至金黄。"],
    tips: "加点面粉防散。",
    flavorProfile: "外焦里嫩，粉糯酸香。"
  },
  {
    id: "static-84",
    category: "主食/点心类",
    name: "鲊海椒三角饭团",
    description: "便携美味，烤过的海苔包裹鲊海椒拌饭。",
    ingredients: [{name:"米饭",amount:"1碗"},{name:"鲊海椒",amount:"30g"},{name:"海苔",amount:"2片"}],
    steps: ["鲊海椒炒干拌入米饭。", "模具压成三角形。", "包上海苔。"],
    tips: "米饭要热的时候拌。",
    flavorProfile: "便携顶饱，简单美味。"
  },
  {
    id: "static-85",
    category: "主食/点心类",
    name: "鲊海椒炒年糕",
    description: "中华风味，年糕软糯，鲊海椒酱汁浓稠。",
    ingredients: [{name:"水磨年糕",amount:"200g"},{name:"鲊海椒",amount:"50g"},{name:"青菜",amount:"2棵"}],
    steps: ["年糕煮软。", "炒香鲊海椒，加少许水。", "下年糕收汁，放青菜。"],
    tips: "汤汁要浓稠挂在年糕上。",
    flavorProfile: "软糯Q弹，酸辣浓郁。"
  },
  {
    id: "static-86",
    category: "主食/点心类",
    name: "鲊海椒炸春卷",
    description: "炸裂的口感，外皮酥脆，内馅酸辣鲜香。",
    ingredients: [{name:"春卷皮",amount:"10张"},{name:"粉丝",amount:"1把"},{name:"鲊海椒肉末",amount:"100g"}],
    steps: ["馅料炒熟放凉。", "包春卷。", "油炸至金黄。"],
    tips: "馅料不能有太多水，防止破皮。",
    flavorProfile: "酥脆掉渣，内馅丰富。"
  },
  {
    id: "static-87",
    category: "主食/点心类",
    name: "鲊海椒糯米烧麦",
    description: "糯米与玉米粉的结合，口感丰富。",
    ingredients: [{name:"烧麦皮",amount:"10张"},{name:"糯米饭",amount:"200g"},{name:"鲊海椒腊肉丁",amount:"50g"}],
    steps: ["糯米饭拌入炒好的鲊海椒腊肉。", "包成烧麦。", "蒸10分钟。"],
    tips: "皮薄馅大，顶端不封口。",
    flavorProfile: "软糯咸香，油润适口。"
  },
  {
    id: "static-88",
    category: "主食/点心类",
    name: "鲊海椒牛肉馅饼",
    description: "皮薄馅大，煎至两面金黄，肉汁丰富。",
    ingredients: [{name:"面团",amount:"200g"},{name:"牛肉鲊海椒馅",amount:"150g"}],
    steps: ["包馅擀平。", "中小火烙熟。", "切块食用。"],
    tips: "火不能大，防止皮焦馅生。",
    flavorProfile: "皮薄馅足，汁水丰盈。"
  },
  {
    id: "static-89",
    category: "主食/点心类",
    name: "鲊海椒牛肉面",
    description: "浇头之王，鲊海椒炒牛肉作为面条浇头，汤红味浓。",
    ingredients: [{name:"面条",amount:"150g"},{name:"鲊海椒炒牛肉",amount:"1份"},{name:"高汤",amount:"1碗"}],
    steps: ["煮面。", "浇上炒好的鲊海椒牛肉浇头。", "冲入高汤。"],
    tips: "浇头要现炒才香。",
    flavorProfile: "面劲道，汤浓郁，肉鲜嫩。"
  },
  {
    id: "static-90",
    category: "主食/点心类",
    name: "鲊海椒鸡丝凉面",
    description: "夏日限定，麻酱中加入鲊海椒，解腻开胃。",
    ingredients: [{name:"凉面",amount:"150g"},{name:"鸡丝",amount:"50g"},{name:"鲊海椒红油",amount:"2勺"},{name:"麻酱",amount:"1勺"}],
    steps: ["面煮熟过凉水。", "所有调料调匀。", "拌面，码鸡丝黄瓜丝。"],
    tips: "麻酱解辣，鲊海椒提香。",
    flavorProfile: "凉爽顺滑，酸辣麻香。"
  },

  // --- 补全至 100 (91-100) ---
  {
    id: "static-91",
    category: "传统菜系融合",
    name: "鲊海椒酸汤肥牛",
    description: "汤底创新，酸辣爽口，金黄诱人。",
    ingredients: [{name:"肥牛卷",amount:"200g"},{name:"鲊海椒",amount:"80g"},{name:"金针菇",amount:"1把"},{name:"黄灯笼椒酱",amount:"1勺"}],
    steps: ["炒香鲊海椒和黄灯笼椒。", "加水煮开，滤渣（或保留）。", "煮金针菇垫底。", "烫肥牛，淋汤。"],
    tips: "鲊海椒增加厚重感，黄灯笼椒增加辣度。",
    flavorProfile: "酸爽过瘾，金黄诱人，米饭杀手。"
  },
  {
    id: "static-92",
    category: "现代/西式跨界",
    name: "鲊海椒石锅拌饭",
    description: "韩式融合，锅巴焦香，鲊海椒酱代替韩式辣酱。",
    ingredients: [{name:"米饭",amount:"1碗"},{name:"五色蔬菜",amount:"适量"},{name:"鲊海椒酱",amount:"2勺"},{name:"溏心蛋",amount:"1个"}],
    steps: ["石锅抹油烧热。", "铺米饭，摆菜码。", "放鲊海椒酱和蛋。", "听见滋滋声拌匀。"],
    tips: "锅巴是灵魂，石锅要够热。",
    flavorProfile: "焦香酥脆，酱料独特，色彩缤纷。"
  },
  {
    id: "static-93",
    category: "海鲜/河鲜融合",
    name: "鲊海椒纸包烤鱼",
    description: "夜市风，锁住水分，鲊海椒味深入鱼肉。",
    ingredients: [{name:"鮰鱼",amount:"1条"},{name:"鲊海椒炒料",amount:"1碗"},{name:"烘焙纸",amount:"1张"}],
    steps: ["鱼腌制煎黄。", "炒料铺在鱼身上。", "用纸包严实。", "电烤盘焖煮10分钟。"],
    tips: "纸包能锁住香气和水分。",
    flavorProfile: "鱼肉鲜嫩，酱味渗透，热气腾腾。"
  },
  {
    id: "static-94",
    category: "现代/西式跨界",
    name: "鲊海椒风味羊肉串",
    description: "腌料创新，烤制时撒上干鲊海椒粉。",
    ingredients: [{name:"羊腿肉",amount:"300g"},{name:"鲊海椒粗粉",amount:"适量"},{name:"孜然",amount:"少许"}],
    steps: ["羊肉切块穿串。", "炭火烤至冒油。", "撒鲊海椒粉和孜然。", "烤至焦香。"],
    tips: "鲊海椒粉有玉米的香气，解羊肉膻味。",
    flavorProfile: "焦香四溢，外酥里嫩，风味独特。"
  },
  {
    id: "static-95",
    category: "传统菜系融合",
    name: "鲊海椒蒸凤爪",
    description: "早茶风，软烂脱骨，豆豉味中带着酸辣。",
    ingredients: [{name:"鸡爪",amount:"500g"},{name:"鲊海椒",amount:"80g"},{name:"花生",amount:"50g"}],
    steps: ["鸡爪炸至起泡泡。", "拌入鲊海椒和调料。", "蒸笼蒸40分钟。"],
    tips: "虎皮鸡爪吸汁能力一流。",
    flavorProfile: "软烂脱骨，一吮即化，早茶必点。"
  },
  {
    id: "static-96",
    category: "传统鄂湘黔系",
    name: "鲊海椒爆炒牛肚",
    description: "嚼劲十足，牛肚吸附了鲊海椒的颗粒，口感丰富。",
    ingredients: [{name:"熟牛肚",amount:"200g"},{name:"鲊海椒",amount:"80g"},{name:"蒜苔",amount:"1把"}],
    steps: ["牛肚切丝。", "爆香鲊海椒。", "下牛肚和蒜苔大火快炒。", "调味出锅。"],
    tips: "火大油多，速度要快。",
    flavorProfile: "脆嫩劲道，酸辣鲜香，下酒好菜。"
  },
  {
    id: "static-97",
    category: "传统菜系融合",
    name: "鲊海椒拌旋子凉粉",
    description: "川北凉粉变奏，冰凉爽滑，酸辣刺激。",
    ingredients: [{name:"豌豆凉粉",amount:"1块"},{name:"鲊海椒红油酱",amount:"2勺"},{name:"花生碎",amount:"少许"}],
    steps: ["凉粉刮成细条。", "淋上特制鲊海椒红油酱。", "撒花生葱花。"],
    tips: "酱汁要稍微咸一点，凉粉不吸盐。",
    flavorProfile: "冰凉顺滑，麻辣酸爽，消暑神器。"
  },
  {
    id: "static-98",
    category: "现代/西式跨界",
    name: "鲊海椒劲脆鸡米花",
    description: "炸鸡创新，面糊中加入鲊海椒粉，颜色金红。",
    ingredients: [{name:"鸡胸肉",amount:"200g"},{name:"炸粉",amount:"100g"},{name:"鲊海椒粉",amount:"30g"}],
    steps: ["鸡肉腌制。", "炸粉中混入鲊海椒粉。", "裹粉油炸至金黄酥脆。"],
    tips: "鲊海椒粉让外壳颜色更诱人。",
    flavorProfile: "酥脆多汁，微辣咸香，追剧零食。"
  },
  {
    id: "static-99",
    category: "主食/点心类",
    name: "鲊海椒猪油渣炒饭",
    description: "怀旧极品，猪油渣的香与鲊海椒的酸简直绝配。",
    ingredients: [{name:"米饭",amount:"1碗"},{name:"猪油渣",amount:"30g"},{name:"鲊海椒",amount:"50g"},{name:"酱油",amount:"少许"}],
    steps: ["猪油渣回锅炒脆。", "下鲊海椒炒香。", "倒入米饭炒散，淋酱油。"],
    tips: "一定要用熬猪油剩下的油渣，灵魂所在。",
    flavorProfile: "油润干香，满口留香，回忆满满。"
  },
  {
    id: "static-100",
    category: "传统鄂湘黔系",
    name: "鲊海椒全家福火锅",
    description: "终极一锅，以鲊海椒为锅底，涮煮各种食材，越煮越香。",
    ingredients: [{name:"鲊海椒底料",amount:"300g"},{name:"高汤",amount:"2L"},{name:"各种肉类蔬菜",amount:"适量"}],
    steps: ["油锅炒香大量鲊海椒。", "加入高汤煮沸熬制底汤。", "涮入喜欢的食材。"],
    tips: "汤底浓稠，煮的时候要勤搅动。",
    flavorProfile: "酸辣浓郁，煮万物皆香，聚餐首选。"
  }
];