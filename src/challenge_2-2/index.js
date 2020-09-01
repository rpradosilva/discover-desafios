const button = document.querySelector('button')
const body = document.querySelector('body')

button.addEventListener('click', () => {
    const squareShape = document.createElement('div')

    squareShape.style.background = 'red'
    squareShape.style.width = '100px'
    squareShape.style.height = '100px'
    squareShape.style.margin = '20px'

    squareShape.addEventListener('mouseover', () => {
        let newColor = getRandomColor()
        squareShape.style.background = newColor
    })

    body.appendChild(squareShape)
})

function getRandomColor() {
    let letters = '0123456789ABCDEF'
    let color = '#'
    for (let i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)]
    }
    return color
}