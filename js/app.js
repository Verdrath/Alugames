function alterarStatus(id){
    let jogoClicado = document.getElementById(`game-${id}`);
    let imagem = jogoClicado.querySelector('.dashboard__item__img');
    let botao = jogoClicado.querySelector('.dashboard__item__button');

    if (imagem.classList.contains('dashboard__item__img--rented')) {
        confirmar = prompt('Você tem certeza que deseja devolver este jogo?');
            if (confirmar === 'Sim' || confirmar === 'sim') {
            imagem.classList.remove('dashboard__item__img--rented');
            botao.textContent = 'Alugar';
            botao.classList.remove('dashboard__item__button--return');
        } else {
            alert('Ação cancelada');
        }
    } else {
        confirmar = prompt('Você tem certeza que deseja alugar este jogo?');
        if (confirmar === 'Sim' || confirmar === 'sim') {
            imagem.classList.add('dashboard__item__img--rented');
            botao.textContent = 'Devolver';
            botao.classList.add('dashboard__item__button--return');
        } else{
            alert('Ação cancelada');
        }
    }
}

let confirmar;