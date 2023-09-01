let resultado=0;
let displayvalue="";
var valor=2;
var flag=0;
var a1=0,a2=0,a3=0,b1=0,b2=0,b3=0,c1=0,c2=0,c3=0;
function jogar(value){
    if(value==1){
        resultado=valor/2;
    if(resultado % 1){
        document.getElementById('b1').setAttribute("style", "background-image:url('cassio2.jpg')");
        a1=2;
    } else {
        document.getElementById('b1').setAttribute("style", "background-image:url('tioleo.png')");
        a1=1;
}
document.getElementById("b1").disabled = true;
}
if(value==2){
    resultado=valor/2;
if(resultado % 1){
    document.getElementById('b2').setAttribute("style", "background-image:url('cassio2.jpg')");
    a2=2;
} else {
    document.getElementById('b2').setAttribute("style", "background-image:url('tioleo.png')");
    a2=1;
}
document.getElementById("b2").disabled = true;
}
if(value==3){
    resultado=valor/2;
if(resultado % 1){
    document.getElementById('b3').setAttribute("style", "background-image:url('cassio2.jpg')");
    a3=2;
} else {
    document.getElementById('b3').setAttribute("style", "background-image:url('tioleo.png')");
    a3=1;
}
document.getElementById("b3").disabled = true;
}
if(value==4){
    resultado=valor/2;
if(resultado % 1){
    document.getElementById('b4').setAttribute("style", "background-image:url('cassio2.jpg')");
    b1=2;
} else {
    document.getElementById('b4').setAttribute("style", "background-image:url('tioleo.png')");
    b1=1;
}
document.getElementById("b4").disabled = true;
}
if(value==5){
    resultado=valor/2;
if(resultado % 1){
    document.getElementById('b5').setAttribute("style", "background-image:url('cassio2.jpg')");
    b2=2;
} else {
    document.getElementById('b5').setAttribute("style", "background-image:url('tioleo.png')");
    b2=1;
}
document.getElementById("b5").disabled = true;
}
if(value==6){
    resultado=valor/2;
if(resultado % 1){
    document.getElementById('b6').setAttribute("style", "background-image:url('cassio2.jpg')");
    b3=2;
} else {
    document.getElementById('b6').setAttribute("style", "background-image:url('tioleo.png')");
    b3=1;
}
document.getElementById("b6").disabled = true;
}
if(value==7){
    resultado=valor/2;
if(resultado % 1){
    document.getElementById('b7').setAttribute("style", "background-image:url('cassio2.jpg')");
    c1=2;
} else {
    document.getElementById('b7').setAttribute("style", "background-image:url('tioleo.png')");
    c1=1;
}
document.getElementById("b7").disabled = true;
}
if(value==8){
    resultado=valor/2;
if(resultado % 1){
    document.getElementById('b8').setAttribute("style", "background-image:url('cassio2.jpg')");
    c2=2;
} else {
    document.getElementById('b8').setAttribute("style", "background-image:url('tioleo.png')");
    c2=1;
}
document.getElementById("b8").disabled = true;
}
if(value==9){
    resultado=valor/2;
if(resultado % 1){
    document.getElementById('b9').setAttribute("style", "background-image:url('cassio2.jpg')");
    c3=2;
} else {
    document.getElementById('b9').setAttribute("style", "background-image:url('tioleo.png')");
    c3=1;
}
document.getElementById("b9").disabled = true;
}
}
function contador(){
    valor++;
}
function ganhar(){
    if(a1=='1'){
        if(a2=='1'){
            if(a3=='1'){
        alert ('leo ganhou');
            }
        }
    }
    if(b1=='1'){
        if(b2=='1'){
            if(b3=='1'){
        alert ('leo ganhou');
            }
        }
    }
    if(c1=='1'){
        if(c2=='1'){
            if(c3=='1'){
        alert ('leo ganhou');
            }
        }
    }
    if(a1=='1'){
         if(b1=='1'){
             if(c1=='1'){
        alert ('leo ganhou');
             }
            }
        }
        if(a2=='1'){
            if(b2=='1'){
                if(c2=='1'){
           alert ('leo ganhou');
                }
            }
           }
           if(a3=='1'){
            if(b3=='1'){
                if(c3=='1'){
           alert ('leo ganhou');
                }
            }
           }
           if(a1=='1'){
            if(b2=='1'){
                if(c3=='1'){
           alert ('leo ganhou');
                }
            }
           }
           if(a3=='1'){
            if(b2=='1'){
                if(c1=='1'){
           alert ('leo ganhou');
                }
            }
           }
           if(a1=='2'){
            if(a2=='2'){
                if(a3=='2'){
            alert ('cassio ganhou');
                }
            }
        }
        if(b1=='2'){
            if(b2=='2'){
                if(b3=='2'){
            alert ('cassio ganhou');
                }
            }
        }
        if(c1=='2'){
            if(c2=='2'){
                if(c3=='2'){
            alert ('cassio ganhou');
                }
            }
        }
        if(a1=='2'){
             if(b1=='2'){
                 if(c1=='2'){
            alert ('cassio ganhou');
                 }
                }
            }
            if(a2=='2'){
                if(b2=='2'){
                    if(c2=='2'){
               alert ('cassio ganhou');
                    }
                }
               }
               if(a3=='2'){
                if(b3=='2'){
                    if(c3=='2'){
               alert ('cassio ganhou');
                    }
                }
               }
               if(a1=='2'){
                if(b2=='2'){
                    if(c3=='2'){
               alert ('cassio ganhou');
                    }
                }
               }
               if(a3=='2'){
                if(b2=='2'){
                    if(c1=='2'){
               alert ('cassio ganhou');
                    }
                }
               }
        }