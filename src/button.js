document.getElementById('encodeButton').addEventListener('click',clickFunctionE);
function clickFunctionE(evento){
  let s= document.getElementById('stringToEncode').value;
  let o= document.getElementById('offset').value;
  window.cipher.encode(s, o)
  document.getElementById('result').value = window.cipher.encode(s, o)
};

document.getElementById('decodeButton').addEventListener('click',clickFunctionD);
function clickFunctionD(evento){
  let s= document.getElementById('stringToEncode').value;
  let o= document.getElementById('offset').value;
  window.cipher.encode(s, o)
  document.getElementById('result').value = window.cipher.decode(s, o)
};
