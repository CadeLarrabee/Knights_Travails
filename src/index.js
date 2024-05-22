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
