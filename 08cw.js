function toWeirdCase(string) {
    let index = 0;
    let result = '';
    
    for (let i = 0; i < string.length; i++) {
      if (string[i] === ' ') {
        result += ' ';
        index = 0;
      } else if (index % 2 === 0) {
        result += string[i].toUpperCase();
        index++;
      } else if (index % 2 !== 0) {
        result += string[i].toLowerCase();
        index++;
      }
    }
    return result;
  }