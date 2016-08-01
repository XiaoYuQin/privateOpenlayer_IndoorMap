var debug = new Function;  
debug.i = function(str){  
    console.info(str);
};
debug.w = function(str){  
    console.warn(str);
};
debug.d = function(str){  
    console.debug(str);
};
debug.e = function(str){  
    console.error(str);
};