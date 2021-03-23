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
function saveImage() {
    var canvas = (0,_canvas__WEBPACK_IMPORTED_MODULE_0__.getCanvas)();
    if (canvas) {
        var image = canvas.toDataURL("image/png").replace("image/png", "image/octet-stream");
        window.location.href = image;
    }
    else {
        alert("canvas not detected");
    }
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
    var saveButton = document.getElementById("save-button");
    if (saveButton) {
        saveButton.addEventListener("click", saveImage);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9hdmF0YXItZ2VuZXJhdG9yLy4vc3JjL2F2YXRhci50cyIsIndlYnBhY2s6Ly9hdmF0YXItZ2VuZXJhdG9yLy4vc3JjL2NhbnZhcy50cyIsIndlYnBhY2s6Ly9hdmF0YXItZ2VuZXJhdG9yLy4vc3JjL3Rvb2xzLnRzIiwid2VicGFjazovL2F2YXRhci1nZW5lcmF0b3Ivd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vYXZhdGFyLWdlbmVyYXRvci93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vYXZhdGFyLWdlbmVyYXRvci93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL2F2YXRhci1nZW5lcmF0b3Ivd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly9hdmF0YXItZ2VuZXJhdG9yLy4vc3JjL2luZGV4LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7O0FBY0EsSUFBTSxLQUFLLEdBQW9CLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUMsQ0FBQyxFQUFFLENBQUMsRUFBQyxDQUFDLEVBQUUsQ0FBQztBQUVsRCxTQUFTLFdBQVc7SUFDbEIsT0FBTyxFQUFFLENBQUMsRUFBRSxJQUFJLENBQUMsTUFBTSxFQUFFLEdBQUcsR0FBRyxFQUFFLENBQUMsRUFBRSxJQUFJLENBQUMsTUFBTSxFQUFFLEdBQUcsR0FBRyxFQUFFLENBQUMsRUFBRSxJQUFJLENBQUMsTUFBTSxFQUFFLEdBQUcsR0FBRyxFQUFFLENBQUM7QUFDcEYsQ0FBQztBQUVELFNBQVMsa0JBQWtCLENBQUMsTUFBd0I7SUFDbEQsT0FBTyxNQUFNLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsTUFBTSxFQUFFLEdBQUcsTUFBTSxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUM7QUFDM0QsQ0FB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QUFDO0tBQ3RGO0lBRUQsMEJBQTBCO0lBQzFCLEtBQUssQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLGdCQUFnQixDQUFDLG1CQUFtQixDQUFDLENBQUMsQ0FBQyxPQUFPLENBQUUsVUFBQyxJQUFzQjtRQUN6RixJQUFJLENBQUMsZ0JBQWdCLENBQUMsUUFBUSxFQUFFLFVBQVUsQ0FBQyxDQUFDO0lBQzlDLENBQUMsQ0FBQztJQUNGLGlDQUFpQztJQUNqQyxLQUFLLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxnQkFBZ0IsQ0FBQyxzQkFBc0IsQ0FBQyxDQUFDLENBQUMsT0FBTyxDQUFFLFVBQUMsSUFBc0I7UUFDNUYsSUFBSSxDQUFDLGdCQUFnQixDQUFDLFFBQVEsRUFBRSxVQUFVLENBQUMsQ0FBQztJQUM5QyxDQUFDLENBQUM7QUFFSixDQUFDLENBQUMiLCJmaWxlIjoiYnVuZGxlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW50ZXJmYWNlIGJvcmRlckludGVyZmFjZSB7XG4gIHg6IG51bWJlcjtcbiAgeTogbnVtYmVyO1xuICB3aWR0aFBpeGVsOiBudW1iZXI7XG4gIGhlaWdodFBpeGVsOiBudW1iZXI7XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgY29sb3JJbnRlcmZhY2Uge1xuICByOiBudW1iZXI7XG4gIGc6IG51bWJlcjtcbiAgYjogbnVtYmVyO1xufVxuXG5cbmNvbnN0IEJMQUNLIDogY29sb3JJbnRlcmZhY2UgPSB7IHI6IDAsIGc6MCwgYjowIH07XG5cbmZ1bmN0aW9uIHJhbmRvbUNvbG9yKCkgOiBjb2xvckludGVyZmFjZSB7XG4gIHJldHVybiB7IHI6IE1hdGgucmFuZG9tKCkgKiAyNTUsIGc6IE1hdGgucmFuZG9tKCkgKiAyNTUsIGI6IE1hdGgucmFuZG9tKCkgKiAyNTUgfTtcbn1cblxuZnVuY3Rpb24gcmFuZG9tSW5BcnJheUNvbG9yKGNvbG9yczogY29sb3JJbnRlcmZhY2VbXSkgOiBjb2xvckludGVyZmFjZSB7XG4gIHJldHVybiBjb2xvcnNbTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogY29sb3JzLmxlbmd0aCldO1xufSBcblxuXG5mdW5jdGlvbiBjcmVhdGVTcXVhcmUoYm9yZGVyOiBib3JkZXJJbnRlcmZhY2UsIGNvbnRleHQ6IENhbnZhc1JlbmRlcmluZ0NvbnRleHQyRCwgY29sb3I6IGNvbG9ySW50ZXJmYWNlKSA6IHZvaWQge1xuICBjb250ZXh0LmZpbGxTdHlsZSA9IGByZ2IoJHtjb2xvci5yfSwgJHtjb2xvci5nfSwgJHtjb2xvci5ifSlgO1xuICBjb250ZXh0LmZpbGxSZWN0KGJvcmRlci54LCBib3JkZXIueSwgYm9yZGVyLndpZHRoUGl4ZWwsIGJvcmRlci5oZWlnaHRQaXhlbCk7XG59XG5cblxuZnVuY3Rpb24gZ2VuZXJhdGVSb3dDb2xvcnMobmJQaXhlbFdpZHRoOiBudW1iZXIsIGNvbG9yc1BhbGV0dGU6IGNvbG9ySW50ZXJmYWNlW10pIDogY29sb3JJbnRlcmZhY2VbXSB7XG4gIGxldCBiaXRzQ29sb3IgOiBjb2xvckludGVyZmFjZVtdID0gW107XG4gIGZvcihsZXQgaSA9IDA7IGkgPCBNYXRoLmZsb29yKG5iUGl4ZWxXaWR0aC8yKTsgaSsrKSB7XG4gICAgYml0c0NvbG9yLnB1c2gocmFuZG9tSW5BcnJheUNvbG9yKGNvbG9yc1BhbGV0dGUpKTtcbiAgfVxuXG4gIGJpdHNDb2xvci5zbGljZSgwKS5yZXZlcnNlKCkuZm9yRWFjaCgoYml0KSA9PiBiaXRzQ29sb3IucHVzaChiaXQpKTtcblxuICAvLyBhZGQgb25lIG1vcmUgYml0cyBmb3Igb2RkcyB3aWR0aFxuICBpZihuYlBpeGVsV2lkdGggJSAyICE9PSAwKSB7XG4gICAgYml0c0NvbG9yLnNwbGljZShNYXRoLmZsb29yKG5iUGl4ZWxXaWR0aC8yKSArIDEsIDAsIHJhbmRvbUluQXJyYXlDb2xvcihjb2xvcnNQYWxldHRlKSk7XG4gIH1cblxuICByZXR1cm4gYml0c0NvbG9yO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gY3JlYXRlSW52YWRlcihib3JkZXIgOiBib3JkZXJJbnRlcmZhY2UsIGNvbnRleHQ6IENhbnZhc1JlbmRlcmluZ0NvbnRleHQyRCwgbmJQaXhlbFdpZHRoOiBudW1iZXIsIG5iUGl4ZWxIZWlnaHQ6IG51bWJlciwgY29sb3JzUGFsZXR0ZTogY29sb3JJbnRlcmZhY2VbXSkgOiB2b2lkIHtcbiAgY29uc3QgeyB4OiB4T2Zmc2V0ICwgeTogeU9mZnNldCAsIHdpZHRoUGl4ZWwsIGhlaWdodFBpeGVsIH0gPSBib3JkZXI7XG4gIGZvcihsZXQgeSA6IG51bWJlciA9IDA7IHkgPCBuYlBpeGVsSGVpZ2h0OyB5ICs9IDEpIHtcbiAgICBjb25zdCBiaXRzQ29sb3IgPSBnZW5lcmF0ZVJvd0NvbG9ycyhuYlBpeGVsV2lkdGgsIGNvbG9yc1BhbGV0dGUpO1xuICAgIGZvcihsZXQgeDogbnVtYmVyID0gMDsgeCA8IGJpdHNDb2xvci5sZW5ndGg7IHggKz0gMSkge1xuICAgICAgY3JlYXRlU3F1YXJlKFxuICAgICAgICB7IHg6IHhPZmZzZXQgKyAoeCAqIHdpZHRoUGl4ZWwpLFxuICAgICAgICAgIHk6IHlPZmZzZXQgKyAoeSAqIGhlaWdodFBpeGVsKSxcbiAgICAgICAgICB3aWR0aFBpeGVsLFxuICAgICAgICAgIGhlaWdodFBpeGVsXG4gICAgICAgICB9LFxuICAgICAgICAgY29udGV4dCxcbiAgICAgICAgIGJpdHNDb2xvclt4XVxuICAgICAgKTtcbiAgICB9XG4gIH1cbn0iLCJcbmV4cG9ydCBmdW5jdGlvbiBnZXRDYW52YXMoY2FudmFzSWQ6IHN0cmluZyA9ICdjYW52YXMnKSA6IEhUTUxDYW52YXNFbGVtZW50IHwgbnVsbCB7XG4gIHJldHVybiBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChjYW52YXNJZCkgYXMgSFRNTENhbnZhc0VsZW1lbnQ7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBzZXRDYW52YXNTaXplKHdpZHRoOiBudW1iZXIsIGhlaWdodDogbnVtYmVyKSA6IHZvaWQgIHtcbiAgY29uc3QgY2FudmFzID0gZ2V0Q2FudmFzKCk7XG4gIGNhbnZhcy53aWR0aCA9IHdpZHRoO1xuICBjYW52YXMuaGVpZ2h0ID0gaGVpZ2h0O1xufVxuXG5leHBvcnQgZnVuY3Rpb24gZHJhdyhjYWxsYmFjazogKGN0eDogQ2FudmFzUmVuZGVyaW5nQ29udGV4dDJEKSA9PiB2b2lkKSA6IHZvaWQge1xuICBjb25zdCBjYW52YXMgPSBnZXRDYW52YXMoKTtcbiAgaWYgKGNhbnZhcy5nZXRDb250ZXh0KSB7XG4gICAgY29uc3QgY3R4ID0gY2FudmFzLmdldENvbnRleHQoJzJkJyk7XG4gICAgY2FsbGJhY2soY3R4KTtcbiAgfVxufVxuXG5leHBvcnQgZnVuY3Rpb24gY2hhbmdlQmFja2dyb3VuZENhbnZhcyhyYW5kb20gOiBib29sZWFuID0gZmFsc2UpIDogdm9pZCB7XG4gIGNvbnN0IGNhbnZhcyA9IGdldENhbnZhcygpO1xuICBpZihjYW52YXMuZ2V0Q29udGV4dCkge1xuICAgIGNvbnN0IGN0eCA9IGNhbnZhcy5nZXRDb250ZXh0KCcyZCcpO1xuICAgIGNvbnN0IGNvbG9yID0gcmFuZG9tID8gXG4gICAgICBgcmdiYShcbiAgICAgICAgICR7TWF0aC5yYW5kb20oKSAqIDI1NX0sXG4gICAgICAgICAke01hdGgucmFuZG9tKCkgKiAyNTV9LFxuICAgICAgICAgJHtNYXRoLnJhbmRvbSgpICogMjU1fSxcbiAgICAgICAgIDEpYDpcbiAgICAgICdyZ2JhKDIxMiwyNTUsMTU2LDEpJztcbiAgICBjdHguZmlsbFN0eWxlID0gY29sb3I7XG4gICAgY3R4LmZpbGxSZWN0KDAsMCx3aW5kb3cuaW5uZXJXaWR0aCx3aW5kb3cuaW5uZXJIZWlnaHQpO1xuICB9XG59IiwiaW1wb3J0IHsgY29sb3JJbnRlcmZhY2UgfSBmcm9tIFwiLi9hdmF0YXJcIjtcblxuZXhwb3J0IGZ1bmN0aW9uIGhleFRvUmdiKGhleDogc3RyaW5nKSA6IGNvbG9ySW50ZXJmYWNlIHtcbiAgdmFyIHJlc3VsdCA9IC9eIz8oW2EtZlxcZF17Mn0pKFthLWZcXGRdezJ9KShbYS1mXFxkXXsyfSkkL2kuZXhlYyhoZXgpO1xuICByZXR1cm4gcmVzdWx0ID8ge1xuICAgIHI6IHBhcnNlSW50KHJlc3VsdFsxXSwgMTYpLFxuICAgIGc6IHBhcnNlSW50KHJlc3VsdFsyXSwgMTYpLFxuICAgIGI6IHBhcnNlSW50KHJlc3VsdFszXSwgMTYpXG4gIH0gOiBudWxsO1xufSIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0Ly8gbm8gbW9kdWxlLmlkIG5lZWRlZFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiaW1wb3J0IHsgc2V0Q2FudmFzU2l6ZSwgY2hhbmdlQmFja2dyb3VuZENhbnZhcywgZ2V0Q2FudmFzLCBkcmF3IH0gZnJvbSBcIi4vY2FudmFzXCI7XG5pbXBvcnQgeyBjcmVhdGVJbnZhZGVyLCBjb2xvckludGVyZmFjZSB9IGZyb20gXCIuL2F2YXRhclwiO1xuaW1wb3J0IHsgaGV4VG9SZ2IgfSBmcm9tIFwiLi90b29sc1wiO1xuXG5mdW5jdGlvbiBsb2FkKCkge1xuIGNvbnN0IGNhbnZhcyA9IGdldENhbnZhcygpO1xuICBpZiAoY2FudmFzLmdldENvbnRleHQpIHtcbiAgICBjb25zdCBuYlBpeGVsV2lkdGggPSBuYlBpeGVsWCB8fCA4O1xuICAgIGNvbnN0IG5iUGl4ZWxIZWlnaHQgPSBuYlBpeGVsWSB8fCA4O1xuICAgIGNvbnN0IHdpZHRoUGl4ZWwgPSBNYXRoLmZsb29yKGNhbnZhcy53aWR0aCAvIG5iUGl4ZWxXaWR0aCk7XG4gICAgY29uc3Qgb2Zmc2V0V2lkdGggPSAoY2FudmFzLndpZHRoICUgbmJQaXhlbFdpZHRoKTtcbiAgICBcbiAgICBjb25zdCBoZWlnaHRQaXhlbCA9IE1hdGguZmxvb3IoY2FudmFzLmhlaWdodCAvIG5iUGl4ZWxIZWlnaHQpO1xuICAgIGNvbnN0IG9mZnNldEhlaWdodCA9IChjYW52YXMuaGVpZ2h0ICUgbmJQaXhlbEhlaWdodCk7XG5cbiAgICBjb25zdCBjb250ZXh0ID0gY2FudmFzLmdldENvbnRleHQoJzJkJyk7XG4gICAgLy8gcmVmcmVzaFxuICAgIGNvbnRleHQuY2xlYXJSZWN0KDAsIDAsIGNhbnZhcy53aWR0aCwgY2FudmFzLmhlaWdodCk7XG4gICAgXG4gICAgY3JlYXRlSW52YWRlcih7eDogb2Zmc2V0V2lkdGggLzIgLCB5OiBvZmZzZXRIZWlnaHQgLyAyLCB3aWR0aFBpeGVsLCBoZWlnaHRQaXhlbCB9LCBjb250ZXh0LCBuYlBpeGVsV2lkdGgsIG5iUGl4ZWxIZWlnaHQsIGNvbG9ycyk7XG4gIH1cbn1cblxuZnVuY3Rpb24gY2hhbmdlQ2FudmFzU2xpZGVyKHNpemU6IFwid2lkdGhcInwgXCJoZWlnaHRcIiwgZTogRXZlbnQpIDogdm9pZCB7XG4gIGNvbnN0IG5ld1ZhbHVlIDogbnVtYmVyID0gKGUgYXMgYW55KS50YXJnZXQudmFsdWU7XG4gIGlmKHNpemUgPT09IFwid2lkdGhcIikge1xuICAgIHdpZHRoQ2FudmFzID0gbmV3VmFsdWU7XG4gIH0gZWxzZSB7XG4gICAgaGVpZ2h0Q2FudmFzID0gbmV3VmFsdWU7XG4gIH1cbiAgc2V0Q2FudmFzU2l6ZSh3aWR0aENhbnZhcywgbmV3VmFsdWUpO1xufVxuXG5mdW5jdGlvbiBjaGFuZ2VQaXhlbFNsaWRlcihzaXplOiBcInhcInwgXCJ5XCIsIGU6IEV2ZW50KSA6IHZvaWQge1xuICBjb25zdCBuZXdWYWx1ZSA6IG51bWJlciA9IChlIGFzIGFueSkudGFyZ2V0LnZhbHVlO1xuICBpZihzaXplID09PSBcInhcIikge1xuICAgIG5iUGl4ZWxYID0gbmV3VmFsdWU7XG4gIH0gZWxzZSB7XG4gICAgbmJQaXhlbFkgPSBuZXdWYWx1ZTtcbiAgfVxufVxuXG5mdW5jdGlvbiBmZWVkQ29sb3JzKCkge1xuICBjb25zdCBuZXdDb2xvcnMgOiBjb2xvckludGVyZmFjZVtdID0gW107XG4gIEFycmF5LmZyb20oZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcImlucHV0W3R5cGU9Y29sb3JdXCIpKS5mb3JFYWNoKChpdGVtOiBIVE1MSW5wdXRFbGVtZW50LCBpbmRleDogbnVtYmVyKSA9PiB7XG4gICAgY29uc3QgY2hlY2tib3ggPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChgY29sb3ItJHtpbmRleCsxfWApIGFzIEhUTUxJbnB1dEVsZW1lbnQ7XG4gICAgaWYoY2hlY2tib3guY2hlY2tlZCkge1xuICAgICAgbmV3Q29sb3JzLnB1c2goaGV4VG9SZ2IoaXRlbS52YWx1ZSkpO1xuICAgIH1cbiAgfSk7XG4gIGNvbG9ycyA9IG5ld0NvbG9ycy5zbGljZSgpO1xuICBjb25zb2xlLmxvZyhjb2xvcnMpO1xufVxuXG5mdW5jdGlvbiBzYXZlSW1hZ2UoKSB7XG4gIGNvbnN0IGNhbnZhcyA9IGdldENhbnZhcygpO1xuICBpZihjYW52YXMpIHtcbiAgICBjb25zdCBpbWFnZSA9IGNhbnZhcy50b0RhdGFVUkwoXCJpbWFnZS9wbmdcIikucmVwbGFjZShcImltYWdlL3BuZ1wiLCBcImltYWdlL29jdGV0LXN0cmVhbVwiKTtcbiAgICB3aW5kb3cubG9jYXRpb24uaHJlZiA9IGltYWdlO1xuICB9IGVsc2Uge1xuICAgIGFsZXJ0KFwiY2FudmFzIG5vdCBkZXRlY3RlZFwiKTtcbiAgfVxufVxuXG4vLyBHTE9CQUxTIFZBUklBQkxFU1xubGV0IHdpZHRoQ2FudmFzID0gMDtcbmxldCBoZWlnaHRDYW52YXMgPSAwO1xubGV0IG5iUGl4ZWxYID0gMDtcbmxldCBuYlBpeGVsWSA9IDA7XG5sZXQgY29sb3JzIDpjb2xvckludGVyZmFjZVtdID0gW107XG53aW5kb3cub25sb2FkID0gZnVuY3Rpb24oKSB7XG4gIGZlZWRDb2xvcnMoKTtcbiAgbG9hZCgpO1xuICBcbiAgLy8gY29ubmVjdCBidXR0b24gKyBpbnB1dHNcbiAgY29uc3QgYnV0dG9uID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJyZXNldC1idXR0b25cIik7XG4gICBpZihidXR0b24pIHtcbiAgICAgYnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBsb2FkKTtcbiAgfVxuXG4gIGNvbnN0IHNhdmVCdXR0b24gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInNhdmUtYnV0dG9uXCIpO1xuICAgaWYoc2F2ZUJ1dHRvbikge1xuICAgICBzYXZlQnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBzYXZlSW1hZ2UpO1xuICB9XG5cbiAgY29uc3QgaW5wdXRXaWR0aCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwid2lkdGhDYW52YXNcIik7XG4gIGlmKGlucHV0V2lkdGgpIHtcbiAgICBpbnB1dFdpZHRoLmFkZEV2ZW50TGlzdGVuZXIoXCJjaGFuZ2VcIiwgKGUpID0+IHsgY2hhbmdlQ2FudmFzU2xpZGVyKFwid2lkdGhcIiwgZSk7IGxvYWQoKSB9KTtcbiAgfVxuICBjb25zdCBpbnB1dEhlaWdodCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiaGVpZ2h0Q2FudmFzXCIpO1xuICBpZihpbnB1dEhlaWdodCkge1xuICAgIGlucHV0SGVpZ2h0LmFkZEV2ZW50TGlzdGVuZXIoXCJjaGFuZ2VcIiwgKGUpID0+IHsgY2hhbmdlQ2FudmFzU2xpZGVyKFwiaGVpZ2h0XCIsIGUpOyBsb2FkKCkgfSk7XG4gIH1cblxuICBjb25zdCBpbnB1dFBpeGVsWCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwibmJQaXhlbFhcIik7XG4gIGlmKGlucHV0UGl4ZWxYKSB7XG4gICAgaW5wdXRQaXhlbFguYWRkRXZlbnRMaXN0ZW5lcihcImNoYW5nZVwiLCAoZSkgPT4geyBjaGFuZ2VQaXhlbFNsaWRlcihcInhcIiwgZSk7IGxvYWQoKSB9KTtcbiAgfVxuICBjb25zdCBpbnB1dFBpeGVsWSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwibmJQaXhlbFlcIik7XG4gIGlmKGlucHV0UGl4ZWxZKSB7XG4gICAgaW5wdXRQaXhlbFkuYWRkRXZlbnRMaXN0ZW5lcihcImNoYW5nZVwiLCAoZSkgPT4geyBjaGFuZ2VQaXhlbFNsaWRlcihcInlcIiwgZSk7IGxvYWQoKSB9KTtcbiAgfVxuXG4gIC8vY29ubmVjdCBlYWNoIGNvbG9yIGlucHV0XG4gIEFycmF5LmZyb20oZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcImlucHV0W3R5cGU9Y29sb3JdXCIpKS5mb3JFYWNoKCAoaXRlbTogSFRNTElucHV0RWxlbWVudCkgPT4ge1xuICAgIGl0ZW0uYWRkRXZlbnRMaXN0ZW5lcihcImNoYW5nZVwiLCBmZWVkQ29sb3JzKTtcbiAgfSlcbiAgLy90aGVuIGNvbG9ycyBjaGVja2JveGVzIGNoZWNrYm94XG4gIEFycmF5LmZyb20oZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcImlucHV0W3R5cGU9Y2hlY2tib3hdXCIpKS5mb3JFYWNoKCAoaXRlbTogSFRNTElucHV0RWxlbWVudCkgPT4ge1xuICAgIGl0ZW0uYWRkRXZlbnRMaXN0ZW5lcihcImNoYW5nZVwiLCBmZWVkQ29sb3JzKTtcbiAgfSlcblxufTtcblxuIl0sInNvdXJjZVJvb3QiOiIifQ==