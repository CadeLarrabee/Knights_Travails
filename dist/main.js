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
    img.src = "knight.png";
    square.appendChild(img);
  }
}

function BFS(startX, startY, targetX, targetY, N = 8) {
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

  function isValid(x, y) {
    return x >= 0 && x < N && y >= 0 && y < N;
  }

  function findAllPossibleMoves(x, y) {
    return moves
      .map((move) => [x + move[0], y + move[1]])
      .filter(([newX, newY]) => isValid(newX, newY));
  }

  const queue = [[startX, startY, 0]]; // [x, y, distance]
  const visited = new Set();
  visited.add(`${startX},${startY}`);

  //Begin searching

  while (queue.length > 0) {
    const [x, y, dist] = queue.shift();

    if (x === targetX && y === targetY) {
      console.log(dist);
      return dist;
    }

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoiOzs7OztBQUFBO0FBQ0E7QUFDQTs7QUFFQSxzQkFBc0IsU0FBUztBQUMvQix3QkFBd0IsU0FBUztBQUNqQztBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLFVBQVU7QUFDVjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUzs7QUFFVDtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsdUNBQXVDO0FBQ3ZDO0FBQ0EsaUJBQWlCLE9BQU8sR0FBRyxPQUFPOztBQUVsQzs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSwwQkFBMEIsS0FBSyxHQUFHLEtBQUs7QUFDdkMsdUJBQXVCLEtBQUssR0FBRyxLQUFLO0FBQ3BDO0FBQ0E7QUFDQTtBQUNBOztBQUVBLGFBQWE7QUFDYjs7QUFFQTtBQUNBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vdGVtcGxhdGUvLi9zcmMvaW5kZXguanMiXSwic291cmNlc0NvbnRlbnQiOlsiZnVuY3Rpb24gT25FbnRyeSgpIHtcbiAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihcIkRPTUNvbnRlbnRMb2FkZWRcIiwgKCkgPT4ge1xuICAgIGNvbnN0IGNoZXNzYm9hcmQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImNoZXNzYm9hcmRcIik7XG5cbiAgICBmb3IgKGxldCByb3cgPSAwOyByb3cgPCA4OyByb3crKykge1xuICAgICAgZm9yIChsZXQgY29sID0gMDsgY29sIDwgODsgY29sKyspIHtcbiAgICAgICAgY29uc3Qgc3F1YXJlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICAgICAgc3F1YXJlLmNsYXNzTGlzdC5hZGQoXCJzcXVhcmVcIik7XG5cbiAgICAgICAgLy8gQWx0ZXJuYXRlIGNvbG9yXG4gICAgICAgIGlmICgocm93ICsgY29sKSAlIDIgPT09IDApIHtcbiAgICAgICAgICBzcXVhcmUuY2xhc3NMaXN0LmFkZChcIndoaXRlXCIpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHNxdWFyZS5jbGFzc0xpc3QuYWRkKFwiYmxhY2tcIik7XG4gICAgICAgIH1cbiAgICAgICAgc3F1YXJlLnNldEF0dHJpYnV0ZShcImlkXCIsIHJvdyArIFwiXCIgKyBjb2wpO1xuICAgICAgICBzcXVhcmUuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcbiAgICAgICAgICBBZGRLbmlnaHQoc3F1YXJlKTtcbiAgICAgICAgfSk7XG5cbiAgICAgICAgY2hlc3Nib2FyZC5hcHBlbmRDaGlsZChzcXVhcmUpO1xuICAgICAgfVxuICAgIH1cbiAgfSk7XG59XG5cbmZ1bmN0aW9uIEFkZEtuaWdodChzcXVhcmUpIHtcbiAgLy9naXZlbiBhIHNxdWFyZSwgYWRkIGEga25pZ2h0XG4gIGlmICghc3F1YXJlLnF1ZXJ5U2VsZWN0b3IoXCJpbWdcIikpIHtcbiAgICBjb25zdCBpbWcgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaW1nXCIpO1xuICAgIGltZy5zcmMgPSBcImtuaWdodC5wbmdcIjtcbiAgICBzcXVhcmUuYXBwZW5kQ2hpbGQoaW1nKTtcbiAgfVxufVxuXG5mdW5jdGlvbiBCRlMoc3RhcnRYLCBzdGFydFksIHRhcmdldFgsIHRhcmdldFksIE4gPSA4KSB7XG4gIC8vR2l2ZW4gYSBzdGFydCBhbmQgYSB0YXJnZXQsIHNlYXJjaCB0aGUgYm9hcmRcbiAgY29uc3QgbW92ZXMgPSBbXG4gICAgWzIsIDFdLFxuICAgIFsyLCAtMV0sXG4gICAgWy0yLCAxXSxcbiAgICBbLTIsIC0xXSxcbiAgICBbMSwgMl0sXG4gICAgWzEsIC0yXSxcbiAgICBbLTEsIDJdLFxuICAgIFstMSwgLTJdLFxuICBdO1xuXG4gIGZ1bmN0aW9uIGlzVmFsaWQoeCwgeSkge1xuICAgIHJldHVybiB4ID49IDAgJiYgeCA8IE4gJiYgeSA+PSAwICYmIHkgPCBOO1xuICB9XG5cbiAgZnVuY3Rpb24gZmluZEFsbFBvc3NpYmxlTW92ZXMoeCwgeSkge1xuICAgIHJldHVybiBtb3Zlc1xuICAgICAgLm1hcCgobW92ZSkgPT4gW3ggKyBtb3ZlWzBdLCB5ICsgbW92ZVsxXV0pXG4gICAgICAuZmlsdGVyKChbbmV3WCwgbmV3WV0pID0+IGlzVmFsaWQobmV3WCwgbmV3WSkpO1xuICB9XG5cbiAgY29uc3QgcXVldWUgPSBbW3N0YXJ0WCwgc3RhcnRZLCAwXV07IC8vIFt4LCB5LCBkaXN0YW5jZV1cbiAgY29uc3QgdmlzaXRlZCA9IG5ldyBTZXQoKTtcbiAgdmlzaXRlZC5hZGQoYCR7c3RhcnRYfSwke3N0YXJ0WX1gKTtcblxuICAvL0JlZ2luIHNlYXJjaGluZ1xuXG4gIHdoaWxlIChxdWV1ZS5sZW5ndGggPiAwKSB7XG4gICAgY29uc3QgW3gsIHksIGRpc3RdID0gcXVldWUuc2hpZnQoKTtcblxuICAgIGlmICh4ID09PSB0YXJnZXRYICYmIHkgPT09IHRhcmdldFkpIHtcbiAgICAgIGNvbnNvbGUubG9nKGRpc3QpO1xuICAgICAgcmV0dXJuIGRpc3Q7XG4gICAgfVxuXG4gICAgY29uc3QgcG9zc2libGVNb3ZlcyA9IGZpbmRBbGxQb3NzaWJsZU1vdmVzKHgsIHkpO1xuICAgIGZvciAoY29uc3QgW25ld1gsIG5ld1ldIG9mIHBvc3NpYmxlTW92ZXMpIHtcbiAgICAgIGlmICghdmlzaXRlZC5oYXMoYCR7bmV3WH0sJHtuZXdZfWApKSB7XG4gICAgICAgIHZpc2l0ZWQuYWRkKGAke25ld1h9LCR7bmV3WX1gKTtcbiAgICAgICAgcXVldWUucHVzaChbbmV3WCwgbmV3WSwgZGlzdCArIDFdKTtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICByZXR1cm4gLTE7IC8vIElmIHRoZSB0YXJnZXQgcG9zaXRpb24gaXMgbm90IHJlYWNoYWJsZVxufVxuXG5PbkVudHJ5KCk7XG4vL1xuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9