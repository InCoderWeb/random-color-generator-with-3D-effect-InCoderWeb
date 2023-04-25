let copyMsg = document.querySelector('.copyMsg')
refreshColors = document.querySelector('.refreshColors')
colorWrapper = document.querySelectorAll('.colorWrapper')
colorDiv = document.querySelectorAll('.color')

const generateRandomColor = () => { // This function generates random color
    let colorCode = `#${Math.floor(Math.random() * 16777215).toString(16)}`;
    return colorCode
}

const copyColor = (colorCode) => { // This function copies code to clipboard
    navigator.clipboard.writeText(colorCode).then(function () {
        copyMsg.classList.add('active')
        setTimeout(() => {
            copyMsg.classList.remove('active')
        }, 1500)
    }, function (err) {
        console.log('Not Copied')
    });
}

refreshColors.addEventListener('click', () => {
    setColors()
})

// colorWrapper.addEventListener('click', () => {
//     setColors()
// })

colorWrapper.forEach((wrapper) => {
    wrapper.querySelector("span").addEventListener("click", () => {
        let colorCode = wrapper.querySelector(".color").getAttribute('data-color')
        copyColor(colorCode);
    })
})

const setColors = () => {
    colorDiv.forEach(div => {
        div.setAttribute('data-color', generateRandomColor())
        div.style.backgroundColor = div.dataset.color
        div.querySelector('span').innerText = div.dataset.color
        div.addEventListener('click', (e) => {
            copyColor(e.target.parentElement.dataset.color)
        })
    })
}
setColors()

$('.js-tilt').tilt({
    glare: true,
    maxGlare: .3
})