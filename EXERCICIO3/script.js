var btn = document.querySelector('#btn-cont')

btn.addEventListener('click',()=>{
    var dados = document.getElementsByClassName('dados')
    var res = document.querySelector('#res')

    var i = Number(dados[0].value)
    var f = Number(dados[1].value)
    var p = Number(dados[2].value)
    var ns = []

    function contar(){
        for(i; i < f; i+=p){
            ns.push(`${i} ⏩ `)
        }
        ns.push('🏆')
        res.innerHTML = ns.join(' ')
    }


    if(dados[0].value <= 0 || dados[1].value <= 0){
        alert('[ERRO] Não é possível contar! Reveja as informações!')
    }else if (dados[2].value <= 0){
        alert('[ERRO]Passo inválido! Será considerado 1 !')
        p=1;
        contar()
    }else{
        contar()
    }
   
})