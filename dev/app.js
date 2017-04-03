/*
  main program
  Builds an app object on the global context; all properties are functions
  Which means no actual code (other than assignments) is executed at initial loading

  Usage:

  //
  // file.js
  // =======
  function onOpen() {
    app.onOpen();  // app will already be defined in the global context
  }
*/

'use strict';

/*
  Build upon the globalContext (passed as this below) to define all our variables in the "app" variable
  We'll have all the virtualized stuff there in the local stack (thus, name conflicts are still possible)
*/
(function(globalContext) {

  globalContext.app = {};

  app.getActiveDocument = function () {
    return DocumentApp.getActiveDocument();
  },

  app.getActiveDocumentBody = function () {
    return app.getActiveDocument().getBody();
  };

  app.onOpen = function(ui) {
    var html = HtmlService.createTemplateFromFile('Sidebar').evaluate()
      .setTitle('Highlighter')

    ui.showSidebar(html);
  };

  app.createMenus = function(ui) {
    ui.createMenu('Highlighter')
      .addItem('Open Sidebar', 'onOpen')
  };

})(this);
