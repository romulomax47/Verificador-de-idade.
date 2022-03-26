function verificar(){

    var data = new Date();
    var ano = data.getFullYear();
    var fano = document.getElementById("nome");
    var res = document.querySelector("div#res");
    if(fano.value.length == 0 || fano.value > ano){
        window.alert(["ERRO"]);
    }else{
        var fsex = document.getElementsByName( "radsex");
        var idade = ano - Number(fano.value);
        var genero = ``;
        if(fsex[0].checked){
            genero = "Homem";
            if( idade >= 0 && idade <=15){
                img.src = "bebe-homem.jpg";
            }else if(idade < 55){
                img.src = "homem.jpg";
            }else{
                img.src = "homem-idoso.jpg";
            };

        }else if(fsex[1].checked){
            genero = "Mulher";
            if( idade >= 0 && idade < 15){

                img.src = "bebe-mulher.jpg";
            }else if(idade < 55){
                img.src = "mulher.jpg";
            }else{
                img.src = "mulher-idosa.jpg";
            };

        

        }
            res.innerHTML=`Detectamos um(a) ${genero} com ${idade} anos!`;
    }
}