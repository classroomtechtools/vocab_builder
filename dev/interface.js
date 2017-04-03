/*
    Functions that interface between the client-side frontend and the google backend
    On local run these are not directly called, but mimicked with placeholder behaviour
    On production is called by google.run.script on the client-side browser
*/

'use strict';

/*
    Called when user clicks on Start button
    Updates the document to have a horizontal rule and command text
*/
function highlight(color) {
  Logger.log('color: ', color);
  var selection = DocumentApp.getActiveDocument().getSelection();
  if (selection == null) {
    // some message here
    return false;
  }

  var elements = selection.getRangeElements();

  elements.forEach(function(element) {
      if (element.getElement().getType() == 'TEXT') {
          var ele = element.getElement();
          ele.setBackgroundColor(
         	  element.getStartOffset(), 
        	  element.getEndOffsetInclusive(), 
           	  color
          );
      }
  });

  return true;
}

function clearHighlight() {
    var elements = DocumentApp.getActiveDocument().getSelection().getRangeElements();
    elements.forEach(function(element) {
        if (element.getElement().getType() == 'TEXT') {
            var ele = element.getElement();
            ele.setBackgroundColor(
            	element.getStartOffset(),
            	element.getEndOffsetInclusive(),
            	null
            );
        }
    });
}
