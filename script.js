function verificar() {
    var data = new Date()
    var ano = data.getUTCFullYear()
    var fano = document.getElementById('ano')
    var res = document.getElementById('res')
    if(fano.value.length == 0 || Number (fano.value) > ano) {
        window.alert('[ERRO] Verifique os dados e tente novamente!')
    }else{
        var fsex = document.getElementsByName('sexo')
        var idade = ano - Number(fano.value)
        var genero = ``
        var img = document.createElement('img')
        img.setAttribute('id','foto')
        if(fsex[0].checked){
            genero = 'Homem'
            if(idade < 10){
                genero = 'Menino'
                img.setAttribute('src','img/crianca-h.jpg')
            }else if(idade < 21){
                genero = 'Jovem'
                img.setAttribute('src','img/jovem-h.jpg')
            }else if(idade < 65){
                img.setAttribute('src','img/adulto-h.jpg')
            }else{
                genero = 'Idoso'
                img.setAttribute('src','img/idoso-h.jpg')
            }
        } else if(fsex[1].checked){
            genero = 'Mulher'
            if(idade < 10){
                genero = 'Menina'
                img.setAttribute('src','img/crianca-m.jpg')
            }else if(idade < 21){
                genero = 'Jovem'
                img.setAttribute('src','img/jovem-m.jpg')
            }else if(idade < 65){
                img.setAttribute('src','img/adulto-m.jpg')
            }else{
                genero = 'Idosa'
                img.setAttribute('src','img/idoso-m.jpg')
            }
        }
        img.style.borderRadius = '999px'
        img.style.padding = '20px'
        res.style.textAlign = 'center'
        res.innerHTML =`Detectamos ${genero} com ${idade} anos`
        res.appendChild(img)
    }
}