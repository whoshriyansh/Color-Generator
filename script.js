const getcolor = () => {
    const randomNumber = Math.floor(Math.random() * 16777215);
    const randomcode = '#' + randomNumber.toString(16);
    console.log(randomNumber, randomcode);
    document.body.style.background = randomcode
    document.getElementById('color_code').innerText = randomcode

    navigator.clipboard.writeText(randomcode)

}
//event call
document.getElementById('btn').addEventListener("click", getcolor)


//initial call
getcolor();