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
        bitsColor.splice(Math.floor(nbPixelWidth / 2), 0, randomInArrayColor(colorsPalette));
    }
    return bitsColor;
}
function createInvader(border, context, nbPixelWidth, nbPixelHeight, colorsPalette) {
    var xOffset = border.x, yOffset = border.y, widthPixel = border.widthPixel, heightPixel = border.heightPixel;
    console.log(border);
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
        var context = canvas.getContext('2d');
        // refresh
        context.clearRect(0, 0, canvas.width, canvas.height);
        // only one avatar
        if (repetition === 1) {
            var avatarWidth = Math.floor(canvas.width / nbPixelWidth);
            var offsetWidth = (canvas.width % nbPixelWidth);
            var avatarHeight = Math.floor(canvas.height / nbPixelHeight);
            var offsetHeight = (canvas.height % nbPixelHeight);
            (0,_avatar__WEBPACK_IMPORTED_MODULE_1__.createInvader)({ x: offsetWidth / 2, y: offsetHeight / 2, widthPixel: avatarWidth, heightPixel: avatarWidth }, context, nbPixelWidth, nbPixelHeight, colors);
        }
        else { // patchwork
            var avatarWidth = canvas.width / repetition;
            var avatarHeight = canvas.height / repetition;
            var widthPixel = Math.floor(avatarWidth / nbPixelWidth);
            var offsetWidth = avatarWidth % nbPixelWidth;
            var heightPixel = Math.floor(avatarHeight / nbPixelHeight);
            var offsetHeight = (avatarHeight % nbPixelHeight);
            for (var _x = 0; _x < repetition; _x += 1) {
                for (var _y = 0; _y < repetition; _y += 1) {
                    (0,_avatar__WEBPACK_IMPORTED_MODULE_1__.createInvader)({ x: (offsetWidth / 2) + _x * avatarWidth, y: (offsetHeight / 2) + _y * avatarHeight, widthPixel: widthPixel, heightPixel: heightPixel }, context, nbPixelWidth, nbPixelHeight, colors);
                }
            }
        }
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
}
function changeRepetition(e) {
    var newValue = e.target.value;
    document.getElementById("repetitionValue").textContent = newValue.toString();
    repetition = newValue;
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
var repetition = 1;
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
    var repetition = document.getElementById("repetition");
    if (repetition) {
        repetition.addEventListener("change", function (e) { changeRepetition(e); load(); });
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9hdmF0YXItZ2VuZXJhdG9yLy4vc3JjL2F2YXRhci50cyIsIndlYnBhY2s6Ly9hdmF0YXItZ2VuZXJhdG9yLy4vc3JjL2NhbnZhcy50cyIsIndlYnBhY2s6Ly9hdmF0YXItZ2VuZXJhdG9yLy4vc3JjL3Rvb2xzLnRzIiwid2VicGFjazovL2F2YXRhci1nZW5lcmF0b3Ivd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vYXZhdGFyLWdlbmVyYXRvci93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vYXZhdGFyLWdlbmVyYXRvci93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL2F2YXRhci1nZW5lcmF0b3Ivd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly9hdmF0YXItZ2VuZXJhdG9yLy4vc3JjL2luZGV4LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7O0FBY0EsSUFBTSxLQUFLLEdBQW9CLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUMsQ0FBQyxFQUFFLENBQUMsRUFBQyxDQUFDLEVBQUUsQ0FBQztBQUVsRCxTQUFTLFdBQVc7SUFDbEIsT0FBTyxFQUFFLENBQUMsRUFBRSxJQUFJLENBQUMsTUFBTSxFQUFFLEdBQUcsR0FBRyxFQUFFLENBQUMsRUFBRSxJQUFJLENBQUMsTUFBTSxFQUFFLEdBQUcsR0FBRyxFQUFFLENBQUMsRUFBRSxJQUFJLENBQUMsTUFBTSxFQUFFLEdBQUcsR0FBRyxFQUFFLENBQUM7QUFDcEYsQ0FBQztBQUVELFNBQVMsa0JBQWtCLENBQUMsTUFBd0I7SUFDbEQsT0FBTyxNQUFNLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsTUFBTSxFQUFFLEdBQUcsTUFBTSxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUM7QUFDM0QsQ0FB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QyxnQkFBZ0IsQ0FBQyxRQUFRLEVBQUUsVUFBVSxDQUFDLENBQUM7SUFDOUMsQ0FBQyxDQUFDO0FBRUosQ0FBQyxDQUFDIiwiZmlsZSI6ImJ1bmRsZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImludGVyZmFjZSBib3JkZXJJbnRlcmZhY2Uge1xuICB4OiBudW1iZXI7XG4gIHk6IG51bWJlcjtcbiAgd2lkdGhQaXhlbDogbnVtYmVyO1xuICBoZWlnaHRQaXhlbDogbnVtYmVyO1xufVxuXG5leHBvcnQgaW50ZXJmYWNlIGNvbG9ySW50ZXJmYWNlIHtcbiAgcjogbnVtYmVyO1xuICBnOiBudW1iZXI7XG4gIGI6IG51bWJlcjtcbn1cblxuXG5jb25zdCBCTEFDSyA6IGNvbG9ySW50ZXJmYWNlID0geyByOiAwLCBnOjAsIGI6MCB9O1xuXG5mdW5jdGlvbiByYW5kb21Db2xvcigpIDogY29sb3JJbnRlcmZhY2Uge1xuICByZXR1cm4geyByOiBNYXRoLnJhbmRvbSgpICogMjU1LCBnOiBNYXRoLnJhbmRvbSgpICogMjU1LCBiOiBNYXRoLnJhbmRvbSgpICogMjU1IH07XG59XG5cbmZ1bmN0aW9uIHJhbmRvbUluQXJyYXlDb2xvcihjb2xvcnM6IGNvbG9ySW50ZXJmYWNlW10pIDogY29sb3JJbnRlcmZhY2Uge1xuICByZXR1cm4gY29sb3JzW01hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIGNvbG9ycy5sZW5ndGgpXTtcbn0gXG5cblxuZnVuY3Rpb24gY3JlYXRlU3F1YXJlKGJvcmRlcjogYm9yZGVySW50ZXJmYWNlLCBjb250ZXh0OiBDYW52YXNSZW5kZXJpbmdDb250ZXh0MkQsIGNvbG9yOiBjb2xvckludGVyZmFjZSkgOiB2b2lkIHtcbiAgY29udGV4dC5maWxsU3R5bGUgPSBgcmdiKCR7Y29sb3Iucn0sICR7Y29sb3IuZ30sICR7Y29sb3IuYn0pYDtcbiAgY29udGV4dC5maWxsUmVjdChib3JkZXIueCwgYm9yZGVyLnksIGJvcmRlci53aWR0aFBpeGVsLCBib3JkZXIuaGVpZ2h0UGl4ZWwpO1xufVxuXG5cbmZ1bmN0aW9uIGdlbmVyYXRlUm93Q29sb3JzKG5iUGl4ZWxXaWR0aDogbnVtYmVyLCBjb2xvcnNQYWxldHRlOiBjb2xvckludGVyZmFjZVtdKSA6IGNvbG9ySW50ZXJmYWNlW10ge1xuICBsZXQgYml0c0NvbG9yIDogY29sb3JJbnRlcmZhY2VbXSA9IFtdO1xuICBmb3IobGV0IGkgPSAwOyBpIDwgTWF0aC5mbG9vcihuYlBpeGVsV2lkdGgvMik7IGkrKykge1xuICAgIGJpdHNDb2xvci5wdXNoKHJhbmRvbUluQXJyYXlDb2xvcihjb2xvcnNQYWxldHRlKSk7XG4gIH1cblxuICBiaXRzQ29sb3Iuc2xpY2UoMCkucmV2ZXJzZSgpLmZvckVhY2goKGJpdCkgPT4gYml0c0NvbG9yLnB1c2goYml0KSk7XG5cbiAgLy8gYWRkIG9uZSBtb3JlIGJpdHMgZm9yIG9kZHMgd2lkdGhcbiAgaWYobmJQaXhlbFdpZHRoICUgMiAhPT0gMCkge1xuICAgIGJpdHNDb2xvci5zcGxpY2UoTWF0aC5mbG9vcihuYlBpeGVsV2lkdGgvMiksIDAsIHJhbmRvbUluQXJyYXlDb2xvcihjb2xvcnNQYWxldHRlKSk7XG4gIH1cblxuICByZXR1cm4gYml0c0NvbG9yO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gY3JlYXRlSW52YWRlcihib3JkZXIgOiBib3JkZXJJbnRlcmZhY2UsIGNvbnRleHQ6IENhbnZhc1JlbmRlcmluZ0NvbnRleHQyRCwgbmJQaXhlbFdpZHRoOiBudW1iZXIsIG5iUGl4ZWxIZWlnaHQ6IG51bWJlciwgY29sb3JzUGFsZXR0ZTogY29sb3JJbnRlcmZhY2VbXSkgOiB2b2lkIHtcbiAgY29uc3QgeyB4OiB4T2Zmc2V0ICwgeTogeU9mZnNldCAsIHdpZHRoUGl4ZWwsIGhlaWdodFBpeGVsIH0gPSBib3JkZXI7XG4gIGNvbnNvbGUubG9nKGJvcmRlcilcbiAgZm9yKGxldCB5IDogbnVtYmVyID0gMDsgeSA8IG5iUGl4ZWxIZWlnaHQ7IHkgKz0gMSkge1xuICAgIGNvbnN0IGJpdHNDb2xvciA9IGdlbmVyYXRlUm93Q29sb3JzKG5iUGl4ZWxXaWR0aCwgY29sb3JzUGFsZXR0ZSk7XG4gICAgZm9yKGxldCB4OiBudW1iZXIgPSAwOyB4IDwgYml0c0NvbG9yLmxlbmd0aDsgeCArPSAxKSB7XG4gICAgICBjcmVhdGVTcXVhcmUoXG4gICAgICAgIHsgeDogeE9mZnNldCArICh4ICogd2lkdGhQaXhlbCksXG4gICAgICAgICAgeTogeU9mZnNldCArICh5ICogaGVpZ2h0UGl4ZWwpLFxuICAgICAgICAgIHdpZHRoUGl4ZWwsXG4gICAgICAgICAgaGVpZ2h0UGl4ZWxcbiAgICAgICAgIH0sXG4gICAgICAgICBjb250ZXh0LFxuICAgICAgICAgYml0c0NvbG9yW3hdXG4gICAgICApO1xuICAgIH1cbiAgfVxufSIsIlxuZXhwb3J0IGZ1bmN0aW9uIGdldENhbnZhcyhjYW52YXNJZDogc3RyaW5nID0gJ2NhbnZhcycpIDogSFRNTENhbnZhc0VsZW1lbnQgfCBudWxsIHtcbiAgcmV0dXJuIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKGNhbnZhc0lkKSBhcyBIVE1MQ2FudmFzRWxlbWVudDtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHNldENhbnZhc1NpemUod2lkdGg6IG51bWJlciwgaGVpZ2h0OiBudW1iZXIpIDogdm9pZCAge1xuICBjb25zdCBjYW52YXMgPSBnZXRDYW52YXMoKTtcbiAgY2FudmFzLndpZHRoID0gd2lkdGg7XG4gIGNhbnZhcy5oZWlnaHQgPSBoZWlnaHQ7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBkcmF3KGNhbGxiYWNrOiAoY3R4OiBDYW52YXNSZW5kZXJpbmdDb250ZXh0MkQpID0+IHZvaWQpIDogdm9pZCB7XG4gIGNvbnN0IGNhbnZhcyA9IGdldENhbnZhcygpO1xuICBpZiAoY2FudmFzLmdldENvbnRleHQpIHtcbiAgICBjb25zdCBjdHggPSBjYW52YXMuZ2V0Q29udGV4dCgnMmQnKTtcbiAgICBjYWxsYmFjayhjdHgpO1xuICB9XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBjaGFuZ2VCYWNrZ3JvdW5kQ2FudmFzKHJhbmRvbSA6IGJvb2xlYW4gPSBmYWxzZSkgOiB2b2lkIHtcbiAgY29uc3QgY2FudmFzID0gZ2V0Q2FudmFzKCk7XG4gIGlmKGNhbnZhcy5nZXRDb250ZXh0KSB7XG4gICAgY29uc3QgY3R4ID0gY2FudmFzLmdldENvbnRleHQoJzJkJyk7XG4gICAgY29uc3QgY29sb3IgPSByYW5kb20gPyBcbiAgICAgIGByZ2JhKFxuICAgICAgICAgJHtNYXRoLnJhbmRvbSgpICogMjU1fSxcbiAgICAgICAgICR7TWF0aC5yYW5kb20oKSAqIDI1NX0sXG4gICAgICAgICAke01hdGgucmFuZG9tKCkgKiAyNTV9LFxuICAgICAgICAgMSlgOlxuICAgICAgJ3JnYmEoMjEyLDI1NSwxNTYsMSknO1xuICAgIGN0eC5maWxsU3R5bGUgPSBjb2xvcjtcbiAgICBjdHguZmlsbFJlY3QoMCwwLHdpbmRvdy5pbm5lcldpZHRoLHdpbmRvdy5pbm5lckhlaWdodCk7XG4gIH1cbn0iLCJpbXBvcnQgeyBjb2xvckludGVyZmFjZSB9IGZyb20gXCIuL2F2YXRhclwiO1xuXG5leHBvcnQgZnVuY3Rpb24gaGV4VG9SZ2IoaGV4OiBzdHJpbmcpIDogY29sb3JJbnRlcmZhY2Uge1xuICB2YXIgcmVzdWx0ID0gL14jPyhbYS1mXFxkXXsyfSkoW2EtZlxcZF17Mn0pKFthLWZcXGRdezJ9KSQvaS5leGVjKGhleCk7XG4gIHJldHVybiByZXN1bHQgPyB7XG4gICAgcjogcGFyc2VJbnQocmVzdWx0WzFdLCAxNiksXG4gICAgZzogcGFyc2VJbnQocmVzdWx0WzJdLCAxNiksXG4gICAgYjogcGFyc2VJbnQocmVzdWx0WzNdLCAxNilcbiAgfSA6IG51bGw7XG59IiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHQvLyBubyBtb2R1bGUuaWQgbmVlZGVkXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJpbXBvcnQgeyBzZXRDYW52YXNTaXplLCBjaGFuZ2VCYWNrZ3JvdW5kQ2FudmFzLCBnZXRDYW52YXMsIGRyYXcgfSBmcm9tIFwiLi9jYW52YXNcIjtcbmltcG9ydCB7IGNyZWF0ZUludmFkZXIsIGNvbG9ySW50ZXJmYWNlIH0gZnJvbSBcIi4vYXZhdGFyXCI7XG5pbXBvcnQgeyBoZXhUb1JnYiB9IGZyb20gXCIuL3Rvb2xzXCI7XG5cbmZ1bmN0aW9uIGxvYWQoKSB7XG4gY29uc3QgY2FudmFzID0gZ2V0Q2FudmFzKCk7XG4gIGlmIChjYW52YXMuZ2V0Q29udGV4dCkge1xuICAgIGNvbnN0IG5iUGl4ZWxXaWR0aCA9IG5iUGl4ZWxYIHx8IDg7XG4gICAgY29uc3QgbmJQaXhlbEhlaWdodCA9IG5iUGl4ZWxZIHx8IDg7XG4gICAgY29uc3QgY29udGV4dCA9IGNhbnZhcy5nZXRDb250ZXh0KCcyZCcpO1xuICAgIC8vIHJlZnJlc2hcbiAgICBjb250ZXh0LmNsZWFyUmVjdCgwLCAwLCBjYW52YXMud2lkdGgsIGNhbnZhcy5oZWlnaHQpO1xuXG5cbiAgICAvLyBvbmx5IG9uZSBhdmF0YXJcbiAgICBpZihyZXBldGl0aW9uID09PSAxKSB7XG4gICAgICBcbiAgICAgIGNvbnN0IGF2YXRhcldpZHRoID0gTWF0aC5mbG9vcihjYW52YXMud2lkdGggLyBuYlBpeGVsV2lkdGgpO1xuICAgICAgY29uc3Qgb2Zmc2V0V2lkdGggPSAoY2FudmFzLndpZHRoICUgbmJQaXhlbFdpZHRoKTtcbiAgICAgIFxuICAgICAgY29uc3QgYXZhdGFySGVpZ2h0ID0gTWF0aC5mbG9vcihjYW52YXMuaGVpZ2h0IC8gbmJQaXhlbEhlaWdodCk7XG4gICAgICBjb25zdCBvZmZzZXRIZWlnaHQgPSAoY2FudmFzLmhlaWdodCAlIG5iUGl4ZWxIZWlnaHQpO1xuXG4gICAgICBjcmVhdGVJbnZhZGVyKFxuICAgICAgICB7eDogb2Zmc2V0V2lkdGggLzIgLCB5OiBvZmZzZXRIZWlnaHQgLyAyLCB3aWR0aFBpeGVsOiBhdmF0YXJXaWR0aCwgaGVpZ2h0UGl4ZWw6IGF2YXRhcldpZHRoIH0sXG4gICAgICAgIGNvbnRleHQsXG4gICAgICAgIG5iUGl4ZWxXaWR0aCxcbiAgICAgICAgbmJQaXhlbEhlaWdodCxcbiAgICAgICAgY29sb3JzXG4gICAgICApO1xuICAgIH0gZWxzZSB7IC8vIHBhdGNod29ya1xuICAgICAgY29uc3QgYXZhdGFyV2lkdGggPSBjYW52YXMud2lkdGggLyByZXBldGl0aW9uO1xuICAgICAgY29uc3QgYXZhdGFySGVpZ2h0ID0gY2FudmFzLmhlaWdodCAvIHJlcGV0aXRpb247XG4gICAgICBcbiAgICAgIGNvbnN0IHdpZHRoUGl4ZWwgPSBNYXRoLmZsb29yKGF2YXRhcldpZHRoIC8gbmJQaXhlbFdpZHRoKTtcbiAgICAgIGNvbnN0IG9mZnNldFdpZHRoID0gYXZhdGFyV2lkdGggJSBuYlBpeGVsV2lkdGg7XG5cbiAgICAgIGNvbnN0IGhlaWdodFBpeGVsID0gTWF0aC5mbG9vcihhdmF0YXJIZWlnaHQgLyBuYlBpeGVsSGVpZ2h0KTtcbiAgICAgIGNvbnN0IG9mZnNldEhlaWdodCA9IChhdmF0YXJIZWlnaHQgJSBuYlBpeGVsSGVpZ2h0KTtcblxuICAgICAgZm9yKGxldCBfeCA9IDA7IF94IDwgcmVwZXRpdGlvbjsgX3ggKz0gMSkge1xuICAgICAgICBmb3IobGV0IF95ID0gMDsgX3kgPCByZXBldGl0aW9uOyBfeSArPSAxKSB7XG4gICAgICAgICAgY3JlYXRlSW52YWRlcihcbiAgICAgICAgICAgIHt4OiAob2Zmc2V0V2lkdGggLyAyKSArX3ggKiBhdmF0YXJXaWR0aCAsIHk6IChvZmZzZXRIZWlnaHQgLyAyKSArIF95ICogYXZhdGFySGVpZ2h0LCB3aWR0aFBpeGVsLCBoZWlnaHRQaXhlbCB9LFxuICAgICAgICAgICAgY29udGV4dCxcbiAgICAgICAgICAgIG5iUGl4ZWxXaWR0aCxcbiAgICAgICAgICAgIG5iUGl4ZWxIZWlnaHQsXG4gICAgICAgICAgICBjb2xvcnNcbiAgICAgICAgICApO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICB9XG59XG5cbmZ1bmN0aW9uIGNoYW5nZUNhbnZhc1NsaWRlcihzaXplOiBcIndpZHRoXCJ8IFwiaGVpZ2h0XCIsIGU6IEV2ZW50KSA6IHZvaWQge1xuICBjb25zdCBuZXdWYWx1ZSA6IG51bWJlciA9IChlIGFzIGFueSkudGFyZ2V0LnZhbHVlO1xuICBpZihzaXplID09PSBcIndpZHRoXCIpIHtcbiAgICB3aWR0aENhbnZhcyA9IG5ld1ZhbHVlO1xuICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwid2lkdGhDYW52YXNWYWx1ZVwiKS50ZXh0Q29udGVudCA9IG5ld1ZhbHVlLnRvU3RyaW5nKCk7XG4gIH0gZWxzZSB7XG4gICAgaGVpZ2h0Q2FudmFzID0gbmV3VmFsdWU7XG4gICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJoZWlnaHRDYW52YXNWYWx1ZVwiKS50ZXh0Q29udGVudCA9IG5ld1ZhbHVlLnRvU3RyaW5nKCk7XG4gIH1cbiAgc2V0Q2FudmFzU2l6ZSh3aWR0aENhbnZhcywgbmV3VmFsdWUpO1xufVxuXG5mdW5jdGlvbiBjaGFuZ2VQaXhlbFNsaWRlcihzaXplOiBcInhcInwgXCJ5XCIsIGU6IEV2ZW50KSA6IHZvaWQge1xuICBjb25zdCBuZXdWYWx1ZSA6IG51bWJlciA9IChlIGFzIGFueSkudGFyZ2V0LnZhbHVlO1xuICBpZihzaXplID09PSBcInhcIikge1xuICAgIG5iUGl4ZWxYID0gbmV3VmFsdWU7XG4gICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJuYlBpeGVsWFZhbHVlXCIpLnRleHRDb250ZW50ID0gbmV3VmFsdWUudG9TdHJpbmcoKTtcbiAgfSBlbHNlIHtcbiAgICBuYlBpeGVsWSA9IG5ld1ZhbHVlO1xuICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwibmJQaXhlbFlWYWx1ZVwiKS50ZXh0Q29udGVudCA9IG5ld1ZhbHVlLnRvU3RyaW5nKCk7XG4gIH1cbn1cblxuZnVuY3Rpb24gZmVlZENvbG9ycygpIHtcbiAgY29uc3QgbmV3Q29sb3JzIDogY29sb3JJbnRlcmZhY2VbXSA9IFtdO1xuICBBcnJheS5mcm9tKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCJpbnB1dFt0eXBlPWNvbG9yXVwiKSkuZm9yRWFjaCgoaXRlbTogSFRNTElucHV0RWxlbWVudCwgaW5kZXg6IG51bWJlcikgPT4ge1xuICAgIGNvbnN0IGNoZWNrYm94ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoYGNvbG9yLSR7aW5kZXgrMX1gKSBhcyBIVE1MSW5wdXRFbGVtZW50O1xuICAgIGlmKGNoZWNrYm94LmNoZWNrZWQpIHtcbiAgICAgIG5ld0NvbG9ycy5wdXNoKGhleFRvUmdiKGl0ZW0udmFsdWUpKTtcbiAgICB9XG4gIH0pO1xuICBjb2xvcnMgPSBuZXdDb2xvcnMuc2xpY2UoKTtcbn1cblxuZnVuY3Rpb24gY2hhbmdlUmVwZXRpdGlvbihlOiBFdmVudCkge1xuICBjb25zdCBuZXdWYWx1ZSA9IChlIGFzIGFueSkudGFyZ2V0LnZhbHVlO1xuICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInJlcGV0aXRpb25WYWx1ZVwiKS50ZXh0Q29udGVudCA9IG5ld1ZhbHVlLnRvU3RyaW5nKCk7XG4gIHJlcGV0aXRpb24gPSBuZXdWYWx1ZVxufVxuXG5mdW5jdGlvbiBzYXZlSW1hZ2UoKSB7XG4gIGNvbnN0IGNhbnZhcyA9IGdldENhbnZhcygpO1xuICBpZihjYW52YXMpIHtcbiAgICBjb25zdCBpbWFnZSA9IGNhbnZhcy50b0RhdGFVUkwoXCJpbWFnZS9wbmdcIikucmVwbGFjZShcImltYWdlL3BuZ1wiLCBcImltYWdlL29jdGV0LXN0cmVhbVwiKTtcbiAgICB3aW5kb3cubG9jYXRpb24uaHJlZiA9IGltYWdlO1xuICB9IGVsc2Uge1xuICAgIGFsZXJ0KFwiY2FudmFzIG5vdCBkZXRlY3RlZFwiKTtcbiAgfVxufVxuXG4vLyBHTE9CQUxTIFZBUklBQkxFU1xubGV0IHdpZHRoQ2FudmFzID0gMDtcbmxldCBoZWlnaHRDYW52YXMgPSAwO1xubGV0IG5iUGl4ZWxYID0gMDtcbmxldCBuYlBpeGVsWSA9IDA7XG5sZXQgcmVwZXRpdGlvbiA9IDE7XG5sZXQgY29sb3JzIDpjb2xvckludGVyZmFjZVtdID0gW107XG53aW5kb3cub25sb2FkID0gZnVuY3Rpb24oKSB7XG4gIGZlZWRDb2xvcnMoKTtcbiAgbG9hZCgpO1xuICBcbiAgLy8gY29ubmVjdCBidXR0b24gKyBpbnB1dHNcbiAgY29uc3QgYnV0dG9uID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJyZXNldC1idXR0b25cIik7XG4gICBpZihidXR0b24pIHtcbiAgICAgYnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBsb2FkKTtcbiAgfVxuXG4gIGNvbnN0IHNhdmVCdXR0b24gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInNhdmUtYnV0dG9uXCIpO1xuICAgaWYoc2F2ZUJ1dHRvbikge1xuICAgICBzYXZlQnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBzYXZlSW1hZ2UpO1xuICB9XG5cbiAgY29uc3QgaW5wdXRXaWR0aCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwid2lkdGhDYW52YXNcIik7XG4gIGlmKGlucHV0V2lkdGgpIHtcbiAgICBpbnB1dFdpZHRoLmFkZEV2ZW50TGlzdGVuZXIoXCJjaGFuZ2VcIiwgKGUpID0+IHsgY2hhbmdlQ2FudmFzU2xpZGVyKFwid2lkdGhcIiwgZSk7IGxvYWQoKSB9KTtcbiAgfVxuICBjb25zdCBpbnB1dEhlaWdodCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiaGVpZ2h0Q2FudmFzXCIpO1xuICBpZihpbnB1dEhlaWdodCkge1xuICAgIGlucHV0SGVpZ2h0LmFkZEV2ZW50TGlzdGVuZXIoXCJjaGFuZ2VcIiwgKGUpID0+IHsgY2hhbmdlQ2FudmFzU2xpZGVyKFwiaGVpZ2h0XCIsIGUpOyBsb2FkKCkgfSk7XG4gIH1cblxuICBjb25zdCBpbnB1dFBpeGVsWCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwibmJQaXhlbFhcIik7XG4gIGlmKGlucHV0UGl4ZWxYKSB7XG4gICAgaW5wdXRQaXhlbFguYWRkRXZlbnRMaXN0ZW5lcihcImNoYW5nZVwiLCAoZSkgPT4geyBjaGFuZ2VQaXhlbFNsaWRlcihcInhcIiwgZSk7IGxvYWQoKSB9KTtcbiAgfVxuICBjb25zdCBpbnB1dFBpeGVsWSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwibmJQaXhlbFlcIik7XG4gIGlmKGlucHV0UGl4ZWxZKSB7XG4gICAgaW5wdXRQaXhlbFkuYWRkRXZlbnRMaXN0ZW5lcihcImNoYW5nZVwiLCAoZSkgPT4geyBjaGFuZ2VQaXhlbFNsaWRlcihcInlcIiwgZSk7IGxvYWQoKSB9KTtcbiAgfVxuXG4gIGNvbnN0IHJlcGV0aXRpb24gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInJlcGV0aXRpb25cIik7XG4gIGlmKHJlcGV0aXRpb24pIHtcbiAgICByZXBldGl0aW9uLmFkZEV2ZW50TGlzdGVuZXIoXCJjaGFuZ2VcIiwgKGUpID0+IHsgY2hhbmdlUmVwZXRpdGlvbihlKTsgbG9hZCgpIH0pO1xuICB9XG5cbiAgLy9jb25uZWN0IGVhY2ggY29sb3IgaW5wdXRcbiAgQXJyYXkuZnJvbShkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiaW5wdXRbdHlwZT1jb2xvcl1cIikpLmZvckVhY2goIChpdGVtOiBIVE1MSW5wdXRFbGVtZW50KSA9PiB7XG4gICAgaXRlbS5hZGRFdmVudExpc3RlbmVyKFwiY2hhbmdlXCIsIGZlZWRDb2xvcnMpO1xuICB9KVxuICAvL3RoZW4gY29sb3JzIGNoZWNrYm94ZXMgY2hlY2tib3hcbiAgQXJyYXkuZnJvbShkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiaW5wdXRbdHlwZT1jaGVja2JveF1cIikpLmZvckVhY2goIChpdGVtOiBIVE1MSW5wdXRFbGVtZW50KSA9PiB7XG4gICAgaXRlbS5hZGRFdmVudExpc3RlbmVyKFwiY2hhbmdlXCIsIGZlZWRDb2xvcnMpO1xuICB9KVxuXG59O1xuXG4iXSwic291cmNlUm9vdCI6IiJ9