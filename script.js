let conteudo1 = document.getElementById('img');
let conteudo2 = document.getElementById('texto1');
let conteudo3 = document.getElementById('texto2');
let textoCriptado = document.getElementById('texto-criptado');

const codigoCripto = [
    { caracter: 'a', sequencia: 'ai' },
    { caracter: 'e', sequencia: 'enter' },
    { caracter: 'i', sequencia: 'imes' },
    { caracter: 'o', sequencia: 'ober' },
    { caracter: 'u', sequencia: 'ufat' }
];

document.querySelectorAll('form').forEach((form) => {
    form.addEventListener('submit', (e) => {
        e.preventDefault();
    });
});

textoCriptado.style.display = 'none';

function removerConteudo() {
    conteudo1.style.display = 'none';
    conteudo2.style.display = 'none';
    conteudo3.style.display = 'none';
    textoCriptado.style.display = 'block';
}

function criptarTexto() {
    let textoDigitado = document.getElementById("texto-digitado").value;
    let textoCriptografado = textoDigitado;

    codigoCripto.forEach(item => {
        let regex = new RegExp(item.caracter, 'g'); 
        textoCriptografado = textoCriptografado.replace(regex, item.sequencia);
    });

    textoCriptado.textContent = textoCriptografado;
    removerConteudo();
    apagarTextoDigitado();
}

function descriptografar(){
    let textoDigitado = document.getElementById("texto-digitado").value;
    let textoCriptografado = textoDigitado;

    codigoCripto.forEach(item => {
        let regex = new RegExp(item.sequencia, 'g'); 
        textoCriptografado = textoCriptografado.replace(regex, item.caracter);
    });

    textoCriptado.textContent = textoCriptografado;
    apagarTextoDigitado();
    removerConteudo();
}

function apagarTextoDigitado() {
    let textoDigitado = document.getElementById("texto-digitado");
    textoDigitado.value = "";
}
