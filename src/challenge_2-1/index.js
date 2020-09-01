const button = document.querySelector('button')

button.addEventListener('click', () => {
    const body = document.querySelector('body')
    const squareShape = document.createElement('div')
    squareShape.style.background = '#990000'
    squareShape.style.width = '100px'
    squareShape.style.height = '100px'
    squareShape.style.margin = '20px'
    body.appendChild(squareShape)
})