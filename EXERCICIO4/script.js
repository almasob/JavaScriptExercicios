var btn = document.querySelector('#btn-gerar')
var txtarea = document.querySelector('#res')

btn.addEventListener('click',()=>{
    var num = document.querySelector('#num').value
    var r = []

    if(num.length == 0){
        alert('[ERRO] Digite um número!')
        console.log(num)
    }else{
        for(c = 0; c <=10 ; c++){
            
            r.push(`${num} x ${c} = ${num*c}\n`)    
        }
        txtarea.innerHTML=r.join('')
    }
    
})