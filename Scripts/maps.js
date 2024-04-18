const mapsImgs = {
    "Magma1": "https://i.ibb.co/LQjYBQn/Magma-level-1.png",
    "Magma2": "https://i.ibb.co/yySKrGh/Magma-level-2.png",
    "Magma3": "https://i.ibb.co/N97fKkZ/Magma-level-3.png",
    "Magma4": "https://i.ibb.co/5rKBNGw/Magma-level-4.png",
    "Magma5": "https://i.ibb.co/Sfm5vbX/Magma-level-5.png",

    "Water1": "https://i.ibb.co/MRKBcT3/Water-level-1.png",
    "Water2": "https://i.ibb.co/vXPXzS6/Water-level-2.png",
    "Water3": "https://i.ibb.co/j5R4RXL/Water-level-3.png",
    "Water4": "https://i.ibb.co/tYRtBVy/Water-level-4.png",
    "Water5": "https://i.ibb.co/qNqf527/Water-level-5.png",

    "Snow1": "https://i.ibb.co/yqVzdN0/Snow-level-1.png",
    "Snow2": "https://i.ibb.co/k1p4RWy/Snow-level-2.png",
    "Snow3": "https://i.ibb.co/y8JgL5m/Snow-level-3.png",
    "Snow4": "https://i.ibb.co/1mjY1jN/Snow-level-4.png",
    "Snow5": "https://i.ibb.co/RztNYDQ/Snow-level-5.png",

    "Sand1": "https://i.ibb.co/xqBdKVR/Sand-level-1.png",
    "Sand2": "https://i.ibb.co/mX6SrQz/Sand-level-2.png",
    "Sand3": "https://i.ibb.co/wNvQmxw/Sand-level-3.png",
    "Sand4": "https://i.ibb.co/CQZmY3S/Sand-level-4.png",
    "Sand5": "https://i.ibb.co/zNdPb16/Sand-level-5.png",

    "Jungle1": "https://i.ibb.co/rbwGT6y/Jungle-level-1.png",
    "Jungle2": "https://i.ibb.co/8zSFs6F/Jungle-level-2.png",
    "Jungle3": "https://i.ibb.co/Pc3dyG1/Jungle-level-3.png",
    "Jungle4": "https://i.ibb.co/m6c5Vxm/Jungle-level-4.png",
    "Jungle5": "https://i.ibb.co/p0Zs8MC/Jungle-level-5.png",
};

// --- banners ---
let imgBanCaveman = "../assets/banners/the_caveman_banner.png";
let imgBanTimeUP = "../assets/banners/time_up_banner.png";
let imgBanGameOver = "../assets/banners/game_over_banner.png";
let imgBanLevCompleted = "../assets/banners/stagel_completed_banner.png";
let imgBanWinner = "../assets/banners/winner_banner.png";
// --- caveman status ---
let imgStart = "../assets/status/confuse.png"
let imgGameOver = "../assets/status/game_over.png";
let imgTime = "../assets/status/crying.png";
let imgWinner = "../assets/status/win.png";

// --- Caveman ----
// --- Walk ---
let imgCavMan = new Image();
imgCavMan.src = "../assets/caveman/walk_3.png";

// --- falling ---
// --- fire ---
let imgFallingFire = new Image();
imgFallingFire.src = "../assets/caveman/falling_fire.png";
// --- water ---
let imgFallingWater = new Image();
imgFallingWater.src = "../assets/caveman/falling_water.png";
// --- snow ---
let imgFallingSnow = new Image();
imgFallingSnow.src = "../assets/caveman/falling_snow.png";
// --- sand ---
let imgFallingSand = new Image();
imgFallingSand.src = "../assets/caveman/falling_sand.png";
// --- jungle ---
let imgFallingJungle = new Image();
imgFallingJungle.src = "../assets/caveman/falling_jungle.png";

// --- Valores en ventana de mensajes ---
const messagesValues = [];

const startG = {
    "id": "startG",
    "topBanner": imgBanCaveman,
    "middleImg": imgStart,
    "bottomText": "Press Start To Play",
    "hisText": "Grunk needs of your aid. His loyal companion, Titan, has gone missing, leaving Grunk distraught and in search of answers. Will you join Grunk on his quest to find Titan, navigating treacherous terrain and unknown dangers to reunite them once more? Your help could make all the difference in this primal tale of friendship and loyalty.",
};
const timeUp = {
    "id": "timeUp",
    "topBanner": imgBanTimeUP,
    "middleImg": imgTime,
    "bottomText": "Time Up",
};
const gameO = {
    "id": "gameO",
    "topBanner": imgBanGameOver,
    "middleImg": imgGameOver,
    "bottomText": "You Lose",
};
const levelPass = {
    "id": "levelPass",
    "topBanner": imgBanLevCompleted,
    "btnText": "Next Level"
}

messagesValues.push(startG);
messagesValues.push(timeUp);
messagesValues.push(gameO);
messagesValues.push(levelPass);

const stages = {
    0 : "stageMagma",
    1 : "stageWater",
    2 : "stageSnow",
    3 : "stageSand",
    4 : "stageJungle",
    5 : "EndGame"
};
const stagesNames = {
    0 : "Magma",
    1 : "Water",
    2 : "Snow",
    3 : "Sand",
    4 : "Jungle",
    5 : "Game"
};

let dirAreas = undefined;
let stageName;
let mapNumber = 0;
let bgnMap;
let collitionAreas;

// ---Function to fill up Array with maps images ---
let arrayImgMaps = [];

function loadMaps(obj){
    for(key in obj){
        let arrayMap = [];
        let name = obj[key];
        if(obj[key] == "Game"){
            break;
        }
        else{
            for(let i = 1; i < 6; i++){
                let map = new Image();
                // let srcInfo = mapsImgs[name + i];
                // map.src = srcInfo;
                map.src = "../assets/stages_maps/" + name + "_level_" + i + ".png";
                arrayMap.push(map);
            }
            let obj = {};
            obj[name] = arrayMap;
            arrayImgMaps.push(obj);
        }
    }
};
loadMaps(stagesNames);
// --- ---

// --- Maps ---
mapsInfo = {
    "stageMagma":{
        "areas" : [`
            CCCPPPCPPP
            CFCPCPCPCP
            CPPPCPPPCP
            CCCCCCCCCP
            PPPPPPCCCP
            PCCCCPPPPP
            PPPCCCCCCC
            CCPPPPPPPP
            CSCCCCCCCP
            CPPPPPPPPP
        `,
        `
            CPPPPPPPPP
            CSCCCCCCCP
            CCCCCPPPPP
            PPPPCPCCCC
            PCCPCPPPPP
            PCCPCCCCCP
            PCCPPPPPPP
            PCCCCCCCCC
            PCCCCCCCFC
            PPPPPPPPPC
        `,
        `
            PPPPPPPPPP
            PCCCCCCCCP
            PCPPPPPPPP
            PCFCCCCCCC
            PCCPPPPPCC
            PPPPCCCPCC
            CCCCCCCPCC
            PPPPPPPPCC
            PCCCCCCCSC
            PPPPPPPPPC
        `,
        `
            PPPPPCPPPP
            PCCCPCPCCP
            PPPCPCFCCP
            CCSCPCCCCP
            CCCCPCPPPP
            PPPPPCPCCC
            PCCCCCPCCC
            PCCCCCPPPP
            PCPPPCCCCP
            PPPCPPPPPP
        `,
        `
            PPPPPCPPPP
            PCCCPCPCCP
            PPPCFCSCCP
            CCPCCCCCCP
            CPPCPPPPPP
            CPCCPCCCCC
            CPCCPCCCCC
            PPPCPPPPPP
            PCCCCCCCCP
            PPPPPPPPPP
        `],
        "caveManImg" : imgCavMan,
        "collitionImg" : imgFallingFire
    },
    "stageWater":{
        "areas" : [`
            PPPPPPPPPP
            PCCCCCCCCP
            PCPPPPPPCP
            PCPCCCCPPP
            PCPCSPCCCC
            PCPCCPCCCC
            PCPPPPCFPP
            PCCCCCCCCP
            PCPPPPCCCP
            PPPCCPPPPP
        `,
        `
            PPPPPPPPPP
            PCCCCCCCCP
            PCPPPPPPPP
            PCPCCCCCCC
            PCPCCCPPPP
            PCPCCPPCCP
            PCPCCPCSPP
            PCPPPPCCCC
            PCCCCCCCFC
            PPPPPPPPPC
        `,
        `
            PPPPPPCPPP
            PCCCCPCPCP
            PPPPCPCPCP
            CCCPCPCPCP
            CCCPCPCPCP
            PPPPCPCPCP
            PCCCCPPPCP
            PCCCCCCCCP
            PCPPPCFCSP
            PPPCPPPCCC
        `,
        `
            PPPPPCPPPP
            PCCCPCPCCP
            PCCCPPPCPP
            PPPCCCCCPC
            CCPCPPFCPP
            CCPCPCCCCP
            PPPCPPPPPP
            PCCCCCCCCC
            PCCCPPSCCC
            PPPPPCCCCC
        `,
        `
            PPPPPCPPPP
            PCCCPCPCCP
            PCCCPCPCCP
            PPPCPCPCCP
            CCPCPCSCCP
            PPPCPCCCCP
            PCCCPPPPPP
            PCCCCCCCCC
            PCCCCCCPFC
            PPPPPPPPCC
        `],
        "caveManImg" : imgCavMan,
        "collitionImg" : imgFallingWater
    },
    "stageSnow":{
        "areas" : [`
            PPPCCPPPPP
            PCPCCPCCCP
            PCPPPPCCPP
            PCCCCCCCPC
            PPPPPPPCPC
            CCCCCCPCPC
            PPPPPPPCFC
            PCCCCCCCCC
            PCCCPPPCSC
            PPPPPCPPPC
        `,
        `
            PPPPPPPPPP
            PCCCCCCCCP
            PCPPPPCCCP
            PCPCCPPPPP
            PCPCCCCCCC
            PCPCPPPCCC
            PCPCPCPPSC
            PCPPPCCCCC
            PCCCCCCPFC
            PPPPPPPPCC
        `,
        `
            PPPCPPPPPP
            PCPCPCCCCP
            PCPCPCPPPP
            PCPCPCPCCC
            PCPCPCPPPC
            PCPCPCCCPC
            PCPPPCCFPC
            PCCCCCCCCC
            PCCCPPPCSC
            PPPPPCPPPC
        `,
        `
            PPPPPPPPPP
            PCCCCCCCCP
            PCPPPPPPPP
            PCPCCCCCCC
            PCPCCPPPPP
            PCPCCPCCCP
            PCPPPPCSPP
            PCCCCCCCCC
            PCPPPCFCCC
            PPPCPPPCCC
        `,
        `
            PPPCPPPPPP
            PCPCPCCCCP
            PCPPPCPPPP
            PCCCCCPCCC
            PPPPPCPCCC
            CCCCPCPPPP
            PPPCPCCCCP
            PCPPPCCCCP
            PCCCCCSCCP
            PPPPPPPCFP
            `],
        "caveManImg" : imgCavMan,
        "collitionImg" : imgFallingSnow
    },
    "stageSand":{
        "areas" : [`
            PPPPPPPPPC
            PCCCCCCPPP
            PCPPPCCCCP
            PPPCPPPPCP
            CCCCCCCPCP
            CSCPPPCPCP
            CPPPCPCPCP
            CCCCCPPPCP
            CFPPCCCCCP
            CCCPPPPPPP
        `,
        `
            PPPCPPPCCC
            PCPPPCPCFP
            PCCCCCPPCP
            PCCCCCCPCP
            PPPPPPCPCP
            CCCCCPCPCP
            PPPPCPCPCP
            PCCPCPCPCP
            PSCPCPCPCP
            CCCPPPCPPP
        `,
        `
            PPPCPPPCCC
            PCPPPCPPSC
            PCCCCCCCCC
            PPPPPPPPPP
            CCCCCCCCCP
            PPPPPPPPPP
            PCCCCCCCCC
            PCPPPPPCFP
            PCPCCCPCCP
            PPPCCCPPPP
        `,
        `
            PPPCCCPPPC
            PCPCCCPCPC
            PCPPPPPCPC
            PCCCCCCCPP
            PCCCFCCCCP
            PPPCPCPPPP
            CCPCPCPCCC
            PPPCPCPCSC
            PCCCPCPCPC
            PPPPPCPPPC
        `,
        `
            PPPPPPPPPP
            PCCCCCCCCP
            PCPPPPPPCP
            PCPCCCCPCP
            PCPCSPCPCP
            PCPCCPCPPP
            PCPPPPCCCC
            PCCCCCCCCF
            PCPPPCPPPP
            PPPCPPPCCC
            `],
        "caveManImg" : imgCavMan,
        "collitionImg" : imgFallingSand
    },
    "stageJungle":{
        "areas" : [`
            CPPPCPPPPP
            PSCPPPCCCP
            CCCCCCCCCP
            PPPPPPPPPP
            PCCCCCCCCC
            PCPPPCCPPP
            PPPCPPPPCP
            CCCCCCCCCP
            CFPCPPPCCP
            CCPPPCPPPP
        `,
        `
            CCCCPPPPPP
            CCCCPCCCCP
            PPPCPCPPPP
            PCPCPCPCCC
            PCPCPCPCCC
            PCPCPCPPCC
            PCPCPPCPPP
            PCPPCPPCCP
            PSCPCCPCFP
            CCCPPPPCCC
        `,
        `
            PPPCCPPPPP
            PCPCCPCCCP
            PCPPPPCCCP
            PCCCCCFPPP
            PCCCCCCCCC
            PPPPPPPPCC
            CCCCCCCPCC
            PPPPPPPPCC
            PCCCCCCCSC
            PPPPPPPPPC
        `,
        `
            CCPPPPCPPP
            PPPCCPPPCP
            PCCCCCCCCP
            PCCCCCSPPP
            PPPPPPCCCC
            CCCCCPPPPP
            PPFCCCCCCP
            PCCPPPPPCP
            PCCPCCCPCP
            PPPPCCCPPP
        `,
        `
            PPPPCCCPPP
            PCCPCCCPCP
            PCCPPCPPCP
            PCFCPPPCCP
            PPPCCCCCCP
            CCCCPPPPPP
            PPSCPCCCCC
            PCCCPPPPPP
            PCCCCCCCCP
            PPPPPPPPPP
            `],
        "caveManImg" : imgCavMan,
        "collitionImg" : imgFallingJungle
    }
}

