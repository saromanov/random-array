var genRandomArray = function(length, minvalue, maxvalue, options){
    var opt = options || {};
    var round = opt.round;
    return Array.apply(null, {length:length}).map(function(){
        var result = Math.random() * (maxvalue - minvalue) + minvalue;
        if(round ===  true){
            return Math.round(result);
        }
        return result;
        });
};


module.exports = function(minvalue, maxvalue){
   return{ 
    oned: function(length, options){
        return genRandomArray(length, minvalue, maxvalue, options);
    },

    twod: function(width,height, options){
            return Array.apply(null, {length: width}).map(function(){ return genRandomArray(height, minvalue, maxvalue, options);}); 
    },
   };
};

