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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoiOzs7OztBQUFBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQSxzQkFBc0IsU0FBUztBQUMvQix3QkFBd0IsU0FBUztBQUNqQztBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLFVBQVU7QUFDVjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUzs7QUFFVDtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsdUNBQXVDO0FBQ3ZDO0FBQ0EsaUJBQWlCLE9BQU8sR0FBRyxPQUFPOztBQUVsQzs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSwwQkFBMEIsS0FBSyxHQUFHLEtBQUs7QUFDdkMsdUJBQXVCLEtBQUssR0FBRyxLQUFLO0FBQ3BDO0FBQ0E7QUFDQTtBQUNBOztBQUVBLGFBQWE7QUFDYjs7QUFFQTtBQUNBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vdGVtcGxhdGUvLi9zcmMvaW5kZXguanMiXSwic291cmNlc0NvbnRlbnQiOlsiZnVuY3Rpb24gT25FbnRyeSgpIHtcbiAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihcIkRPTUNvbnRlbnRMb2FkZWRcIiwgKCkgPT4ge1xuICAgIGNvbnN0IGNoZXNzYm9hcmQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImNoZXNzYm9hcmRcIik7XG5cbiAgICAvL0dlbmVyYXRlIGEgY2hlc3Nib2FyZCB3aXRoIGNvbG9yZWQgc3F1YXJlc1xuXG4gICAgZm9yIChsZXQgcm93ID0gMDsgcm93IDwgODsgcm93KyspIHtcbiAgICAgIGZvciAobGV0IGNvbCA9IDA7IGNvbCA8IDg7IGNvbCsrKSB7XG4gICAgICAgIGNvbnN0IHNxdWFyZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgICAgIHNxdWFyZS5jbGFzc0xpc3QuYWRkKFwic3F1YXJlXCIpO1xuXG4gICAgICAgIC8vIEFsdGVybmF0ZSBjb2xvclxuICAgICAgICBpZiAoKHJvdyArIGNvbCkgJSAyID09PSAwKSB7XG4gICAgICAgICAgc3F1YXJlLmNsYXNzTGlzdC5hZGQoXCJ3aGl0ZVwiKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBzcXVhcmUuY2xhc3NMaXN0LmFkZChcImJsYWNrXCIpO1xuICAgICAgICB9XG4gICAgICAgIHNxdWFyZS5zZXRBdHRyaWJ1dGUoXCJpZFwiLCByb3cgKyBcIlwiICsgY29sKTtcbiAgICAgICAgc3F1YXJlLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XG4gICAgICAgICAgQWRkS25pZ2h0KHNxdWFyZSk7XG4gICAgICAgIH0pO1xuXG4gICAgICAgIGNoZXNzYm9hcmQuYXBwZW5kQ2hpbGQoc3F1YXJlKTtcbiAgICAgIH1cbiAgICB9XG4gIH0pO1xufVxuXG5mdW5jdGlvbiBBZGRLbmlnaHQoc3F1YXJlKSB7XG4gIC8vZ2l2ZW4gYSBzcXVhcmUsIGFkZCBhIGtuaWdodFxuICBpZiAoIXNxdWFyZS5xdWVyeVNlbGVjdG9yKFwiaW1nXCIpKSB7XG4gICAgY29uc3QgaW1nID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImltZ1wiKTtcbiAgICBpbWcuc3JjID0gXCJrbmlnaHQucG5nXCI7XG4gICAgc3F1YXJlLmFwcGVuZENoaWxkKGltZyk7XG4gIH1cbn1cblxuZnVuY3Rpb24gQkZTKHN0YXJ0WCwgc3RhcnRZLCB0YXJnZXRYLCB0YXJnZXRZLCBOID0gOCkge1xuICAvL0dpdmVuIGEgc3RhcnQgYW5kIGEgdGFyZ2V0LCBzZWFyY2ggdGhlIGJvYXJkXG4gIGNvbnN0IG1vdmVzID0gW1xuICAgIFsyLCAxXSxcbiAgICBbMiwgLTFdLFxuICAgIFstMiwgMV0sXG4gICAgWy0yLCAtMV0sXG4gICAgWzEsIDJdLFxuICAgIFsxLCAtMl0sXG4gICAgWy0xLCAyXSxcbiAgICBbLTEsIC0yXSxcbiAgXTtcblxuICBmdW5jdGlvbiBpc1ZhbGlkKHgsIHkpIHtcbiAgICByZXR1cm4geCA+PSAwICYmIHggPCBOICYmIHkgPj0gMCAmJiB5IDwgTjtcbiAgfVxuXG4gIGZ1bmN0aW9uIGZpbmRBbGxQb3NzaWJsZU1vdmVzKHgsIHkpIHtcbiAgICByZXR1cm4gbW92ZXNcbiAgICAgIC5tYXAoKG1vdmUpID0+IFt4ICsgbW92ZVswXSwgeSArIG1vdmVbMV1dKVxuICAgICAgLmZpbHRlcigoW25ld1gsIG5ld1ldKSA9PiBpc1ZhbGlkKG5ld1gsIG5ld1kpKTtcbiAgfVxuXG4gIGNvbnN0IHF1ZXVlID0gW1tzdGFydFgsIHN0YXJ0WSwgMF1dOyAvLyBbeCwgeSwgZGlzdGFuY2VdXG4gIGNvbnN0IHZpc2l0ZWQgPSBuZXcgU2V0KCk7XG4gIHZpc2l0ZWQuYWRkKGAke3N0YXJ0WH0sJHtzdGFydFl9YCk7XG5cbiAgLy9CZWdpbiBzZWFyY2hpbmdcblxuICB3aGlsZSAocXVldWUubGVuZ3RoID4gMCkge1xuICAgIGNvbnN0IFt4LCB5LCBkaXN0XSA9IHF1ZXVlLnNoaWZ0KCk7XG5cbiAgICBpZiAoeCA9PT0gdGFyZ2V0WCAmJiB5ID09PSB0YXJnZXRZKSB7XG4gICAgICBjb25zb2xlLmxvZyhkaXN0KTtcbiAgICAgIHJldHVybiBkaXN0O1xuICAgIH1cblxuICAgIGNvbnN0IHBvc3NpYmxlTW92ZXMgPSBmaW5kQWxsUG9zc2libGVNb3Zlcyh4LCB5KTtcbiAgICBmb3IgKGNvbnN0IFtuZXdYLCBuZXdZXSBvZiBwb3NzaWJsZU1vdmVzKSB7XG4gICAgICBpZiAoIXZpc2l0ZWQuaGFzKGAke25ld1h9LCR7bmV3WX1gKSkge1xuICAgICAgICB2aXNpdGVkLmFkZChgJHtuZXdYfSwke25ld1l9YCk7XG4gICAgICAgIHF1ZXVlLnB1c2goW25ld1gsIG5ld1ksIGRpc3QgKyAxXSk7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIC0xOyAvLyBJZiB0aGUgdGFyZ2V0IHBvc2l0aW9uIGlzIG5vdCByZWFjaGFibGVcbn1cblxuT25FbnRyeSgpO1xuLy9cbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==