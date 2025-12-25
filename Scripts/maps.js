const mapsImgs = {
    "Magma1": "https://i.ibb.co/HzZK1vt/Magma-level-1.jpg",
    "Magma2": "https://i.ibb.co/cLJLh52/Magma-level-2.jpg",
    "Magma3": "https://i.ibb.co/2PTtGSV/Magma-level-3.jpg",
    "Magma4": "https://i.ibb.co/wWwS4YF/Magma-level-4.jpg",
    "Magma5": "https://i.ibb.co/6yXgCqZ/Magma-level-5.jpg",

    "Water1": "https://i.ibb.co/r0Wr1pp/Water-level-1.jpg",
    "Water2": "https://i.ibb.co/kc8hGYn/Water-level-2.jpg",
    "Water3": "https://i.ibb.co/HHTZmYQ/Water-level-3.jpg",
    "Water4": "https://i.ibb.co/YpnNg6Y/Water-level-4.jpg",
    "Water5": "https://i.ibb.co/x3GPGtR/Water-level-5.jpg",

    "Ice1": "https://i.ibb.co/RC3VWJm/Ice-level-1.jpg",
    "Ice2": "https://i.ibb.co/xjBLk9v/Ice-level-2.jpg",
    "Ice3": "https://i.ibb.co/bvCdK1s/Ice-level-3.jpg",
    "Ice4": "https://i.ibb.co/Q81RdM9/Ice-level-4.jpg",
    "Ice5": "https://i.ibb.co/NZP1tcV/Ice-level-5.jpg",

    "Sand1": "https://i.ibb.co/2M6Bk4G/Sand-level-1.jpg",
    "Sand2": "https://i.ibb.co/MCDsR0C/Sand-level-2.jpg",
    "Sand3": "https://i.ibb.co/fS057Wd/Sand-level-3.jpg",
    "Sand4": "https://i.ibb.co/Z1bg7yp/Sand-level-4.jpg",
    "Sand5": "https://i.ibb.co/gT5thhG/Sand-level-5.jpg",

    "Jungle1": "https://i.ibb.co/chRVztj/Jungle-level-1.jpg",
    "Jungle2": "https://i.ibb.co/17K4q3W/Jungle-level-2.jpg",
    "Jungle3": "https://i.ibb.co/4jNGXZD/Jungle-level-3.jpg",
    "Jungle4": "https://i.ibb.co/hsfvMv1/Jungle-level-4.jpg",
    "Jungle5": "https://i.ibb.co/3fPcgjW/Jungle-level-5.jpg",

    "Laberynth1": "https://i.ibb.co/C6d5Cm6/Laberynth-level-1.jpg",
    "Laberynth2": "https://i.ibb.co/Yk7fm4v/Laberynth-level-2.jpg",
    "Laberynth3": "https://i.ibb.co/N9DFT01/Laberynth-level-3.jpg",
};

const stages = {
    0 : "stageMagma",
    1 : "stageWater",
    2 : "stageIce",
    3 : "stageSand",
    4 : "stageJungle",
    5 : "stageLaberynth",
    6 : "EndGame"
};
const stagesNames = {
    0 : "Magma",
    1 : "Water",
    2 : "Ice",
    3 : "Sand",
    4 : "Jungle",
    5 : "Laberynth",
    6 : "Game"
};

let dirAreas = undefined;
let stageName;
let mapNumber = 0;
let bgnMap;
let collisionAreas;
let wallsLimitsAreas;

// --- banners ---
let imgBanCaveman = new Image();
imgBanCaveman.src = "https://i.ibb.co/n6vYnct/banner-start.png";
let imgBanTimeUP = new Image();
imgBanTimeUP.src = "https://i.ibb.co/bXNjz7B/banner-time-up.png";
let imgBanGameOver = new Image();
imgBanGameOver.src = "https://i.ibb.co/0C7TfC6/banner-game-over.png";
let imgBanStageComp = new Image();
imgBanStageComp.src = "https://i.ibb.co/RgBTW31/banner-levels-done.png";
let imgBanStagesComp = new Image();
imgBanStagesComp.src = "https://i.ibb.co/JK2QNtP/banner-stage-done.png";
let imgBanPetFound = new Image();
imgBanPetFound.src = "https://i.ibb.co/bzZxJwy/banner-pet-found.png";

// --- caveman status ---
let imgStartG = new Image();
imgStartG.src = "https://i.ibb.co/NyLZxWg/start-shell.png";
let imgInfo = new Image();
imgInfo.src = "https://i.ibb.co/PYZtBcn/pet-info-dino.png";
let imgFound = new Image();
imgFound.src = "https://i.ibb.co/4sHJTsh/pet-found-dino.png";

let imgGameOver = new Image();
imgGameOver.src = "https://i.ibb.co/BgWvFzM/game-over.png";
let imgTime = new Image();
imgTime.src = "https://i.ibb.co/RNL40f3/time-up.png";

// --- Caveman ----
// --- Walk ---
let imgCavMan = new Image();
imgCavMan.src = "https://i.ibb.co/d7DtJgt/walk.png";


// --- falling ---
// --- fire ---
let imgFallingFire = new Image();
imgFallingFire.src = "https://i.ibb.co/1dm7LgJ/falling-fire.png";
// --- water ---
let imgFallingWater = new Image();
imgFallingWater.src = "https://i.ibb.co/BzJ7YqQ/falling-water.png";
// --- Ice ---
let imgFallingIce = new Image();
imgFallingIce.src = "https://i.ibb.co/gZ30CJ8/falling-ice.png";
// --- sand ---
let imgFallingSand = new Image();
imgFallingSand.src = "https://i.ibb.co/MRhc0qY/falling-sand.png";
// --- jungle ---
let imgFallingJungle = new Image();
imgFallingJungle.src = "https://i.ibb.co/93vprCR/falling-jungle.png";

// --- valuies Imgs ---
const plusLive = new Image();
plusLive.src = "https://i.ibb.co/X4ht7cf/1up.png";
const plusSeconds = new Image();
plusSeconds.src = "https://i.ibb.co/f2180Gy/10sec.png";
const noEnough = new Image();
noEnough.src = "https://i.ibb.co/jyWZfv6/no-enough.png";

// --- icon live img ---
const iconLive = "https://i.ibb.co/Wy5vn9t/icon-live.png";

// --- btns imgs ---
const inactiveBtnPad = "https://i.ibb.co/Byq15D6/up-Dissabled.png";
const activeBtnPad = "https://i.ibb.co/PY45yR5/up.png";

// --- conversation imgs ---
const conversationImg = new Image();
conversationImg.src = "https://i.ibb.co/5Kr6p9v/conversation.png";

// -- buttons Values -- 
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
// --- Values in windows ---
const messagesValues = [];

const startG = {
    "id": "startG",
    "topBanner": imgBanCaveman,
    "middleImg": imgStartG,
    "hisText": "Help Link to find his friendly pet Rocko.",
    "bottomText": "Select Difficulty",
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

messagesValues.push(startG);
messagesValues.push(timeUp);
messagesValues.push(gameO);
messagesValues.push(stagePass);
messagesValues.push(dinoInfo);
messagesValues.push(dinoFound);

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
    "stageIce":{
        "areas" : [
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
        "collitionImg" : imgFallingIce
    },
    "stageSand":{
        "areas" : [
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
    "stageLaberynth": [
        `
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
        `
    ]
};

