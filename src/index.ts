const boxesContainer = document.getElementById('boxes') as HTMLDivElement
const btn = document.getElementById('btn') as HTMLButtonElement

function createBoxes () {
    for(let i = 0; i < 4; i++) {
        for (let j = 0; j < 4; j++) {
            const box = document.createElement('div') as HTMLDivElement
            box.classList.add('box')
            box.style.backgroundPosition = `${-j * 125}px ${-i * 125}px`
            boxesContainer.appendChild(box)
        }  
    }
}

btn?.addEventListener('click', () => boxesContainer.classList.toggle('big'))

createBoxes()