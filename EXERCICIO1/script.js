function carregar(){
    var tela = document.querySelector('body')
    var msg = document.querySelector('#msg')
    var imagem = document.querySelector("#imagem")
    var data = new Date();
    var hora = data.getHours();
    
    if(hora < 12 ){
        msg.innerText = `Bom dia! Agora são ${hora} horas!`
        imagem.src = 'dia.jpg'
        tela.style.background = 'rgba(252, 252, 35, 0.479)'

    }else if(hora < 18){
        msg.innerText = `Boa tarde! Agora são ${hora} horas!`
        imagem.src = 'tarde.jpg'
        tela.style.background = 'rgba(248, 153, 11, 0.479)'
    }else{
        msg.innerText = `Boa noite! Agora são ${hora} horas!`
        imagem.src = 'noite.jpg'
        tela.style.background = 'rgba(37, 3, 29, 0.897)'
    }

}

