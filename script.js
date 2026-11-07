const changeButton = document.getElementById("change_button");
const resetButton = document.getElementById("Reset");
const gridItems = document.querySelectorAll(".grid-item");

changeButton.addEventListener("click", () => {
    const blockId = document.getElementById("block_id").value.trim();
    const color = document.getElementById("colour_id").value.trim();

    // Reset all grid backgrounds to transparent first
    gridItems.forEach(item => {
        item.style.backgroundColor = "transparent";
    });

    // Apply color to the specific targeted block if it exists
    if (blockId) {
        const targetBlock = document.getElementById(blockId);
        if (targetBlock && color) {
            targetBlock.style.backgroundColor = color;
        }
    }
});

resetButton.addEventListener("click", () => {
    // Reset all grid backgrounds and clear inputs
    gridItems.forEach(item => {
        item.style.backgroundColor = "transparent";
    });
    document.getElementById("block_id").value = "";
    document.getElementById("colour_id").value = "";
});