// this is what you would do if you were one to do things the easy way:
// var parseJSON = JSON.parse;

// but you're not, so you'll write it from scratch:
var parseJSON = function(json) {
  // your code goes here

  var count = 0;
  var char = json.charAt(count);


  var nextChar = function(){
  	count++;
  	char = json.charAt(count);
  }

  var value = function(){
  	while(char === " "){
  		nextChar();
  	}
  	if(char === '{'){
  		nextChar();
  		return object();
  	}else if(char === '['){
  		nextChar();
  		return array();
  	}else if(char == "\""){
  		nextChar();
  		return string();
  	}else if(char >= 0 || char <= 9){
  		return number();
  	}else{
  		return other();
  	}

  }

  var array = function(){
  	arr = [];
  	if(char === ']'){
  		nextChar();
  		return arr;
  	}
  	arr.push(value());
  	while(char === ','){
  		nextChar();
  		arr.push(value());
  	}
  	nextChar();
  	return arr;
  }

  var object = function(){

  	var obj = {};
  	var keyValue = function(){
  		while(char === " " || char == '\"'){
  			nextChar();
  		}
  		var key = string();
  		nextChar();
  		var val = value();
  		obj[key] = val;
  	}

  	if(char === '}'){
  		nextChar();
  		return obj;
  	}
  	nextChar();
  	keyValue();
  	while(char === ','){
  		nextChar();
  		keyValue();
  	}

  	nextChar();
  	return obj;
  }

  function string(){
  	var str = ""
  	while(char != '\"'){
  		str += char;
  		nextChar();
  	}
  	nextChar();
  	return str;
  }

  function number(){

  }


/*  function other(){
  	var str = "";
  	while(char != '\"'){
  		str += char;
  		nextChar();
  	}
  	nextChar();
  	if(str === 'false'){
  		return false;
  	}else if(str === 'true'){
  		return true;
  	}else if(str === 'null'){
  		return null;
  	}else{
  		return undefined;
  	}
  }
*/
  return value();

};
