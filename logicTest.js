const words = ['kita', 'atik', 'tika','aku', 'kia', 'makan', 'kua'];

const anagram = (words) => {
  const result = [];

  const sortChar = (word) => {
    let sortedChar = word.split('');
  
    for(let i = 0; i < sortedChar.length; i++) {
      for (let j = 0; j < sortedChar.length; j++) {
        if(sortedChar[i] < sortedChar[j]) {
          [sortedChar[i], sortedChar[j]] = [sortedChar[j], sortedChar[i]];
        };
      };
    };
  
    return sortedChar.join('');
  };

  for(let i = 0; i < words.length; i++) {
    let anagrams = [];
    for(let j = i + 1; j < words.length; j++) {
      if(words[i] && words[j] && sortChar(words[i]) === sortChar(words[j])) {
        anagrams.push(words[j]);
        words[j] = undefined;
      };
    };

    if(words[i]) {
      anagrams.unshift(words[i]);
      
      result.push(anagrams);
    };
  };
  
  return result;
};

console.log(anagram(words));