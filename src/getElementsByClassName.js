// If life was easy, we could just do things the easy way:
// var getElementsByClassName = function (className) {
//   return document.getElementsByClassName(className);
// };

// But instead we're going to implement it from scratch:
var getElementsByClassName = function(className) {
  // your code here
  var elements = [];
  if(document.body.classList.contains(className)){
  	elements.push(document.body);
  }
  getChildrenClasses(document.body);
  function getChildrenClasses(parent){
  	var children = parent.childNodes;
  	for(var i = 0; i < children.length; i++){
  		if(children[i].classList !== undefined && children[i].classList.contains(className)){
  			elements.push(children[i]);
  		}
  		getChildrenClasses(children[i]);
  	}
  }
  return elements;
};
