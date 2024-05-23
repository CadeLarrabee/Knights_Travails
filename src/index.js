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
