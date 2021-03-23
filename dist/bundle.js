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
        document.getElementById("widthCanvasValue").textContent = newValue.toString();
    }
    else {
        heightCanvas = newValue;
        document.getElementById("heightCanvasValue").textContent = newValue.toString();
    }
    (0,_canvas__WEBPACK_IMPORTED_MODULE_0__.setCanvasSize)(widthCanvas, newValue);
}
function changePixelSlider(size, e) {
    var newValue = e.target.value;
    if (size === "x") {
        nbPixelX = newValue;
        document.getElementById("nbPixelXValue").textContent = newValue.toString();
    }
    else {
        nbPixelY = newValue;
        document.getElementById("nbPixelYValue").textContent = newValue.toString();
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9hdmF0YXItZ2VuZXJhdG9yLy4vc3JjL2F2YXRhci50cyIsIndlYnBhY2s6Ly9hdmF0YXItZ2VuZXJhdG9yLy4vc3JjL2NhbnZhcy50cyIsIndlYnBhY2s6Ly9hdmF0YXItZ2VuZXJhdG9yLy4vc3JjL3Rvb2xzLnRzIiwid2VicGFjazovL2F2YXRhci1nZW5lcmF0b3Ivd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vYXZhdGFyLWdlbmVyYXRvci93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vYXZhdGFyLWdlbmVyYXRvci93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL2F2YXRhci1nZW5lcmF0b3Ivd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly9hdmF0YXItZ2VuZXJhdG9yLy4vc3JjL2luZGV4LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7O0FBY0EsSUFBTSxLQUFLLEdBQW9CLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUMsQ0FBQyxFQUFFLENBQUMsRUFBQyxDQUFDLEVBQUUsQ0FBQztBQUVsRCxTQUFTLFdBQVc7SUFDbEIsT0FBTyxFQUFFLENBQUMsRUFBRSxJQUFJLENBQUMsTUFBTSxFQUFFLEdBQUcsR0FBRyxFQUFFLENBQUMsRUFBRSxJQUFJLENBQUMsTUFBTSxFQUFFLEdBQUcsR0FBRyxFQUFFLENBQUMsRUFBRSxJQUFJLENBQUMsTUFBTSxFQUFFLEdBQUcsR0FBRyxFQUFFLENBQUM7QUFDcEYsQ0FBQztBQUVELFNBQVMsa0JBQWtCLENBQUMsTUFBd0I7SUFDbEQsT0FBTyxNQUFNLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsTUFBTSxFQUFFLEdBQUcsTUFBTSxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUM7QUFDM0QsQ0FB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QWdCLENBQUMsUUFBUSxFQUFFLFVBQUMsQ0FBQyxJQUFPLGlCQUFpQixDQUFDLEdBQUcsRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksRUFBRSxFQUFDLENBQUMsQ0FBQyxDQUFDO0tBQ3RGO0lBQ0QsSUFBTSxXQUFXLEdBQUcsUUFBUSxDQUFDLGNBQWMsQ0FBQyxVQUFVLENBQUMsQ0FBQztJQUN4RCxJQUFHLFdBQVcsRUFBRTtRQUNkLFdBQVcsQ0FBQyxnQkFBZ0IsQ0FBQyxRQUFRLEVBQUUsVUFBQyxDQUFDLElBQU8saUJBQWlCLENBQUMsR0FBRyxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxFQUFFLEVBQUMsQ0FBQyxDQUFDLENBQUM7S0FDdEY7SUFFRCwwQkFBMEI7SUFDMUIsS0FBSyxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsZ0JBQWdCLENBQUMsbUJBQW1CLENBQUMsQ0FBQyxDQUFDLE9BQU8sQ0FBRSxVQUFDLElBQXNCO1FBQ3pGLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxRQUFRLEVBQUUsVUFBVSxDQUFDLENBQUM7SUFDOUMsQ0FBQyxDQUFDO0lBQ0YsaUNBQWlDO0lBQ2pDLEtBQUssQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLGdCQUFnQixDQUFDLHNCQUFzQixDQUFDLENBQUMsQ0FBQyxPQUFPLENBQUUsVUFBQyxJQUFzQjtRQUM1RixJQUFJLENBQUMsZ0JBQWdCLENBQUMsUUFBUSxFQUFFLFVBQVUsQ0FBQyxDQUFDO0lBQzlDLENBQUMsQ0FBQztBQUVKLENBQUMsQ0FBQyIsImZpbGUiOiJidW5kbGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbnRlcmZhY2UgYm9yZGVySW50ZXJmYWNlIHtcbiAgeDogbnVtYmVyO1xuICB5OiBudW1iZXI7XG4gIHdpZHRoUGl4ZWw6IG51bWJlcjtcbiAgaGVpZ2h0UGl4ZWw6IG51bWJlcjtcbn1cblxuZXhwb3J0IGludGVyZmFjZSBjb2xvckludGVyZmFjZSB7XG4gIHI6IG51bWJlcjtcbiAgZzogbnVtYmVyO1xuICBiOiBudW1iZXI7XG59XG5cblxuY29uc3QgQkxBQ0sgOiBjb2xvckludGVyZmFjZSA9IHsgcjogMCwgZzowLCBiOjAgfTtcblxuZnVuY3Rpb24gcmFuZG9tQ29sb3IoKSA6IGNvbG9ySW50ZXJmYWNlIHtcbiAgcmV0dXJuIHsgcjogTWF0aC5yYW5kb20oKSAqIDI1NSwgZzogTWF0aC5yYW5kb20oKSAqIDI1NSwgYjogTWF0aC5yYW5kb20oKSAqIDI1NSB9O1xufVxuXG5mdW5jdGlvbiByYW5kb21JbkFycmF5Q29sb3IoY29sb3JzOiBjb2xvckludGVyZmFjZVtdKSA6IGNvbG9ySW50ZXJmYWNlIHtcbiAgcmV0dXJuIGNvbG9yc1tNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiBjb2xvcnMubGVuZ3RoKV07XG59IFxuXG5cbmZ1bmN0aW9uIGNyZWF0ZVNxdWFyZShib3JkZXI6IGJvcmRlckludGVyZmFjZSwgY29udGV4dDogQ2FudmFzUmVuZGVyaW5nQ29udGV4dDJELCBjb2xvcjogY29sb3JJbnRlcmZhY2UpIDogdm9pZCB7XG4gIGNvbnRleHQuZmlsbFN0eWxlID0gYHJnYigke2NvbG9yLnJ9LCAke2NvbG9yLmd9LCAke2NvbG9yLmJ9KWA7XG4gIGNvbnRleHQuZmlsbFJlY3QoYm9yZGVyLngsIGJvcmRlci55LCBib3JkZXIud2lkdGhQaXhlbCwgYm9yZGVyLmhlaWdodFBpeGVsKTtcbn1cblxuXG5mdW5jdGlvbiBnZW5lcmF0ZVJvd0NvbG9ycyhuYlBpeGVsV2lkdGg6IG51bWJlciwgY29sb3JzUGFsZXR0ZTogY29sb3JJbnRlcmZhY2VbXSkgOiBjb2xvckludGVyZmFjZVtdIHtcbiAgbGV0IGJpdHNDb2xvciA6IGNvbG9ySW50ZXJmYWNlW10gPSBbXTtcbiAgZm9yKGxldCBpID0gMDsgaSA8IE1hdGguZmxvb3IobmJQaXhlbFdpZHRoLzIpOyBpKyspIHtcbiAgICBiaXRzQ29sb3IucHVzaChyYW5kb21JbkFycmF5Q29sb3IoY29sb3JzUGFsZXR0ZSkpO1xuICB9XG5cbiAgYml0c0NvbG9yLnNsaWNlKDApLnJldmVyc2UoKS5mb3JFYWNoKChiaXQpID0+IGJpdHNDb2xvci5wdXNoKGJpdCkpO1xuXG4gIC8vIGFkZCBvbmUgbW9yZSBiaXRzIGZvciBvZGRzIHdpZHRoXG4gIGlmKG5iUGl4ZWxXaWR0aCAlIDIgIT09IDApIHtcbiAgICBiaXRzQ29sb3Iuc3BsaWNlKE1hdGguZmxvb3IobmJQaXhlbFdpZHRoLzIpICsgMSwgMCwgcmFuZG9tSW5BcnJheUNvbG9yKGNvbG9yc1BhbGV0dGUpKTtcbiAgfVxuXG4gIHJldHVybiBiaXRzQ29sb3I7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBjcmVhdGVJbnZhZGVyKGJvcmRlciA6IGJvcmRlckludGVyZmFjZSwgY29udGV4dDogQ2FudmFzUmVuZGVyaW5nQ29udGV4dDJELCBuYlBpeGVsV2lkdGg6IG51bWJlciwgbmJQaXhlbEhlaWdodDogbnVtYmVyLCBjb2xvcnNQYWxldHRlOiBjb2xvckludGVyZmFjZVtdKSA6IHZvaWQge1xuICBjb25zdCB7IHg6IHhPZmZzZXQgLCB5OiB5T2Zmc2V0ICwgd2lkdGhQaXhlbCwgaGVpZ2h0UGl4ZWwgfSA9IGJvcmRlcjtcbiAgZm9yKGxldCB5IDogbnVtYmVyID0gMDsgeSA8IG5iUGl4ZWxIZWlnaHQ7IHkgKz0gMSkge1xuICAgIGNvbnN0IGJpdHNDb2xvciA9IGdlbmVyYXRlUm93Q29sb3JzKG5iUGl4ZWxXaWR0aCwgY29sb3JzUGFsZXR0ZSk7XG4gICAgZm9yKGxldCB4OiBudW1iZXIgPSAwOyB4IDwgYml0c0NvbG9yLmxlbmd0aDsgeCArPSAxKSB7XG4gICAgICBjcmVhdGVTcXVhcmUoXG4gICAgICAgIHsgeDogeE9mZnNldCArICh4ICogd2lkdGhQaXhlbCksXG4gICAgICAgICAgeTogeU9mZnNldCArICh5ICogaGVpZ2h0UGl4ZWwpLFxuICAgICAgICAgIHdpZHRoUGl4ZWwsXG4gICAgICAgICAgaGVpZ2h0UGl4ZWxcbiAgICAgICAgIH0sXG4gICAgICAgICBjb250ZXh0LFxuICAgICAgICAgYml0c0NvbG9yW3hdXG4gICAgICApO1xuICAgIH1cbiAgfVxufSIsIlxuZXhwb3J0IGZ1bmN0aW9uIGdldENhbnZhcyhjYW52YXNJZDogc3RyaW5nID0gJ2NhbnZhcycpIDogSFRNTENhbnZhc0VsZW1lbnQgfCBudWxsIHtcbiAgcmV0dXJuIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKGNhbnZhc0lkKSBhcyBIVE1MQ2FudmFzRWxlbWVudDtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHNldENhbnZhc1NpemUod2lkdGg6IG51bWJlciwgaGVpZ2h0OiBudW1iZXIpIDogdm9pZCAge1xuICBjb25zdCBjYW52YXMgPSBnZXRDYW52YXMoKTtcbiAgY2FudmFzLndpZHRoID0gd2lkdGg7XG4gIGNhbnZhcy5oZWlnaHQgPSBoZWlnaHQ7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBkcmF3KGNhbGxiYWNrOiAoY3R4OiBDYW52YXNSZW5kZXJpbmdDb250ZXh0MkQpID0+IHZvaWQpIDogdm9pZCB7XG4gIGNvbnN0IGNhbnZhcyA9IGdldENhbnZhcygpO1xuICBpZiAoY2FudmFzLmdldENvbnRleHQpIHtcbiAgICBjb25zdCBjdHggPSBjYW52YXMuZ2V0Q29udGV4dCgnMmQnKTtcbiAgICBjYWxsYmFjayhjdHgpO1xuICB9XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBjaGFuZ2VCYWNrZ3JvdW5kQ2FudmFzKHJhbmRvbSA6IGJvb2xlYW4gPSBmYWxzZSkgOiB2b2lkIHtcbiAgY29uc3QgY2FudmFzID0gZ2V0Q2FudmFzKCk7XG4gIGlmKGNhbnZhcy5nZXRDb250ZXh0KSB7XG4gICAgY29uc3QgY3R4ID0gY2FudmFzLmdldENvbnRleHQoJzJkJyk7XG4gICAgY29uc3QgY29sb3IgPSByYW5kb20gPyBcbiAgICAgIGByZ2JhKFxuICAgICAgICAgJHtNYXRoLnJhbmRvbSgpICogMjU1fSxcbiAgICAgICAgICR7TWF0aC5yYW5kb20oKSAqIDI1NX0sXG4gICAgICAgICAke01hdGgucmFuZG9tKCkgKiAyNTV9LFxuICAgICAgICAgMSlgOlxuICAgICAgJ3JnYmEoMjEyLDI1NSwxNTYsMSknO1xuICAgIGN0eC5maWxsU3R5bGUgPSBjb2xvcjtcbiAgICBjdHguZmlsbFJlY3QoMCwwLHdpbmRvdy5pbm5lcldpZHRoLHdpbmRvdy5pbm5lckhlaWdodCk7XG4gIH1cbn0iLCJpbXBvcnQgeyBjb2xvckludGVyZmFjZSB9IGZyb20gXCIuL2F2YXRhclwiO1xuXG5leHBvcnQgZnVuY3Rpb24gaGV4VG9SZ2IoaGV4OiBzdHJpbmcpIDogY29sb3JJbnRlcmZhY2Uge1xuICB2YXIgcmVzdWx0ID0gL14jPyhbYS1mXFxkXXsyfSkoW2EtZlxcZF17Mn0pKFthLWZcXGRdezJ9KSQvaS5leGVjKGhleCk7XG4gIHJldHVybiByZXN1bHQgPyB7XG4gICAgcjogcGFyc2VJbnQocmVzdWx0WzFdLCAxNiksXG4gICAgZzogcGFyc2VJbnQocmVzdWx0WzJdLCAxNiksXG4gICAgYjogcGFyc2VJbnQocmVzdWx0WzNdLCAxNilcbiAgfSA6IG51bGw7XG59IiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHQvLyBubyBtb2R1bGUuaWQgbmVlZGVkXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJpbXBvcnQgeyBzZXRDYW52YXNTaXplLCBjaGFuZ2VCYWNrZ3JvdW5kQ2FudmFzLCBnZXRDYW52YXMsIGRyYXcgfSBmcm9tIFwiLi9jYW52YXNcIjtcbmltcG9ydCB7IGNyZWF0ZUludmFkZXIsIGNvbG9ySW50ZXJmYWNlIH0gZnJvbSBcIi4vYXZhdGFyXCI7XG5pbXBvcnQgeyBoZXhUb1JnYiB9IGZyb20gXCIuL3Rvb2xzXCI7XG5cbmZ1bmN0aW9uIGxvYWQoKSB7XG4gY29uc3QgY2FudmFzID0gZ2V0Q2FudmFzKCk7XG4gIGlmIChjYW52YXMuZ2V0Q29udGV4dCkge1xuICAgIGNvbnN0IG5iUGl4ZWxXaWR0aCA9IG5iUGl4ZWxYIHx8IDg7XG4gICAgY29uc3QgbmJQaXhlbEhlaWdodCA9IG5iUGl4ZWxZIHx8IDg7XG4gICAgY29uc3Qgd2lkdGhQaXhlbCA9IE1hdGguZmxvb3IoY2FudmFzLndpZHRoIC8gbmJQaXhlbFdpZHRoKTtcbiAgICBjb25zdCBvZmZzZXRXaWR0aCA9IChjYW52YXMud2lkdGggJSBuYlBpeGVsV2lkdGgpO1xuICAgIFxuICAgIGNvbnN0IGhlaWdodFBpeGVsID0gTWF0aC5mbG9vcihjYW52YXMuaGVpZ2h0IC8gbmJQaXhlbEhlaWdodCk7XG4gICAgY29uc3Qgb2Zmc2V0SGVpZ2h0ID0gKGNhbnZhcy5oZWlnaHQgJSBuYlBpeGVsSGVpZ2h0KTtcblxuICAgIGNvbnN0IGNvbnRleHQgPSBjYW52YXMuZ2V0Q29udGV4dCgnMmQnKTtcbiAgICAvLyByZWZyZXNoXG4gICAgY29udGV4dC5jbGVhclJlY3QoMCwgMCwgY2FudmFzLndpZHRoLCBjYW52YXMuaGVpZ2h0KTtcbiAgICBcbiAgICBjcmVhdGVJbnZhZGVyKHt4OiBvZmZzZXRXaWR0aCAvMiAsIHk6IG9mZnNldEhlaWdodCAvIDIsIHdpZHRoUGl4ZWwsIGhlaWdodFBpeGVsIH0sIGNvbnRleHQsIG5iUGl4ZWxXaWR0aCwgbmJQaXhlbEhlaWdodCwgY29sb3JzKTtcbiAgfVxufVxuXG5mdW5jdGlvbiBjaGFuZ2VDYW52YXNTbGlkZXIoc2l6ZTogXCJ3aWR0aFwifCBcImhlaWdodFwiLCBlOiBFdmVudCkgOiB2b2lkIHtcbiAgY29uc3QgbmV3VmFsdWUgOiBudW1iZXIgPSAoZSBhcyBhbnkpLnRhcmdldC52YWx1ZTtcbiAgaWYoc2l6ZSA9PT0gXCJ3aWR0aFwiKSB7XG4gICAgd2lkdGhDYW52YXMgPSBuZXdWYWx1ZTtcbiAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcIndpZHRoQ2FudmFzVmFsdWVcIikudGV4dENvbnRlbnQgPSBuZXdWYWx1ZS50b1N0cmluZygpO1xuICB9IGVsc2Uge1xuICAgIGhlaWdodENhbnZhcyA9IG5ld1ZhbHVlO1xuICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiaGVpZ2h0Q2FudmFzVmFsdWVcIikudGV4dENvbnRlbnQgPSBuZXdWYWx1ZS50b1N0cmluZygpO1xuICB9XG4gIHNldENhbnZhc1NpemUod2lkdGhDYW52YXMsIG5ld1ZhbHVlKTtcbn1cblxuZnVuY3Rpb24gY2hhbmdlUGl4ZWxTbGlkZXIoc2l6ZTogXCJ4XCJ8IFwieVwiLCBlOiBFdmVudCkgOiB2b2lkIHtcbiAgY29uc3QgbmV3VmFsdWUgOiBudW1iZXIgPSAoZSBhcyBhbnkpLnRhcmdldC52YWx1ZTtcbiAgaWYoc2l6ZSA9PT0gXCJ4XCIpIHtcbiAgICBuYlBpeGVsWCA9IG5ld1ZhbHVlO1xuICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwibmJQaXhlbFhWYWx1ZVwiKS50ZXh0Q29udGVudCA9IG5ld1ZhbHVlLnRvU3RyaW5nKCk7XG4gIH0gZWxzZSB7XG4gICAgbmJQaXhlbFkgPSBuZXdWYWx1ZTtcbiAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcIm5iUGl4ZWxZVmFsdWVcIikudGV4dENvbnRlbnQgPSBuZXdWYWx1ZS50b1N0cmluZygpO1xuICB9XG59XG5cbmZ1bmN0aW9uIGZlZWRDb2xvcnMoKSB7XG4gIGNvbnN0IG5ld0NvbG9ycyA6IGNvbG9ySW50ZXJmYWNlW10gPSBbXTtcbiAgQXJyYXkuZnJvbShkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiaW5wdXRbdHlwZT1jb2xvcl1cIikpLmZvckVhY2goKGl0ZW06IEhUTUxJbnB1dEVsZW1lbnQsIGluZGV4OiBudW1iZXIpID0+IHtcbiAgICBjb25zdCBjaGVja2JveCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKGBjb2xvci0ke2luZGV4KzF9YCkgYXMgSFRNTElucHV0RWxlbWVudDtcbiAgICBpZihjaGVja2JveC5jaGVja2VkKSB7XG4gICAgICBuZXdDb2xvcnMucHVzaChoZXhUb1JnYihpdGVtLnZhbHVlKSk7XG4gICAgfVxuICB9KTtcbiAgY29sb3JzID0gbmV3Q29sb3JzLnNsaWNlKCk7XG4gIGNvbnNvbGUubG9nKGNvbG9ycyk7XG59XG5cbmZ1bmN0aW9uIHNhdmVJbWFnZSgpIHtcbiAgY29uc3QgY2FudmFzID0gZ2V0Q2FudmFzKCk7XG4gIGlmKGNhbnZhcykge1xuICAgIGNvbnN0IGltYWdlID0gY2FudmFzLnRvRGF0YVVSTChcImltYWdlL3BuZ1wiKS5yZXBsYWNlKFwiaW1hZ2UvcG5nXCIsIFwiaW1hZ2Uvb2N0ZXQtc3RyZWFtXCIpO1xuICAgIHdpbmRvdy5sb2NhdGlvbi5ocmVmID0gaW1hZ2U7XG4gIH0gZWxzZSB7XG4gICAgYWxlcnQoXCJjYW52YXMgbm90IGRldGVjdGVkXCIpO1xuICB9XG59XG5cbi8vIEdMT0JBTFMgVkFSSUFCTEVTXG5sZXQgd2lkdGhDYW52YXMgPSAwO1xubGV0IGhlaWdodENhbnZhcyA9IDA7XG5sZXQgbmJQaXhlbFggPSAwO1xubGV0IG5iUGl4ZWxZID0gMDtcbmxldCBjb2xvcnMgOmNvbG9ySW50ZXJmYWNlW10gPSBbXTtcbndpbmRvdy5vbmxvYWQgPSBmdW5jdGlvbigpIHtcbiAgZmVlZENvbG9ycygpO1xuICBsb2FkKCk7XG4gIFxuICAvLyBjb25uZWN0IGJ1dHRvbiArIGlucHV0c1xuICBjb25zdCBidXR0b24gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInJlc2V0LWJ1dHRvblwiKTtcbiAgIGlmKGJ1dHRvbikge1xuICAgICBidXR0b24uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGxvYWQpO1xuICB9XG5cbiAgY29uc3Qgc2F2ZUJ1dHRvbiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwic2F2ZS1idXR0b25cIik7XG4gICBpZihzYXZlQnV0dG9uKSB7XG4gICAgIHNhdmVCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIHNhdmVJbWFnZSk7XG4gIH1cblxuICBjb25zdCBpbnB1dFdpZHRoID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJ3aWR0aENhbnZhc1wiKTtcbiAgaWYoaW5wdXRXaWR0aCkge1xuICAgIGlucHV0V2lkdGguYWRkRXZlbnRMaXN0ZW5lcihcImNoYW5nZVwiLCAoZSkgPT4geyBjaGFuZ2VDYW52YXNTbGlkZXIoXCJ3aWR0aFwiLCBlKTsgbG9hZCgpIH0pO1xuICB9XG4gIGNvbnN0IGlucHV0SGVpZ2h0ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJoZWlnaHRDYW52YXNcIik7XG4gIGlmKGlucHV0SGVpZ2h0KSB7XG4gICAgaW5wdXRIZWlnaHQuYWRkRXZlbnRMaXN0ZW5lcihcImNoYW5nZVwiLCAoZSkgPT4geyBjaGFuZ2VDYW52YXNTbGlkZXIoXCJoZWlnaHRcIiwgZSk7IGxvYWQoKSB9KTtcbiAgfVxuXG4gIGNvbnN0IGlucHV0UGl4ZWxYID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJuYlBpeGVsWFwiKTtcbiAgaWYoaW5wdXRQaXhlbFgpIHtcbiAgICBpbnB1dFBpeGVsWC5hZGRFdmVudExpc3RlbmVyKFwiY2hhbmdlXCIsIChlKSA9PiB7IGNoYW5nZVBpeGVsU2xpZGVyKFwieFwiLCBlKTsgbG9hZCgpIH0pO1xuICB9XG4gIGNvbnN0IGlucHV0UGl4ZWxZID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJuYlBpeGVsWVwiKTtcbiAgaWYoaW5wdXRQaXhlbFkpIHtcbiAgICBpbnB1dFBpeGVsWS5hZGRFdmVudExpc3RlbmVyKFwiY2hhbmdlXCIsIChlKSA9PiB7IGNoYW5nZVBpeGVsU2xpZGVyKFwieVwiLCBlKTsgbG9hZCgpIH0pO1xuICB9XG5cbiAgLy9jb25uZWN0IGVhY2ggY29sb3IgaW5wdXRcbiAgQXJyYXkuZnJvbShkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiaW5wdXRbdHlwZT1jb2xvcl1cIikpLmZvckVhY2goIChpdGVtOiBIVE1MSW5wdXRFbGVtZW50KSA9PiB7XG4gICAgaXRlbS5hZGRFdmVudExpc3RlbmVyKFwiY2hhbmdlXCIsIGZlZWRDb2xvcnMpO1xuICB9KVxuICAvL3RoZW4gY29sb3JzIGNoZWNrYm94ZXMgY2hlY2tib3hcbiAgQXJyYXkuZnJvbShkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiaW5wdXRbdHlwZT1jaGVja2JveF1cIikpLmZvckVhY2goIChpdGVtOiBIVE1MSW5wdXRFbGVtZW50KSA9PiB7XG4gICAgaXRlbS5hZGRFdmVudExpc3RlbmVyKFwiY2hhbmdlXCIsIGZlZWRDb2xvcnMpO1xuICB9KVxuXG59O1xuXG4iXSwic291cmNlUm9vdCI6IiJ9