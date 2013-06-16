
var data = require("self").data;
var thepanel = require("sdk/panel").Panel({
	width:350,
	height:425,
contentURL: require("sdk/self").data.url("popup.html")
});
try
{
	  var tbb = require("toolbarbutton").ToolbarButton({
      id: "TBB-TEST",
      label: "TBB TEST",
      image: data.url("favicon.ico"),
      onClick: function()
      {
      	console.log("clicked");
      	//view.panel = thepanel;
      },
      onCommand: function (view) {
        //tbb.destroy(); // kills the toolbar button
      	console.log("hello");
      	//panel.show();
      },
      panel:thepanel
    });
if (true) {
    tbb.moveTo({
    toolbarID: "nav-bar",
    forceMove: false // only move once
    });}
 } 
 catch(e){
                console.log(e,"addToToolBar");
 }

 // groupon green light - #A9C884
