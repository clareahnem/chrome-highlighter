const highlightSelectedText = (event) => {
    event.preventDefault()
    
    if(document.getSelection) {
        const selectedText = document.getSelection()
        let range = selectedText.getRangeAt(0).cloneRange()

        // wrap with span only if there are text highlighted
        const selectedTextLength = range.endOffset - range.startOffset
        if(selectedTextLength > 0) {
            const newSpan = document.createElement('span')
            newSpan.className = 'highlight'
            range.surroundContents(newSpan)
            selectedText.removeAllRanges()
            selectedText.addRange(range)
        }
    }    
}

document.body.addEventListener('mouseup', highlightSelectedText)