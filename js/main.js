/** Teaches IE < 9 to recognize HTML5 elements. */
"use strict"
var wiki = {};
var regex = {
  isLikeDate: /^\d\d\d\d-\d*\d-\d*\d$/,
  isUnecpectedArticle: /^Special:.*/
};

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

function getTarget(e) {
  var evn = e || window.event;
  return evn.srcElement || e.target;
}

/**
 *this function make target tab visible and change current tub navigation style
 * @param {1} event
 */
function tabswap (e) {
  console.log(getTarget(e));
  if (getTarget(e).getAttribute("id") === "topTab") {
    getTarget(e).setAttribute("class", "on" );
    wiki.tab2.setAttribute("class", "off" );
    wiki.tab3.setAttribute("class", "off" );
    wiki.tab4.setAttribute("class", "off" );
    wiki.tab5.setAttribute("class", "off" );
    wiki.topSection.style.display = "block";
    wiki.savedSection.style.display = "none";
    wiki.activitySection.style.display = "none";
    wiki.codeOfEthicsSection.style.display = "none";
    wiki.referencesSection.style.display = "none";
  }
  if (getTarget(e).getAttribute("id") === "savedTab") {
    getTarget(e).setAttribute("class", "on" );
    wiki.tab1.setAttribute("class", "off" );
    wiki.tab3.setAttribute("class", "off" );
    wiki.tab4.setAttribute("class", "off" );
    wiki.tab5.setAttribute("class", "off" );
    wiki.topSection.style.display = "none";
    wiki.savedSection.style.display = "block";
    wiki.activitySection.style.display = "none";
    wiki.codeOfEthicsSection.style.display = "none";
    wiki.referencesSection.style.display = "none";
  }
  if (getTarget(e).getAttribute("id") === "activityTab") {
    getTarget(e).setAttribute("class", "on" );
    wiki.tab1.setAttribute("class", "off" );
    wiki.tab2.setAttribute("class", "off" );
    wiki.tab4.setAttribute("class", "off" );
    wiki.tab5.setAttribute("class", "off" );
    wiki.topSection.style.display = "none";
    wiki.savedSection.style.display = "none";
    wiki.activitySection.style.display = "block";
    wiki.codeOfEthicsSection.style.display = "none";
    wiki.referencesSection.style.display = "none";
  }
  if (getTarget(e).getAttribute("id") === "codeTab") {
    getTarget(e).setAttribute("class", "on" );
    wiki.tab1.setAttribute("class", "off" );
    wiki.tab2.setAttribute("class", "off" );
    wiki.tab3.setAttribute("class", "off" );
    wiki.tab5.setAttribute("class", "off" );
    wiki.topSection.style.display = "none";
    wiki.savedSection.style.display = "none";
    wiki.activitySection.style.display = "none";
    wiki.codeOfEthicsSection.style.display = "block";
    wiki.referencesSection.style.display = "none";
  }
  if (getTarget(e).getAttribute("id") === "referenceTab") {
    getTarget(e).setAttribute("class", "on" );
    wiki.tab1.setAttribute("class", "off" );
    wiki.tab2.setAttribute("class", "off" );
    wiki.tab3.setAttribute("class", "off" );
    wiki.tab4.setAttribute("class", "off" );
    wiki.topSection.style.display = "none";
    wiki.savedSection.style.display = "none";
    wiki.activitySection.style.display = "none";
    wiki.codeOfEthicsSection.style.display = "none";
    wiki.referencesSection.style.display = "block";
  }
}

/**
 * Running ofter DOM was loaded
 */
U.ready(function() {
  console.log("ready");
  wiki.tab1 = document.getElementById("topTab");
  wiki.tab2 = document.getElementById("savedTab");
  wiki.tab3 = document.getElementById("activityTab");
  wiki.tab4 = document.getElementById("codeTab");
  wiki.tab5 = document.getElementById("referenceTab");
  wiki.topSection = document.getElementById("top");
  wiki.savedSection = document.getElementById("saved");
  wiki.activitySection = document.getElementById("activity");
  wiki.topResultsSection = document.getElementById("topResults");
  wiki.codeOfEthicsSection = document.getElementById("codeOfEthics");
  wiki.referencesSection = document.getElementById("references");



  wiki.ul = document.getElementById("navul");
  wiki.showBtn = document.getElementById("submitBtn");
  wiki.saveBtn = document.getElementById("saveBtn");
  wiki.topSection.style.display = "block";
  wiki.savedSection.style.display = "none";
  wiki.activitySection.style.display = "none";
  wiki.codeOfEthicsSection.style.display = "none";
  wiki.referencesSection.style.display = "none";



  U.addHandler(wiki.ul, "click", tabswap);


  //U.addHandler(gallery.container, "dblclick", flip);
});
