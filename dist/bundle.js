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
function generateRowColors(nbPixelWidth, colorsPalette) {
    var bitsColor = [];
    for (var i = 0; i < Math.floor(nbPixelWidth / 2); i++) {
        bitsColor.push(randomInArrayColor(colorsPalette));
    }
    bitsColor.slice(0).reverse().forEach(function (bit) { return bitsColor.push(bit); });
    // add one more bits for odds width
    if (nbPixelWidth % 2 !== 0) {
        bitsColor.splice(Math.floor(nbPixelWidth / 2) + 1, 0, randomInArrayColor(colorsPalette));
    }
    return bitsColor;
}
function createInvader(border, context, nbPixelWidth, nbPixelHeight, colorsPalette) {
    var xOffset = border.x, yOffset = border.y, widthPixel = border.widthPixel, heightPixel = border.heightPixel;
    for (var y = 0; y < nbPixelHeight; y += 1) {
        var bitsColor = generateRowColors(nbPixelWidth, colorsPalette);
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


/***/ }),

/***/ "./src/tools.ts":
/*!**********************!*\
  !*** ./src/tools.ts ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "hexToRgb": () => (/* binding */ hexToRgb)
/* harmony export */ });
function hexToRgb(hex) {
    var result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
    return result ? {
        r: parseInt(result[1], 16),
        g: parseInt(result[2], 16),
        b: parseInt(result[3], 16)
    } : null;
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
/* harmony import */ var _tools__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./tools */ "./src/tools.ts");



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
        (0,_avatar__WEBPACK_IMPORTED_MODULE_1__.createInvader)({ x: offsetWidth / 2, y: offsetHeight / 2, widthPixel: widthPixel, heightPixel: heightPixel }, context, nbPixelWidth, nbPixelHeight, colors);
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
function feedColors() {
    var newColors = [];
    Array.from(document.querySelectorAll("input[type=color]")).forEach(function (item, index) {
        var checkbox = document.getElementById("color-" + (index + 1));
        if (checkbox.checked) {
            newColors.push((0,_tools__WEBPACK_IMPORTED_MODULE_2__.hexToRgb)(item.value));
        }
    });
    colors = newColors.slice();
    console.log(colors);
}
// GLOBALS VARIABLES
var widthCanvas = 0;
var heightCanvas = 0;
var nbPixelX = 0;
var nbPixelY = 0;
var colors = [];
window.onload = function () {
    feedColors();
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
    //connect each color input
    Array.from(document.querySelectorAll("input[type=color]")).forEach(function (item) {
        item.addEventListener("change", feedColors);
    });
    //then colors checkboxes checkbox
    Array.from(document.querySelectorAll("input[type=checkbox]")).forEach(function (item) {
        item.addEventListener("change", feedColors);
    });
};

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9hdmF0YXItZ2VuZXJhdG9yLy4vc3JjL2F2YXRhci50cyIsIndlYnBhY2s6Ly9hdmF0YXItZ2VuZXJhdG9yLy4vc3JjL2NhbnZhcy50cyIsIndlYnBhY2s6Ly9hdmF0YXItZ2VuZXJhdG9yLy4vc3JjL3Rvb2xzLnRzIiwid2VicGFjazovL2F2YXRhci1nZW5lcmF0b3Ivd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vYXZhdGFyLWdlbmVyYXRvci93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vYXZhdGFyLWdlbmVyYXRvci93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL2F2YXRhci1nZW5lcmF0b3Ivd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly9hdmF0YXItZ2VuZXJhdG9yLy4vc3JjL2luZGV4LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7O0FBY0EsSUFBTSxLQUFLLEdBQW9CLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUMsQ0FBQyxFQUFFLENBQUMsRUFBQyxDQUFDLEVBQUUsQ0FBQztBQUVsRCxTQUFTLFdBQVc7SUFDbEIsT0FBTyxFQUFFLENBQUMsRUFBRSxJQUFJLENBQUMsTUFBTSxFQUFFLEdBQUcsR0FBRyxFQUFFLENBQUMsRUFBRSxJQUFJLENBQUMsTUFBTSxFQUFFLEdBQUcsR0FBRyxFQUFFLENBQUMsRUFBRSxJQUFJLENBQUMsTUFBTSxFQUFFLEdBQUcsR0FBRyxFQUFFLENBQUM7QUFDcEYsQ0FBQztBQUVELFNBQVMsa0JBQWtCLENBQUMsTUFBd0I7SUFDbEQsT0FBTyxNQUFNLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsTUFBTSxFQUFFLEdBQUcsTUFBTSxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUM7QUFDM0QsQ0FB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IjpbImludGVyZmFjZSBib3JkZXJJbnRlcmZhY2Uge1xuICB4OiBudW1iZXI7XG4gIHk6IG51bWJlcjtcbiAgd2lkdGhQaXhlbDogbnVtYmVyO1xuICBoZWlnaHRQaXhlbDogbnVtYmVyO1xufVxuXG5leHBvcnQgaW50ZXJmYWNlIGNvbG9ySW50ZXJmYWNlIHtcbiAgcjogbnVtYmVyO1xuICBnOiBudW1iZXI7XG4gIGI6IG51bWJlcjtcbn1cblxuXG5jb25zdCBCTEFDSyA6IGNvbG9ySW50ZXJmYWNlID0geyByOiAwLCBnOjAsIGI6MCB9O1xuXG5mdW5jdGlvbiByYW5kb21Db2xvcigpIDogY29sb3JJbnRlcmZhY2Uge1xuICByZXR1cm4geyByOiBNYXRoLnJhbmRvbSgpICogMjU1LCBnOiBNYXRoLnJhbmRvbSgpICogMjU1LCBiOiBNYXRoLnJhbmRvbSgpICogMjU1IH07XG59XG5cbmZ1bmN0aW9uIHJhbmRvbUluQXJyYXlDb2xvcihjb2xvcnM6IGNvbG9ySW50ZXJmYWNlW10pIDogY29sb3JJbnRlcmZhY2Uge1xuICByZXR1cm4gY29sb3JzW01hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIGNvbG9ycy5sZW5ndGgpXTtcbn0gXG5cblxuZnVuY3Rpb24gY3JlYXRlU3F1YXJlKGJvcmRlcjogYm9yZGVySW50ZXJmYWNlLCBjb250ZXh0OiBDYW52YXNSZW5kZXJpbmdDb250ZXh0MkQsIGNvbG9yOiBjb2xvckludGVyZmFjZSkgOiB2b2lkIHtcbiAgY29udGV4dC5maWxsU3R5bGUgPSBgcmdiKCR7Y29sb3Iucn0sICR7Y29sb3IuZ30sICR7Y29sb3IuYn0pYDtcbiAgY29udGV4dC5maWxsUmVjdChib3JkZXIueCwgYm9yZGVyLnksIGJvcmRlci53aWR0aFBpeGVsLCBib3JkZXIuaGVpZ2h0UGl4ZWwpO1xufVxuXG5cbmZ1bmN0aW9uIGdlbmVyYXRlUm93Q29sb3JzKG5iUGl4ZWxXaWR0aDogbnVtYmVyLCBjb2xvcnNQYWxldHRlOiBjb2xvckludGVyZmFjZVtdKSA6IGNvbG9ySW50ZXJmYWNlW10ge1xuICBsZXQgYml0c0NvbG9yIDogY29sb3JJbnRlcmZhY2VbXSA9IFtdO1xuICBmb3IobGV0IGkgPSAwOyBpIDwgTWF0aC5mbG9vcihuYlBpeGVsV2lkdGgvMik7IGkrKykge1xuICAgIGJpdHNDb2xvci5wdXNoKHJhbmRvbUluQXJyYXlDb2xvcihjb2xvcnNQYWxldHRlKSk7XG4gIH1cblxuICBiaXRzQ29sb3Iuc2xpY2UoMCkucmV2ZXJzZSgpLmZvckVhY2goKGJpdCkgPT4gYml0c0NvbG9yLnB1c2goYml0KSk7XG5cbiAgLy8gYWRkIG9uZSBtb3JlIGJpdHMgZm9yIG9kZHMgd2lkdGhcbiAgaWYobmJQaXhlbFdpZHRoICUgMiAhPT0gMCkge1xuICAgIGJpdHNDb2xvci5zcGxpY2UoTWF0aC5mbG9vcihuYlBpeGVsV2lkdGgvMikgKyAxLCAwLCByYW5kb21JbkFycmF5Q29sb3IoY29sb3JzUGFsZXR0ZSkpO1xuICB9XG5cbiAgcmV0dXJuIGJpdHNDb2xvcjtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGNyZWF0ZUludmFkZXIoYm9yZGVyIDogYm9yZGVySW50ZXJmYWNlLCBjb250ZXh0OiBDYW52YXNSZW5kZXJpbmdDb250ZXh0MkQsIG5iUGl4ZWxXaWR0aDogbnVtYmVyLCBuYlBpeGVsSGVpZ2h0OiBudW1iZXIsIGNvbG9yc1BhbGV0dGU6IGNvbG9ySW50ZXJmYWNlW10pIDogdm9pZCB7XG4gIGNvbnN0IHsgeDogeE9mZnNldCAsIHk6IHlPZmZzZXQgLCB3aWR0aFBpeGVsLCBoZWlnaHRQaXhlbCB9ID0gYm9yZGVyO1xuICBmb3IobGV0IHkgOiBudW1iZXIgPSAwOyB5IDwgbmJQaXhlbEhlaWdodDsgeSArPSAxKSB7XG4gICAgY29uc3QgYml0c0NvbG9yID0gZ2VuZXJhdGVSb3dDb2xvcnMobmJQaXhlbFdpZHRoLCBjb2xvcnNQYWxldHRlKTtcbiAgICBmb3IobGV0IHg6IG51bWJlciA9IDA7IHggPCBiaXRzQ29sb3IubGVuZ3RoOyB4ICs9IDEpIHtcbiAgICAgIGNyZWF0ZVNxdWFyZShcbiAgICAgICAgeyB4OiB4T2Zmc2V0ICsgKHggKiB3aWR0aFBpeGVsKSxcbiAgICAgICAgICB5OiB5T2Zmc2V0ICsgKHkgKiBoZWlnaHRQaXhlbCksXG4gICAgICAgICAgd2lkdGhQaXhlbCxcbiAgICAgICAgICBoZWlnaHRQaXhlbFxuICAgICAgICAgfSxcbiAgICAgICAgIGNvbnRleHQsXG4gICAgICAgICBiaXRzQ29sb3JbeF1cbiAgICAgICk7XG4gICAgfVxuICB9XG59IiwiXG5leHBvcnQgZnVuY3Rpb24gZ2V0Q2FudmFzKGNhbnZhc0lkOiBzdHJpbmcgPSAnY2FudmFzJykgOiBIVE1MQ2FudmFzRWxlbWVudCB8IG51bGwge1xuICByZXR1cm4gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoY2FudmFzSWQpIGFzIEhUTUxDYW52YXNFbGVtZW50O1xufVxuXG5leHBvcnQgZnVuY3Rpb24gc2V0Q2FudmFzU2l6ZSh3aWR0aDogbnVtYmVyLCBoZWlnaHQ6IG51bWJlcikgOiB2b2lkICB7XG4gIGNvbnN0IGNhbnZhcyA9IGdldENhbnZhcygpO1xuICBjYW52YXMud2lkdGggPSB3aWR0aDtcbiAgY2FudmFzLmhlaWdodCA9IGhlaWdodDtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGRyYXcoY2FsbGJhY2s6IChjdHg6IENhbnZhc1JlbmRlcmluZ0NvbnRleHQyRCkgPT4gdm9pZCkgOiB2b2lkIHtcbiAgY29uc3QgY2FudmFzID0gZ2V0Q2FudmFzKCk7XG4gIGlmIChjYW52YXMuZ2V0Q29udGV4dCkge1xuICAgIGNvbnN0IGN0eCA9IGNhbnZhcy5nZXRDb250ZXh0KCcyZCcpO1xuICAgIGNhbGxiYWNrKGN0eCk7XG4gIH1cbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGNoYW5nZUJhY2tncm91bmRDYW52YXMocmFuZG9tIDogYm9vbGVhbiA9IGZhbHNlKSA6IHZvaWQge1xuICBjb25zdCBjYW52YXMgPSBnZXRDYW52YXMoKTtcbiAgaWYoY2FudmFzLmdldENvbnRleHQpIHtcbiAgICBjb25zdCBjdHggPSBjYW52YXMuZ2V0Q29udGV4dCgnMmQnKTtcbiAgICBjb25zdCBjb2xvciA9IHJhbmRvbSA/IFxuICAgICAgYHJnYmEoXG4gICAgICAgICAke01hdGgucmFuZG9tKCkgKiAyNTV9LFxuICAgICAgICAgJHtNYXRoLnJhbmRvbSgpICogMjU1fSxcbiAgICAgICAgICR7TWF0aC5yYW5kb20oKSAqIDI1NX0sXG4gICAgICAgICAxKWA6XG4gICAgICAncmdiYSgyMTIsMjU1LDE1NiwxKSc7XG4gICAgY3R4LmZpbGxTdHlsZSA9IGNvbG9yO1xuICAgIGN0eC5maWxsUmVjdCgwLDAsd2luZG93LmlubmVyV2lkdGgsd2luZG93LmlubmVySGVpZ2h0KTtcbiAgfVxufSIsImltcG9ydCB7IGNvbG9ySW50ZXJmYWNlIH0gZnJvbSBcIi4vYXZhdGFyXCI7XG5cbmV4cG9ydCBmdW5jdGlvbiBoZXhUb1JnYihoZXg6IHN0cmluZykgOiBjb2xvckludGVyZmFjZSB7XG4gIHZhciByZXN1bHQgPSAvXiM/KFthLWZcXGRdezJ9KShbYS1mXFxkXXsyfSkoW2EtZlxcZF17Mn0pJC9pLmV4ZWMoaGV4KTtcbiAgcmV0dXJuIHJlc3VsdCA/IHtcbiAgICByOiBwYXJzZUludChyZXN1bHRbMV0sIDE2KSxcbiAgICBnOiBwYXJzZUludChyZXN1bHRbMl0sIDE2KSxcbiAgICBiOiBwYXJzZUludChyZXN1bHRbM10sIDE2KVxuICB9IDogbnVsbDtcbn0iLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdC8vIG5vIG1vZHVsZS5pZCBuZWVkZWRcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsImltcG9ydCB7IHNldENhbnZhc1NpemUsIGNoYW5nZUJhY2tncm91bmRDYW52YXMsIGdldENhbnZhcywgZHJhdyB9IGZyb20gXCIuL2NhbnZhc1wiO1xuaW1wb3J0IHsgY3JlYXRlSW52YWRlciwgY29sb3JJbnRlcmZhY2UgfSBmcm9tIFwiLi9hdmF0YXJcIjtcbmltcG9ydCB7IGhleFRvUmdiIH0gZnJvbSBcIi4vdG9vbHNcIjtcblxuZnVuY3Rpb24gbG9hZCgpIHtcbiBjb25zdCBjYW52YXMgPSBnZXRDYW52YXMoKTtcbiAgaWYgKGNhbnZhcy5nZXRDb250ZXh0KSB7XG4gICAgY29uc3QgbmJQaXhlbFdpZHRoID0gbmJQaXhlbFggfHwgODtcbiAgICBjb25zdCBuYlBpeGVsSGVpZ2h0ID0gbmJQaXhlbFkgfHwgODtcbiAgICBjb25zdCB3aWR0aFBpeGVsID0gTWF0aC5mbG9vcihjYW52YXMud2lkdGggLyBuYlBpeGVsV2lkdGgpO1xuICAgIGNvbnN0IG9mZnNldFdpZHRoID0gKGNhbnZhcy53aWR0aCAlIG5iUGl4ZWxXaWR0aCk7XG4gICAgXG4gICAgY29uc3QgaGVpZ2h0UGl4ZWwgPSBNYXRoLmZsb29yKGNhbnZhcy5oZWlnaHQgLyBuYlBpeGVsSGVpZ2h0KTtcbiAgICBjb25zdCBvZmZzZXRIZWlnaHQgPSAoY2FudmFzLmhlaWdodCAlIG5iUGl4ZWxIZWlnaHQpO1xuXG4gICAgY29uc3QgY29udGV4dCA9IGNhbnZhcy5nZXRDb250ZXh0KCcyZCcpO1xuICAgIC8vIHJlZnJlc2hcbiAgICBjb250ZXh0LmNsZWFyUmVjdCgwLCAwLCBjYW52YXMud2lkdGgsIGNhbnZhcy5oZWlnaHQpO1xuICAgIFxuICAgIGNyZWF0ZUludmFkZXIoe3g6IG9mZnNldFdpZHRoIC8yICwgeTogb2Zmc2V0SGVpZ2h0IC8gMiwgd2lkdGhQaXhlbCwgaGVpZ2h0UGl4ZWwgfSwgY29udGV4dCwgbmJQaXhlbFdpZHRoLCBuYlBpeGVsSGVpZ2h0LCBjb2xvcnMpO1xuICB9XG59XG5cbmZ1bmN0aW9uIGNoYW5nZUNhbnZhc1NsaWRlcihzaXplOiBcIndpZHRoXCJ8IFwiaGVpZ2h0XCIsIGU6IEV2ZW50KSA6IHZvaWQge1xuICBjb25zdCBuZXdWYWx1ZSA6IG51bWJlciA9IChlIGFzIGFueSkudGFyZ2V0LnZhbHVlO1xuICBpZihzaXplID09PSBcIndpZHRoXCIpIHtcbiAgICB3aWR0aENhbnZhcyA9IG5ld1ZhbHVlO1xuICB9IGVsc2Uge1xuICAgIGhlaWdodENhbnZhcyA9IG5ld1ZhbHVlO1xuICB9XG4gIHNldENhbnZhc1NpemUod2lkdGhDYW52YXMsIG5ld1ZhbHVlKTtcbn1cblxuZnVuY3Rpb24gY2hhbmdlUGl4ZWxTbGlkZXIoc2l6ZTogXCJ4XCJ8IFwieVwiLCBlOiBFdmVudCkgOiB2b2lkIHtcbiAgY29uc3QgbmV3VmFsdWUgOiBudW1iZXIgPSAoZSBhcyBhbnkpLnRhcmdldC52YWx1ZTtcbiAgaWYoc2l6ZSA9PT0gXCJ4XCIpIHtcbiAgICBuYlBpeGVsWCA9IG5ld1ZhbHVlO1xuICB9IGVsc2Uge1xuICAgIG5iUGl4ZWxZID0gbmV3VmFsdWU7XG4gIH1cbn1cblxuZnVuY3Rpb24gZmVlZENvbG9ycygpIHtcbiAgY29uc3QgbmV3Q29sb3JzIDogY29sb3JJbnRlcmZhY2VbXSA9IFtdO1xuICBBcnJheS5mcm9tKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCJpbnB1dFt0eXBlPWNvbG9yXVwiKSkuZm9yRWFjaCgoaXRlbTogSFRNTElucHV0RWxlbWVudCwgaW5kZXg6IG51bWJlcikgPT4ge1xuICAgIGNvbnN0IGNoZWNrYm94ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoYGNvbG9yLSR7aW5kZXgrMX1gKSBhcyBIVE1MSW5wdXRFbGVtZW50O1xuICAgIGlmKGNoZWNrYm94LmNoZWNrZWQpIHtcbiAgICAgIG5ld0NvbG9ycy5wdXNoKGhleFRvUmdiKGl0ZW0udmFsdWUpKTtcbiAgICB9XG4gIH0pO1xuICBjb2xvcnMgPSBuZXdDb2xvcnMuc2xpY2UoKTtcbiAgY29uc29sZS5sb2coY29sb3JzKTtcbn1cblxuLy8gR0xPQkFMUyBWQVJJQUJMRVNcbmxldCB3aWR0aENhbnZhcyA9IDA7XG5sZXQgaGVpZ2h0Q2FudmFzID0gMDtcbmxldCBuYlBpeGVsWCA9IDA7XG5sZXQgbmJQaXhlbFkgPSAwO1xubGV0IGNvbG9ycyA6Y29sb3JJbnRlcmZhY2VbXSA9IFtdO1xud2luZG93Lm9ubG9hZCA9IGZ1bmN0aW9uKCkge1xuICBmZWVkQ29sb3JzKCk7XG4gIGxvYWQoKTtcbiAgXG4gIC8vIGNvbm5lY3QgYnV0dG9uICsgaW5wdXRzXG4gIGNvbnN0IGJ1dHRvbiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwicmVzZXQtYnV0dG9uXCIpO1xuICAgaWYoYnV0dG9uKSB7XG4gICAgIGJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgbG9hZCk7XG4gIH1cblxuICBjb25zdCBpbnB1dFdpZHRoID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJ3aWR0aENhbnZhc1wiKTtcbiAgaWYoaW5wdXRXaWR0aCkge1xuICAgIGlucHV0V2lkdGguYWRkRXZlbnRMaXN0ZW5lcihcImNoYW5nZVwiLCAoZSkgPT4geyBjaGFuZ2VDYW52YXNTbGlkZXIoXCJ3aWR0aFwiLCBlKTsgbG9hZCgpIH0pO1xuICB9XG4gIGNvbnN0IGlucHV0SGVpZ2h0ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJoZWlnaHRDYW52YXNcIik7XG4gIGlmKGlucHV0SGVpZ2h0KSB7XG4gICAgaW5wdXRIZWlnaHQuYWRkRXZlbnRMaXN0ZW5lcihcImNoYW5nZVwiLCAoZSkgPT4geyBjaGFuZ2VDYW52YXNTbGlkZXIoXCJoZWlnaHRcIiwgZSk7IGxvYWQoKSB9KTtcbiAgfVxuXG4gIGNvbnN0IGlucHV0UGl4ZWxYID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJuYlBpeGVsWFwiKTtcbiAgaWYoaW5wdXRQaXhlbFgpIHtcbiAgICBpbnB1dFBpeGVsWC5hZGRFdmVudExpc3RlbmVyKFwiY2hhbmdlXCIsIChlKSA9PiB7IGNoYW5nZVBpeGVsU2xpZGVyKFwieFwiLCBlKTsgbG9hZCgpIH0pO1xuICB9XG4gIGNvbnN0IGlucHV0UGl4ZWxZID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJuYlBpeGVsWVwiKTtcbiAgaWYoaW5wdXRQaXhlbFkpIHtcbiAgICBpbnB1dFBpeGVsWS5hZGRFdmVudExpc3RlbmVyKFwiY2hhbmdlXCIsIChlKSA9PiB7IGNoYW5nZVBpeGVsU2xpZGVyKFwieVwiLCBlKTsgbG9hZCgpIH0pO1xuICB9XG5cbiAgLy9jb25uZWN0IGVhY2ggY29sb3IgaW5wdXRcbiAgQXJyYXkuZnJvbShkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiaW5wdXRbdHlwZT1jb2xvcl1cIikpLmZvckVhY2goIChpdGVtOiBIVE1MSW5wdXRFbGVtZW50KSA9PiB7XG4gICAgaXRlbS5hZGRFdmVudExpc3RlbmVyKFwiY2hhbmdlXCIsIGZlZWRDb2xvcnMpO1xuICB9KVxuICAvL3RoZW4gY29sb3JzIGNoZWNrYm94ZXMgY2hlY2tib3hcbiAgQXJyYXkuZnJvbShkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiaW5wdXRbdHlwZT1jaGVja2JveF1cIikpLmZvckVhY2goIChpdGVtOiBIVE1MSW5wdXRFbGVtZW50KSA9PiB7XG4gICAgaXRlbS5hZGRFdmVudExpc3RlbmVyKFwiY2hhbmdlXCIsIGZlZWRDb2xvcnMpO1xuICB9KVxuXG59O1xuXG4iXSwic291cmNlUm9vdCI6IiJ9