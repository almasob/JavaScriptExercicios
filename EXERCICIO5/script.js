var listaNum = []
var inpNum = document.querySelector('#num')
inpNum.focus()
var res = document.querySelector('#res')
var numeros = document.querySelector('#numeros')

function adicionar(){
    
    var n = Number(inpNum.value)

    //adicionar os numeros
    if(n < 1 || n > 100){
        alert('Adicione um número válido!')
    }else{
        if(listaNum.includes(n)){
            alert('Numero já adicionado! Tente outro...')
        }else{
            numeros.innerHTML += `<option>Valor ${n} adicionado!`
            listaNum.push(n)
            res.innerHTML = ''
        }
    }

    //limpar input de numeros
    inpNum.value = ''
    //ao clicar, o foco volta pro input
    inpNum.focus()
}

function verificar(){
    
    if(listaNum.length == 0){
        res.innerText = 'Lista vazia! Adicione números para verificar!'
    }else{
        var maior = Math.max.apply(null, listaNum );
        var menor = Math.min.apply(null, listaNum );
        res.innerHTML = 
        `Ao todo, temos ${listaNum.length} número(s) cadastrados<br>
        O maior valor informado foi ${maior}<br>
        O menor valor informado foi ${menor}<br>
        Somando todos os valores temos ${total(listaNum)}<br>
        A média dos valores digitados é ${(total(listaNum)/listaNum.length).toFixed(2)}
        `
        
    }
    //ao clicar, o foco volta pro input
    inpNum.focus()

}

function total(array){
    var m = 0
    for(c in array){
        m+= array[c]
    }
    return m
}

function limpar(){
    res.innerHTML = ''
    numeros.innerHTML = ''
    listaNum = []
}

