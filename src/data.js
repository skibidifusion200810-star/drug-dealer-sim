// CARTEL CITY is a fictional crime strategy game. No real substances or procedures are represented.
export const WORLD={width:1920,height:1320};
export const PRODUCTS=[
 {id:'ember',name:'Blue Ember',tag:'STREET',color:'#62b7f8',wholesale:25,retail:60,unlock:1,icon:'◆'},
 {id:'velvet',name:'Velvet Cloud',tag:'RARE',color:'#be89fd',wholesale:65,retail:145,unlock:3,icon:'✦'},
 {id:'chromatic',name:'Chromatic',tag:'ELITE',color:'#fa89c7',wholesale:155,retail:320,unlock:7,icon:'◈'},
 {id:'nova',name:'Nova Veil',tag:'LEGEND',color:'#f4c36b',wholesale:360,retail:720,unlock:12,icon:'✺'}
];
export const DISTRICTS=[
 {id:'old',name:'OLD QUARTER',short:'Old Quarter',color:'#80b7a2',risk:12,unlock:1,bounds:[0,0,630,670],demand:1},
 {id:'neon',name:'NEON MILE',short:'Neon Mile',color:'#db81f9',risk:28,unlock:2,bounds:[630,0,1330,670],demand:1.15},
 {id:'heights',name:'CROWN HEIGHTS',short:'Crown Heights',color:'#f4c782',risk:45,unlock:5,bounds:[1330,0,1920,670],demand:1.38},
 {id:'south',name:'SOUTH BLOCK',short:'South Block',color:'#77d1dc',risk:22,unlock:3,bounds:[0,670,630,1320],demand:1.08},
 {id:'docks',name:'THE DOCKS',short:'The Docks',color:'#e1a16c',risk:37,unlock:4,bounds:[630,670,1330,1320],demand:1.25},
 {id:'industrial',name:'IRON DISTRICT',short:'Iron District',color:'#8c9daf',risk:55,unlock:8,bounds:[1330,670,1920,1320],demand:1.5}
];
export const BUILDINGS=[
 {id:'apartment',name:'THE FLAT',kind:'home',district:'old',x:180,y:120,w:190,h:150,tag:'YOUR FIRST HOME',color:0x526f66},
 {id:'corner',name:'CORNER STORE',kind:'supply',district:'old',x:690,y:130,w:190,h:155,tag:'UNDERGROUND EXCHANGE',color:0x656857},
 {id:'club',name:'AFTERHOURS',kind:'contact',district:'neon',x:1180,y:100,w:190,h:175,tag:'NETWORK HUB',color:0x73556e},
 {id:'penthouse',name:'GLASS TOWER',kind:'property',district:'heights',x:1660,y:120,w:175,h:180,tag:'PREMIUM HQ',color:0x526b75,cost:32000},
 {id:'lot',name:'OLD WAREHOUSE',kind:'property',district:'old',x:160,y:465,w:220,h:178,tag:'WAREHOUSE',color:0x55616b,cost:1400},
 {id:'bar',name:'RED ROOM',kind:'contact',district:'neon',x:715,y:490,w:165,h:145,tag:'MEET CONTACTS',color:0x6a4b60},
 {id:'market',name:'MIDNIGHT MARKET',kind:'supply',district:'neon',x:1172,y:474,w:210,h:166,tag:'WHOLESALE',color:0x665e56},
 {id:'office',name:'PRIVATE OFFICE',kind:'property',district:'heights',x:1650,y:455,w:185,h:175,tag:'BUSINESS HQ',color:0x59746d,cost:7800},
 {id:'yard',name:'LOWRISE COURT',kind:'contact',district:'south',x:175,y:865,w:198,h:160,tag:'CUSTOMER HUB',color:0x685c56},
 {id:'garage',name:'MOTOR GARAGE',kind:'property',district:'docks',x:711,y:874,w:177,h:170,tag:'GARAGE',color:0x525f66,cost:4000},
 {id:'depot',name:'FREIGHT DEPOT',kind:'mission',district:'docks',x:1175,y:856,w:210,h:172,tag:'DELIVERY MISSIONS',color:0x666453},
 {id:'safehouse',name:'THE HIDEOUT',kind:'safehouse',district:'industrial',x:1660,y:850,w:180,h:168,tag:'LAY LOW',color:0x4e6259},
 {id:'laundry',name:'BACKSTREET',kind:'contact',district:'south',x:174,y:1092,w:210,h:140,tag:'NEIGHBORHOOD',color:0x5f6655},
 {id:'terminal',name:'TERMINAL 09',kind:'mission',district:'industrial',x:1653,y:1080,w:195,h:142,tag:'HIGH STAKES',color:0x6f5e5b}
];
export const CONTACTS=[
 {id:'marcus',name:'MARCUS',personality:'cautious',district:'old',x:430,y:310,tier:1,style:'The regular',color:0x7ad1bd,preferred:'ember'},
 {id:'ivy',name:'IVY',personality:'friendly',district:'old',x:510,y:445,tier:1,style:'The connector',color:0xffbf8f,preferred:'ember'},
 {id:'theo',name:'THEO',personality:'impatient',district:'old',x:314,y:700,tier:1,style:'The night owl',color:0xada3f5,preferred:'ember'},
 {id:'raya',name:'RAYA',personality:'friendly',district:'neon',x:920,y:354,tier:2,style:'The trendsetter',color:0xf19ed2,preferred:'velvet'},
 {id:'jules',name:'JULES',personality:'cautious',district:'neon',x:1110,y:715,tier:2,style:'The hustler',color:0xf9d67e,preferred:'velvet'},
 {id:'asher',name:'ASHER',personality:'impatient',district:'neon',x:680,y:746,tier:2,style:'The regular',color:0x7dc9ef,preferred:'ember'},
 {id:'lena',name:'LENA',personality:'cautious',district:'heights',x:1595,y:336,tier:3,style:'The collector',color:0xe6a9da,preferred:'chromatic'},
 {id:'milo',name:'MILO',personality:'friendly',district:'heights',x:1489,y:600,tier:3,style:'The VIP',color:0xaacfa8,preferred:'velvet'},
 {id:'juno',name:'JUNO',personality:'impatient',district:'south',x:490,y:1040,tier:2,style:'The runner',color:0xffb17d,preferred:'ember'},
 {id:'nova',name:'NOVA',personality:'friendly',district:'south',x:440,y:1110,tier:2,style:'The connector',color:0xb1a9eb,preferred:'velvet'},
 {id:'dex',name:'DEX',personality:'cautious',district:'docks',x:920,y:1080,tier:3,style:'The fixer',color:0x7de4d8,preferred:'chromatic'},
 {id:'sable',name:'SABLE',personality:'impatient',district:'docks',x:1090,y:845,tier:3,style:'The operator',color:0xe8a6ac,preferred:'chromatic'},
 {id:'rio',name:'RIO',personality:'friendly',district:'industrial',x:1475,y:1112,tier:4,style:'The legend',color:0xf9da93,preferred:'nova'},
 {id:'echo',name:'ECHO',personality:'cautious',district:'industrial',x:1510,y:795,tier:4,style:'The ghost',color:0x8da6f2,preferred:'nova'}
];
export const PROPERTIES=[
 {id:'apartment',name:'The Flat',cost:0,capacity:18,desc:'Your starter apartment. Small but yours.',bonus:'Home base'},
 {id:'lot',name:'Old Warehouse',cost:1400,capacity:45,desc:'More room for a growing operation.',bonus:'+27 storage slots'},
 {id:'garage',name:'Motor Garage',cost:4000,capacity:85,desc:'A base for a larger crew.',bonus:'+40 storage slots'},
 {id:'office',name:'Private Office',cost:7800,capacity:140,desc:'Command your operations in style.',bonus:'+55 storage slots'},
 {id:'penthouse',name:'Glass Tower',cost:32000,capacity:250,desc:'The city looks different from up here.',bonus:'+110 storage slots'}
];
export const RANKS=[
 [1,'STREET RUNNER'],[3,'LOCAL DEALER'],[6,'NEIGHBORHOOD BOSS'],[10,'KINGPIN'],[16,'CITY LEGEND'],[24,'UNDERWORLD ICON']
];
export function getRank(level){return [...RANKS].reverse().find(([min])=>level>=min)?.[1]||'STREET RUNNER'}
export function xpLevel(xp){return Math.max(1,Math.floor(Math.sqrt(Math.max(0,xp)/90))+1)}
export function xpNext(level){return 90*level*level}
