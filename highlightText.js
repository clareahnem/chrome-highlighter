const highlightSelectedText = (event) => {
    event.preventDefault()
    console.log("event listener")
    event.target.style.backgroundColor = "yellow"
}

console.log('highlightText')
document.body.addEventListener('mouseup', highlightSelectedText)