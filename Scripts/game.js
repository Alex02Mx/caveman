const canvas = document.querySelector("#game");
const game = canvas.getContext("2d");
const winMessage = document.querySelector(".winMessage");
const page = document.querySelector(".page");

window.addEventListener("load", setCanvasSize);
window.addEventListener("resize", setCanvasSize);

const btn = document.querySelectorAll(".btn");
const btns = document.querySelector(".btns");
const left = document.querySelector("#left");
const up = document.querySelector("#up");
const down = document.querySelector("#down");
const right = document.querySelector("#right");
const arrows = {
    "up": 38,
    "down": 40,
    "left": 37,
    "right": 39
};
const timeMsg = document.querySelector(".timeSpan");
const livesMsg = document.querySelector(".livesSpan");
const stageMsg = document.querySelector(".stageSpan");
const levelMsg = document.querySelector(".levelSpan");

const firePos = {
    xC: undefined,
    yC: undefined
};
const playerPos = {
    x: undefined,
    y: undefined
};
let priceCont;
const totalTimeParr = document.createElement("p");
// --- variables ---
let recordPos = false;
let canvasSizeO;
let canvasSize;
let actualPosX;
let actualPosY;
let elementSize;

let beginningWindow = true;
let statusWindow = false;
let levelPassWin = false;
let current = "startG";

let stCount = 0;
let level = 0;
let timeStart = undefined;
let amountTime = 40;
let counter = amountTime;
let timeRep = undefined;
let maxLength;
let lives = 3;
let iconSize = 30;
let arrayObst;

let flip = 0;

let objSeconds = {};
let totalTimeLeft = 0;
let numIncr = 0;
let intervIncre;
let active;

let extraTime = 0;
let liveSet = false

let btnExitWindow = document.createElement("button");
btnExitWindow.classList.add("btnMessStyle", "btnHov");
btnExitWindow.innerHTML =  "Exit";
btnExitWindow.addEventListener("click", fncStart);

let btnStatusWindow = document.createElement("button");
btnStatusWindow.classList.add("btnMessStyle", "btnHov");
btnStatusWindow.addEventListener("click", filter_LD);
function filter_LD() {
    defaulValues();
    startGame(); 
}

let btnStatusWindowGO_TU = document.createElement("button");
btnStatusWindowGO_TU.classList.add("btnMessStyle", "btnHov");
btnStatusWindowGO_TU.addEventListener("click", filter_GO_TU);
function filter_GO_TU() {
    resetValuesStart();
    startGame(); 
}

function escuchador(evento){
    switch(evento.keyCode){
        case arrows["up"]:
            btnUp();
            break;
        case arrows["down"]:
            btnDown();
            break;
        case arrows["left"]:
            btnLeft();
            break;
        case arrows["right"]:
            btnRight()
            break;
        default:
            console.log("Otra tecla");
    };
};

function fncStart(){
    livesMsg.innerHTML = "";
    timeMsg.innerHTML = "";
    stageMsg.innerHTML = "";
    levelMsg.innerHTML = "";
    current = "startG";
    resetValuesStart();
    beginningFilter();
};

function btnUp(){
    if( !( playerPos["y"] < elementSize) ){
        let playerUAddPosA = Number( playerPos["y"].toFixed(1));
        let playerUAddPosB = Number( elementSize.toFixed(1));
        let playerUAddPosC = Number( (playerUAddPosA - playerUAddPosB).toFixed(1) );
        playerPos["y"] = playerUAddPosC;
        levelCheck();
        startGame();
    }
};
function btnDown(){
    if(!( (playerPos["y"] + elementSize) >= canvasSize ) ){
        let playerDAddPosA = Number( playerPos["y"].toFixed(1));
        let playerDAddPosB = Number( elementSize.toFixed(1));
        let playerDAddPosC = Number( (playerDAddPosA + playerDAddPosB).toFixed(1) );
        playerPos["y"] = playerDAddPosC;
        levelCheck();
        startGame();
    }
};
function btnLeft(){
    // if(flip == 0){
    //     flip = 1;
    // }
    // else{
    // }
    if(!( playerPos["x"] < elementSize)){
        let playerLAddPosA = Number( playerPos["x"].toFixed(1));
        let playerLAddPosB = Number( elementSize.toFixed(1));
        let playerLAddPosC = Number( (playerLAddPosA - playerLAddPosB).toFixed(1) );
        playerPos["x"] = playerLAddPosC;
        flip = 1;
    }
    levelCheck();
    startGame();
};
function btnRight(){
    // if(flip == 1){
    //     flip = 0;
    // }
    // else{
    // }
    if( !( (playerPos["x"] + elementSize) >= canvasSize ) ){
        let playerRAddPosA = Number( playerPos["x"].toFixed(1));
        let playerRAddPosB = Number( elementSize.toFixed(1));
        let playerRAddPosC = Number( (playerRAddPosA + playerRAddPosB).toFixed(1) );
        playerPos["x"] = playerRAddPosC;
        flip = 0;
    }
    levelCheck();
    startGame();
};


function setCanvasSize(){
    if(recordPos == true){
        canvasSizeO = canvasSize;
    }
    if(window.innerWidth > 1023){
        if(window.innerHeight > window.innerWidth){
            canvasSize = Math.floor(window.innerWidth * 0.60);
        }else if(window.innerWidth > window.innerHeight){
            canvasSize = Math.floor(window.innerHeight * 0.85);
        };
    }
    else{
        if(window.innerHeight > window.innerWidth){
            canvasSize = Math.floor(window.innerWidth * 0.94);
        }else if(window.innerWidth > window.innerHeight){
            canvasSize = Math.floor(window.innerHeight * 0.94);
        };
    }
    if(recordPos == true){
        actualPosX = (canvasSize * playerPos["x"] / canvasSizeO).toFixed(1);
        actualPosY = (canvasSize * playerPos["y"] / canvasSizeO).toFixed(1);
        playerPos["x"] = Number(actualPosX);
        playerPos["y"] = Number(actualPosY);
    }else{
        canvasSizeO = canvasSize;
    };
    canvas.setAttribute("width", canvasSize);
    canvas.setAttribute("height", canvasSize);
    winMessage.setAttribute("width", canvasSize);
    winMessage.setAttribute("height", canvasSize);
    elementSize = Number( (canvasSize / 10).toFixed(1) );
    page.classList.remove("winOff");
    beginningFilter();
};
function startGame() {
    if(dirAreas == undefined){
        dirAreas = stages[stCount];
        level++;
    };
    stageName = stagesNames[stCount];
    let lenghtMapArray = arrayImgMaps[stCount][stageName];
    maxLength = lenghtMapArray.length - 1;
    if(mapNumber > maxLength){
        levelDone();
        return;
    };
    bgnMap = lenghtMapArray[mapNumber];
    collitionAreas = mapsInfo[dirAreas]["areas"][mapNumber];
    beginningWindow = false;
    recordPos = true;
    btns.classList.remove("winOff");
    winMessage.classList.add("winOff");
    canvas.classList.remove("winOff");

    enableBtns();

    // game.font = (elementSize*.8).toFixed(0) + "px Verdana";
    // game.textAlign = "left";

    const mapTrim = collitionAreas.trim().split("\n");
    const mapRowCol = mapTrim.map((row) => row.trim().split(""));
    
    if(!timeStart){
        timeStart = true;
        startTimer();
    //     timeStart = Date.now();
    //    timeInterval = setInterval(printTime,100);
    };
   
    printLives();
    printLevel();
    // printTime();

    game.clearRect(0, 0, canvasSize, canvasSize);
    arrayObst = [];

    for(let row = 0; row < 10; row++){
        for(let col = 0; col < 10; col++){
            // --- posicion X ---
            let posXM = Number((elementSize * col).toFixed(1));
            let posX = posXM;
            // --- posicion Y ---
            let posyM = Number( (elementSize * row).toFixed(1) );
            let posY = posyM;
            // --- Item letra directorio mapa---
            let item = mapRowCol[row][col];

            // --- Posiciones en colision
            if( item == "C"){
                arrayObst.push({
                    x: posX,
                    y: posY
                })
            };
            // --- Posicion fuego salida ---
            if( item == "F"){
                firePos["xC"] = posX;
                firePos["yC"] = posY;
            }
            // --- Posicion Jugador  y cueva cuando es undefinded ---
            if( item == "S"){
                if(playerPos["x"] == undefined && playerPos["y"] == undefined){
                    playerPos["x"] = Number(posX.toFixed(1));
                    playerPos["y"] = Number(posY.toFixed(1));
                };
            }
        }
    }
    // game.fillText(emojis[item],posX, posY);
    game.drawImage(bgnMap, 0, 0, canvasSize, canvasSize);
    movePlayer();
};


function levelCheck(){
    const caveX = firePos["xC"] == playerPos["x"];
    const caveY = firePos["yC"] == playerPos["y"];
    const caveC = caveX && caveY;
    if(caveC){
        fillObjLevels();
        level++;
        mapNumber++;
        restartTimer();
        if( !(mapNumber > maxLength) ){
            startTimer();
        }
    };
};
function beginningFilter(){
    if(beginningWindow){
        beginningWindowFnc();
    }
    else if(statusWindow){
        statusWindowFnc();
    }
    else if(levelPassWin){
        levelPassWindow();
    }
    else{
        startGame();
    }
};


function disableBtns(){
    document.removeEventListener("keyup" ,escuchador);
    btn.forEach(pBtn => pBtn.classList.remove("btnStd"));
    left.removeEventListener("click", btnLeft);
    up.removeEventListener("click", btnUp);
    down.removeEventListener("click", btnDown);
    right.removeEventListener("click", btnRight);
    btn.forEach(btnR => btnR.removeAttribute("src"));
    btn.forEach(btnR => btnR.setAttribute("src", inactiveBtnPad));
};
function enableBtns(){
    document.addEventListener("keyup" ,escuchador);
    btn.forEach(pBtn => pBtn.classList.add("btnStd"));
    left.addEventListener("click", btnLeft);
    up.addEventListener("click", btnUp);
    down.addEventListener("click", btnDown);
    right.addEventListener("click", btnRight);
    btn.forEach(btnR => btnR.removeAttribute("src"));
    btn.forEach(btnR => btnR.setAttribute("src", activeBtnPad));
};
function disableBtnsMsgs(){
    btnExitWindow.disabled = true;
    btnStatusWindow.disabled = true;
    btnExitWindow.classList.remove("btnHov");
    btnStatusWindow.classList.remove("btnHov");

};
function enableBtnsMsgs(){
    btnExitWindow.disabled = false;
    btnStatusWindow.disabled = false;
    btnExitWindow.classList.add("btnHov");
    btnStatusWindow.classList.add("btnHov");
};


function printLives(){
    livesMsg.innerHTML = "";
    let arrayLives = [];
    arrayLives = Array(lives).fill(iconLive);

    if(arrayLives.length > 3){
        let iconCavMen = new Image();
        iconCavMen.setAttribute("width", iconSize);
        iconCavMen.setAttribute("height", iconSize);
        iconCavMen.src = arrayLives[0];
        livesMsg.append(iconCavMen);
        livesMsg.innerHTML+= " " + "X" + " " + arrayLives.length;
    }else{
        arrayLives.forEach( item => {
            let iconCavMan = new Image();
            iconCavMan.setAttribute("width", iconSize);
            iconCavMan.setAttribute("height", iconSize);
            iconCavMan.src = item;
            livesMsg.append(iconCavMan);
        });
    }
};
function printLevel(){
    stageMsg.innerHTML = stageName;
    levelMsg.innerHTML = level;
};


function movePlayer() {
    const colisionRoca = arrayObst.find((pos)=> {
        const colisionX = pos["x"] == playerPos["x"];
        const colisionY = pos["y"] == playerPos["y"];
        return colisionX && colisionY;
    })
    if(colisionRoca){
        lives--;
        printLives();
        if(lives == 0){
            restartTimer();
            canvas.classList.add("winOff");
            winMessage.classList.remove("winOff");
            current = "gameO";
            statusWindowFnc();
            // resetValuesStart();
        }else{
            save();
            game.drawImage(mapsInfo[dirAreas]["collitionImg"], playerPos["x"], playerPos["y"], elementSize,elementSize);
            restore();
            // game.fillText(emojis["COLLITION"],playerPos["x"],playerPos["y"]);
            playerPos["x"] = undefined;
            playerPos["y"] = undefined;
            disableBtns();
            setTimeout(() =>{startGame();}, 800);
        }
    }else{
        save();
<<<<<<< HEAD
        // let posYdown = Number((elementSize * 0.8).toFixed(1));
=======
>>>>>>> bf8767f0d9e7435173db2ea6d9c5e1e4c950f76a
        game.drawImage(mapsInfo[dirAreas]["caveManImg"], playerPos["x"], playerPos["y"], elementSize,elementSize);
        restore();
    }
};


function fillObjLevels(){
    objSeconds[level] = timeMsg.innerHTML;
};



function save(){
    if(flip == 1){
        game.save();
        game.translate(playerPos["x"]  + elementSize, playerPos["y"] );
        game.scale(-1, 1);
        game.translate ( -playerPos["x"] , -playerPos["y"]  );
    }
};
function restore(){
    if(flip == 1){
        game.restore();
    }
};


function levelDone(){
    // clearTimer();
    // stageMsg.innerHTML = "Cleared";
    // levelMsg.innerHTML = "Cleared";
    canvas.classList.add("winOff");
    winMessage.classList.remove("winOff");
    disableBtns();
    levelCompleted();
    // defaulValues();
};
function levelCompleted(){
    stCount++;
    dirAreas = stages[stCount];
    if(dirAreas == "EndGame"){
        dirAreas = undefined;
        mapNumber = 0;
        level = 0;
        stCount = 0;
        lives = 3;
        printRecord()
    }else{
        mapNumber = 0;
        current = "levelPass";
        levelPassWin = true;
        levelPassWindow();
        level = 1;
    }
};


function beginningWindowFnc(){
    recordPos = false;
    disableBtns();

    winMessage.innerHTML = "";
    const active = messagesValues.find(opc => opc["id"] == current);

    const bannerBeginningWindow = document.createElement("div");
    bannerBeginningWindow.classList.add("clTop");
    bannerBeginningWindow.append(active["topBanner"]);

    const imgBeginningWindow = document.createElement("div");
    imgBeginningWindow.classList.add("clMiddle");
    imgBeginningWindow.append(active["middleImg"]);

    const hisContainer = document.createElement("div");
    hisContainer.classList.add("hisContainer");
    const hisBeginningWindow = document.createElement("p");
    hisBeginningWindow.classList.add("clhis");
    hisBeginningWindow.innerHTML = active["hisText"];
    hisContainer.append(hisBeginningWindow);

    const msgBeginningCont = document.createElement("div");
    msgBeginningCont.classList.add("msgBeginningCont");
    const msgBeginningWindow = document.createElement("p");
    msgBeginningWindow.classList.add("clbeginning");
    msgBeginningWindow.innerHTML = active["bottomText"];
    msgBeginningCont.append(msgBeginningWindow);

    const btnBeginningWindow = document.createElement("button");
    btnBeginningWindow.classList.add("btnMessStyle", "btnHov");
    btnBeginningWindow.innerHTML = "Start";
    btnBeginningWindow.addEventListener("click", startGame);

    winMessage.append(bannerBeginningWindow, imgBeginningWindow, hisContainer, msgBeginningCont, btnBeginningWindow);
};
function statusWindowFnc(){
    recordPos = false;
    statusWindow = true;
    disableBtns();

    winMessage.innerHTML = "";
    const active = messagesValues.find(opc => opc["id"] == current);
    
    const bannerStatusWindow = document.createElement("div");
    bannerStatusWindow.classList.add("clTop");
    bannerStatusWindow.append(active["topBanner"]);

    const imgStatusWindow = document.createElement("div");
    imgStatusWindow.classList.add("clMiddle");
    imgStatusWindow.append(active["middleImg"]);

    const msgStatusWindow = document.createElement("h1");
    msgStatusWindow.classList.add("clBottom");
    msgStatusWindow.innerHTML = active["bottomText"];

    const btnStatusWindowCont = document.createElement("div");
    btnStatusWindowCont.classList.add("statusClass");
    btnStatusWindowGO_TU.innerHTML = "Play Again";
    btnStatusWindowCont.append(btnExitWindow, btnStatusWindowGO_TU);
    winMessage.append(bannerStatusWindow, imgStatusWindow, msgStatusWindow, btnStatusWindowCont);
};
function levelPassWindow(){
    recordPos = false;
    disableBtns();
    totalTimeLeft = 0;
    winMessage.innerHTML = "";

    active = messagesValues.find(opc => opc["id"] == current);

    const messTitle = document.createElement("div");
    messTitle.classList.add("clTop");
    messTitle.append(active["topBanner"]);

    const timeLeft = document.createElement("div");

    for(let i=1; i<=5; i++){
        const levelVar = document.createElement("p");
        levelVar.innerHTML =` Level ${i} = `;

        const spanVar = document.createElement("span");
        spanVar.classList.add("spanLevelResult");

        spanVar.classList.remove("greenStyle", "yellowStyle",  "redStyle" );

        if(objSeconds[i] >= 20 && objSeconds[i] <= 40){
            spanVar.classList.add("greenStyle");
        }  
        else if(objSeconds[i] >= 10 && objSeconds[i] < 20){
            spanVar.classList.add("yellowStyle");
        }
        else if(objSeconds[i] > 0 && objSeconds[i] < 10){
            spanVar.classList.add("redStyle");
        };
        
        spanVar.innerHTML = Number(objSeconds[i]) ;
        totalTimeLeft += Number(objSeconds[i])

        levelVar.append(spanVar);
        timeLeft.append(levelVar);
    };
    timeLeft.classList.add("contLevelsResult");

    totalTimeParr.classList.add("totalTimeParr");

    const totalTimeCont = document.createElement("div");
    totalTimeCont.classList.add("totalTimContainer");
    totalTimeCont.append(totalTimeParr);

    priceCont = "";
    priceCont = document.createElement("div");
    priceCont.classList.add("priceCont");

    const btnStatusWindowCont = document.createElement("div");
    btnStatusWindowCont.classList.add("statusClass");
    btnStatusWindow.innerHTML = "Next Level";
    btnStatusWindowCont.append(btnExitWindow, btnStatusWindow);
    winMessage.append(messTitle, timeLeft, totalTimeCont, priceCont, btnStatusWindowCont);
    
    disableBtnsMsgs();
    counting();
};


function resetValuesStart(){
    disableBtns();
    dirAreas = undefined;
    mapNumber = 0;
    level = 0;
    stCount = 0;
    lives = 3;
    defaulValues();
};
function defaulValues(){
    beginningWindow = true;
    statusWindow = false;
    levelPassWin = false;
    liveSet = false;
    timeStart = undefined;
    objSeconds = {};
    numIncr = 0;
    // priceImg.removeAttribute("src");
    playerPos["x"] = undefined;
    playerPos["y"] = undefined;
}


function startTimer(){
    document.documentElement.style.setProperty("--colorChange", "#04d112");
    counter+= extraTime;
    extraTime = 0;
    timeMsg.innerHTML = counter;
    timeRep = setInterval(imprTimeTimer, 1000);
};
function imprTimeTimer(){
    counter--;
    if(counter == 0){
        restartTimer();
        timeMsg.innerHTML = 0;
        canvas.classList.add("winOff");
        winMessage.classList.remove("winOff");
        current = "timeUp";
        statusWindowFnc();
        // resetValuesStart();
    }else{
        couterColor();
        timeMsg.innerHTML = counter;
    };
};
function couterColor(){
    if(counter >= 20 && counter <= 40){
        document.documentElement.style.setProperty("--colorChange", "#04d112");
    }  
    else if(counter >= 10 && counter < 20){
        document.documentElement.style.setProperty("--colorChange", "#ffff00");
    }
    else if(counter > 0 && counter < 10){
        document.documentElement.style.setProperty("--colorChange", "#ff0000");
    };
};
function restartTimer(){
    clearInterval(timeRep);
    counter = amountTime;
};
function clearTimer(){
    clearInterval(timeRep);
};


function printcount(){
    if(numIncr < totalTimeLeft){
        numIncr++;
        totalTimeParr.innerHTML = `Total Time Left = ${numIncr}`;
    }else{
        clearInterval(intervIncre);
        if(totalTimeLeft >= 100) {
            priceCont.appendChild(plusLive);
            plusLive.classList.add("cl1up");
            if(!liveSet){
                lives++;
                liveSet = true;            };
            printLives();
        }
        else if(totalTimeLeft > 50 && totalTimeLeft < 100){
            priceCont.appendChild(plusSeconds);
            plusSeconds.classList.add("cl20sec");
            extraTime = 10;
        }
        else{
            priceCont.appendChild(noEnough);
            noEnough.classList.add("clnoEnough");
        };
        enableBtnsMsgs();
    }
}
function counting(){
    intervIncre = setInterval(printcount, 25);
};









// --- function record ---

// if( !(localStorage.getItem("record")) ){
//     localStorage.setItem("record", 0);
// };
// levelMsg.innerHTML = localStorage.getItem("record");

let timePlayer;
// function printTime(){
//     timePlayer = Date.now() - timeStart;
//     timeMsg.innerHTML = timePlayer;
// };
// function printRecord(){
//     timePlayer = recordMsg.value;
//     if(localStorage.getItem("record") == 0 || localStorage.getItem("record") > timePlayer){
//         localStorage.setItem("record", timePlayer);
//         recordMsg.innerHTML = localStorage.getItem("record");
//         current = "winnerGR";
//         messageWindow();
//     }else{
//         current = "winnerGNR";
//         messageWindow();
//     }
// };