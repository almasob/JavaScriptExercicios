var btn = document.querySelector('#btn-gerar')
var txtarea = document.querySelector('#res')

btn.addEventListener('click',()=>{
    var num = Number(document.querySelector('#num').value)
    var r = []

    for(c = 0; c <=10 ; c++){
        
        r.push(`${num} x ${c} = ${num*c}\n`)

    }
    
    txtarea.innerHTML=r.join('')
})