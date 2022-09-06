const sounds = [
    {
        id: 1,
        name: 'crash',
        url: './sounds/crash.mp3',
        imgUrl: './images/crash.png'
    },
    {
        id: 2,
        name: 'kick',
        url: './sounds/kick-bass.mp3',
        imgUrl: './images/kick.png'
    },
    {
        id: 3,
        name: 'snare',
        url: './sounds/snare.mp3',
        imgUrl: './images/snare.png'
    },
    {
        id: 4,
        name: 'tom1',
        url: './sounds/tom-1.mp3',
        imgUrl: './images/tom1.png'
    },
    {
        id: 5,
        name: 'tom2',
        url: './sounds/tom-2.mp3',
        imgUrl: './images/tom2.png'
    },
    {
        id: 6,
        name: 'tom3',
        url: './sounds/tom-3.mp3',
        imgUrl: './images/tom3.png'
    },
    {
        id: 7,
        name: 'tom4',
        url: './sounds/tom-4.mp3',
        imgUrl: './images/tom4.png'
    }
]

const drums = document.querySelectorAll('.drum')

document.addEventListener('keypress', (event) => {
    let key = event.key
    makeSound(key)
    buttonAnimation(key)
})

drums.forEach((drum)=> {
    drum.addEventListener('click', ()=> {
        let drumInnerHTML = drum.innerHTML
        makeSound(drumInnerHTML)
        buttonAnimation(drumInnerHTML)
    })
})

function makeSound(key) {

    switch (key) {
        case "w":
            const crash = new Audio(sounds[0].url)
            crash.play()            
            break;
        case "a":
            const kick = new Audio(sounds[1].url)
            kick.play()
            break;
        case "s":
            const snare = new Audio(sounds[2].url)
            snare.play()
            break;
        case "d":
            const tom1 = new Audio(sounds[3].url)
            tom1.play()
            break;
        case "j":
            const tom2 = new Audio(sounds[4].url)
            tom2.play()
            break;
        case "k":
            const tom3 = new Audio(sounds[5].url)
            tom3.play()
            break;
        case "l":
            const tom4 = new Audio(sounds[6].url)
            tom4.play()
            break;
    }
}

function buttonAnimation(currentKey) {
    let acctiveButton = document.querySelector(`.${currentKey}`)

    acctiveButton.classList.add('pressed')
    setTimeout(()=> acctiveButton.classList.remove('pressed'), 200)
}


