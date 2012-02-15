mountDictionary = function(){
	var dictionary = new Object();
	dictionary.I = 1;
	dictionary.V = 5;
	dictionary.X = 10;
	dictionary.L = 50;
	dictionary.C = 100;
	dictionary.D = 500;
	dictionary.M = 1000;
	return dictionary;
}

roman2arabic = function(romano) {
	var dictionary = mountDictionary();
	
	var result = 0;
	
	for(idx in romano){
		if(parseInt(idx) + 1 < romano.length && dictionary[romano[idx]] < dictionary[romano[parseInt(idx)+1]] ){
			result -= dictionary[romano[idx]];
		}else {
			result += dictionary[romano[idx]];
		}
		
	}
	
	return result;
	
}