const highlightSelectedText = (event) => {
    event.preventDefault()
    
    if(document.getSelection) {
        
        const selectedText = document.getSelection()
        // console.log("selected text is: ", selectedText.toString())
        
        // don't do anything if user only clicked the page
        if(selectedText.isCollapsed) return


        let range = selectedText.getRangeAt(0).cloneRange()
        
        try {
            const selectedHighlightText = doesSelectionContainHighlight()
            if(selectedHighlightText) {
                console.log("we've selected text that is already been highlighted!")
                //TODO UN-Highlight the selected text (remove span element)
                // how could we remove only the selected text out og span.highlight?
                //  - perhaps remove text, paste it back on outside of span
            }

            const newSpan = document.createElement('span')
            newSpan.className = 'highlight'
            range.surroundContents(newSpan)

            selectedText.removeAllRanges()
            selectedText.addRange(range)
        } catch(e) {
            console.error('sorry, we cannot highlight non text values!', e)
        }
    }    
}


const doesSelectionContainHighlight = () => {
    const highlightedNodes = document.getElementsByClassName('highlight')
    if(highlightedNodes.length == 0) return false
    console.log('highlighted nodes are', highlightedNodes)
    const selectedText = document.getSelection()
    const containsHighlight = Array.from(highlightedNodes).filter((it) => {
        return selectedText.containsNode(it, true)
    })
    return containsHighlight.length > 0 ? true : false

}
document.body.addEventListener('mouseup', highlightSelectedText)
