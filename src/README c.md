# Cifra de César

## Introdução

Este programa codifica e descodifica textos, utilizando a tecnica da [cifra de César](https://pt.wikipedia.org/wiki/Cifra_de_C%C3%A9sar) e a ordem de caracteres do [código ASCII](https://theasciicode.com.ar/).

A [cifra de César](https://pt.wikipedia.org/wiki/Cifra_de_C%C3%A9sar) é um dos primeiros tipos de criptografias conhecidos na história. É um tipo de cifra por substituição, em que uma letra no texto original é substituída por outra, seguindo um número fixo para essa substituição.

![caeser-cipher](https://upload.wikimedia.org/wikipedia/commons/thumb/2/2b/Caesar3.svg/2000px-Caesar3.svg.png)

Utilizando um offset que define quantas posições de caracteres serão deslocadas.

Por exemplo se usarmos o deslocamento de 3:

* Alfabeto sem cifrar: A B C D E F G H I J K L M N O P Q R S T U V W X Y Z
* Alfabeto com cifra:  D E F G H I J K L M N O P Q R S T U V W X Y Z A B C

## Fluxograma

![Fluxograma](https://github.com/cakeno/caesar-cipher/blob/master/fluxograma-cifra.png)

## Descrição

### Codificar:

1. Coloque o texto que deve ser codificado no primeiro campo do site;
2. Em seguida, escolha um número, positivo ou negativo, no campo offset, para definir qual será o deslocamento utilizado;
3. Guarde esse número, ele será imprescindível para descodificar sua mensagem;
4. Clique no botão criptografar;
5. Copie o texto que aparecerá no terceiro campo do site e envie para quem for necessário;
6. Não se esqueça de informar o offset que foi utilizado, de maneira discreta, para que o destinatário consiga decifrar sua mensagem.

### Decodificar:

1. Você precisará de uma mensagem codificada e o número do offset que foi utilizado para codifica-la; 
2. Coloque o texto que deve ser decodificado no primeiro campo do site;
3. Em seguida, coloque o número do offset, informado por quem codificou a mensagem, no campo designado;
4. Clique no botão descriptografar;
5. Pronto! Sua mensagem deve aparecer legível e decodificada no terceiro campo;
6. Se quiser, siga os passos para Codificar e envie uma resposta.