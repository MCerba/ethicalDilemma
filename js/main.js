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
      wiki.topSection.style.visibility = "visible";
      wiki.savedSection.style.visibility = "hidden";
      wiki.activitySection.style.visibility = "hidden";
    }
    if (getTarget(e).getAttribute("id") === "savedTab") {
      getTarget(e).setAttribute("class", "on" );
      wiki.tab1.setAttribute("class", "off" );
      wiki.tab3.setAttribute("class", "off" );
      wiki.topSection.style.visibility = "hidden";
      wiki.savedSection.style.visibility = "visible";
      wiki.activitySection.style.visibility = "hidden";
    }
    if (getTarget(e).getAttribute("id") === "activityTab") {
      getTarget(e).setAttribute("class", "on" );
      wiki.tab1.setAttribute("class", "off" );
      wiki.tab2.setAttribute("class", "off" );
      wiki.topSection.style.visibility = "hidden";
      wiki.savedSection.style.visibility = "hidden";
      wiki.activitySection.style.visibility = "visible";
    }



  }


  var wiki = {};
  /**
   * Running ofter DOM was loaded
   */
  U.ready(function() {
    wiki.tab1 = document.getElementById("topTab");
    wiki.tab2 = document.getElementById("savedTab");
    wiki.tab3 = document.getElementById("activityTab");
    wiki.topSection = document.getElementById("top");
    wiki.savedSection = document.getElementById("saved");
    wiki.activitySection = document.getElementById("activity");

    wiki.ul = document.getElementById("navul");


    U.addHandler(wiki.ul, "click", tabswap);
    //U.addHandler(gallery.container, "dblclick", flip);
  });

}
