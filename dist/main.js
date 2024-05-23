/******/ (() => { // webpackBootstrap
var __webpack_exports__ = {};
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
function OnEntry() {
  document.addEventListener("DOMContentLoaded", () => {
    const chessboard = document.getElementById("chessboard");

    //Generate a chessboard with colored squares

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
        square.setAttribute("row", row);
        square.setAttribute("col", col);
        square.id = `${row}-${col}`;
        square.addEventListener("click", () => {
          AddKnight(square);
        });

        chessboard.appendChild(square);
      }
    }
  });
}

function AddKnight(square) {
  //given a square, add a knight
  if (!square.querySelector("img")) {
    const img = document.createElement("img");
    img.classList.add("knight");
    img.src = "./img/knight.png";
    square.appendChild(img);
    targetX = Math.floor(Math.random() * 7);
    targetY = Math.floor(Math.random() * 7);
    BFS(
      parseInt(square.getAttribute("row"), 10),
      parseInt(square.getAttribute("col"), 10),
      targetX,
      targetY
    );
  }
}

function BFS(startX, startY, targetX, targetY, N = 8) {
  //mark target
  const targetElement = document.getElementById(`${targetX}-${targetY}`);
  if (targetElement) {
    targetElement.classList.add("target"); // Mark the target element (optional)
  }
  //Given a start and a target, search the board
  const moves = [
    [2, 1],
    [2, -1],
    [-2, 1],
    [-2, -1],
    [1, 2],
    [1, -2],
    [-1, 2],
    [-1, -2],
  ];

  function findAllPossibleMoves(x, y) {
    const modifiedMoves = moves.map((element) => {
      const newX = element[0] + x;
      const newY = element[1] + y;
      if (newX >= 0 && newX < 8 && newY >= 0 && newY < 8) {
        return [newX, newY];
      }
      return null;
    });
    return modifiedMoves.filter((move) => move !== null);
  }

  const queue = [[startX, startY, 0]]; // [x, y, distance]
  const visited = new Set();
  visited.add(`${startX},${startY}`);

  //Begin searching

  while (queue.length > 0) {
    const [x, y, dist] = queue.shift();
    //console.log(x, y, dist);

    if (x === targetX && y === targetY) {
      console.log("found at: " + dist);
      return dist;
    }

    //This could be improved by removing all possible moves that are on the other side of the board

    const possibleMoves = findAllPossibleMoves(x, y);
    for (const [newX, newY] of possibleMoves) {
      if (!visited.has(`${newX},${newY}`)) {
        visited.add(`${newX},${newY}`);
        queue.push([newX, newY, dist + 1]);
      }
    }
  }

  return -1; // If the target position is not reachable
}

OnEntry();
//

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoiOzs7OztBQUFBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQSxzQkFBc0IsU0FBUztBQUMvQix3QkFBd0IsU0FBUztBQUNqQztBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLFVBQVU7QUFDVjtBQUNBO0FBQ0E7QUFDQTtBQUNBLHVCQUF1QixJQUFJLEdBQUcsSUFBSTtBQUNsQztBQUNBO0FBQ0EsU0FBUzs7QUFFVDtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsbURBQW1ELFFBQVEsR0FBRyxRQUFRO0FBQ3RFO0FBQ0EsMkNBQTJDO0FBQzNDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7O0FBRUEsdUNBQXVDO0FBQ3ZDO0FBQ0EsaUJBQWlCLE9BQU8sR0FBRyxPQUFPOztBQUVsQzs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBLDBCQUEwQixLQUFLLEdBQUcsS0FBSztBQUN2Qyx1QkFBdUIsS0FBSyxHQUFHLEtBQUs7QUFDcEM7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsYUFBYTtBQUNiOztBQUVBO0FBQ0EiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly90ZW1wbGF0ZS8uL3NyYy9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJmdW5jdGlvbiBPbkVudHJ5KCkge1xuICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKFwiRE9NQ29udGVudExvYWRlZFwiLCAoKSA9PiB7XG4gICAgY29uc3QgY2hlc3Nib2FyZCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiY2hlc3Nib2FyZFwiKTtcblxuICAgIC8vR2VuZXJhdGUgYSBjaGVzc2JvYXJkIHdpdGggY29sb3JlZCBzcXVhcmVzXG5cbiAgICBmb3IgKGxldCByb3cgPSAwOyByb3cgPCA4OyByb3crKykge1xuICAgICAgZm9yIChsZXQgY29sID0gMDsgY29sIDwgODsgY29sKyspIHtcbiAgICAgICAgY29uc3Qgc3F1YXJlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICAgICAgc3F1YXJlLmNsYXNzTGlzdC5hZGQoXCJzcXVhcmVcIik7XG5cbiAgICAgICAgLy8gQWx0ZXJuYXRlIGNvbG9yXG4gICAgICAgIGlmICgocm93ICsgY29sKSAlIDIgPT09IDApIHtcbiAgICAgICAgICBzcXVhcmUuY2xhc3NMaXN0LmFkZChcIndoaXRlXCIpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHNxdWFyZS5jbGFzc0xpc3QuYWRkKFwiYmxhY2tcIik7XG4gICAgICAgIH1cbiAgICAgICAgc3F1YXJlLnNldEF0dHJpYnV0ZShcInJvd1wiLCByb3cpO1xuICAgICAgICBzcXVhcmUuc2V0QXR0cmlidXRlKFwiY29sXCIsIGNvbCk7XG4gICAgICAgIHNxdWFyZS5pZCA9IGAke3Jvd30tJHtjb2x9YDtcbiAgICAgICAgc3F1YXJlLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XG4gICAgICAgICAgQWRkS25pZ2h0KHNxdWFyZSk7XG4gICAgICAgIH0pO1xuXG4gICAgICAgIGNoZXNzYm9hcmQuYXBwZW5kQ2hpbGQoc3F1YXJlKTtcbiAgICAgIH1cbiAgICB9XG4gIH0pO1xufVxuXG5mdW5jdGlvbiBBZGRLbmlnaHQoc3F1YXJlKSB7XG4gIC8vZ2l2ZW4gYSBzcXVhcmUsIGFkZCBhIGtuaWdodFxuICBpZiAoIXNxdWFyZS5xdWVyeVNlbGVjdG9yKFwiaW1nXCIpKSB7XG4gICAgY29uc3QgaW1nID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImltZ1wiKTtcbiAgICBpbWcuY2xhc3NMaXN0LmFkZChcImtuaWdodFwiKTtcbiAgICBpbWcuc3JjID0gXCIuL2ltZy9rbmlnaHQucG5nXCI7XG4gICAgc3F1YXJlLmFwcGVuZENoaWxkKGltZyk7XG4gICAgdGFyZ2V0WCA9IE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIDcpO1xuICAgIHRhcmdldFkgPSBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiA3KTtcbiAgICBCRlMoXG4gICAgICBwYXJzZUludChzcXVhcmUuZ2V0QXR0cmlidXRlKFwicm93XCIpLCAxMCksXG4gICAgICBwYXJzZUludChzcXVhcmUuZ2V0QXR0cmlidXRlKFwiY29sXCIpLCAxMCksXG4gICAgICB0YXJnZXRYLFxuICAgICAgdGFyZ2V0WVxuICAgICk7XG4gIH1cbn1cblxuZnVuY3Rpb24gQkZTKHN0YXJ0WCwgc3RhcnRZLCB0YXJnZXRYLCB0YXJnZXRZLCBOID0gOCkge1xuICAvL21hcmsgdGFyZ2V0XG4gIGNvbnN0IHRhcmdldEVsZW1lbnQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChgJHt0YXJnZXRYfS0ke3RhcmdldFl9YCk7XG4gIGlmICh0YXJnZXRFbGVtZW50KSB7XG4gICAgdGFyZ2V0RWxlbWVudC5jbGFzc0xpc3QuYWRkKFwidGFyZ2V0XCIpOyAvLyBNYXJrIHRoZSB0YXJnZXQgZWxlbWVudCAob3B0aW9uYWwpXG4gIH1cbiAgLy9HaXZlbiBhIHN0YXJ0IGFuZCBhIHRhcmdldCwgc2VhcmNoIHRoZSBib2FyZFxuICBjb25zdCBtb3ZlcyA9IFtcbiAgICBbMiwgMV0sXG4gICAgWzIsIC0xXSxcbiAgICBbLTIsIDFdLFxuICAgIFstMiwgLTFdLFxuICAgIFsxLCAyXSxcbiAgICBbMSwgLTJdLFxuICAgIFstMSwgMl0sXG4gICAgWy0xLCAtMl0sXG4gIF07XG5cbiAgZnVuY3Rpb24gZmluZEFsbFBvc3NpYmxlTW92ZXMoeCwgeSkge1xuICAgIGNvbnN0IG1vZGlmaWVkTW92ZXMgPSBtb3Zlcy5tYXAoKGVsZW1lbnQpID0+IHtcbiAgICAgIGNvbnN0IG5ld1ggPSBlbGVtZW50WzBdICsgeDtcbiAgICAgIGNvbnN0IG5ld1kgPSBlbGVtZW50WzFdICsgeTtcbiAgICAgIGlmIChuZXdYID49IDAgJiYgbmV3WCA8IDggJiYgbmV3WSA+PSAwICYmIG5ld1kgPCA4KSB7XG4gICAgICAgIHJldHVybiBbbmV3WCwgbmV3WV07XG4gICAgICB9XG4gICAgICByZXR1cm4gbnVsbDtcbiAgICB9KTtcbiAgICByZXR1cm4gbW9kaWZpZWRNb3Zlcy5maWx0ZXIoKG1vdmUpID0+IG1vdmUgIT09IG51bGwpO1xuICB9XG5cbiAgY29uc3QgcXVldWUgPSBbW3N0YXJ0WCwgc3RhcnRZLCAwXV07IC8vIFt4LCB5LCBkaXN0YW5jZV1cbiAgY29uc3QgdmlzaXRlZCA9IG5ldyBTZXQoKTtcbiAgdmlzaXRlZC5hZGQoYCR7c3RhcnRYfSwke3N0YXJ0WX1gKTtcblxuICAvL0JlZ2luIHNlYXJjaGluZ1xuXG4gIHdoaWxlIChxdWV1ZS5sZW5ndGggPiAwKSB7XG4gICAgY29uc3QgW3gsIHksIGRpc3RdID0gcXVldWUuc2hpZnQoKTtcbiAgICAvL2NvbnNvbGUubG9nKHgsIHksIGRpc3QpO1xuXG4gICAgaWYgKHggPT09IHRhcmdldFggJiYgeSA9PT0gdGFyZ2V0WSkge1xuICAgICAgY29uc29sZS5sb2coXCJmb3VuZCBhdDogXCIgKyBkaXN0KTtcbiAgICAgIHJldHVybiBkaXN0O1xuICAgIH1cblxuICAgIC8vVGhpcyBjb3VsZCBiZSBpbXByb3ZlZCBieSByZW1vdmluZyBhbGwgcG9zc2libGUgbW92ZXMgdGhhdCBhcmUgb24gdGhlIG90aGVyIHNpZGUgb2YgdGhlIGJvYXJkXG5cbiAgICBjb25zdCBwb3NzaWJsZU1vdmVzID0gZmluZEFsbFBvc3NpYmxlTW92ZXMoeCwgeSk7XG4gICAgZm9yIChjb25zdCBbbmV3WCwgbmV3WV0gb2YgcG9zc2libGVNb3Zlcykge1xuICAgICAgaWYgKCF2aXNpdGVkLmhhcyhgJHtuZXdYfSwke25ld1l9YCkpIHtcbiAgICAgICAgdmlzaXRlZC5hZGQoYCR7bmV3WH0sJHtuZXdZfWApO1xuICAgICAgICBxdWV1ZS5wdXNoKFtuZXdYLCBuZXdZLCBkaXN0ICsgMV0pO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIHJldHVybiAtMTsgLy8gSWYgdGhlIHRhcmdldCBwb3NpdGlvbiBpcyBub3QgcmVhY2hhYmxlXG59XG5cbk9uRW50cnkoKTtcbi8vXG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=