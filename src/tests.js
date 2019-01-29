function verificaIgualdade(calculado, esperado){
  if (calculado === esperado){
    console.log("Passou!");
    return true;
  }else {
    console.log("Deu Erro!" + calculado + " não é igual a " + esperado);
    return false;
  }
};

verificaIgualdade(window.cipher.encode(" !#$%&'()*+,-./0123456789:;<=>?@{|}~^_`",1), " !#$%&'()*+,-./0123456789:;<=>?@{|}~^_`");
verificaIgualdade(window.cipher.decode(" !#$%&'()*+,-./0123456789:;<=>?@{|}~^_`",1), " !#$%&'()*+,-./0123456789:;<=>?@{|}~^_`");

verificaIgualdade(window.cipher.encode(" !#$%&'()*+,-./0123456789:;<=>?@{|}~^_`",-1), " !#$%&'()*+,-./0123456789:;<=>?@{|}~^_`");
verificaIgualdade(window.cipher.decode(" !#$%&'()*+,-./0123456789:;<=>?@{|}~^_`",-1), " !#$%&'()*+,-./0123456789:;<=>?@{|}~^_`");

verificaIgualdade(window.cipher.encode(" !#$%&'()*+,-./0123456789:;<=>?@{|}~^_`",7), " !#$%&'()*+,-./0123456789:;<=>?@{|}~^_`");
verificaIgualdade(window.cipher.decode(" !#$%&'()*+,-./0123456789:;<=>?@{|}~^_`",7), " !#$%&'()*+,-./0123456789:;<=>?@{|}~^_`");

verificaIgualdade(window.cipher.encode(" !#$%&'()*+,-./0123456789:;<=>?@{|}~^_`",-7), " !#$%&'()*+,-./0123456789:;<=>?@{|}~^_`");
verificaIgualdade(window.cipher.decode(" !#$%&'()*+,-./0123456789:;<=>?@{|}~^_`",-7), " !#$%&'()*+,-./0123456789:;<=>?@{|}~^_`");

verificaIgualdade(window.cipher.encode(" !#$%&'()*+,-./0123456789:;<=>?@{|}~^_`",99), " !#$%&'()*+,-./0123456789:;<=>?@{|}~^_`");
verificaIgualdade(window.cipher.decode(" !#$%&'()*+,-./0123456789:;<=>?@{|}~^_`",99), " !#$%&'()*+,-./0123456789:;<=>?@{|}~^_`");

verificaIgualdade(window.cipher.encode(" !#$%&'()*+,-./0123456789:;<=>?@{|}~^_`",-99), " !#$%&'()*+,-./0123456789:;<=>?@{|}~^_`");
verificaIgualdade(window.cipher.decode(" !#$%&'()*+,-./0123456789:;<=>?@{|}~^_`",-99), " !#$%&'()*+,-./0123456789:;<=>?@{|}~^_`");

verificaIgualdade(window.cipher.encode(" !#$%&'()*+,-./0123456789:;<=>?@{|}~^_`",100), " !#$%&'()*+,-./0123456789:;<=>?@{|}~^_`");
verificaIgualdade(window.cipher.decode(" !#$%&'()*+,-./0123456789:;<=>?@{|}~^_`",100), " !#$%&'()*+,-./0123456789:;<=>?@{|}~^_`");

verificaIgualdade(window.cipher.encode(" !#$%&'()*+,-./0123456789:;<=>?@{|}~^_`",-100), " !#$%&'()*+,-./0123456789:;<=>?@{|}~^_`");
verificaIgualdade(window.cipher.decode(" !#$%&'()*+,-./0123456789:;<=>?@{|}~^_`",-100), " !#$%&'()*+,-./0123456789:;<=>?@{|}~^_`");

verificaIgualdade(window.cipher.encode(" !#$%&'()*+,-./0123456789:;<=>?@{|}~^_`",100000000000000), " !#$%&'()*+,-./0123456789:;<=>?@{|}~^_`");
verificaIgualdade(window.cipher.decode(" !#$%&'()*+,-./0123456789:;<=>?@{|}~^_`",100000000000000), " !#$%&'()*+,-./0123456789:;<=>?@{|}~^_`");

verificaIgualdade(window.cipher.encode(" !#$%&'()*+,-./0123456789:;<=>?@{|}~^_`",-100000000000000), " !#$%&'()*+,-./0123456789:;<=>?@{|}~^_`");
verificaIgualdade(window.cipher.decode(" !#$%&'()*+,-./0123456789:;<=>?@{|}~^_`",-100000000000000), " !#$%&'()*+,-./0123456789:;<=>?@{|}~^_`");

verificaIgualdade(window.cipher.encode("ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz",1), "BCDEFGHIJKLMNOPQRSTUVWXYZAbcdefghijklmnopqrstuvwxyza");
verificaIgualdade(window.cipher.decode("BCDEFGHIJKLMNOPQRSTUVWXYZAbcdefghijklmnopqrstuvwxyza",1), "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz");

verificaIgualdade(window.cipher.encode("ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz",-1), "ZABCDEFGHIJKLMNOPQRSTUVWXYzabcdefghijklmnopqrstuvwxy");
verificaIgualdade(window.cipher.decode("ZABCDEFGHIJKLMNOPQRSTUVWXYzabcdefghijklmnopqrstuvwxy",-1), "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz");

verificaIgualdade(window.cipher.encode("ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz",2), "CDEFGHIJKLMNOPQRSTUVWXYZABcdefghijklmnopqrstuvwxyzab");
verificaIgualdade(window.cipher.decode("CDEFGHIJKLMNOPQRSTUVWXYZABcdefghijklmnopqrstuvwxyzab",2), "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz");

verificaIgualdade(window.cipher.encode("ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz",-2), "YZABCDEFGHIJKLMNOPQRSTUVWXyzabcdefghijklmnopqrstuvwx");
verificaIgualdade(window.cipher.decode("YZABCDEFGHIJKLMNOPQRSTUVWXyzabcdefghijklmnopqrstuvwx",-2), "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz");

verificaIgualdade(window.cipher.encode("ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz",99), "VWXYZABCDEFGHIJKLMNOPQRSTUvwxyzabcdefghijklmnopqrstu");
verificaIgualdade(window.cipher.decode("VWXYZABCDEFGHIJKLMNOPQRSTUvwxyzabcdefghijklmnopqrstu",99), "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz");

verificaIgualdade(window.cipher.encode("ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz",-99), "FGHIJKLMNOPQRSTUVWXYZABCDEfghijklmnopqrstuvwxyzabcde");
verificaIgualdade(window.cipher.decode("FGHIJKLMNOPQRSTUVWXYZABCDEfghijklmnopqrstuvwxyzabcde",-99), "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz");

verificaIgualdade(window.cipher.encode("ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz",100), "WXYZABCDEFGHIJKLMNOPQRSTUVwxyzabcdefghijklmnopqrstuv");
verificaIgualdade(window.cipher.decode("WXYZABCDEFGHIJKLMNOPQRSTUVwxyzabcdefghijklmnopqrstuv",100), "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz");

verificaIgualdade(window.cipher.encode("ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz",-100), "EFGHIJKLMNOPQRSTUVWXYZABCDefghijklmnopqrstuvwxyzabcd");
verificaIgualdade(window.cipher.decode("EFGHIJKLMNOPQRSTUVWXYZABCDefghijklmnopqrstuvwxyzabcd",-100), "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz");

verificaIgualdade(window.cipher.encode("ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz",1000), "MNOPQRSTUVWXYZABCDEFGHIJKLmnopqrstuvwxyzabcdefghijkl");
verificaIgualdade(window.cipher.decode("MNOPQRSTUVWXYZABCDEFGHIJKLmnopqrstuvwxyzabcdefghijkl",1000), "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz");

verificaIgualdade(window.cipher.encode("ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz",-1000), "OPQRSTUVWXYZABCDEFGHIJKLMNopqrstuvwxyzabcdefghijklmn");
verificaIgualdade(window.cipher.decode("OPQRSTUVWXYZABCDEFGHIJKLMNopqrstuvwxyzabcdefghijklmn",-1000), "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz");

verificaIgualdade(window.cipher.encode("ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz",100000000), "WXYZABCDEFGHIJKLMNOPQRSTUVwxyzabcdefghijklmnopqrstuv");
verificaIgualdade(window.cipher.decode("WXYZABCDEFGHIJKLMNOPQRSTUVwxyzabcdefghijklmnopqrstuv",100000000), "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz");

verificaIgualdade(window.cipher.encode("ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz",-100000000), "EFGHIJKLMNOPQRSTUVWXYZABCDefghijklmnopqrstuvwxyzabcd");
verificaIgualdade(window.cipher.decode("EFGHIJKLMNOPQRSTUVWXYZABCDefghijklmnopqrstuvwxyzabcd",-100000000), "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz");

verificaIgualdade(window.cipher.encode("ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz",997), "JKLMNOPQRSTUVWXYZABCDEFGHIjklmnopqrstuvwxyzabcdefghi");
verificaIgualdade(window.cipher.decode("JKLMNOPQRSTUVWXYZABCDEFGHIjklmnopqrstuvwxyzabcdefghi",997), "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz");

verificaIgualdade(window.cipher.encode("ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz",-997), "RSTUVWXYZABCDEFGHIJKLMNOPQrstuvwxyzabcdefghijklmnopq");
verificaIgualdade(window.cipher.decode("RSTUVWXYZABCDEFGHIJKLMNOPQrstuvwxyzabcdefghijklmnopq",-997), "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz");


function contE(num1){
  console.log (String.fromCharCode((num1%26)+65));
  console.log (String.fromCharCode(-((num1%26)-91)));
};
contE(563);
