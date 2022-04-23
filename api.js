const jokeEl = document.getElementById('joke')
const jokeBtn = document.getElementById('joke-btn')
const like = document.getElementById('like')
const likeRemove = document.querySelector('.like.color')
const volume = document.querySelector('.volume')
const container = document.querySelector('.container')
const dark = document.getElementById('dark-mode')
jokeBtn.addEventListener('click', generate)
generate()
function generate() {
    const config = {
        headers: {
            Accept : 'application/json',
        },
    }

    fetch('https://icanhazdadjoke.com', config).then((res) => res.json()).then((data) => {
        jokeEl.innerHTML = data.joke
    })

    like.classList.remove("color")
}

like.addEventListener('click', () => {
    if(like.classList.contains("color"))
    {
        like.classList.remove("color")
    }
    else {
    like.classList.add("color")}
} )

dark.addEventListener('click', () => {
    if(dark.classList.contains("dark"))
    {
        dark.classList.remove("dark")
        like.classList.remove("dark")
        volume.classList.remove("dark")
        container.classList.remove("dark")
    }
    else {
        dark.classList.add("dark")
        like.classList.add("dark")
        volume.classList.add("dark")
        container.classList.add("dark")
    }
})
