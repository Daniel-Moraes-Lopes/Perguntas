const caixaPrincipal = document.querySelector(".caixa-principal");
const caixaPerguntas = document.querySelector(".caixa-perguntas");
const caixaAlternativas = document.querySelector(".caixa-alternativas");
const caixaResultado = document.querySelector(".caixa-resultado");
const textoResultado = document.querySelector(".texto-principal");

const pergunta1 = [
    {
    enunciado: "Se você pudesse escolher ter qualquer poder, e utilizar no cotidiano. O que escolheria?",
    alternativas: [
        "Escolher um poder para fins próprios", 
        "Escolher um poder para ajudar os outros"
     ]
},
    {
    enunciado: "Se você tivesse a oportunidade de voltar no tempo pelo menos uma vez, qual seria sua prioridade?",
    alternativas: [
        "Corrigir um erro", 
        "Reviver um momento"
     ]
}, 
    {
    enunciado: "Se você pudesse passar um ano vivendo em qualquer lugar do mundo, o que mais influenciaria sua decisão?",
    alternativas: [
        "A cultura", 
        "A qualidade de vida"
     ]
},
    {
    enunciado: "Se vocẽ recebesse uma grande quantia de dinheiro sem precisar trabalhar por ela, qual seria sua primeira atitude?",
    alternativas: [
        "Investiria", 
        "Realizaria sonhos"
     ]
},
    {
    enunciado: "Se vocẽ pudesse deixar apenas uma mensagem positiva no mundo, qual seria seu principal objetivo?",
    alternativas: [
        "Inspirar confiança", 
        "Criar soluções"
     ]
}
];

let atual = 0;
let perguntaAtual;

function mostraPergunta() {
    perguntaAtual = perguntas[atual];
    caixaPerguntas.textContent = perguntaAtual.enunciado;
}

mostraPergunta();