// this is what you would do if you liked things to be easy:
// var stringifyJSON = JSON.stringify;

// but you don't so you're going to write it from scratch:

var stringifyJSON = function(obj) {

	if(typeof obj === 'number' || typeof obj === 'boolean'){
		return obj.toString();
	}else if(typeof obj === 'function' || obj === undefined){
		return;
	}else if(obj === null){
		return 'null';
	}else if(typeof obj === 'string'){
		return '\"' + obj + '\"';
	}else if(Array.isArray(obj)){
		var string = '[';
		for(x=0; x<obj.length; x++){
			string += stringifyJSON(obj[x]);
			if(obj.length > 1 && x < obj.length - 1){
				string += ',';
			}
		}return string += ']'; 
	}else if(typeof obj === 'object'){
		var string = '{';
		for(var key in obj){
			if(stringifyJSON(obj[key]) !== undefined){
				string+= '\"' + key + '\":' +  stringifyJSON(obj[key]);
				if(key !== Object.keys(obj)[Object.keys(obj).length-1]){
					string += ','
				}
			}
		}
		return string += '}';
	}
  	
};
