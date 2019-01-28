window.cipher = {
  encode: function() {
    let string= document.getElementById('stringToEncode').value;
    let offset= document.getElementById('offset').value;
    let arrLetters= string.split('');
    let arrToCode= [];
    let stringCoded= [];

// colocar a condição do alfabeto dentro do ASCII if...

    for (i = 0; i < arrLetters.length; i++){

      arrToCode.push((((arrLetters[i].charCodeAt(0) - 65 )+(parseInt(offset))) % 26) + 65);

//não está funcionando direito
//concat

      for (x = i ; x < arrToCode.length; x++){
          let stringCoded = String.fromCharCode(arrToCode);
          //let stringCoded = String.fromCharCode(arrToCode.concat);

console.log (stringCoded)
            //console.log (document.getElementById('result').value = (stringCoded));
          }
          return document.getElementById('result').value = (stringCoded);
        }
      },

  decode: function() {
    let string= document.getElementById('stringToEncode').value;
    let offset= document.getElementById('offset').value;
    let arrLetters= string.split('');
    let arrToCode= [];

    for (i = 0; i < arrLetters.length; i++){

      arrToCode.push(((arrLetters[i].charCodeAt(0) - 65 - offset) % 26) + 65);

      for (x = 0; x < arrToCode.length; x++){
          let stringCoded = String.fromCharCode(arrToCode[x]);
              return document.getElementById('result').value = (stringCoded);
            }
          }
        },

};
