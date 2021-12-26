function count (string) {  
    var count = {};
    var arr = string.split('');
    arr.forEach(function(s){
                  count[s] ? count[s]++ : count[s] = 1;
              })
     return count;
  }