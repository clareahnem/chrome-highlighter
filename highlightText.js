const highlightSelectedText = (event) => {
    event.preventDefault()
    
    if(document.getSelection) {
        const selectedText = document.getSelection()
        let range = selectedText.getRangeAt(0).cloneRange()
        
        try {
            // wrap with span only if there are text highlighted
            const selectedTextLength = range.endOffset - range.startOffset
            const hasNestedElements = range.commonAncestorContainer.childNodes.length > 0 ? true : false
            const hasTextToHighlight = selectedTextLength > 0 ? true : hasNestedElements
            if(hasTextToHighlight) {
                console.log(range)
                const newSpan = document.createElement('span')
                newSpan.className = 'highlight'
                // range.extractContents() removes selected text out of DOM. 
                // We wrap the extracted content in <span> and then insert it back to DOM
                newSpan.appendChild(range.extractContents())
                range.insertNode(newSpan)
            }
        } catch(e) {
            console.error('sorry, we cannot highlight non text values!', e)
        }
    }    
}

document.body.addEventListener('mouseup', highlightSelectedText)