function Verificar(){
    var data = new Date()
    var ano = data.getFullYear()
    var fano = document.getElementById('txtano')
    var res = document.getElementById('res')
    var img = document.getElementById('imagem')

    if (fano.value.length == 0 || Number(fano.value) > ano ){
        window.alert('[ERRO] Verifique os dados e tente novamente!')
    } 
    else{
        var fsex = document.getElementsByName('radsex')
        var idade = ano - Number(fano.value)
        var genero = ''
        
        if (fsex[0].checked){
            genero = 'Homem'
            res.innerText = `Detectamos um ${genero} com ${idade} anos 👦`
            if (idade >=0 && idade <10){
                //crianca
                img.src='pexels-anna-shvets-3845495.jpg'
            }
            else if(idade < 21){
                //jovem
                img.src='pexels-chloe-1043474.jpg'
            }
            else if(idade < 50){
                //adulto
                img.src='pexels-andrea-piacquadio-927022.jpg'
            }
            else{
                //idoso
                img.src='pexels-steshka-willems-3018993.jpg'
            }
            
        } 
        else if (fsex[1].checked){
            genero = 'Mulher'
            res.innerText = `Detectamos uma ${genero} com ${idade} anos 👧`
            if (idade >=0 && idade <10){
                //crianca
                img.src='pexels-tatiana-syrikova-3933276.jpg'
            }
            else if(idade < 21){
                //jovem
                img.src='pexels-victoria-akvarel-13214676.jpg'
            }
            else if(idade < 50){
                //adulto
                img.src='pexels-andrea-piacquadio-3769021.jpg'
            }
            else{
                //idoso
                img.src='pexels-mikhail-nilov-8317651.jpg'
            }
        }
        //res.innerHTML = `Detectamos ${genero} com ${idade} anos`
    }
}