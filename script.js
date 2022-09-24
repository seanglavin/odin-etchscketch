

const slider = document.getElementById("sizeSlider")
const displaySize = document.getElementById("displaySliderSize")
size = 16
displaySize.innerHTML = `${size}x${size}`

slider.addEventListener('change', () => {
    size = slider.value;

    displaySize.innerHTML = `${size}x${size}` 
})

function changeColor() {
    this.style.backgroundColor = "black"
}




const canvasContainer = document.getElementById("canvasContainer")

function makeCanvas() {
    console.log(size)

    document.querySelectorAll("div.canvasItem").forEach(item => {
        item.remove()
    })

    canvasContainer.style.setProperty("--gridSize", size)
 
    for (i = 0; i < (size * size); i++) {
        let cell = document.createElement("div")
        cell.addEventListener('mouseover', changeColor) 
        canvasContainer.appendChild(cell).className = "canvasItem"
        }
    }





const makeCanvasButton = document.querySelector('#makeCanvasButton')

makeCanvasButton.addEventListener('click', makeCanvas)