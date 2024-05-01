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

    "Laberynth1": "./assets/Laberynth_level_1.jpg",
    "Laberynth2": "./assets/Laberynth_level_2.jpg",
    "Laberynth3": "./assets/Laberynth_level_3.jpg",
};

// --- banners ---
let imgBanCaveman = new Image();
imgBanCaveman.src = "./assets/banner-start.png";
let imgBanTimeUP = new Image();
imgBanTimeUP.src = "./assets/banner-time-up.png";
let imgBanGameOver = new Image();
imgBanGameOver.src = "./assets/banner-game-over.png";
let imgBanStageComp = new Image();
imgBanStageComp.src = "./assets/banner-levels-done.png";
let imgBanStagesComp = new Image();
imgBanStagesComp.src = "./assets/banner-stage-done.png";
let imgBanPetFound = new Image();
imgBanPetFound.src = "./assets/banner-pet-found.png";

// --- caveman status ---
let imgStartG = new Image();
imgStartG.src = "./assets/start-shell.png";
let imgGameOver = new Image();
imgGameOver.src = "./assets/game-over.png";
let imgTime = new Image();
imgTime.src = "./assets/time-up.png";


let imgInfo = new Image();
imgInfo.src = "./assets/pet-info-dino.png";
let imgFound = new Image();
imgFound.src = "./assets/pet-found-dino.png";

// --- Caveman ----
// --- Walk ---
let imgCavMan = new Image();
imgCavMan.src = "./assets/walk.png";


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
plusLive.src = "./assets/1up.png";
const plusSeconds = new Image();
plusSeconds.src = "./assets/10sec.png";
const noEnough = new Image();
noEnough.src = "./assets/no_enough.png";

// --- icon live img ---
const iconLive = "./assets/icon-live.png";

// --- btns imgs ---
const inactiveBtnPad = "./assets/upDissabled.png";
const activeBtnPad = "./assets/up.png";

// --- conversation imgs ---
const conversationImg = new Image();
conversationImg.src = "./assets/conversation.png";

// --- Values in windows ---
const messagesValues = [];


const startG = {
    "id": "startG",
    "topBanner": imgBanCaveman,
    "middleImg": imgStartG,
    "hisText": "Help Link to find his friendly pet Rocko.",
    "bottomText": "Press Start To Play",
};
const timeUp = {
    "id": "timeUp",
    "topBanner": imgBanTimeUP,
    "middleImg": imgTime,
    "bottomText": "Time ran out",
    "btnText": "Play Again",
};
const gameO = {
    "id": "gameO",
    "topBanner": imgBanGameOver,
    "middleImg": imgGameOver,
    "bottomText": "You Lose",
    "btnText": "Play Again",
};
const stagePass = {
    "id": "stagePass",
    "topBanner1": imgBanStageComp,
    "topBanner2": imgBanStagesComp,
    "btnText": "Next Level",
};
const dinoInfo = {
    "id": "dinoInfo",
    "topBanner": conversationImg,
    "middleImg": imgInfo,
    "bottomText": "Find Rocko",
    "btnText": "Let's Go",
};
const dinoFound = {
    "id": "dinoFound",
    "topBanner": imgBanPetFound,
    "middleImg": imgFound,
    "bottomText": "You have found Rocko",
    "btnText": "Play Again"
};
const btnsValues = {
    "A" : ["t","t","f","t"],
    "B" : ["f","t","t","t"],
    "C" : ["f","t","f","t"],
    "D" : ["t","t","t","f"],
    "E" : ["t","f","t","t"],
    "F" : ["t","f","t","f"], 
    "G" : ["t","t","f","f"],
    "H" : ["f","f","t","t"],
    "I" : ["f","t","t","f"],
    "J" : ["t","f","f","t"],
    "K" : ["f","f","t","f"],
    "L" : ["t","f","f","f"],
    "M" : ["f","f","f","t"],
    "N" : ["f","t","f","f"]
};

messagesValues.push(startG);
messagesValues.push(timeUp);
messagesValues.push(gameO);
messagesValues.push(stagePass);
messagesValues.push(dinoInfo);
messagesValues.push(dinoFound);


const stages = {
    0 : "stageMagma",
    1 : "stageWater",
    2 : "stageSnow",
    3 : "stageSand",
    4 : "stageJungle",
    5 : "stageLaberynth",
    6 : "EndGame"
};
const stagesNames = {
    0 : "Magma",
    1 : "Water",
    2 : "Snow",
    3 : "Sand",
    4 : "Jungle",
    5 : "Laberynth",
    6 : "Game"
};

let dirAreas = undefined;
let stageName;
let mapNumber = 0;
let bgnMap;
let collitionAreas;
let wallsLimitsAreas;


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
            if( name == "Laberynth") {
                for(let i = 1; i < 4; i++){
                    let map = new Image();
                    let srcInfo = mapsImgs[name + i];
                    map.src = srcInfo;
                    arrayMap.push(map);
                }
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

// --- Maps ---
let mapsInfo = {
    "stageMagma":{
        "areas" : [
        //     `
        //     PPPPPPPPPP
        //     PFPPPPPPPP
        //     PPPPPPPPPP
        //     PPPPPPPPPP
        //     PPPPPPPPPP
        //     PPPPPPPPPP
        //     PPPPPPPPPP
        //     PCPPPPPPPP
        //     PSPPPPPPPP
        //     PPPPPPPPPP
        // `,
        `
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
        "areas" : [
        //     `
        //     PPPPPPPPPP
        //     PPPPPPPPPP
        //     PPPPPPPPPP
        //     PPPPPPPPPP
        //     PPPPSPPPPP
        //     PPPPPPPPPP
        //     PPPPPPPFPP
        //     PPPPPPPPPP
        //     PPPPPPPPPP
        //     PPPPPPPPPP
        // `,
        `
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
        "areas" : [
        //     `
        //     PPPPPPPPPP
        //     PPPPPPPPPP
        //     PPPPPPPPPP
        //     PPPPPPPPPP
        //     PPPPPPPPPP
        //     PPPPPPPPPP
        //     PPPPPPPPFP
        //     PPPPPPPPPP
        //     PPPPPPPPSP
        //     PPPPPPPPPP
        // `,
        `
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
        "areas" : [
        //     `
        //     PPPPPPPPPP
        //     PPPPPPPPPP
        //     PPPPPPPPPP
        //     PPPPPPPPPP
        //     PPPPPPPPPP
        //     PSPPPPPPPP
        //     PPPPPPPPPP
        //     PPPPPPPPPP
        //     PFPPPPPPPP
        //     PPPPPPPPPP
        // `,
        `
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
        "areas" : [
        //     `
        //     PPPPPPPPPP
        //     PSPPPPPPPP
        //     PPPPPPPPPP
        //     PPPPPPPPPP
        //     PPPPPPPPPP
        //     PPPPPPPPPP
        //     PPPPPPPPPP
        //     PPPPPPPPPP
        //     PFPPPPPPPP
        //     PPPPPPPPPP
        // `,
        `
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
    "stageLaberynth":{
        "areas" : [
        `
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
        `,
        `
            PPPPPPFPPP
            PPPPPPPPPP
            PPPPPPPPPP
            PPPPPPPPPP
            PPPPPPPPPP
            PPPPPPPPPP
            PPPPPPPPPP
            PPPPPPPPPP
            PPPPPPPPPP
            PPSPPPPPPP
        `,
        `
            PPPPPPSPPP
            PPPPPPPPPP
            PPPPPPPPPP
            PPPPPPPPPP
            PPPPPPPPPP
            PPPPPPPPPP
            PPPPPPPPPP
            PPPPPPPPPP
            PPPPPPPPPP
            PPPPPPPPPF
         `],
        "caveManImg" : imgCavMan,
    }
};
let wallsLimits = {
    "stageLaberynth": [`
        ICBHICCCCH
        GHFFGCHNHF
        IJFGCHDHDJ
        GHGCHFFFFK
        IAMIJLFFFF
        FIHFICJFFF
        FFGJGHIJFF
        FFNCCJFIAJ
        FGCCCCJGBM
        GCMNCCCCAM
    `,
    `
        IHIHIBJIBH
        FFFGJLIJFF
        FFFICCAMFF
        FFGAHNHIJG
        FGHGACEFIH
        FNACHNEGJF
        DCHNAHDCMF
        GHGHKFLIHF
        IAMFFGHFGE
        GMIJGCAJNJ
    ` ,
    `
        ICCMIHDCCH
        FIHIJGJICE
        GJFFICBJKF
        IMFFGHFIJF
        GCAJIJLFIJ
        IMIMGBCJFI
        FIJICEIMGJ
        FGCJNEDCHI
        DCHNBJGHDJ
        GHGCACCJGM
    `]
};

