function loading() {
    let mensagemDia = document.querySelector('.mensagem');
    let horarioDia = document.querySelector('.horario-dia');
    let imagePeriodoDia = document.querySelector('.photo');
    let data = new Date();
    let hora = data.getHours();
    let minutos = data.getMinutes();

    mensagemDia.innerHTML = `Agora são ${hora}:${minutos}.`
    if (hora >= 0 && hora < 12) {
        imagePeriodoDia.src = 'img/foto-manha.jpg'
        document.body.style.backgroundColor = '#e2cd9f'
        horarioDia.innerHTML = 'Bom dia para você!'
    } else if (hora >= 12 && hora <= 18) {
        imagePeriodoDia.src = 'img/foto-tarde.jpg'
        document.body.style.backgroundColor = '#b4983d'
        horarioDia.innerHTML = 'Boa tarde para você!'
    } else {
        imagePeriodoDia.src = 'img/foto-noite.jpg'
        document.body.style.backgroundColor = '#322e2e'
        horarioDia.innerHTML = 'Boa noite para você!'
    }
}