(()=>{"use strict";function e(e){return void 0===e&&(e="canvas"),document.getElementById(e)}function t(e){return e[Math.floor(Math.random()*e.length)]}function n(e,t,n){t.fillStyle="rgb("+n.r+", "+n.g+", "+n.b+")",t.fillRect(e.x,e.y,e.widthPixel,e.heightPixel)}function r(e,n){for(var r=[],i=0;i<Math.floor(e/2);i++)r.push(t(n));return r.slice(0).reverse().forEach((function(e){return r.push(e)})),e%2!=0&&r.splice(Math.floor(e/2)+1,0,t(n)),r}function i(){var t=e();if(t.getContext){var i=h||8,o=u||8,a=Math.floor(t.width/i),c=t.width%i,l=Math.floor(t.height/o),d=t.height%o,g=t.getContext("2d");g.clearRect(0,0,t.width,t.height),function(e,t,i,o,a){for(var c=e.x,l=e.y,d=e.widthPixel,h=e.heightPixel,u=0;u<o;u+=1)for(var f=r(i,a),g=0;g<f.length;g+=1)n({x:c+g*d,y:l+u*h,widthPixel:d,heightPixel:h},t,f[g])}({x:c/2,y:d/2,widthPixel:a,heightPixel:l},g,i,o,f)}}function o(t,n){var r,i,o,a=n.target.value;"width"===t&&(d=a),r=d,i=a,(o=e()).width=r,o.height=i}function a(e,t){var n=t.target.value;"x"===e?h=n:u=n}function c(){var e=[];Array.from(document.querySelectorAll("input[type=color]")).forEach((function(t,n){var r,i;document.getElementById("color-"+(n+1)).checked&&e.push((r=t.value,(i=/^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(r))?{r:parseInt(i[1],16),g:parseInt(i[2],16),b:parseInt(i[3],16)}:null))})),f=e.slice(),console.log(f)}function l(){var t=e();if(t){var n=t.toDataURL("image/png").replace("image/png","image/octet-stream");window.location.href=n}else alert("canvas not detected")}var d=0,h=0,u=0,f=[];window.onload=function(){c(),i();var e=document.getElementById("reset-button");e&&e.addEventListener("click",i);var t=document.getElementById("save-button");t&&t.addEventListener("click",l);var n=document.getElementById("widthCanvas");n&&n.addEventListener("change",(function(e){o("width",e),i()}));var r=document.getElementById("heightCanvas");r&&r.addEventListener("change",(function(e){o("height",e),i()}));var d=document.getElementById("nbPixelX");d&&d.addEventListener("change",(function(e){a("x",e),i()}));var h=document.getElementById("nbPixelY");h&&h.addEventListener("change",(function(e){a("y",e),i()})),Array.from(document.querySelectorAll("input[type=color]")).forEach((function(e){e.addEventListener("change",c)})),Array.from(document.querySelectorAll("input[type=checkbox]")).forEach((function(e){e.addEventListener("change",c)}))}})();
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9hdmF0YXItZ2VuZXJhdG9yLy4vc3JjL2NhbnZhcy50cyIsIndlYnBhY2s6Ly9hdmF0YXItZ2VuZXJhdG9yLy4vc3JjL2F2YXRhci50cyIsIndlYnBhY2s6Ly9hdmF0YXItZ2VuZXJhdG9yLy4vc3JjL2luZGV4LnRzIiwid2VicGFjazovL2F2YXRhci1nZW5lcmF0b3IvLi9zcmMvdG9vbHMudHMiXSwibmFtZXMiOlsiZ2V0Q2FudmFzIiwiY2FudmFzSWQiLCJkb2N1bWVudCIsImdldEVsZW1lbnRCeUlkIiwicmFuZG9tSW5BcnJheUNvbG9yIiwiY29sb3JzIiwiTWF0aCIsImZsb29yIiwicmFuZG9tIiwibGVuZ3RoIiwiY3JlYXRlU3F1YXJlIiwiYm9yZGVyIiwiY29udGV4dCIsImNvbG9yIiwiZmlsbFN0eWxlIiwiciIsImciLCJiIiwiZmlsbFJlY3QiLCJ4IiwieSIsIndpZHRoUGl4ZWwiLCJoZWlnaHRQaXhlbCIsImdlbmVyYXRlUm93Q29sb3JzIiwibmJQaXhlbFdpZHRoIiwiY29sb3JzUGFsZXR0ZSIsImJpdHNDb2xvciIsImkiLCJwdXNoIiwic2xpY2UiLCJyZXZlcnNlIiwiZm9yRWFjaCIsImJpdCIsInNwbGljZSIsImxvYWQiLCJjYW52YXMiLCJnZXRDb250ZXh0IiwibmJQaXhlbFgiLCJuYlBpeGVsSGVpZ2h0IiwibmJQaXhlbFkiLCJ3aWR0aCIsIm9mZnNldFdpZHRoIiwiaGVpZ2h0Iiwib2Zmc2V0SGVpZ2h0IiwiY2xlYXJSZWN0IiwieE9mZnNldCIsInlPZmZzZXQiLCJjcmVhdGVJbnZhZGVyIiwiY2hhbmdlQ2FudmFzU2xpZGVyIiwic2l6ZSIsImUiLCJuZXdWYWx1ZSIsInRhcmdldCIsInZhbHVlIiwid2lkdGhDYW52YXMiLCJjaGFuZ2VQaXhlbFNsaWRlciIsImZlZWRDb2xvcnMiLCJuZXdDb2xvcnMiLCJBcnJheSIsImZyb20iLCJxdWVyeVNlbGVjdG9yQWxsIiwiaXRlbSIsImluZGV4IiwiaGV4IiwicmVzdWx0IiwiY2hlY2tlZCIsImV4ZWMiLCJwYXJzZUludCIsImNvbnNvbGUiLCJsb2ciLCJzYXZlSW1hZ2UiLCJpbWFnZSIsInRvRGF0YVVSTCIsInJlcGxhY2UiLCJ3aW5kb3ciLCJsb2NhdGlvbiIsImhyZWYiLCJhbGVydCIsIm9ubG9hZCIsImJ1dHRvbiIsImFkZEV2ZW50TGlzdGVuZXIiLCJzYXZlQnV0dG9uIiwiaW5wdXRXaWR0aCIsImlucHV0SGVpZ2h0IiwiaW5wdXRQaXhlbFgiLCJpbnB1dFBpeGVsWSJdLCJtYXBwaW5ncyI6Im1CQUNPLFNBQVNBLEVBQVVDLEdBQ3hCLFlBRHdCLElBQUFBLE1BQUEsVUFDakJDLFNBQVNDLGVBQWVGLEdDa0JqQyxTQUFTRyxFQUFtQkMsR0FDMUIsT0FBT0EsRUFBT0MsS0FBS0MsTUFBTUQsS0FBS0UsU0FBV0gsRUFBT0ksU0FJbEQsU0FBU0MsRUFBYUMsRUFBeUJDLEVBQW1DQyxHQUNoRkQsRUFBUUUsVUFBWSxPQUFPRCxFQUFNRSxFQUFDLEtBQUtGLEVBQU1HLEVBQUMsS0FBS0gsRUFBTUksRUFBQyxJQUMxREwsRUFBUU0sU0FBU1AsRUFBT1EsRUFBR1IsRUFBT1MsRUFBR1QsRUFBT1UsV0FBWVYsRUFBT1csYUFJakUsU0FBU0MsRUFBa0JDLEVBQXNCQyxHQUUvQyxJQURBLElBQUlDLEVBQStCLEdBQzNCQyxFQUFJLEVBQUdBLEVBQUlyQixLQUFLQyxNQUFNaUIsRUFBYSxHQUFJRyxJQUM3Q0QsRUFBVUUsS0FBS3hCLEVBQW1CcUIsSUFVcEMsT0FQQUMsRUFBVUcsTUFBTSxHQUFHQyxVQUFVQyxTQUFRLFNBQUNDLEdBQVEsT0FBQU4sRUFBVUUsS0FBS0ksTUFHMURSLEVBQWUsR0FBTSxHQUN0QkUsRUFBVU8sT0FBTzNCLEtBQUtDLE1BQU1pQixFQUFhLEdBQUssRUFBRyxFQUFHcEIsRUFBbUJxQixJQUdsRUMsRUN4Q1QsU0FBU1EsSUFDUixJQUFNQyxFQUFTbkMsSUFDZCxHQUFJbUMsRUFBT0MsV0FBWSxDQUNyQixJQUFNWixFQUFlYSxHQUFZLEVBQzNCQyxFQUFnQkMsR0FBWSxFQUM1QmxCLEVBQWFmLEtBQUtDLE1BQU00QixFQUFPSyxNQUFRaEIsR0FDdkNpQixFQUFlTixFQUFPSyxNQUFRaEIsRUFFOUJGLEVBQWNoQixLQUFLQyxNQUFNNEIsRUFBT08sT0FBU0osR0FDekNLLEVBQWdCUixFQUFPTyxPQUFTSixFQUVoQzFCLEVBQVV1QixFQUFPQyxXQUFXLE1BRWxDeEIsRUFBUWdDLFVBQVUsRUFBRyxFQUFHVCxFQUFPSyxNQUFPTCxFQUFPTyxRRDhCMUMsU0FBdUIvQixFQUEwQkMsRUFBbUNZLEVBQXNCYyxFQUF1QmIsR0FFdEksSUFEUSxJQUFHb0IsRUFBbURsQyxFQUFNLEVBQTVDbUMsRUFBc0NuQyxFQUFNLEVBQWxDVSxFQUE0QlYsRUFBTSxXQUF0QlcsRUFBZ0JYLEVBQU0sWUFDNURTLEVBQWEsRUFBR0EsRUFBSWtCLEVBQWVsQixHQUFLLEVBRTlDLElBREEsSUFBTU0sRUFBWUgsRUFBa0JDLEVBQWNDLEdBQzFDTixFQUFZLEVBQUdBLEVBQUlPLEVBQVVqQixPQUFRVSxHQUFLLEVBQ2hEVCxFQUNFLENBQUVTLEVBQUcwQixFQUFXMUIsRUFBSUUsRUFDbEJELEVBQUcwQixFQUFXMUIsRUFBSUUsRUFDbEJELFdBQVUsRUFDVkMsWUFBVyxHQUVaVixFQUNBYyxFQUFVUCxJQ3hDZjRCLENBQWMsQ0FBQzVCLEVBQUdzQixFQUFhLEVBQUlyQixFQUFHdUIsRUFBZSxFQUFHdEIsV0FBVSxFQUFFQyxZQUFXLEdBQUlWLEVBQVNZLEVBQWNjLEVBQWVqQyxJQUk3SCxTQUFTMkMsRUFBbUJDLEVBQXlCQyxHQUNuRCxJRm5CNEJWLEVBQWVFLEVBQ3JDUCxFRWtCQWdCLEVBQXFCRCxFQUFVRSxPQUFPQyxNQUNoQyxVQUFUSixJQUNESyxFQUFjSCxHRnJCWVgsRUV5QmRjLEVGekI2QlosRUV5QmhCUyxHRnhCckJoQixFQUFTbkMsS0FDUndDLE1BQVFBLEVBQ2ZMLEVBQU9PLE9BQVNBLEVFeUJsQixTQUFTYSxFQUFrQk4sRUFBZ0JDLEdBQ3pDLElBQU1DLEVBQXFCRCxFQUFVRSxPQUFPQyxNQUNoQyxNQUFUSixFQUNEWixFQUFXYyxFQUVYWixFQUFXWSxFQUlmLFNBQVNLLElBQ1AsSUFBTUMsRUFBK0IsR0FDckNDLE1BQU1DLEtBQUt6RCxTQUFTMEQsaUJBQWlCLHNCQUFzQjdCLFNBQVEsU0FBQzhCLEVBQXdCQyxHQUMxRixJQzNDcUJDLEVBQ25CQyxFRDBDZTlELFNBQVNDLGVBQWUsVUFBUzJELEVBQU0sSUFDNUNHLFNBQ1ZSLEVBQVU3QixNQzdDU21DLEVENkNLRixFQUFLUixPQzVDN0JXLEVBQVMsNENBQTRDRSxLQUFLSCxJQUM5QyxDQUNkaEQsRUFBR29ELFNBQVNILEVBQU8sR0FBSSxJQUN2QmhELEVBQUdtRCxTQUFTSCxFQUFPLEdBQUksSUFDdkIvQyxFQUFHa0QsU0FBU0gsRUFBTyxHQUFJLEtBQ3JCLFVEMENKM0QsRUFBU29ELEVBQVU1QixRQUNuQnVDLFFBQVFDLElBQUloRSxHQUdkLFNBQVNpRSxJQUNQLElBQU1uQyxFQUFTbkMsSUFDZixHQUFHbUMsRUFBUSxDQUNULElBQU1vQyxFQUFRcEMsRUFBT3FDLFVBQVUsYUFBYUMsUUFBUSxZQUFhLHNCQUNqRUMsT0FBT0MsU0FBU0MsS0FBT0wsT0FFdkJNLE1BQU0sdUJBS1YsSUFBSXZCLEVBQWMsRUFFZGpCLEVBQVcsRUFDWEUsRUFBVyxFQUNYbEMsRUFBMkIsR0FDL0JxRSxPQUFPSSxPQUFTLFdBQ2R0QixJQUNBdEIsSUFHQSxJQUFNNkMsRUFBUzdFLFNBQVNDLGVBQWUsZ0JBQ25DNEUsR0FDREEsRUFBT0MsaUJBQWlCLFFBQVM5QyxHQUdwQyxJQUFNK0MsRUFBYS9FLFNBQVNDLGVBQWUsZUFDdkM4RSxHQUNEQSxFQUFXRCxpQkFBaUIsUUFBU1YsR0FHeEMsSUFBTVksRUFBYWhGLFNBQVNDLGVBQWUsZUFDeEMrRSxHQUNEQSxFQUFXRixpQkFBaUIsVUFBVSxTQUFDOUIsR0FBUUYsRUFBbUIsUUFBU0UsR0FBSWhCLE9BRWpGLElBQU1pRCxFQUFjakYsU0FBU0MsZUFBZSxnQkFDekNnRixHQUNEQSxFQUFZSCxpQkFBaUIsVUFBVSxTQUFDOUIsR0FBUUYsRUFBbUIsU0FBVUUsR0FBSWhCLE9BR25GLElBQU1rRCxFQUFjbEYsU0FBU0MsZUFBZSxZQUN6Q2lGLEdBQ0RBLEVBQVlKLGlCQUFpQixVQUFVLFNBQUM5QixHQUFRSyxFQUFrQixJQUFLTCxHQUFJaEIsT0FFN0UsSUFBTW1ELEVBQWNuRixTQUFTQyxlQUFlLFlBQ3pDa0YsR0FDREEsRUFBWUwsaUJBQWlCLFVBQVUsU0FBQzlCLEdBQVFLLEVBQWtCLElBQUtMLEdBQUloQixPQUk3RXdCLE1BQU1DLEtBQUt6RCxTQUFTMEQsaUJBQWlCLHNCQUFzQjdCLFNBQVMsU0FBQzhCLEdBQ25FQSxFQUFLbUIsaUJBQWlCLFNBQVV4QixNQUdsQ0UsTUFBTUMsS0FBS3pELFNBQVMwRCxpQkFBaUIseUJBQXlCN0IsU0FBUyxTQUFDOEIsR0FDdEVBLEVBQUttQixpQkFBaUIsU0FBVXhCLFEiLCJmaWxlIjoiYnVuZGxlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiXG5leHBvcnQgZnVuY3Rpb24gZ2V0Q2FudmFzKGNhbnZhc0lkOiBzdHJpbmcgPSAnY2FudmFzJykgOiBIVE1MQ2FudmFzRWxlbWVudCB8IG51bGwge1xuICByZXR1cm4gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoY2FudmFzSWQpIGFzIEhUTUxDYW52YXNFbGVtZW50O1xufVxuXG5leHBvcnQgZnVuY3Rpb24gc2V0Q2FudmFzU2l6ZSh3aWR0aDogbnVtYmVyLCBoZWlnaHQ6IG51bWJlcikgOiB2b2lkICB7XG4gIGNvbnN0IGNhbnZhcyA9IGdldENhbnZhcygpO1xuICBjYW52YXMud2lkdGggPSB3aWR0aDtcbiAgY2FudmFzLmhlaWdodCA9IGhlaWdodDtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGRyYXcoY2FsbGJhY2s6IChjdHg6IENhbnZhc1JlbmRlcmluZ0NvbnRleHQyRCkgPT4gdm9pZCkgOiB2b2lkIHtcbiAgY29uc3QgY2FudmFzID0gZ2V0Q2FudmFzKCk7XG4gIGlmIChjYW52YXMuZ2V0Q29udGV4dCkge1xuICAgIGNvbnN0IGN0eCA9IGNhbnZhcy5nZXRDb250ZXh0KCcyZCcpO1xuICAgIGNhbGxiYWNrKGN0eCk7XG4gIH1cbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGNoYW5nZUJhY2tncm91bmRDYW52YXMocmFuZG9tIDogYm9vbGVhbiA9IGZhbHNlKSA6IHZvaWQge1xuICBjb25zdCBjYW52YXMgPSBnZXRDYW52YXMoKTtcbiAgaWYoY2FudmFzLmdldENvbnRleHQpIHtcbiAgICBjb25zdCBjdHggPSBjYW52YXMuZ2V0Q29udGV4dCgnMmQnKTtcbiAgICBjb25zdCBjb2xvciA9IHJhbmRvbSA/IFxuICAgICAgYHJnYmEoXG4gICAgICAgICAke01hdGgucmFuZG9tKCkgKiAyNTV9LFxuICAgICAgICAgJHtNYXRoLnJhbmRvbSgpICogMjU1fSxcbiAgICAgICAgICR7TWF0aC5yYW5kb20oKSAqIDI1NX0sXG4gICAgICAgICAxKWA6XG4gICAgICAncmdiYSgyMTIsMjU1LDE1NiwxKSc7XG4gICAgY3R4LmZpbGxTdHlsZSA9IGNvbG9yO1xuICAgIGN0eC5maWxsUmVjdCgwLDAsd2luZG93LmlubmVyV2lkdGgsd2luZG93LmlubmVySGVpZ2h0KTtcbiAgfVxufSIsImludGVyZmFjZSBib3JkZXJJbnRlcmZhY2Uge1xuICB4OiBudW1iZXI7XG4gIHk6IG51bWJlcjtcbiAgd2lkdGhQaXhlbDogbnVtYmVyO1xuICBoZWlnaHRQaXhlbDogbnVtYmVyO1xufVxuXG5leHBvcnQgaW50ZXJmYWNlIGNvbG9ySW50ZXJmYWNlIHtcbiAgcjogbnVtYmVyO1xuICBnOiBudW1iZXI7XG4gIGI6IG51bWJlcjtcbn1cblxuXG5jb25zdCBCTEFDSyA6IGNvbG9ySW50ZXJmYWNlID0geyByOiAwLCBnOjAsIGI6MCB9O1xuXG5mdW5jdGlvbiByYW5kb21Db2xvcigpIDogY29sb3JJbnRlcmZhY2Uge1xuICByZXR1cm4geyByOiBNYXRoLnJhbmRvbSgpICogMjU1LCBnOiBNYXRoLnJhbmRvbSgpICogMjU1LCBiOiBNYXRoLnJhbmRvbSgpICogMjU1IH07XG59XG5cbmZ1bmN0aW9uIHJhbmRvbUluQXJyYXlDb2xvcihjb2xvcnM6IGNvbG9ySW50ZXJmYWNlW10pIDogY29sb3JJbnRlcmZhY2Uge1xuICByZXR1cm4gY29sb3JzW01hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIGNvbG9ycy5sZW5ndGgpXTtcbn0gXG5cblxuZnVuY3Rpb24gY3JlYXRlU3F1YXJlKGJvcmRlcjogYm9yZGVySW50ZXJmYWNlLCBjb250ZXh0OiBDYW52YXNSZW5kZXJpbmdDb250ZXh0MkQsIGNvbG9yOiBjb2xvckludGVyZmFjZSkgOiB2b2lkIHtcbiAgY29udGV4dC5maWxsU3R5bGUgPSBgcmdiKCR7Y29sb3Iucn0sICR7Y29sb3IuZ30sICR7Y29sb3IuYn0pYDtcbiAgY29udGV4dC5maWxsUmVjdChib3JkZXIueCwgYm9yZGVyLnksIGJvcmRlci53aWR0aFBpeGVsLCBib3JkZXIuaGVpZ2h0UGl4ZWwpO1xufVxuXG5cbmZ1bmN0aW9uIGdlbmVyYXRlUm93Q29sb3JzKG5iUGl4ZWxXaWR0aDogbnVtYmVyLCBjb2xvcnNQYWxldHRlOiBjb2xvckludGVyZmFjZVtdKSA6IGNvbG9ySW50ZXJmYWNlW10ge1xuICBsZXQgYml0c0NvbG9yIDogY29sb3JJbnRlcmZhY2VbXSA9IFtdO1xuICBmb3IobGV0IGkgPSAwOyBpIDwgTWF0aC5mbG9vcihuYlBpeGVsV2lkdGgvMik7IGkrKykge1xuICAgIGJpdHNDb2xvci5wdXNoKHJhbmRvbUluQXJyYXlDb2xvcihjb2xvcnNQYWxldHRlKSk7XG4gIH1cblxuICBiaXRzQ29sb3Iuc2xpY2UoMCkucmV2ZXJzZSgpLmZvckVhY2goKGJpdCkgPT4gYml0c0NvbG9yLnB1c2goYml0KSk7XG5cbiAgLy8gYWRkIG9uZSBtb3JlIGJpdHMgZm9yIG9kZHMgd2lkdGhcbiAgaWYobmJQaXhlbFdpZHRoICUgMiAhPT0gMCkge1xuICAgIGJpdHNDb2xvci5zcGxpY2UoTWF0aC5mbG9vcihuYlBpeGVsV2lkdGgvMikgKyAxLCAwLCByYW5kb21JbkFycmF5Q29sb3IoY29sb3JzUGFsZXR0ZSkpO1xuICB9XG5cbiAgcmV0dXJuIGJpdHNDb2xvcjtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGNyZWF0ZUludmFkZXIoYm9yZGVyIDogYm9yZGVySW50ZXJmYWNlLCBjb250ZXh0OiBDYW52YXNSZW5kZXJpbmdDb250ZXh0MkQsIG5iUGl4ZWxXaWR0aDogbnVtYmVyLCBuYlBpeGVsSGVpZ2h0OiBudW1iZXIsIGNvbG9yc1BhbGV0dGU6IGNvbG9ySW50ZXJmYWNlW10pIDogdm9pZCB7XG4gIGNvbnN0IHsgeDogeE9mZnNldCAsIHk6IHlPZmZzZXQgLCB3aWR0aFBpeGVsLCBoZWlnaHRQaXhlbCB9ID0gYm9yZGVyO1xuICBmb3IobGV0IHkgOiBudW1iZXIgPSAwOyB5IDwgbmJQaXhlbEhlaWdodDsgeSArPSAxKSB7XG4gICAgY29uc3QgYml0c0NvbG9yID0gZ2VuZXJhdGVSb3dDb2xvcnMobmJQaXhlbFdpZHRoLCBjb2xvcnNQYWxldHRlKTtcbiAgICBmb3IobGV0IHg6IG51bWJlciA9IDA7IHggPCBiaXRzQ29sb3IubGVuZ3RoOyB4ICs9IDEpIHtcbiAgICAgIGNyZWF0ZVNxdWFyZShcbiAgICAgICAgeyB4OiB4T2Zmc2V0ICsgKHggKiB3aWR0aFBpeGVsKSxcbiAgICAgICAgICB5OiB5T2Zmc2V0ICsgKHkgKiBoZWlnaHRQaXhlbCksXG4gICAgICAgICAgd2lkdGhQaXhlbCxcbiAgICAgICAgICBoZWlnaHRQaXhlbFxuICAgICAgICAgfSxcbiAgICAgICAgIGNvbnRleHQsXG4gICAgICAgICBiaXRzQ29sb3JbeF1cbiAgICAgICk7XG4gICAgfVxuICB9XG59IiwiaW1wb3J0IHsgc2V0Q2FudmFzU2l6ZSwgY2hhbmdlQmFja2dyb3VuZENhbnZhcywgZ2V0Q2FudmFzLCBkcmF3IH0gZnJvbSBcIi4vY2FudmFzXCI7XG5pbXBvcnQgeyBjcmVhdGVJbnZhZGVyLCBjb2xvckludGVyZmFjZSB9IGZyb20gXCIuL2F2YXRhclwiO1xuaW1wb3J0IHsgaGV4VG9SZ2IgfSBmcm9tIFwiLi90b29sc1wiO1xuXG5mdW5jdGlvbiBsb2FkKCkge1xuIGNvbnN0IGNhbnZhcyA9IGdldENhbnZhcygpO1xuICBpZiAoY2FudmFzLmdldENvbnRleHQpIHtcbiAgICBjb25zdCBuYlBpeGVsV2lkdGggPSBuYlBpeGVsWCB8fCA4O1xuICAgIGNvbnN0IG5iUGl4ZWxIZWlnaHQgPSBuYlBpeGVsWSB8fCA4O1xuICAgIGNvbnN0IHdpZHRoUGl4ZWwgPSBNYXRoLmZsb29yKGNhbnZhcy53aWR0aCAvIG5iUGl4ZWxXaWR0aCk7XG4gICAgY29uc3Qgb2Zmc2V0V2lkdGggPSAoY2FudmFzLndpZHRoICUgbmJQaXhlbFdpZHRoKTtcbiAgICBcbiAgICBjb25zdCBoZWlnaHRQaXhlbCA9IE1hdGguZmxvb3IoY2FudmFzLmhlaWdodCAvIG5iUGl4ZWxIZWlnaHQpO1xuICAgIGNvbnN0IG9mZnNldEhlaWdodCA9IChjYW52YXMuaGVpZ2h0ICUgbmJQaXhlbEhlaWdodCk7XG5cbiAgICBjb25zdCBjb250ZXh0ID0gY2FudmFzLmdldENvbnRleHQoJzJkJyk7XG4gICAgLy8gcmVmcmVzaFxuICAgIGNvbnRleHQuY2xlYXJSZWN0KDAsIDAsIGNhbnZhcy53aWR0aCwgY2FudmFzLmhlaWdodCk7XG4gICAgXG4gICAgY3JlYXRlSW52YWRlcih7eDogb2Zmc2V0V2lkdGggLzIgLCB5OiBvZmZzZXRIZWlnaHQgLyAyLCB3aWR0aFBpeGVsLCBoZWlnaHRQaXhlbCB9LCBjb250ZXh0LCBuYlBpeGVsV2lkdGgsIG5iUGl4ZWxIZWlnaHQsIGNvbG9ycyk7XG4gIH1cbn1cblxuZnVuY3Rpb24gY2hhbmdlQ2FudmFzU2xpZGVyKHNpemU6IFwid2lkdGhcInwgXCJoZWlnaHRcIiwgZTogRXZlbnQpIDogdm9pZCB7XG4gIGNvbnN0IG5ld1ZhbHVlIDogbnVtYmVyID0gKGUgYXMgYW55KS50YXJnZXQudmFsdWU7XG4gIGlmKHNpemUgPT09IFwid2lkdGhcIikge1xuICAgIHdpZHRoQ2FudmFzID0gbmV3VmFsdWU7XG4gIH0gZWxzZSB7XG4gICAgaGVpZ2h0Q2FudmFzID0gbmV3VmFsdWU7XG4gIH1cbiAgc2V0Q2FudmFzU2l6ZSh3aWR0aENhbnZhcywgbmV3VmFsdWUpO1xufVxuXG5mdW5jdGlvbiBjaGFuZ2VQaXhlbFNsaWRlcihzaXplOiBcInhcInwgXCJ5XCIsIGU6IEV2ZW50KSA6IHZvaWQge1xuICBjb25zdCBuZXdWYWx1ZSA6IG51bWJlciA9IChlIGFzIGFueSkudGFyZ2V0LnZhbHVlO1xuICBpZihzaXplID09PSBcInhcIikge1xuICAgIG5iUGl4ZWxYID0gbmV3VmFsdWU7XG4gIH0gZWxzZSB7XG4gICAgbmJQaXhlbFkgPSBuZXdWYWx1ZTtcbiAgfVxufVxuXG5mdW5jdGlvbiBmZWVkQ29sb3JzKCkge1xuICBjb25zdCBuZXdDb2xvcnMgOiBjb2xvckludGVyZmFjZVtdID0gW107XG4gIEFycmF5LmZyb20oZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcImlucHV0W3R5cGU9Y29sb3JdXCIpKS5mb3JFYWNoKChpdGVtOiBIVE1MSW5wdXRFbGVtZW50LCBpbmRleDogbnVtYmVyKSA9PiB7XG4gICAgY29uc3QgY2hlY2tib3ggPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChgY29sb3ItJHtpbmRleCsxfWApIGFzIEhUTUxJbnB1dEVsZW1lbnQ7XG4gICAgaWYoY2hlY2tib3guY2hlY2tlZCkge1xuICAgICAgbmV3Q29sb3JzLnB1c2goaGV4VG9SZ2IoaXRlbS52YWx1ZSkpO1xuICAgIH1cbiAgfSk7XG4gIGNvbG9ycyA9IG5ld0NvbG9ycy5zbGljZSgpO1xuICBjb25zb2xlLmxvZyhjb2xvcnMpO1xufVxuXG5mdW5jdGlvbiBzYXZlSW1hZ2UoKSB7XG4gIGNvbnN0IGNhbnZhcyA9IGdldENhbnZhcygpO1xuICBpZihjYW52YXMpIHtcbiAgICBjb25zdCBpbWFnZSA9IGNhbnZhcy50b0RhdGFVUkwoXCJpbWFnZS9wbmdcIikucmVwbGFjZShcImltYWdlL3BuZ1wiLCBcImltYWdlL29jdGV0LXN0cmVhbVwiKTtcbiAgICB3aW5kb3cubG9jYXRpb24uaHJlZiA9IGltYWdlO1xuICB9IGVsc2Uge1xuICAgIGFsZXJ0KFwiY2FudmFzIG5vdCBkZXRlY3RlZFwiKTtcbiAgfVxufVxuXG4vLyBHTE9CQUxTIFZBUklBQkxFU1xubGV0IHdpZHRoQ2FudmFzID0gMDtcbmxldCBoZWlnaHRDYW52YXMgPSAwO1xubGV0IG5iUGl4ZWxYID0gMDtcbmxldCBuYlBpeGVsWSA9IDA7XG5sZXQgY29sb3JzIDpjb2xvckludGVyZmFjZVtdID0gW107XG53aW5kb3cub25sb2FkID0gZnVuY3Rpb24oKSB7XG4gIGZlZWRDb2xvcnMoKTtcbiAgbG9hZCgpO1xuICBcbiAgLy8gY29ubmVjdCBidXR0b24gKyBpbnB1dHNcbiAgY29uc3QgYnV0dG9uID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJyZXNldC1idXR0b25cIik7XG4gICBpZihidXR0b24pIHtcbiAgICAgYnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBsb2FkKTtcbiAgfVxuXG4gIGNvbnN0IHNhdmVCdXR0b24gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInNhdmUtYnV0dG9uXCIpO1xuICAgaWYoc2F2ZUJ1dHRvbikge1xuICAgICBzYXZlQnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBzYXZlSW1hZ2UpO1xuICB9XG5cbiAgY29uc3QgaW5wdXRXaWR0aCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwid2lkdGhDYW52YXNcIik7XG4gIGlmKGlucHV0V2lkdGgpIHtcbiAgICBpbnB1dFdpZHRoLmFkZEV2ZW50TGlzdGVuZXIoXCJjaGFuZ2VcIiwgKGUpID0+IHsgY2hhbmdlQ2FudmFzU2xpZGVyKFwid2lkdGhcIiwgZSk7IGxvYWQoKSB9KTtcbiAgfVxuICBjb25zdCBpbnB1dEhlaWdodCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiaGVpZ2h0Q2FudmFzXCIpO1xuICBpZihpbnB1dEhlaWdodCkge1xuICAgIGlucHV0SGVpZ2h0LmFkZEV2ZW50TGlzdGVuZXIoXCJjaGFuZ2VcIiwgKGUpID0+IHsgY2hhbmdlQ2FudmFzU2xpZGVyKFwiaGVpZ2h0XCIsIGUpOyBsb2FkKCkgfSk7XG4gIH1cblxuICBjb25zdCBpbnB1dFBpeGVsWCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwibmJQaXhlbFhcIik7XG4gIGlmKGlucHV0UGl4ZWxYKSB7XG4gICAgaW5wdXRQaXhlbFguYWRkRXZlbnRMaXN0ZW5lcihcImNoYW5nZVwiLCAoZSkgPT4geyBjaGFuZ2VQaXhlbFNsaWRlcihcInhcIiwgZSk7IGxvYWQoKSB9KTtcbiAgfVxuICBjb25zdCBpbnB1dFBpeGVsWSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwibmJQaXhlbFlcIik7XG4gIGlmKGlucHV0UGl4ZWxZKSB7XG4gICAgaW5wdXRQaXhlbFkuYWRkRXZlbnRMaXN0ZW5lcihcImNoYW5nZVwiLCAoZSkgPT4geyBjaGFuZ2VQaXhlbFNsaWRlcihcInlcIiwgZSk7IGxvYWQoKSB9KTtcbiAgfVxuXG4gIC8vY29ubmVjdCBlYWNoIGNvbG9yIGlucHV0XG4gIEFycmF5LmZyb20oZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcImlucHV0W3R5cGU9Y29sb3JdXCIpKS5mb3JFYWNoKCAoaXRlbTogSFRNTElucHV0RWxlbWVudCkgPT4ge1xuICAgIGl0ZW0uYWRkRXZlbnRMaXN0ZW5lcihcImNoYW5nZVwiLCBmZWVkQ29sb3JzKTtcbiAgfSlcbiAgLy90aGVuIGNvbG9ycyBjaGVja2JveGVzIGNoZWNrYm94XG4gIEFycmF5LmZyb20oZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcImlucHV0W3R5cGU9Y2hlY2tib3hdXCIpKS5mb3JFYWNoKCAoaXRlbTogSFRNTElucHV0RWxlbWVudCkgPT4ge1xuICAgIGl0ZW0uYWRkRXZlbnRMaXN0ZW5lcihcImNoYW5nZVwiLCBmZWVkQ29sb3JzKTtcbiAgfSlcblxufTtcblxuIiwiaW1wb3J0IHsgY29sb3JJbnRlcmZhY2UgfSBmcm9tIFwiLi9hdmF0YXJcIjtcblxuZXhwb3J0IGZ1bmN0aW9uIGhleFRvUmdiKGhleDogc3RyaW5nKSA6IGNvbG9ySW50ZXJmYWNlIHtcbiAgdmFyIHJlc3VsdCA9IC9eIz8oW2EtZlxcZF17Mn0pKFthLWZcXGRdezJ9KShbYS1mXFxkXXsyfSkkL2kuZXhlYyhoZXgpO1xuICByZXR1cm4gcmVzdWx0ID8ge1xuICAgIHI6IHBhcnNlSW50KHJlc3VsdFsxXSwgMTYpLFxuICAgIGc6IHBhcnNlSW50KHJlc3VsdFsyXSwgMTYpLFxuICAgIGI6IHBhcnNlSW50KHJlc3VsdFszXSwgMTYpXG4gIH0gOiBudWxsO1xufSJdLCJzb3VyY2VSb290IjoiIn0=