/// <reference path = "_reference.ts" />
// global variables
var assets;
var canvas;
var stage;
var stats;
var currentScene;
var scene;
var livesValue;
var scoreValue;
var highScoreValue = 0;
// Game Scenes
var menu;
var play;
var end;
var _SL2;
var _SL3;
var _INSTR;
var _NEXTLEVEL;
var assetData = [
    // Add your Assets here
    { id: "StartButton", src: "../../Assets/images/StartButton.png" },
      { id: "instr", src: "../../Assets/images/instr.png" },
        { id: "Exit", src: "../../Assets/images/Exit.png" },
    { id: "RestartButton", src: "../../Assets/images/RestartButton.png" },
    { id: "BackButton", src: "../../Assets/images/BackButton.png" },
     { id: "NextButton", src: "../../Assets/images/NextButton.png" },
    { id: "ocean", src: "../../Assets/images/ocean.gif" },
    { id: "plane", src: "../../Assets/images/plane.png" },
    { id: "island", src: "../../Assets/images/island.png" },
    { id: "cloud", src: "../../Assets/images/cloud.png" },
    { id: "engine", src: "../../Assets/audio/engine.mp3" },
    { id: "yay", src: "../../Assets/audio/yay.mp3" },
    { id: "thunder", src: "../../Assets/audio/thunder.mp3" }
];
function preload() {
    assets = new createjs.LoadQueue();
    assets.installPlugin(createjs.Sound);
    assets.on("complete", init, this);
    assets.loadManifest(assetData);
}
function init() {
    // create a reference the HTML canvas Element
    canvas = document.getElementById("canvas");
    // create our main display list container
    stage = new createjs.Stage(canvas);
    // Enable mouse events
    stage.enableMouseOver(20);
    // set the framerate to 60 frames per second
    createjs.Ticker.setFPS(config.Game.FPS);
    // create an event listener to count off frames
    createjs.Ticker.on("tick", gameLoop, this);
    // sets up our stats counting workflow
    setupStats();
    // set initial scene
    scene = config.Scene.MENU;
    changeScene();
}
// Main Game Loop function that handles what happens each "tick" or frame
function gameLoop(event) {
    // start collecting stats for this frame
    stats.begin();
    // calling State's update method
    currentScene.update();
    // redraw/refresh stage every frame
    stage.update();
    // stop collecting stats for this frame
    stats.end();
}
// Setup Game Stats
function setupStats() {
    stats = new Stats();
    stats.setMode(0); // shows fps
    stats.domElement.style.position = "absolute";
    stats.domElement.style.left = "0px";
    stats.domElement.style.top = "0px";
    document.body.appendChild(stats.domElement);
}
// Finite State Machine used to change Scenes
function changeScene() {
    // Launch various scenes
    switch (scene) {
        case config.Scene.MENU:
            // show the MENU scene
            stage.removeAllChildren();
            menu = new scenes.Menu();
            currentScene = menu;
            console.log("Starting MENU Scene");
            break;
        case config.Scene.PLAY:
            // show the PLAY scene
            stage.removeAllChildren();
            play = new scenes.Play();
            currentScene = play;
            console.log("Starting PLAY Scene");
            break;
        case config.Scene.END:
            // show the END scene
            stage.removeAllChildren();
            end = new scenes.End();
            currentScene = end;
            console.log("Starting END Scene");
            break;
        case config.Scene.SL2:
            // show the END scene
            stage.removeAllChildren();
            _SL2 = new scenes.SL2();
            currentScene = _SL2;
            console.log("Starting Second Level");
            break;

        case config.Scene.SL3:
            // show the END scene
            stage.removeAllChildren();
            _SL3 = new scenes.SL3();
            currentScene = _SL3;
            console.log("Starting Third Level");
            break;

        case config.Scene.INSTR:
            // show the END scene
            stage.removeAllChildren();
            _INSTR = new scenes.INST();
            currentScene = _INSTR;
            console.log("Starting Instr");
            break;

        case config.Scene.NEXTLEVEL:
            // show the END scene
            stage.removeAllChildren();
            _NEXTLEVEL = new scenes.nextlevel();
            currentScene = _NEXTLEVEL;
            console.log("Starting Instr");
            break;

        case config.Scene.EXIT:
            // show the END scene
            stage.removeAllChildren();
            break;

    }
    console.log(currentScene.numChildren);
}
window.onload = preload;

//# sourceMappingURL=game.js.map
