window.cipher = {

  //showResult: function (result) {
  //document.getElementById('result').value = result;
//},

  encode: function() {
    let string= document.getElementById('stringToEncode').value;
    let offset= document.getElementById('offset').value;
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
        console.log (result)
      return document.getElementById('result').value = (stringCoded.join(""));
        },

  decode: function() {
    let string= document.getElementById('stringToEncode').value;
    let offset= document.getElementById('offset').value;
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
    console.log (result)
      return document.getElementById('result').value = (stringCoded.join(""));
        }
};
