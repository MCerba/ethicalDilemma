/** Teaches IE < 9 to recognize HTML5 elements. */
"use strict"
if (!document.footer) {
  createDummyElements();
}
function createDummyElements() {
  var semanticElements = [
    "article", "aside", "details", "figcaption", "figure",
    "footer", "header", "hgroup", "menu", "nav", "section"
  ];
  for (var i = 0; i < semanticElements.length; i++) {
    document.createElement(semanticElements[i]);
  }

}
