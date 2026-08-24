const caixaPrincipal = document.querySelector(".caixa-principal");
const caixaPerguntas = document.querySelector(".caixa-perguntas");
const caixaAlternativas = document.querySelector(".caixa-alternativas");
const caixaResultado = document.querySelector(".caixa-resultado");
const textoResultado = document.querySelector(".texto-resultado");

// Corrigido: Nome da variável alterado para 'perguntas'
const perguntas = [
    {
        enunciado: "Se você pudesse escolher ter qualquer poder, e utilizar no cotidiano. O que escolheria?",
        alternativas: [
            {
                texto: "Escolher um poder para fins próprios", // Corrigido: adicionada vírgula
                afirmacao: "Você prioriza facilitar sua vida alcançar seus objetivos, mas suas escolhas podem impactar quem está ao seu redor"
            },
            {
                texto: "Escolher um poder para ajudar os outros",
                afirmacao: "Você prioriza o bem-estar das pessoas usando seu poder para fazer a diferença na comunidade"
            }
        ]
    },
    {
        enunciado: "Se você tivesse a oportunidade de voltar no tempo pelo menos uma vez, qual seria sua prioridade?",
        alternativas: [
            {
                texto: "Corrigir um erro",
                afirmacao: "Você tende a enxergar o passado como uma oportunidade de aprendizado e mudanças"
            },
            {
                texto: "Reviver um momento",
                afirmacao: "Você demonstra valorizar as lembranças, as emoções e as experiências marcantes da vida"
            }
        ]
    }, 
    {
        enunciado: "Se você pudesse passar um ano vivendo em qualquer lugar do mundo, o que mais influenciaria sua decisão?",
        alternativas: [
            {
                texto: "A cultura",
                afirmacao: "Costuma demonstrar interesse por novas experiências, tradições e aprendizado"
            },
            {
                texto: "A qualidade de vida",
                afirmacao: "Tende a priorizar o conforto, bem-estar e estabilidade"
            }
        ]
    },
    {
        enunciado: "Se você recebesse uma grande quantia de dinheiro sem precisar trabalhar por ela, qual seria sua primeira atitude?",
        alternativas: [
            {
                texto: "Investiria",
                afirmacao: "Segure planejamento, visão de longo prazo e preocupação com o futuro"
            },
            {
                texto: "Realizaria sonhos",
                afirmacao: "Demonstra valorização das experiências, desejos pessoais e aproveitamento do presente"
            }
        ]
    },
    {
        enunciado: "Se você pudesse deixar apenas uma mensagem positiva no mundo, qual seria seu principal objetivo?",
        alternativas: [
            {
                texto: "Inspirar confiança",
                afirmacao: "Tende a acreditar no impacto das ideias, da motivação e do exemplo"
            },
            {
                texto: "Criar soluções",
                afirmacao: "Demonstrar como preferências por resultados práticos e mudanças concretas"
            }
        ]
    }
];

let atual = 0;
let perguntaAtual;

function mostraPergunta() {
    // Corrigido: Verifica se ainda há perguntas antes de carregar
    if (atual >= perguntas.length) {
        caixaPerguntas.textContent = "Fim do Quiz!";
        caixaAlternativas.textContent = "";
        return;
    }
    perguntaAtual = perguntas[atual];
    caixaPerguntas.textContent = perguntaAtual.enunciado;
    mostraAlternativas();
}

function mostraAlternativas(){
    caixaAlternativas.textContent = ""; // Corrigido: Limpa os botões anteriores
    for(const alternativa of perguntaAtual.alternativas) {
        const botaoAlternativa = document.createElement("button");
        botaoAlternativa.textContent = alternativa.texto;
        botaoAlternativa.addEventListener("click", function() {
            atual++;
            mostraPergunta();
        });
        caixaAlternativas.appendChild(botaoAlternativa);
    }
}

mostraPergunta();