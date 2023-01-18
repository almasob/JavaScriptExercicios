
function verificar(){
    var nasc = document.querySelector('#anoNasc').value
    var atual = new Date().getFullYear()
    var idade = atual - nasc

    

    if(nasc > atual || nasc < 1900){
        alert('ANO INVÁLIDO!')
    }else{
        var res = document.querySelector('#res')
        var gen = document.getElementsByName('sex')
        var moment = ''
        var foto = document.createElement('img')

        if(gen[0].checked){
            gen = gen[0].value

            if(idade < 14){
                moment = 'uma criança'
                foto.src='criancaM.jpg'
            }
            else if(idade < 60){
                moment = 'um adulto'
                foto.src='adultoM.jpeg'
            }else{
                moment = 'um idoso'
                foto.src='idosoM.jpg'
            }

        }else{
            gen = gen[1].value

            if(idade < 14){
                moment = 'uma criança'
                foto.src='criancaF.jpg'
            }
            else if(idade < 60){
                moment = 'um adulto'
                foto.src='adultoF.jpg'
            }else{
                moment = 'um idoso'
                foto.src='idosoF.jpg'
            }
        }

        res.innerHTML = `Você é ${moment} do sexo ${gen}, e sua idade é ${idade} anos!`
        foto.id = 'imagem'
        foto.style.marginTop = '20px'
        res.appendChild(foto)
        }
        

    }