let colors = ["red", "green", "rgb(122,234, 197)", "#f15025"]

let btn = document.getElementById('button')
let color = document.querySelector('.color')

btn.addEventListener('click', () => {
    const randomNumber  = getRandomNumber()
  document.body.style.backgroundColor = colors[randomNumber]
  color.textContent = colors[randomNumber]
})

function getRandomNumber() {
    return Math.floor(Math.random()*colors.length)
}