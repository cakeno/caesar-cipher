function clickFunctionE(evento){
  let s= document.getElementById('stringToEncode').value;
  let o= document.getElementById('offset').value;
  window.cipher.encode(s, o)
  document.getElementById('result').value = window.cipher.encode(s, o)
};

function clickFunctionD(evento){
  let s= document.getElementById('stringToEncode').value;
  let o= document.getElementById('offset').value;
  window.cipher.encode(s, o)
  document.getElementById('result').value = window.cipher.decode(s, o)
};

window.cipher = {

  encode: function(string, offset) {
    let arrLetters= string.split('');
    let arrToCode= [];
    let stringCoded= [];

      for (i = 0; i < arrLetters.length; i++){
        let letterAsc= arrLetters[i].charCodeAt(0)

        if(letterAsc >= 65 && letterAsc <= 90){
          arrToCode.push((((letterAsc - 65) + parseInt(offset % 26) + 26) % 26) + 65);
        } else if(letterAsc >= 97 && letterAsc <= 122){
          arrToCode.push((((letterAsc - 97) + parseInt(offset % 26) + 26) % 26) + 97);
        } else {
          arrToCode.push(letterAsc);
        };
      for (x = i ; x < arrToCode.length; x++){
          stringCoded.push (String.fromCharCode(arrToCode[x]));
        };
      };
    return stringCoded.join('');
    },

  decode: function(string, offset) {
    let arrLetters= string.split('');
    let arrToCode= [];
    let stringCoded= [];

      for (i = 0; i < arrLetters.length; i++){
          let letterAsc= arrLetters[i].charCodeAt(0)

          if(letterAsc >= 65 && letterAsc <= 90){
            arrToCode.push((((letterAsc - 65) - parseInt(offset % 26) + 26) % 26) + 65);
          } else if(letterAsc >= 97 && letterAsc <= 122){
            arrToCode.push((((letterAsc - 97) - parseInt(offset % 26) + 26) % 26) + 97);
          } else {
            arrToCode.push(letterAsc);
          };
        for (x = i ; x < arrToCode.length; x++){
            stringCoded.push (String.fromCharCode(arrToCode[x]));
          };
        };
      return stringCoded.join('');
    }
};
