var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
// SL3 SCENE
var scenes;
(function (scenes) {
    var SL3 = (function (_super) {
        __extends(SL3, _super);
        // CONSTRUCTOR ++++++++++++++++++++++
        function SL3() {
            _super.call(this);
        }
        // PRIVATE METHODS
        /**
         * @method _updateScore
         * @return void
         */
        SL3.prototype._updateScore = function () {
            this._livesLabel.text = "Lives: " + livesValue;
            this._scoreLabel.text = "Score: " + scoreValue;
            this._LEVELSTART.text = "";
        };
        // PUBLIC METHODS +++++++++++++++++++++
        // Start Method
        SL3.prototype.start = function () {
            // Set Cloud Count
            this._cloudCount = 5;
            this._second = 0;
            // Instantiate Cloud array
            this._clouds = new Array();
            // added ocean to the scene
            this._ocean = new objects.Ocean();
            this.addChild(this._ocean);
            // added island to the scene
            this._island = new objects.Island();
            this.addChild(this._island);
            // added player to the scene
            this._player = new objects.Player();
            this.addChild(this._player);

            this._Level = new objects.Label("Level: " + 3, "40px Consolas", "#ffff00", 200, 10, false);
            this.addChild(this._Level);



            this._LEVELSTART = new objects.Label("", "40px Consolas", "#ffff00", config.Screen.CENTER_X-90, config.Screen.CENTER_Y - 80, false);
            this.addChild(this._LEVELSTART);

            //added clouds to the scene
            for (var cloud = 0; cloud < this._cloudCount; cloud++) {
                this._clouds[cloud] = new objects.Cloud();
                this.addChild(this._clouds[cloud]);
            }
            //added LivesLabel to the scene
            this._livesLabel = new objects.Label("Lives: " + livesValue, "40px Consolas", "#ffff00", 10, 10, false);
            this.addChild(this._livesLabel);
            //added LivesLabel to the scene
            this._scoreLabel = new objects.Label("Score: " + scoreValue, "40px Consolas", "#ffff00", 390, 10, false);
            this.addChild(this._scoreLabel);
            // added collision manager to the scene
            this._collision = new managers.Collision(this._player);
            // add this scene to the global stage container
            stage.addChild(this);
        };
        // SL3 Scene updates here
        SL3.prototype.update = function () {

         

            var _this = this;
            this._ocean.update();
            this._island.update();
            this._player.update();
            this._clouds.forEach(function (cloud) {

                cloud.update();
                _this._collision.check(cloud);
            });
            this._collision.check(this._island);
            this._updateScore();
        };
        return SL3;
    }(objects.Scene));
    scenes.SL3 = SL3;
})(scenes || (scenes = {}));

//# sourceMappingURL=SL3.js.map
