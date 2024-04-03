const highlightSelectedText = (event) => {
    event.preventDefault()
    
    if(document.getSelection) {
        const selectedText = document.getSelection()
        let range = selectedText.getRangeAt(0).cloneRange()
        
        try {
            // wrap with span only if there are text highlighted
            const selectedTextLength = range.endOffset - range.startOffset
            const hasNestedElements = range.commonAncestorContainer.childNodes.length > 0 ? true : false
            console.log('hasNestedElements?', hasNestedElements)
            const hasTextToHighlight = selectedTextLength > 0 ? true : hasNestedElements
            if(hasTextToHighlight) {
                const newSpan = document.createElement('span')
                newSpan.className = 'highlight'
                range.surroundContents(newSpan)

                selectedText.removeAllRanges()
                selectedText.addRange(range)
            }
        } catch(e) {
            console.error('sorry, we cannot highlight non text values!', e)
        }
    }    
}

document.body.addEventListener('mouseup', highlightSelectedText)