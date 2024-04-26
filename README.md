# Chrome Extension: Web Text Highlighter
## About
This is a simple chrome extention that allow you to highlight simple text on a web page, like you would highlight text on physical paper. Simply drag mouse over text to highlight. 

## Using this extension
This extension is yet to be published. To use this extension on your local machine, follow the below simple steps:
1. Clone this repository
2. Go to `chrome://extensions/`. You must access this on your chrome browser
3. Enable developer mode
4. Click on "Load unpacked", then select the cloned repository.
5. You should now see the "Web highlighter" extention added to your extensions list (You should find your extensions list on the top right of your chrome browser.) Click on the "Web Highlighter" extension until you see the icon display the word "ON" - you are now ready to start highlighting!

---
## User stories
<u>Completed stories </u>


**GIVEN** I am a user browsing a page on chrome window\
**WHEN** I enable the web highlighter extension **AND** I drag my mouse over text\
**THEN** I should see the text being highlighted

**GIVEN** that the text has been highlighted\
**WHEN** I click away from the highlighted text\
**THEN** I should still see the text being highlighted

**GIVEN** that I have a highlighted text on the page\
**WHEN** I drag my mouse over another piece of text on the same page\
**THEN** I should see the existing highlighted text and the next text both highlighted

**GIVEN** Web page includes content that is not simple text amongst simple text\
**WHEN** I drag over simple text as well as non-text content\
**THEN** I should be able to see the simple text part that I dragged over being highlighted

<u>Incomplete stories</u>

**GIVEN** I have highlighted text on the page\
**WHEN** I drag over the highlighted text again\
**THEN** I should see the text no longer being highlighted

**GIVEN** web page includes content that is not simple text\
**WHEN** I drag over this content\
**THEN** I should not encounter any errors in the background




---

**disclaimer: icon images was taken from Flaticon.com*

