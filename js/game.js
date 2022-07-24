/* VARIAVEIS DE CONTROLE DO NOSSO JOGO */
let perguntasFeitas = [];
let popPerguntas = [];

//PERGUNTAS DO JOGO
const perguntas = [
  "Se pudesse escolher qualquer pessoa no mundo, quem você convidaria para jantar?",
  "Gostaria de ser famoso? De que forma?",
  "Antes de fazer uma ligação telefônica, você ensaia o que vai falar? Por quê?",
  "Para você, como seria um dia perfeito?",
  "Quando foi a última vez que cantou sozinho? E para outra pessoa?",
  "Se pudesse viver até os 90 anos e ter o corpo ou a mente de alguém de 30 durante os últimos 60 anos de sua vida, qual das duas opções escolheria?",
  "Você tem uma intuição secreta sobre como vai morrer?",
  "Diga três coisas que acredita ter em comigo.",
  "Por quais aspectos de sua vida você se sente mais agradecido?",
  "Se pudesse mudar algo em como foi educado, o que seria?",
  "Use quatro minutos para contar a história de sua vida com todo o detalhe possível.",
  "Se amanhã você pudesse acordar com uma nova habilidade ou qualidade, qual seria?",
  "Se uma bola de cristal pudesse contar a verdade sobre você, sua vida, o futuro ou qualquer outra coisa, o que você lhe perguntaria?",
  "Há algo que há muito tempo deseja fazer? Por que ainda não fez?",
  "Qual é a maior conquista que conseguiu em sua vida?",
  "O que mais valoriza em um amigo?",
  "Qual é sua lembrança mais valiosa?",
  "Qual é sua lembrança mais dolorosa?",
  "Se você soubesse que vai morrer daqui a um ano de maneira repentina, mudaria algo em sua maneira de viver? Por quê?",
  "O que significa a amizade para você?",
  "Que importância o amor e o afeto têm em sua vida?",
  "Compartilhem, de forma alternada, cinco características que consideram positivas em seu companheiro.",
  "Sua família é próxima e carinhosa? Acha que sua infância foi mais feliz que a dos demais?",
  "Como você se sente a respeito de sua relação com a sua mãe?",
  "Complete esta frase: “Gostaria de ter alguém com quem compartilhar?”.",
  "O que você mais gostou em mim? Seja muito honesto e diga coisas que não diria a alguém que acaba de conhecer.",
  "Cite um momento embaraçoso de sua vida.",
  "Quando foi a última vez que você chorou na frente de alguém? E sozinho?",
  "Há algo que seja muito sério e que não se deve fazer piadas a respeito?",
  "Se fosse morrer esta noite sem possibilidade de falar com ninguém, o que você lamentaria não ter dito a uma pessoa? Por que não disse até agora?",
  "Sua casa está pegando fogo com todas suas coisas dentro. Depois de salvar seus entes queridos e seus bichos de estimação, sobra tempo para fazer uma última incursão e salvar um único objeto. Qual escolheria? Por quê?",
  "De todas as pessoas que formam sua família, qual morte seria mais dolorosa para você? Por quê?",
  "Divida um problema pessoal e peça a seu par que conte como ele ou ela teria agido para solucioná-lo.",
  "O que mudou em sua vida depois que me conheceu?",
  "Qual é a nossa maior força como casal?",
  "Qual foi nosso melhor momento juntos?",
  "Qual fantasia ainda não realizamos juntos e que gostaria de realizar?",
  "O que faz você continuar comigo?",
  "O que faz você olhar pra mim?",
  "Que situações você relembra com saudade em relação a nossa história?",
  "Se você fosse contar nossa história hoje, que pontos destacaria?",
  "O que gostaria que eu ﬁzesse por você?",
  "Se você pudesse mudar alguma coisa na nossa história, o que mudaria?",
  "O que você menos gosta em nossa relação?",
  "Como você descreveria nosso relacionamento?",
  "O que você poderia fazer de diferente pela nossa relação?",
  "Que projeto você gostaria de realizar comigo em curto prazo (até 1 ano)?",
  "Você sabe me dizer o que de mais atrevido nós já ﬁzemos?",
  "Quais são seus medos ou preocupações que você tem em relação ao nosso relacionamento?",
  "Quais são os pontos fortes da nossa relação?",
  "De que forma você acha que podemos nos reorganizar para desfrutar melhor nosso tempo juntos?",
  "O que você acha que nos une como casal?",
  "Como você se sente no momento da relação sexual atualmente?",
  "Que projetos você gostaria de realizar comigo em longo prazo (de 5 a 10 anos)?",
  "Qual é a nossa maior fragilidade como casal?",
  "Que projeto você gostaria de realizar comigo em médio prazo (de 1 a 5 anos)?",
  "Que receita você dá para vivermos nossa relação de paixão?",
  "Como você imagina que os outros nos descrevem como casal?",
  "O que é carinho para você? Quais atitudes minhas demonstra carinho a você?",
];

var qtdPerguntas = perguntas.length - 1;

function gerarPergunta(maxPerguntas) {

  let aleatorio = (Math.random() * maxPerguntas).toFixed();
  aleatorio = Number(aleatorio);
  console.log("A pergunta sorteado foi a: " + aleatorio);
  

  if(popPerguntas.length > 0){
    var count = popPerguntas.length
    for (count; count > 0; count--) {
      let poped = popPerguntas.pop();
      perguntasFeitas.push(poped);
      console.log(`adicionado de volta ${poped}`) 
    }
  }
  if(!perguntasFeitas.includes(aleatorio)) {
    //COLOCAR COMO PERGUNTA FEITA
    perguntasFeitas.push(aleatorio);

    //PREENCHER O HTML COM OS DADOS DA QUESTAO SORTEADA
    var p_selecionada = perguntas[aleatorio];
    console.log(p_selecionada);

    //ALIMENTAR A PERGUNTA VINDA DO SORTEIO
    $("p").html(p_selecionada);
    $("p").attr("data-indice", aleatorio)
    console.log(`Quantidade de perguntas feitas ${perguntasFeitas.length}`);
    console.log(perguntasFeitas);

  } else {
    //SE A PERGUNTA JÁ FOI FEITA
    console.log("A pergunta já foi feita. Sorteando novamente...");
    if (perguntasFeitas.length < qtdPerguntas + 1) {
      return gerarPergunta(maxPerguntas);
    } else {
      console.log("Abacabaram as perguntas!");
      $("#mensagem").html("Acabaram todas as perguntas!");
      $("#anterior").attr("disabled", "disabled");
      $("#proxima").attr("disabled", "disabled");
    }
  }
  
}

function removerPergunta() {
  if(perguntasFeitas.length > 1) {
    let poped = perguntasFeitas.pop();
    popPerguntas.push(poped);
    console.log(`Perguntas no pop ${popPerguntas.length}`);
    let anterior = perguntasFeitas.length - 1;
    let renderNum = perguntasFeitas[anterior];
    let render = perguntas[renderNum];
    console.log(anterior);
    console.log(renderNum);

    //ALIMENTAR A PERGUNTA
    $("p").html(render);
  }
  if(perguntasFeitas.length == 1) [
    
  ]
}

$(document).off('click').on("click","[id^=proxima]",function(evento){
  evento.preventDefault();
  $("#anterior").removeAttr("disabled");
  $("#recomecar").removeClass("oculto");
  proximaPergunta()
})

$("#comecar").click(function (event) {
  event.preventDefault();
  proximaPergunta();
  $(this).addClass("oculto");
  $("#proxima").removeClass("oculto");
  $("#anterior").removeClass("oculto");
});

$("#anterior").click(function (event) {
  event.preventDefault();
  removerPergunta()
});

function proximaPergunta() {
  gerarPergunta(qtdPerguntas);
}


