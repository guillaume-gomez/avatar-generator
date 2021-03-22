/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/avatar.ts":
/*!***********************!*\
  !*** ./src/avatar.ts ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "createInvader": () => (/* binding */ createInvader)
/* harmony export */ });
var BLACK = { r: 0, g: 0, b: 0 };
function randomColor() {
    return { r: Math.random() * 255, g: Math.random() * 255, b: Math.random() * 255 };
}
function randomInArrayColor(colors) {
    return colors[Math.floor(Math.random() * colors.length)];
}
function createSquare(border, context, color) {
    context.fillStyle = "rgb(" + color.r + ", " + color.g + ", " + color.b + ")";
    context.fillRect(border.x, border.y, border.widthPixel, border.heightPixel);
}
function generateRowColors(nbPixelWidth) {
    var bitsColor = [];
    var randomColors = [
        randomColor(),
        randomColor(),
        randomColor(),
        BLACK,
        BLACK,
        BLACK
    ];
    for (var i = 0; i < Math.floor(nbPixelWidth / 2); i++) {
        bitsColor.push(randomInArrayColor(randomColors));
    }
    bitsColor.slice(0).reverse().forEach(function (bit) { return bitsColor.push(bit); });
    // add one more bits for odds width
    if (nbPixelWidth % 2 !== 0) {
        bitsColor.splice(Math.floor(nbPixelWidth / 2) + 1, 0, randomInArrayColor(randomColors));
    }
    return bitsColor;
}
function createInvader(border, context, nbPixelWidth, nbPixelHeight) {
    console.log(nbPixelWidth);
    console.log(nbPixelHeight);
    console.log(border);
    var xOffset = border.x, yOffset = border.y, widthPixel = border.widthPixel, heightPixel = border.heightPixel;
    for (var y = 0; y < nbPixelHeight; y += 1) {
        var bitsColor = generateRowColors(nbPixelWidth);
        for (var x = 0; x < bitsColor.length; x += 1) {
            createSquare({ x: xOffset + (x * widthPixel),
                y: yOffset + (y * heightPixel), widthPixel: widthPixel,
                heightPixel: heightPixel
            }, context, bitsColor[x]);
        }
    }
}


/***/ }),

/***/ "./src/canvas.ts":
/*!***********************!*\
  !*** ./src/canvas.ts ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "getCanvas": () => (/* binding */ getCanvas),
/* harmony export */   "setCanvasSize": () => (/* binding */ setCanvasSize),
/* harmony export */   "draw": () => (/* binding */ draw),
/* harmony export */   "changeBackgroundCanvas": () => (/* binding */ changeBackgroundCanvas)
/* harmony export */ });
function getCanvas(canvasId) {
    if (canvasId === void 0) { canvasId = 'canvas'; }
    return document.getElementById(canvasId);
}
function setCanvasSize(width, height) {
    var canvas = getCanvas();
    canvas.width = width;
    canvas.height = height;
}
function draw(callback) {
    var canvas = getCanvas();
    if (canvas.getContext) {
        var ctx = canvas.getContext('2d');
        callback(ctx);
    }
}
function changeBackgroundCanvas(random) {
    if (random === void 0) { random = false; }
    var canvas = getCanvas();
    if (canvas.getContext) {
        var ctx = canvas.getContext('2d');
        var color = random ?
            "rgba(\n         " + Math.random() * 255 + ",\n         " + Math.random() * 255 + ",\n         " + Math.random() * 255 + ",\n         1)" :
            'rgba(212,255,156,1)';
        ctx.fillStyle = color;
        ctx.fillRect(0, 0, window.innerWidth, window.innerHeight);
    }
}


/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!**********************!*\
  !*** ./src/index.ts ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _canvas__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./canvas */ "./src/canvas.ts");
/* harmony import */ var _avatar__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./avatar */ "./src/avatar.ts");


function load() {
    var canvas = (0,_canvas__WEBPACK_IMPORTED_MODULE_0__.getCanvas)();
    if (canvas.getContext) {
        var nbPixelWidth = nbPixelX || 8;
        var nbPixelHeight = nbPixelY || 8;
        var widthPixel = Math.floor(canvas.width / nbPixelWidth);
        var offsetWidth = (canvas.width % nbPixelWidth);
        var heightPixel = Math.floor(canvas.height / nbPixelHeight);
        var offsetHeight = (canvas.height % nbPixelHeight);
        var context = canvas.getContext('2d');
        // refresh
        context.clearRect(0, 0, canvas.width, canvas.height);
        (0,_avatar__WEBPACK_IMPORTED_MODULE_1__.createInvader)({ x: offsetWidth / 2, y: offsetHeight / 2, widthPixel: widthPixel, heightPixel: heightPixel }, context, nbPixelWidth, nbPixelHeight);
    }
}
function changeCanvasSlider(size, e) {
    var newValue = e.target.value;
    if (size === "width") {
        widthCanvas = newValue;
    }
    else {
        heightCanvas = newValue;
    }
    (0,_canvas__WEBPACK_IMPORTED_MODULE_0__.setCanvasSize)(widthCanvas, newValue);
}
function changePixelSlider(size, e) {
    var newValue = e.target.value;
    if (size === "x") {
        nbPixelX = newValue;
    }
    else {
        nbPixelY = newValue;
    }
}
// GLOBALS VARIABLES
var widthCanvas = 0;
var heightCanvas = 0;
var nbPixelX = 0;
var nbPixelY = 0;
window.onload = function () {
    load();
    // connect button + inputs
    var button = document.getElementById("reset-button");
    if (button) {
        button.addEventListener("click", load);
    }
    var inputWidth = document.getElementById("widthCanvas");
    if (inputWidth) {
        inputWidth.addEventListener("change", function (e) { changeCanvasSlider("width", e); load(); });
    }
    var inputHeight = document.getElementById("heightCanvas");
    if (inputHeight) {
        inputHeight.addEventListener("change", function (e) { changeCanvasSlider("height", e); load(); });
    }
    var inputPixelX = document.getElementById("nbPixelX");
    if (inputPixelX) {
        inputPixelX.addEventListener("change", function (e) { changePixelSlider("x", e); load(); });
    }
    var inputPixelY = document.getElementById("nbPixelY");
    if (inputPixelY) {
        inputPixelY.addEventListener("change", function (e) { changePixelSlider("y", e); load(); });
    }
};

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9hdmF0YXItZ2VuZXJhdG9yLy4vc3JjL2F2YXRhci50cyIsIndlYnBhY2s6Ly9hdmF0YXItZ2VuZXJhdG9yLy4vc3JjL2NhbnZhcy50cyIsIndlYnBhY2s6Ly9hdmF0YXItZ2VuZXJhdG9yL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL2F2YXRhci1nZW5lcmF0b3Ivd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL2F2YXRhci1nZW5lcmF0b3Ivd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly9hdmF0YXItZ2VuZXJhdG9yL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vYXZhdGFyLWdlbmVyYXRvci8uL3NyYy9pbmRleC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7OztBQWNBLElBQU0sS0FBSyxHQUFvQixFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFDLENBQUMsRUFBRSxDQUFDLEVBQUMsQ0FBQyxFQUFFLENBQUM7QUFFbEQsU0FBUyxXQUFXO0lBQ2xCLE9BQU8sRUFBRSxDQUFDLEVBQUUsSUFBSSxDQUFDLE1BQU0sRUFBRSxHQUFHLEdBQUcsRUFBRSxDQUFDLEVBQUUsSUFBSSxDQUFDLE1BQU0sRUFBRSxHQUFHLEdBQUcsRUFBRSxDQUFDLEVBQUUsSUFBSSxDQUFDLE1BQU0sRUFBRSxHQUFHLEdBQUcsRUFBRSxDQUFDO0FBQ3BGLENBQUM7QUFFRCxTQUFTLGtCQUFrQixDQUFDLE1BQXdCO0lBQ2xELE9BQU8sTUFBTSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLE1BQU0sRUFBRSxHQUFHLE1BQU0sQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDO0FBQzNELENBQUM7QUFHRCxTQUFTLFlBQVksQ0FBQyxNQUF1QixFQUFFLE9BQWlDLEVBQUUs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QUFFLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxFQUFFLEVBQUMsQ0FBQyxDQUFDLENBQUM7S0FDMUY7SUFDRCxJQUFNLFdBQVcsR0FBRyxRQUFRLENBQUMsY0FBYyxDQUFDLGNBQWMsQ0FBQyxDQUFDO0lBQzVELElBQUcsV0FBVyxFQUFFO1FBQ2QsV0FBVyxDQUFDLGdCQUFnQixDQUFDLFFBQVEsRUFBRSxVQUFDLENBQUMsSUFBTyxrQkFBa0IsQ0FBQyxRQUFRLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLEVBQUUsRUFBQyxDQUFDLENBQUMsQ0FBQztLQUM1RjtJQUVELElBQU0sV0FBVyxHQUFHLFFBQVEsQ0FBQyxjQUFjLENBQUMsVUFBVSxDQUFDLENBQUM7SUFDeEQsSUFBRyxXQUFXLEVBQUU7UUFDZCxXQUFXLENBQUMsZ0JBQWdCLENBQUMsUUFBUSxFQUFFLFVBQUMsQ0FBQyxJQUFPLGlCQUFpQixDQUFDLEdBQUcsRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksRUFBRSxFQUFDLENBQUMsQ0FBQyxDQUFDO0tBQ3RGO0lBQ0QsSUFBTSxXQUFXLEdBQUcsUUFBUSxDQUFDLGNBQWMsQ0FBQyxVQUFVLENBQUMsQ0FBQztJQUN4RCxJQUFHLFdBQVcsRUFBRTtRQUNkLFdBQVcsQ0FBQyxnQkFBZ0IsQ0FBQyxRQUFRLEVBQUUsVUFBQyxDQUFDLElBQU8saUJBQWlCLENBQUMsR0FBRyxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxFQUFFLEVBQUMsQ0FBQyxDQUFDLENBQUM7S0FDdEY7QUFDSCxDQUFDLENBQUMiLCJmaWxlIjoiYnVuZGxlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW50ZXJmYWNlIGJvcmRlckludGVyZmFjZSB7XG4gIHg6IG51bWJlcjtcbiAgeTogbnVtYmVyO1xuICB3aWR0aFBpeGVsOiBudW1iZXI7XG4gIGhlaWdodFBpeGVsOiBudW1iZXI7XG59XG5cbmludGVyZmFjZSBjb2xvckludGVyZmFjZSB7XG4gIHI6IG51bWJlcjtcbiAgZzogbnVtYmVyO1xuICBiOiBudW1iZXI7XG59XG5cblxuY29uc3QgQkxBQ0sgOiBjb2xvckludGVyZmFjZSA9IHsgcjogMCwgZzowLCBiOjAgfTtcblxuZnVuY3Rpb24gcmFuZG9tQ29sb3IoKSA6IGNvbG9ySW50ZXJmYWNlIHtcbiAgcmV0dXJuIHsgcjogTWF0aC5yYW5kb20oKSAqIDI1NSwgZzogTWF0aC5yYW5kb20oKSAqIDI1NSwgYjogTWF0aC5yYW5kb20oKSAqIDI1NSB9O1xufVxuXG5mdW5jdGlvbiByYW5kb21JbkFycmF5Q29sb3IoY29sb3JzOiBjb2xvckludGVyZmFjZVtdKSA6IGNvbG9ySW50ZXJmYWNlIHtcbiAgcmV0dXJuIGNvbG9yc1tNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiBjb2xvcnMubGVuZ3RoKV07XG59IFxuXG5cbmZ1bmN0aW9uIGNyZWF0ZVNxdWFyZShib3JkZXI6IGJvcmRlckludGVyZmFjZSwgY29udGV4dDogQ2FudmFzUmVuZGVyaW5nQ29udGV4dDJELCBjb2xvcjogY29sb3JJbnRlcmZhY2UpIDogdm9pZCB7XG4gIGNvbnRleHQuZmlsbFN0eWxlID0gYHJnYigke2NvbG9yLnJ9LCAke2NvbG9yLmd9LCAke2NvbG9yLmJ9KWA7XG4gIGNvbnRleHQuZmlsbFJlY3QoYm9yZGVyLngsIGJvcmRlci55LCBib3JkZXIud2lkdGhQaXhlbCwgYm9yZGVyLmhlaWdodFBpeGVsKTtcbn1cblxuXG5mdW5jdGlvbiBnZW5lcmF0ZVJvd0NvbG9ycyhuYlBpeGVsV2lkdGg6IG51bWJlcikgOiBjb2xvckludGVyZmFjZVtdIHtcbiAgbGV0IGJpdHNDb2xvciA6IGNvbG9ySW50ZXJmYWNlW10gPSBbXTtcbiAgY29uc3QgcmFuZG9tQ29sb3JzIDogY29sb3JJbnRlcmZhY2VbXSA9W1xuICAgIHJhbmRvbUNvbG9yKCksXG4gICAgcmFuZG9tQ29sb3IoKSxcbiAgICByYW5kb21Db2xvcigpLFxuICAgIEJMQUNLLFxuICAgIEJMQUNLLFxuICAgIEJMQUNLXG4gIF07XG5cbiAgZm9yKGxldCBpID0gMDsgaSA8IE1hdGguZmxvb3IobmJQaXhlbFdpZHRoLzIpOyBpKyspIHtcbiAgICBiaXRzQ29sb3IucHVzaChyYW5kb21JbkFycmF5Q29sb3IocmFuZG9tQ29sb3JzKSk7XG4gIH1cblxuICBiaXRzQ29sb3Iuc2xpY2UoMCkucmV2ZXJzZSgpLmZvckVhY2goKGJpdCkgPT4gYml0c0NvbG9yLnB1c2goYml0KSk7XG5cbiAgLy8gYWRkIG9uZSBtb3JlIGJpdHMgZm9yIG9kZHMgd2lkdGhcbiAgaWYobmJQaXhlbFdpZHRoICUgMiAhPT0gMCkge1xuICAgIGJpdHNDb2xvci5zcGxpY2UoTWF0aC5mbG9vcihuYlBpeGVsV2lkdGgvMikgKyAxLCAwLCByYW5kb21JbkFycmF5Q29sb3IocmFuZG9tQ29sb3JzKSk7XG4gIH1cblxuICByZXR1cm4gYml0c0NvbG9yO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gY3JlYXRlSW52YWRlcihib3JkZXIgOiBib3JkZXJJbnRlcmZhY2UsIGNvbnRleHQ6IENhbnZhc1JlbmRlcmluZ0NvbnRleHQyRCwgbmJQaXhlbFdpZHRoOiBudW1iZXIsIG5iUGl4ZWxIZWlnaHQ6IG51bWJlcikgOiB2b2lkIHtcbiAgY29uc29sZS5sb2cobmJQaXhlbFdpZHRoKVxuICBjb25zb2xlLmxvZyhuYlBpeGVsSGVpZ2h0KVxuICBjb25zb2xlLmxvZyhib3JkZXIpXG4gIGNvbnN0IHsgeDogeE9mZnNldCAsIHk6IHlPZmZzZXQgLCB3aWR0aFBpeGVsLCBoZWlnaHRQaXhlbCB9ID0gYm9yZGVyO1xuICBmb3IobGV0IHkgOiBudW1iZXIgPSAwOyB5IDwgbmJQaXhlbEhlaWdodDsgeSArPSAxKSB7XG4gICAgY29uc3QgYml0c0NvbG9yID0gZ2VuZXJhdGVSb3dDb2xvcnMobmJQaXhlbFdpZHRoKTtcbiAgICBmb3IobGV0IHg6IG51bWJlciA9IDA7IHggPCBiaXRzQ29sb3IubGVuZ3RoOyB4ICs9IDEpIHtcbiAgICAgIGNyZWF0ZVNxdWFyZShcbiAgICAgICAgeyB4OiB4T2Zmc2V0ICsgKHggKiB3aWR0aFBpeGVsKSxcbiAgICAgICAgICB5OiB5T2Zmc2V0ICsgKHkgKiBoZWlnaHRQaXhlbCksXG4gICAgICAgICAgd2lkdGhQaXhlbCxcbiAgICAgICAgICBoZWlnaHRQaXhlbFxuICAgICAgICAgfSxcbiAgICAgICAgIGNvbnRleHQsXG4gICAgICAgICBiaXRzQ29sb3JbeF1cbiAgICAgICk7XG4gICAgfVxuICB9XG59IiwiXG5leHBvcnQgZnVuY3Rpb24gZ2V0Q2FudmFzKGNhbnZhc0lkOiBzdHJpbmcgPSAnY2FudmFzJykgOiBIVE1MQ2FudmFzRWxlbWVudCB8IG51bGwge1xuICByZXR1cm4gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoY2FudmFzSWQpIGFzIEhUTUxDYW52YXNFbGVtZW50O1xufVxuXG5leHBvcnQgZnVuY3Rpb24gc2V0Q2FudmFzU2l6ZSh3aWR0aDogbnVtYmVyLCBoZWlnaHQ6IG51bWJlcikgOiB2b2lkICB7XG4gIGNvbnN0IGNhbnZhcyA9IGdldENhbnZhcygpO1xuICBjYW52YXMud2lkdGggPSB3aWR0aDtcbiAgY2FudmFzLmhlaWdodCA9IGhlaWdodDtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGRyYXcoY2FsbGJhY2s6IChjdHg6IENhbnZhc1JlbmRlcmluZ0NvbnRleHQyRCkgPT4gdm9pZCkgOiB2b2lkIHtcbiAgY29uc3QgY2FudmFzID0gZ2V0Q2FudmFzKCk7XG4gIGlmIChjYW52YXMuZ2V0Q29udGV4dCkge1xuICAgIGNvbnN0IGN0eCA9IGNhbnZhcy5nZXRDb250ZXh0KCcyZCcpO1xuICAgIGNhbGxiYWNrKGN0eCk7XG4gIH1cbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGNoYW5nZUJhY2tncm91bmRDYW52YXMocmFuZG9tIDogYm9vbGVhbiA9IGZhbHNlKSA6IHZvaWQge1xuICBjb25zdCBjYW52YXMgPSBnZXRDYW52YXMoKTtcbiAgaWYoY2FudmFzLmdldENvbnRleHQpIHtcbiAgICBjb25zdCBjdHggPSBjYW52YXMuZ2V0Q29udGV4dCgnMmQnKTtcbiAgICBjb25zdCBjb2xvciA9IHJhbmRvbSA/IFxuICAgICAgYHJnYmEoXG4gICAgICAgICAke01hdGgucmFuZG9tKCkgKiAyNTV9LFxuICAgICAgICAgJHtNYXRoLnJhbmRvbSgpICogMjU1fSxcbiAgICAgICAgICR7TWF0aC5yYW5kb20oKSAqIDI1NX0sXG4gICAgICAgICAxKWA6XG4gICAgICAncmdiYSgyMTIsMjU1LDE1NiwxKSc7XG4gICAgY3R4LmZpbGxTdHlsZSA9IGNvbG9yO1xuICAgIGN0eC5maWxsUmVjdCgwLDAsd2luZG93LmlubmVyV2lkdGgsd2luZG93LmlubmVySGVpZ2h0KTtcbiAgfVxufSIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0Ly8gbm8gbW9kdWxlLmlkIG5lZWRlZFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiaW1wb3J0IHsgc2V0Q2FudmFzU2l6ZSwgY2hhbmdlQmFja2dyb3VuZENhbnZhcywgZ2V0Q2FudmFzLCBkcmF3IH0gZnJvbSBcIi4vY2FudmFzXCI7XG5pbXBvcnQgeyBjcmVhdGVJbnZhZGVyIH0gZnJvbSBcIi4vYXZhdGFyXCI7XG5cbmZ1bmN0aW9uIGxvYWQoKSB7XG4gY29uc3QgY2FudmFzID0gZ2V0Q2FudmFzKCk7XG4gIGlmIChjYW52YXMuZ2V0Q29udGV4dCkge1xuICAgIGNvbnN0IG5iUGl4ZWxXaWR0aCA9IG5iUGl4ZWxYIHx8IDg7XG4gICAgY29uc3QgbmJQaXhlbEhlaWdodCA9IG5iUGl4ZWxZIHx8IDg7XG4gICAgY29uc3Qgd2lkdGhQaXhlbCA9IE1hdGguZmxvb3IoY2FudmFzLndpZHRoIC8gbmJQaXhlbFdpZHRoKTtcbiAgICBjb25zdCBvZmZzZXRXaWR0aCA9IChjYW52YXMud2lkdGggJSBuYlBpeGVsV2lkdGgpO1xuICAgIFxuICAgIGNvbnN0IGhlaWdodFBpeGVsID0gTWF0aC5mbG9vcihjYW52YXMuaGVpZ2h0IC8gbmJQaXhlbEhlaWdodCk7XG4gICAgY29uc3Qgb2Zmc2V0SGVpZ2h0ID0gKGNhbnZhcy5oZWlnaHQgJSBuYlBpeGVsSGVpZ2h0KTtcblxuICAgIGNvbnN0IGNvbnRleHQgPSBjYW52YXMuZ2V0Q29udGV4dCgnMmQnKTtcbiAgICAvLyByZWZyZXNoXG4gICAgY29udGV4dC5jbGVhclJlY3QoMCwgMCwgY2FudmFzLndpZHRoLCBjYW52YXMuaGVpZ2h0KTtcbiAgICBcbiAgICBjcmVhdGVJbnZhZGVyKHt4OiBvZmZzZXRXaWR0aCAvMiAsIHk6IG9mZnNldEhlaWdodCAvIDIsIHdpZHRoUGl4ZWwsIGhlaWdodFBpeGVsIH0sIGNvbnRleHQsIG5iUGl4ZWxXaWR0aCwgbmJQaXhlbEhlaWdodCk7XG4gIH1cbn1cblxuZnVuY3Rpb24gY2hhbmdlQ2FudmFzU2xpZGVyKHNpemU6IFwid2lkdGhcInwgXCJoZWlnaHRcIiwgZTogRXZlbnQpIDogdm9pZCB7XG4gIGNvbnN0IG5ld1ZhbHVlIDogbnVtYmVyID0gKGUgYXMgYW55KS50YXJnZXQudmFsdWU7XG4gIGlmKHNpemUgPT09IFwid2lkdGhcIikge1xuICAgIHdpZHRoQ2FudmFzID0gbmV3VmFsdWU7XG4gIH0gZWxzZSB7XG4gICAgaGVpZ2h0Q2FudmFzID0gbmV3VmFsdWU7XG4gIH1cbiAgc2V0Q2FudmFzU2l6ZSh3aWR0aENhbnZhcywgbmV3VmFsdWUpO1xufVxuXG5mdW5jdGlvbiBjaGFuZ2VQaXhlbFNsaWRlcihzaXplOiBcInhcInwgXCJ5XCIsIGU6IEV2ZW50KSA6IHZvaWQge1xuICBjb25zdCBuZXdWYWx1ZSA6IG51bWJlciA9IChlIGFzIGFueSkudGFyZ2V0LnZhbHVlO1xuICBpZihzaXplID09PSBcInhcIikge1xuICAgIG5iUGl4ZWxYID0gbmV3VmFsdWU7XG4gIH0gZWxzZSB7XG4gICAgbmJQaXhlbFkgPSBuZXdWYWx1ZTtcbiAgfVxufVxuXG4vLyBHTE9CQUxTIFZBUklBQkxFU1xubGV0IHdpZHRoQ2FudmFzID0gMDtcbmxldCBoZWlnaHRDYW52YXMgPSAwO1xubGV0IG5iUGl4ZWxYID0gMDtcbmxldCBuYlBpeGVsWSA9IDA7XG53aW5kb3cub25sb2FkID0gZnVuY3Rpb24oKSB7XG4gIGxvYWQoKVxuICAvLyBjb25uZWN0IGJ1dHRvbiArIGlucHV0c1xuICBjb25zdCBidXR0b24gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInJlc2V0LWJ1dHRvblwiKTtcbiAgIGlmKGJ1dHRvbikge1xuICAgICBidXR0b24uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGxvYWQpO1xuICB9XG5cbiAgY29uc3QgaW5wdXRXaWR0aCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwid2lkdGhDYW52YXNcIik7XG4gIGlmKGlucHV0V2lkdGgpIHtcbiAgICBpbnB1dFdpZHRoLmFkZEV2ZW50TGlzdGVuZXIoXCJjaGFuZ2VcIiwgKGUpID0+IHsgY2hhbmdlQ2FudmFzU2xpZGVyKFwid2lkdGhcIiwgZSk7IGxvYWQoKSB9KTtcbiAgfVxuICBjb25zdCBpbnB1dEhlaWdodCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiaGVpZ2h0Q2FudmFzXCIpO1xuICBpZihpbnB1dEhlaWdodCkge1xuICAgIGlucHV0SGVpZ2h0LmFkZEV2ZW50TGlzdGVuZXIoXCJjaGFuZ2VcIiwgKGUpID0+IHsgY2hhbmdlQ2FudmFzU2xpZGVyKFwiaGVpZ2h0XCIsIGUpOyBsb2FkKCkgfSk7XG4gIH1cblxuICBjb25zdCBpbnB1dFBpeGVsWCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwibmJQaXhlbFhcIik7XG4gIGlmKGlucHV0UGl4ZWxYKSB7XG4gICAgaW5wdXRQaXhlbFguYWRkRXZlbnRMaXN0ZW5lcihcImNoYW5nZVwiLCAoZSkgPT4geyBjaGFuZ2VQaXhlbFNsaWRlcihcInhcIiwgZSk7IGxvYWQoKSB9KTtcbiAgfVxuICBjb25zdCBpbnB1dFBpeGVsWSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwibmJQaXhlbFlcIik7XG4gIGlmKGlucHV0UGl4ZWxZKSB7XG4gICAgaW5wdXRQaXhlbFkuYWRkRXZlbnRMaXN0ZW5lcihcImNoYW5nZVwiLCAoZSkgPT4geyBjaGFuZ2VQaXhlbFNsaWRlcihcInlcIiwgZSk7IGxvYWQoKSB9KTtcbiAgfVxufTtcblxuIl0sInNvdXJjZVJvb3QiOiIifQ==