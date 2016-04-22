(function() {
  'use strict';

  /**
   * Hi! Thanks for using XSplit JS Framework :)
   *
   * XSplit JS Framework exposes useful methods to work with XSplit without 
   * fiddling too much with the raw core methods exposed to JavaScript, which 
   * makes developing plugins for XSplit a lot easier.
   *
   * To get started, you just have to require our library:
   * var xjs = require('xjs');
   *
   * You can read more about it at our documentation:
   * http://xjsframework.github.io/quickstart.html
   * http://xjsframework.github.io/tutorials.html
   * http://xjsframework.github.io/api.html
   */
   
   


  
  var xjs = require('xjs');
var XJS = require('xjs');
  /*xjs.ready().then(function() {
    // Write your code here
  });*/
  
  xjs.ready().then(function() { 
  
  for (var i = 1; i <= 12; i++) {
  (function(idx) {
    var scene = xjs.Scene.getById(idx);
//console.log(scene);
    scene.getSources().then(function(sources) {
	//alert(idx);
      for (var i in sources) {
	
      if (sources[i] instanceof XJS.HtmlSource) {
	
	  }
	  }
    });
  })(i);
}
  
  
  
  
 /* 
  
XJS.Scene.getActiveScene().then(function(scene) {
  scene.getSources().then(function(sources) {
  console.log('bhupinder',sources);
    for (var i in sources) {
      if (sources[i] instanceof XJS.HtmlSource) {
        // Manipulate your HTML source here
		
		
		
		  var Scene = xjs.Scene.getById(1);

Scene.getSources().then(function(sources) {

  if (sources.length === 0) return;

  // There's a valid source, let's use that
  var source = sources[sources.length - 1];

  
  
  return source.setCustomName('testing');
}).then(function(source) {

 //source.duplicate();
 
});
  
        sources[i].enableBrowserTransparency(true);
      }
    }
  });
});
*/
  
})})();
