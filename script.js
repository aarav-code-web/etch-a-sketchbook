const container = document.getElementById("container");

// inkMode can be "black" or "rainbow"
let inkMode = "black";

// create 16x16 grid = 256 squares
for (let i = 0; i < 256; i++) {
    const div = document.createElement("div");
    div.classList.add("square");

    // hover coloring
    div.addEventListener("mouseenter", () => {
        if (inkMode === "black") {
            div.style.backgroundColor = "black";
        } else if (inkMode === "rainbow") {
            div.style.backgroundColor = "#" + Math.floor(Math.random() * 16777215).toString(16);
        }
    });

    container.appendChild(div);
}

document.getElementById("blackBtn").addEventListener("click", () => {
    inkMode = "black";
});

document.getElementById("rainbowBtn").addEventListener("click", () => {
    inkMode = "rainbow";
});

document.getElementById("clearBtn").addEventListener("click", () => {
    const squares = document.querySelectorAll(".square");
    squares.forEach(square => {
        square.style.backgroundColor = "white";
    });
});
