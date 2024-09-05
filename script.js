const txtArea_Encryptor = document.getElementById('txtArea_Encryptor');
const txtArea_Decryptor = document.getElementById('txtArea_Decryptor');
const btn_Encryptor = document.getElementById('btn_Encryptor');
const btn_Decryptor = document.getElementById('btn_Decryptor');

btn_Encryptor.addEventListener('click', () => {
    
    //Array a ser substituido
    const groupStringsEncryptor = [
        ['a','aghj'],
        ['e','ewqr'],
        ['i','ihpf'],
        ['o','onmz'],
        ['u','uxlk']
    ];
    //VAriavel test recebe textArea encriptador
    let text = txtArea_Encryptor.value;

    //Funcao para substituir uma posição pela outra do nosso array
    groupStringsEncryptor.forEach((element) => {
        //Desestruturando array, letter recebe posiçao 0 e code posicao 1
        const [letter, code] = element;
        //Invertendo posicoes
        text = text.replaceAll(letter, code);
        console.log(text)

    });
    //txtArea vai receber o conteudo d texto   
    txtArea_Decryptor.textContent = text;
});

btn_Decryptor.addEventListener('click', ()=>{
    //Array a ser substituido
    const groupStringsDecryptor = [
        ['aghj','a'],
        ['ewqr','e'],
        ['ihpf','i'],
        ['onmz','o'],
        ['uxlk','u']
    ];
    //VAriavel test recebe textArea encriptador
    let text = txtArea_Decryptor.value;

    //Funcao para substituir uma posição pela outra do nosso array
    groupStringsDecryptor.forEach((element) => {
        //Desestruturando array, letter recebe posiçao 0 e code posicao 1
        const [code, letter] = element;
        
        //Invertendo posicoes
        text = text.replaceAll(code, letter);
        console.log(text);
    });
    //txtArea vai receber o conteudo d texto   
    txtArea_Encryptor.value = text;
});

/*Efeito maquina de escrever*/

const title = document.querySelector('header h1');

// Define o texto inicial como vazio
title.textContent = "";

const charSeparator = "Encriptador e Desenciptador de Texto".split('');

let index = 0;

setInterval(function(){ 
    if (index < charSeparator.length) {

        title.textContent += charSeparator[index];
        index++;
    }
}, 150);
