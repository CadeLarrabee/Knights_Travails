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
