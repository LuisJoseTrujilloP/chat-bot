


function longestWord() {
  const string = 'Smart people learn from everything and everyone, average people from their experience, stupid people already, have all the answers” (Socrates)';
  const vowels = ['a','e','i','o','u'];
  var str = string.split(' ');
  var longest = 0;
  var word = null;

  for (let i = 0; i < str.length - 1; i++) {
    strNoS = str[i].replace(/[^a-zA-Z ]/g, "");


      if (longest < strNoS.length) {

        longest = strNoS.length;
        word = strNoS;

      }else if(longest = strNos.length){ 
      
          var firstVowelsCount = 0;
          var secondVowelsCount = 0;
  
          for (let char of word){
            if(vowels.includes(char)){
              firstVowelsCount++;
            }
          }
          for (let char of strNoS){
            if(vowels.includes(char)){
              secondVowelsCount++;
            }
          }

        if(secondVowelsCount>firstVowelsCount) {
          word = strNoS;
        }
     
      
      
      }
        
      
  }

  return word;
}

longestWord();
