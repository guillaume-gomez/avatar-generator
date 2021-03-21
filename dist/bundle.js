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
    return bitsColor;
}
function createInvader(border, context, nbPixelWidth, nbPixelHeight) {
    var xOffset = border.x, yOffset = border.y, widthPixel = border.widthPixel, heightPixel = border.heightPixel;
    for (var y = 0; y < nbPixelWidth; y += 1) {
        var bitsColor = generateRowColors(nbPixelWidth);
        for (var x = 0; x < nbPixelHeight; x += 1) {
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
        var nbPixelWidth = 8;
        var nbPixelHeight = 8;
        var widthPixel = canvas.width / nbPixelWidth;
        var heightPixel = canvas.height / nbPixelWidth;
        var context = canvas.getContext('2d');
        (0,_avatar__WEBPACK_IMPORTED_MODULE_1__.createInvader)({ x: 0, y: 0, widthPixel: widthPixel, heightPixel: heightPixel }, context, nbPixelWidth, nbPixelHeight);
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
// GLOBALS VARIABLES
var widthCanvas = 0;
var heightCanvas = 0;
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
};

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9hdmF0YXItZ2VuZXJhdG9yLy4vc3JjL2F2YXRhci50cyIsIndlYnBhY2s6Ly9hdmF0YXItZ2VuZXJhdG9yLy4vc3JjL2NhbnZhcy50cyIsIndlYnBhY2s6Ly9hdmF0YXItZ2VuZXJhdG9yL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL2F2YXRhci1nZW5lcmF0b3Ivd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL2F2YXRhci1nZW5lcmF0b3Ivd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly9hdmF0YXItZ2VuZXJhdG9yL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vYXZhdGFyLWdlbmVyYXRvci8uL3NyYy9pbmRleC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7OztBQWNBLElBQU0sS0FBSyxHQUFvQixFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFDLENBQUMsRUFBRSxDQUFDLEVBQUMsQ0FBQyxFQUFFLENBQUM7QUFFbEQsU0FBUyxXQUFXO0lBQ2xCLE9BQU8sRUFBRSxDQUFDLEVBQUUsSUFBSSxDQUFDLE1BQU0sRUFBRSxHQUFHLEdBQUcsRUFBRSxDQUFDLEVBQUUsSUFBSSxDQUFDLE1BQU0sRUFBRSxHQUFHLEdBQUcsRUFBRSxDQUFDLEVBQUUsSUFBSSxDQUFDLE1BQU0sRUFBRSxHQUFHLEdBQUcsRUFBRSxDQUFDO0FBQ3BGLENBQUM7QUFFRCxTQUFTLGtCQUFrQixDQUFDLE1BQXdCO0lBQ2xELE9BQU8sTUFBTSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLE1BQU0sRUFBRSxHQUFHLE1BQU0sQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDO0FBQzNELENBQUM7QUFHRCxTQUFTLFlBQVksQ0FBQyxNQUF1QixFQUFFLE9BQWlDLEVBQUUs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QyxDQUFDLElBQU8sa0JBQWtCLENBQUMsT0FBTyxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxFQUFFLEVBQUMsQ0FBQyxDQUFDLENBQUM7S0FDMUY7SUFDRCxJQUFNLFdBQVcsR0FBRyxRQUFRLENBQUMsY0FBYyxDQUFDLGNBQWMsQ0FBQyxDQUFDO0lBQzVELElBQUcsV0FBVyxFQUFFO1FBQ2QsV0FBVyxDQUFDLGdCQUFnQixDQUFDLFFBQVEsRUFBRSxVQUFDLENBQUMsSUFBTyxrQkFBa0IsQ0FBQyxRQUFRLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLEVBQUUsRUFBQyxDQUFDLENBQUMsQ0FBQztLQUM1RjtBQUNILENBQUMsQ0FBQyIsImZpbGUiOiJidW5kbGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbnRlcmZhY2UgYm9yZGVySW50ZXJmYWNlIHtcbiAgeDogbnVtYmVyO1xuICB5OiBudW1iZXI7XG4gIHdpZHRoUGl4ZWw6IG51bWJlcjtcbiAgaGVpZ2h0UGl4ZWw6IG51bWJlcjtcbn1cblxuaW50ZXJmYWNlIGNvbG9ySW50ZXJmYWNlIHtcbiAgcjogbnVtYmVyO1xuICBnOiBudW1iZXI7XG4gIGI6IG51bWJlcjtcbn1cblxuXG5jb25zdCBCTEFDSyA6IGNvbG9ySW50ZXJmYWNlID0geyByOiAwLCBnOjAsIGI6MCB9O1xuXG5mdW5jdGlvbiByYW5kb21Db2xvcigpIDogY29sb3JJbnRlcmZhY2Uge1xuICByZXR1cm4geyByOiBNYXRoLnJhbmRvbSgpICogMjU1LCBnOiBNYXRoLnJhbmRvbSgpICogMjU1LCBiOiBNYXRoLnJhbmRvbSgpICogMjU1IH07XG59XG5cbmZ1bmN0aW9uIHJhbmRvbUluQXJyYXlDb2xvcihjb2xvcnM6IGNvbG9ySW50ZXJmYWNlW10pIDogY29sb3JJbnRlcmZhY2Uge1xuICByZXR1cm4gY29sb3JzW01hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIGNvbG9ycy5sZW5ndGgpXTtcbn0gXG5cblxuZnVuY3Rpb24gY3JlYXRlU3F1YXJlKGJvcmRlcjogYm9yZGVySW50ZXJmYWNlLCBjb250ZXh0OiBDYW52YXNSZW5kZXJpbmdDb250ZXh0MkQsIGNvbG9yOiBjb2xvckludGVyZmFjZSkgOiB2b2lkIHtcbiAgY29udGV4dC5maWxsU3R5bGUgPSBgcmdiKCR7Y29sb3Iucn0sICR7Y29sb3IuZ30sICR7Y29sb3IuYn0pYDtcbiAgY29udGV4dC5maWxsUmVjdChib3JkZXIueCwgYm9yZGVyLnksIGJvcmRlci53aWR0aFBpeGVsLCBib3JkZXIuaGVpZ2h0UGl4ZWwpO1xufVxuXG5cbmZ1bmN0aW9uIGdlbmVyYXRlUm93Q29sb3JzKG5iUGl4ZWxXaWR0aDogbnVtYmVyKSA6IGNvbG9ySW50ZXJmYWNlW10ge1xuICBsZXQgYml0c0NvbG9yIDogY29sb3JJbnRlcmZhY2VbXSA9IFtdO1xuICBjb25zdCByYW5kb21Db2xvcnMgOiBjb2xvckludGVyZmFjZVtdID1bXG4gICAgcmFuZG9tQ29sb3IoKSxcbiAgICByYW5kb21Db2xvcigpLFxuICAgIHJhbmRvbUNvbG9yKCksXG4gICAgQkxBQ0ssXG4gICAgQkxBQ0ssXG4gICAgQkxBQ0tcbiAgXTtcblxuICBmb3IobGV0IGkgPSAwOyBpIDwgTWF0aC5mbG9vcihuYlBpeGVsV2lkdGgvMik7IGkrKykge1xuICAgIGJpdHNDb2xvci5wdXNoKHJhbmRvbUluQXJyYXlDb2xvcihyYW5kb21Db2xvcnMpKTtcbiAgfVxuICBiaXRzQ29sb3Iuc2xpY2UoMCkucmV2ZXJzZSgpLmZvckVhY2goKGJpdCkgPT4gYml0c0NvbG9yLnB1c2goYml0KSk7XG4gIHJldHVybiBiaXRzQ29sb3I7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBjcmVhdGVJbnZhZGVyKGJvcmRlciA6IGJvcmRlckludGVyZmFjZSwgY29udGV4dDogQ2FudmFzUmVuZGVyaW5nQ29udGV4dDJELCBuYlBpeGVsV2lkdGg6IG51bWJlciwgbmJQaXhlbEhlaWdodDogbnVtYmVyKSA6IHZvaWQge1xuICBjb25zdCB7IHg6IHhPZmZzZXQgLCB5OiB5T2Zmc2V0ICwgd2lkdGhQaXhlbCwgaGVpZ2h0UGl4ZWwgfSA9IGJvcmRlcjtcbiAgZm9yKGxldCB5IDogbnVtYmVyID0gMDsgeSA8IG5iUGl4ZWxXaWR0aDsgeSArPSAxKSB7XG4gICAgY29uc3QgYml0c0NvbG9yID0gZ2VuZXJhdGVSb3dDb2xvcnMobmJQaXhlbFdpZHRoKTtcbiAgICBmb3IobGV0IHg6IG51bWJlciA9IDA7IHggPCBuYlBpeGVsSGVpZ2h0OyB4ICs9IDEpIHtcbiAgICAgIGNyZWF0ZVNxdWFyZShcbiAgICAgICAgeyB4OiB4T2Zmc2V0ICsgKHggKiB3aWR0aFBpeGVsKSxcbiAgICAgICAgICB5OiB5T2Zmc2V0ICsgKHkgKiBoZWlnaHRQaXhlbCksXG4gICAgICAgICAgd2lkdGhQaXhlbCxcbiAgICAgICAgICBoZWlnaHRQaXhlbFxuICAgICAgICAgfSxcbiAgICAgICAgIGNvbnRleHQsXG4gICAgICAgICBiaXRzQ29sb3JbeF1cbiAgICAgICk7XG4gICAgfVxuICB9XG59IiwiXG5leHBvcnQgZnVuY3Rpb24gZ2V0Q2FudmFzKGNhbnZhc0lkOiBzdHJpbmcgPSAnY2FudmFzJykgOiBIVE1MQ2FudmFzRWxlbWVudCB8IG51bGwge1xuICByZXR1cm4gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoY2FudmFzSWQpIGFzIEhUTUxDYW52YXNFbGVtZW50O1xufVxuXG5leHBvcnQgZnVuY3Rpb24gc2V0Q2FudmFzU2l6ZSh3aWR0aDogbnVtYmVyLCBoZWlnaHQ6IG51bWJlcikgOiB2b2lkICB7XG4gIGNvbnN0IGNhbnZhcyA9IGdldENhbnZhcygpO1xuICBjYW52YXMud2lkdGggPSB3aWR0aDtcbiAgY2FudmFzLmhlaWdodCA9IGhlaWdodDtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGRyYXcoY2FsbGJhY2s6IChjdHg6IENhbnZhc1JlbmRlcmluZ0NvbnRleHQyRCkgPT4gdm9pZCkgOiB2b2lkIHtcbiAgY29uc3QgY2FudmFzID0gZ2V0Q2FudmFzKCk7XG4gIGlmIChjYW52YXMuZ2V0Q29udGV4dCkge1xuICAgIGNvbnN0IGN0eCA9IGNhbnZhcy5nZXRDb250ZXh0KCcyZCcpO1xuICAgIGNhbGxiYWNrKGN0eCk7XG4gIH1cbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGNoYW5nZUJhY2tncm91bmRDYW52YXMocmFuZG9tIDogYm9vbGVhbiA9IGZhbHNlKSA6IHZvaWQge1xuICBjb25zdCBjYW52YXMgPSBnZXRDYW52YXMoKTtcbiAgaWYoY2FudmFzLmdldENvbnRleHQpIHtcbiAgICBjb25zdCBjdHggPSBjYW52YXMuZ2V0Q29udGV4dCgnMmQnKTtcbiAgICBjb25zdCBjb2xvciA9IHJhbmRvbSA/IFxuICAgICAgYHJnYmEoXG4gICAgICAgICAke01hdGgucmFuZG9tKCkgKiAyNTV9LFxuICAgICAgICAgJHtNYXRoLnJhbmRvbSgpICogMjU1fSxcbiAgICAgICAgICR7TWF0aC5yYW5kb20oKSAqIDI1NX0sXG4gICAgICAgICAxKWA6XG4gICAgICAncmdiYSgyMTIsMjU1LDE1NiwxKSc7XG4gICAgY3R4LmZpbGxTdHlsZSA9IGNvbG9yO1xuICAgIGN0eC5maWxsUmVjdCgwLDAsd2luZG93LmlubmVyV2lkdGgsd2luZG93LmlubmVySGVpZ2h0KTtcbiAgfVxufSIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0Ly8gbm8gbW9kdWxlLmlkIG5lZWRlZFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiaW1wb3J0IHsgc2V0Q2FudmFzU2l6ZSwgY2hhbmdlQmFja2dyb3VuZENhbnZhcywgZ2V0Q2FudmFzLCBkcmF3IH0gZnJvbSBcIi4vY2FudmFzXCI7XG5pbXBvcnQgeyBjcmVhdGVJbnZhZGVyIH0gZnJvbSBcIi4vYXZhdGFyXCI7XG5cbmZ1bmN0aW9uIGxvYWQoKSB7XG4gY29uc3QgY2FudmFzID0gZ2V0Q2FudmFzKCk7XG4gIGlmIChjYW52YXMuZ2V0Q29udGV4dCkge1xuICAgIGNvbnN0IG5iUGl4ZWxXaWR0aCA9IDg7XG4gICAgY29uc3QgbmJQaXhlbEhlaWdodCA9IDg7XG4gICAgY29uc3Qgd2lkdGhQaXhlbCA9IGNhbnZhcy53aWR0aCAvIG5iUGl4ZWxXaWR0aDtcbiAgICBjb25zdCBoZWlnaHRQaXhlbCA9IGNhbnZhcy5oZWlnaHQgLyBuYlBpeGVsV2lkdGg7XG5cbiAgICBjb25zdCBjb250ZXh0ID0gY2FudmFzLmdldENvbnRleHQoJzJkJyk7XG4gICAgY3JlYXRlSW52YWRlcih7eDogMCwgeTowLCB3aWR0aFBpeGVsLCBoZWlnaHRQaXhlbCB9LCBjb250ZXh0LCBuYlBpeGVsV2lkdGgsIG5iUGl4ZWxIZWlnaHQpO1xuICB9XG59XG5cbmZ1bmN0aW9uIGNoYW5nZUNhbnZhc1NsaWRlcihzaXplOiBcIndpZHRoXCJ8IFwiaGVpZ2h0XCIsIGU6IEV2ZW50KSA6IHZvaWQge1xuICBjb25zdCBuZXdWYWx1ZSA6IG51bWJlciA9IChlIGFzIGFueSkudGFyZ2V0LnZhbHVlO1xuICBpZihzaXplID09PSBcIndpZHRoXCIpIHtcbiAgICB3aWR0aENhbnZhcyA9IG5ld1ZhbHVlO1xuICB9IGVsc2Uge1xuICAgIGhlaWdodENhbnZhcyA9IG5ld1ZhbHVlO1xuICB9XG4gIHNldENhbnZhc1NpemUod2lkdGhDYW52YXMsIG5ld1ZhbHVlKTtcbn1cblxuLy8gR0xPQkFMUyBWQVJJQUJMRVNcbmxldCB3aWR0aENhbnZhcyA9IDA7XG5sZXQgaGVpZ2h0Q2FudmFzID0gMDtcbndpbmRvdy5vbmxvYWQgPSBmdW5jdGlvbigpIHtcbiAgbG9hZCgpXG4gIC8vIGNvbm5lY3QgYnV0dG9uICsgaW5wdXRzXG4gIGNvbnN0IGJ1dHRvbiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwicmVzZXQtYnV0dG9uXCIpO1xuICAgaWYoYnV0dG9uKSB7XG4gICAgIGJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgbG9hZCk7XG4gIH1cbiAgY29uc3QgaW5wdXRXaWR0aCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwid2lkdGhDYW52YXNcIik7XG4gIGlmKGlucHV0V2lkdGgpIHtcbiAgICBpbnB1dFdpZHRoLmFkZEV2ZW50TGlzdGVuZXIoXCJjaGFuZ2VcIiwgKGUpID0+IHsgY2hhbmdlQ2FudmFzU2xpZGVyKFwid2lkdGhcIiwgZSk7IGxvYWQoKSB9KTtcbiAgfVxuICBjb25zdCBpbnB1dEhlaWdodCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiaGVpZ2h0Q2FudmFzXCIpO1xuICBpZihpbnB1dEhlaWdodCkge1xuICAgIGlucHV0SGVpZ2h0LmFkZEV2ZW50TGlzdGVuZXIoXCJjaGFuZ2VcIiwgKGUpID0+IHsgY2hhbmdlQ2FudmFzU2xpZGVyKFwiaGVpZ2h0XCIsIGUpOyBsb2FkKCkgfSk7XG4gIH1cbn07XG5cbiJdLCJzb3VyY2VSb290IjoiIn0=