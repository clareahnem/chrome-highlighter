const getSelectedText = () => {
    let selectedText = ''

    if(window.getSelection) {
        selectedText = window.getSelection()
        console.log("window.getSelection", selectedText)
    } 

    return selectedText
}

const highlightSelectedText = (event) => {
    event.preventDefault()
    // TODO stop using event.target as this highlights the entire element
    event.target.style.backgroundColor = "yellow"
    const selectedText = getSelectedText()
}

console.log('highlightText')
document.body.addEventListener('mouseup', highlightSelectedText)