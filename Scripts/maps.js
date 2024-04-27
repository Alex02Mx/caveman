const mapsImgs = {
    "Magma1": "https://i.ibb.co/ngd2xcp/Magma-level-1.jpg",
    "Magma2": "https://i.ibb.co/G9SbBQB/Magma-level-2.jpg",
    "Magma3": "https://i.ibb.co/WVnt62j/Magma-level-3.jpg",
    "Magma4": "https://i.ibb.co/tsJrVXz/Magma-level-4.jpg",
    "Magma5": "https://i.ibb.co/Qn9Qq7J/Magma-level-5.jpg",

    "Water1": "https://i.ibb.co/NNX6hRR/Water-level-1.jpg",
    "Water2": "https://i.ibb.co/g9pYLfC/Water-level-2.jpg",
    "Water3": "https://i.ibb.co/8M7y09w/Water-level-3.jpg",
    "Water4": "https://i.ibb.co/CBXk9sb/Water-level-4.jpg",
    "Water5": "https://i.ibb.co/ySLXyVr/Water-level-5.jpg",

    "Snow1": "https://i.ibb.co/d7WrNvc/Snow-level-1.jpg",
    "Snow2": "https://i.ibb.co/kHW4N32/Snow-level-2.jpg",
    "Snow3": "https://i.ibb.co/8cJDK60/Snow-level-3.jpg",
    "Snow4": "https://i.ibb.co/fQtbDHM/Snow-level-4.jpg",
    "Snow5": "https://i.ibb.co/qdqgJpM/Snow-level-5.jpg",

    "Sand1": "https://i.ibb.co/bHKbs9X/Sand-level-1.jpg",
    "Sand2": "https://i.ibb.co/cD752Kn/Sand-level-2.jpg",
    "Sand3": "https://i.ibb.co/717CyRX/Sand-level-3.jpg",
    "Sand4": "https://i.ibb.co/crH5BhB/Sand-level-4.jpg",
    "Sand5": "https://i.ibb.co/p2g2b4P/Sand-level-5.jpg",

    "Jungle1": "https://i.ibb.co/r4Jxn9d/Jungle-level-1.jpg",
    "Jungle2": "https://i.ibb.co/RBXbw1d/Jungle-level-2.jpg",
    "Jungle3": "https://i.ibb.co/m0fPwL3/Jungle-level-3.jpg",
    "Jungle4": "https://i.ibb.co/Jvvb5ZZ/Jungle-level-4.jpg",
    "Jungle5": "https://i.ibb.co/X5YmX6Q/Jungle-level-5.jpg",

    "Laberinto1": "/assets/laberinto_01.jpg"
};

// --- banners ---
let imgBanCaveman = new Image();
imgBanCaveman.src = "https://i.ibb.co/S3DhLbb/the-caveman-banner.png";
let imgBanTimeUP = new Image();
imgBanTimeUP.src = "https://i.ibb.co/KG0W0Zm/time-up-banner.png";
let imgBanGameOver = new Image();
imgBanGameOver.src = "https://i.ibb.co/hs2Gy6d/game-over-banner.png";
let imgBanLevCompleted = new Image();
imgBanLevCompleted.src = "https://i.ibb.co/6JSZk13/stagel-completed-banner.png";
let imgBanWinner = new Image();
imgBanWinner.src = "https://i.ibb.co/1MDRC1z/winner-banner.png";

// --- caveman status ---
let imgStart = new Image();
imgStart.src = "https://i.ibb.co/DMpj4jL/confuse.png";
let imgGameOver = new Image();
imgGameOver.src = "https://i.ibb.co/F6JCQRh/game-over.png";
let imgTime = new Image();
imgTime.src = "https://i.ibb.co/NpB93CX/crying.png";
let imgWinner = new Image();
imgWinner.src = "https://i.ibb.co/bWgJFRF/win.png";

// --- Caveman ----
// --- Walk ---
let imgCavMan = new Image();
imgCavMan.src = "https://i.ibb.co/wrSDrcX/walk-1.png";
// --- Pet ---
let imgPet = new Image();
imgPet.src = "/assets/pet.png";

// --- falling ---
// --- fire ---
let imgFallingFire = new Image();
imgFallingFire.src = "https://i.ibb.co/M5bb0Qc/falling-fire.png";
// --- water ---
let imgFallingWater = new Image();
imgFallingWater.src = "https://i.ibb.co/JdQ55wB/falling-water.png";
// --- snow ---
let imgFallingSnow = new Image();
imgFallingSnow.src = "https://i.ibb.co/F7Xxhh2/falling-snow.png";
// --- sand ---
let imgFallingSand = new Image();
imgFallingSand.src = "https://i.ibb.co/xjTKfy4/falling-sand.png";
// --- jungle ---
let imgFallingJungle = new Image();
imgFallingJungle.src = "https://i.ibb.co/XyKK2Hn/falling-jungle.png";

// --- valuies Imgs ---
const plusLive = new Image();
plusLive.src = "https://i.ibb.co/RgBXBy5/1up.png";
const plusSeconds = new Image();
plusSeconds.src = "https://i.ibb.co/XtR5FBj/10sec.png";
const noEnough = new Image();
noEnough.src = "https://i.ibb.co/RQnxxv7/no-enough.png";

// --- icon live img ---
const iconLive = "https://i.ibb.co/Tq0JTn4/happy-live.png";

// --- btns imgs ---
const inactiveBtnPad = "https://i.ibb.co/JkGBhcz/up-Dissabled.png";
const activeBtnPad = "https://i.ibb.co/v4PVny5/up.png";


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
    "bottomText": "Time ran out",
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
const levelsPassed = {
    "id": "levelsPassed",
    "topBanner": imgBanWinner,
    "middleImg": imgWinner,
    "bottomText": "You save Rocko",
}
messagesValues.push(startG);
messagesValues.push(timeUp);
messagesValues.push(gameO);
messagesValues.push(levelPass);
messagesValues.push(levelsPassed);


const stages = {
    0 : "stageMagma",
    1 : "stageWater",
    2 : "stageSnow",
    3 : "stageSand",
    4 : "stageJungle",
    5 : "stageLaberinto",
    6 : "EndGame"
};
const stagesNames = {
    0 : "Magma",
    1 : "Water",
    2 : "Snow",
    3 : "Sand",
    4 : "Jungle",
    5 : "Laberinto",
    6 : "Game"
};

let dirAreas = undefined;
let stageName;
let mapNumber = 0;
let bgnMap;
let collitionAreas;

// ---Function to fill up Array with maps images ---
let arrayImgMaps = [];
console.log(arrayImgMaps);

function loadMaps(obj){
    for(key in obj){
        let arrayMap = [];
        let name = obj[key];
        if(obj[key] == "Game"){
            break;
        }
        else{
            if( name == "Laberinto") {
                let map = new Image();
                map.src = mapsImgs["Laberinto1"];
                arrayMap.push(map);
            }else {
                for(let i = 1; i < 6; i++){
                    let map = new Image();
                    let srcInfo = mapsImgs[name + i];
                    map.src = srcInfo;
                    arrayMap.push(map);
                }
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
    },
    "stageLaberinto":{
        "areas" : [`
        PPPPPPPPPP
        PPPPPPPPPP
        PPPPPPPPPP
        PPPPPPPPPP
        PPPPPPPPPP
        PPPPPPPPPP
        PPPPPPPPPP
        PPPPPPPPPP
        PPPPPPPPPS
        PPFPPPPPPP
         `],
        "caveManImg" : imgCavMan,
        "collitionImg" : imgFallingJungle
    }
}

