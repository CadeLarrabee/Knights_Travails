/******/ (() => { // webpackBootstrap
var __webpack_exports__ = {};
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
function OnEntry() {
  document.addEventListener("DOMContentLoaded", () => {
    const chessboard = document.getElementById("chessboard");

    for (let row = 0; row < 8; row++) {
      for (let col = 0; col < 8; col++) {
        const square = document.createElement("div");
        square.classList.add("square");

        // Alternate color
        if ((row + col) % 2 === 0) {
          square.classList.add("white");
        } else {
          square.classList.add("black");
        }
        square.setAttribute("id", row + "" + col);

        chessboard.appendChild(square);
      }
    }
  });
}

OnEntry();
//

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoiOzs7OztBQUFBO0FBQ0E7QUFDQTs7QUFFQSxzQkFBc0IsU0FBUztBQUMvQix3QkFBd0IsU0FBUztBQUNqQztBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLFVBQVU7QUFDVjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIOztBQUVBO0FBQ0EiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly90ZW1wbGF0ZS8uL3NyYy9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJmdW5jdGlvbiBPbkVudHJ5KCkge1xuICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKFwiRE9NQ29udGVudExvYWRlZFwiLCAoKSA9PiB7XG4gICAgY29uc3QgY2hlc3Nib2FyZCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiY2hlc3Nib2FyZFwiKTtcblxuICAgIGZvciAobGV0IHJvdyA9IDA7IHJvdyA8IDg7IHJvdysrKSB7XG4gICAgICBmb3IgKGxldCBjb2wgPSAwOyBjb2wgPCA4OyBjb2wrKykge1xuICAgICAgICBjb25zdCBzcXVhcmUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgICAgICBzcXVhcmUuY2xhc3NMaXN0LmFkZChcInNxdWFyZVwiKTtcblxuICAgICAgICAvLyBBbHRlcm5hdGUgY29sb3JcbiAgICAgICAgaWYgKChyb3cgKyBjb2wpICUgMiA9PT0gMCkge1xuICAgICAgICAgIHNxdWFyZS5jbGFzc0xpc3QuYWRkKFwid2hpdGVcIik7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgc3F1YXJlLmNsYXNzTGlzdC5hZGQoXCJibGFja1wiKTtcbiAgICAgICAgfVxuICAgICAgICBzcXVhcmUuc2V0QXR0cmlidXRlKFwiaWRcIiwgcm93ICsgXCJcIiArIGNvbCk7XG5cbiAgICAgICAgY2hlc3Nib2FyZC5hcHBlbmRDaGlsZChzcXVhcmUpO1xuICAgICAgfVxuICAgIH1cbiAgfSk7XG59XG5cbk9uRW50cnkoKTtcbi8vXG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=