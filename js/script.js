function siguientePaso() {
    document.getElementById('paso1').classList.remove('activa');
    document.getElementById('paso2').classList.add('activa');
    
    const btnNo = document.getElementById('btnNo');
    btnNo.style.right = '30px';
}

function moverBotonNo() {
    const btnNo = document.getElementById('btnNo');
    const card = document.querySelector('.card');
    
    const maxX = card.clientWidth - btnNo.clientWidth - 40;
    const maxY = card.clientHeight - btnNo.clientHeight - 40;
    
    const randomX = Math.floor(Math.random() * maxX);
    const randomY = Math.floor(Math.random() * maxY);
    
    btnNo.style.left = randomX + 'px';
    btnNo.style.top = randomY + 'px';
}

function respuestaSi() {
    document.getElementById('paso2').classList.remove('activa');
    document.getElementById('paso3').classList.add('activa');
    
    confetti({
        particleCount: 120,
        spread: 80,
        origin: { y: 0.6 }
    });
}