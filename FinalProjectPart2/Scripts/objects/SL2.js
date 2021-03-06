var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
// SL2 SCENE
var scenes;
(function (scenes) {
    var SL2 = (function (_super) {
        __extends(SL2, _super);
        // CONSTRUCTOR ++++++++++++++++++++++
        function SL2() {
            _super.call(this);
        }
        // PRIVATE METHODS
        /**
         * @method _updateScore
         * @return void
         */
        SL2.prototype._updateScore = function () {
            this._livesLabel.text = "Lives: " + livesValue;
            this._scoreLabel.text = "Score: " + scoreValue;
        };
        // PUBLIC METHODS +++++++++++++++++++++
        // Start Method
        SL2.prototype.start = function () {
            // Set Cloud Count
            this._cloudCount = 3;
            //livesValue = 5;
            scoreValue = SCORE.SCORE_RESULT;
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
        // SL2 Scene updates here
        SL2.prototype.update = function () {
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
        return SL2;
    }(objects.Scene));
    scenes.SL2 = SL2;
})(scenes || (scenes = {}));

//# sourceMappingURL=SL2.js.map
