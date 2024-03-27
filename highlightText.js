const getSelectedText = () => {
    let selectedText = ''

    if(document.getSelection) {
        selectedText = document.getSelection()
        let range = selectedText.getRangeAt(0).cloneRange()

        const newSpan = document.createElement('span')
        newSpan.className = 'highlight'
        range.surroundContents(newSpan)
        selectedText.removeAllRanges()
        selectedText.addRange(range)
        console.log("extractContents", `${selectedText}`)
    } 

    return selectedText
}

const highlightSelectedText = (event) => {
    event.preventDefault()
    getSelectedText()
}

document.body.addEventListener('mouseup', highlightSelectedText)