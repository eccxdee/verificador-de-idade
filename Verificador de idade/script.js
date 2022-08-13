//script/aquivodescript externo
function verificar() {
    var data = new Date()
    var ano = data.getFullYear() //ano atual
    var fAno = document.getElementById('txtano') //oq vai ser digitado na caixa de texto
    var res = document.querySelector('div#res')
    if (fAno.value.length == 0 || fAno.value > ano) {
        window.alert('[ERRO] Verifique os dados e tente novamente!')
    } else {
        var fsex = document.getElementsByName('radsex')
        var idade = ano - fAno.value
        var gênero = ''
        var img = document.createElement('img')
        img.setAttribute('id', 'foto')
        if (fsex[0].checked) {
            gênero = 'Masculino'
            if (idade >= 0 && idade < 12) {
                //criança
                img.setAttribute('src', 'criançaM.jpg')
            } else if (idade < 21) {
                //jovem
                img.setAttribute('src', 'jovemM.jpg')
            } else if (idade < 50) {
                //adulto
                img.setAttribute('src', 'adultoM.jpg')
            }
            res.innerHTML= `Com ${idade} anos, você se identifica pelo gênero ${gênero}.`
        } else if (fsex[1].checked) {
            gênero = 'Feminino'
            if (idade >= 0 && idade < 12) {
                //criança
                img.setAttribute('src', 'criançaF.jpg')
            } else if (idade < 21) {
                //jovem
                img.setAttribute('src', 'jovemF.jpg')
            } else if (idade < 50) {
                //adulto
                img.setAttribute('src', 'adultoF.jpg')
            }
            res.innerHTML= `Com ${idade} anos, você se identifica pelo gênero ${gênero}.`
        } if (fsex[2]. checked) {
            gênero = 'outro'
            if (idade >= 0 && idade < 12) {
                //criança
               img.setAttribute('src', 'criançaM.jpg')
            } else if (idade < 21) {
                //jovem
                img.setAttribute('src', 'jovemF.jpg')
            } else if (idade < 50) {
                //adulto
                img.setAttribute('src', 'adultoO.jpg')
            }
            res.innerHTML= `Com ${idade} anos, você se identifica por ${gênero} gênero.`
        }
        res.style.textAlign = 'center'
        res.appendChild(img)
    }
}