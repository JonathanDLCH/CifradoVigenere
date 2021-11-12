//Definimos nuestro alfabeto con el que trabajaremos (no ASCII por la ñ)
const abcMin="abcdefghijklmnñopqrstuvwxyzáéíóú,?¿!¡ *-+[]{}._0123456789";
const abcAcn="áéíóú";
const sizeabc = abcMin.length;

function cifrarVigenere(idMensaje,idClave){
    //variables
    var msgEncriptado="";
    var newClave="";
    var letraencriptada=[];

    //Obtenemos los valores del mensaje
    var clave = document.getElementById(idClave).value.toLowerCase();
    var mensaje = document.getElementById(idMensaje).value.toLowerCase();
    //Verificacion de variables
    //console.log(typeof(mensaje)+" "+typeof(clave));
    //console.log(mensaje+" "+clave);

    //comparamos las longitudes de las entradas
    if(mensaje.length==clave.length){
        //Si tienen la misma longitud de las palabras
        var mensajeNum = castNum(mensaje);
        var claveNum = castNum(clave);

        for (var i=0; i<mensajeNum.length; i++){
            letraencriptada.push((mensajeNum[i]+claveNum[i])%57);
            console.log("letra encriptada: "+letraencriptada[i]);
            msgEncriptado+=abcMin.charAt(letraencriptada[i]);
        }
    }else{
        //Si es diferente la longitud de las palabras
        var multp = Math.trunc(mensaje.length/clave.length)+1;
        if(multp>1){
            for(var i=0;i<multp;i++){
                clave+=clave;
            }
            clave=clave.substr(0, mensaje.length);
            console.log(clave);
        }else{
            clave=clave.substr(0, mensaje.length);
        }

        var mensajeNum = castNum(mensaje);
        var claveNum = castNum(clave);

        for (var i=0; i<mensajeNum.length; i++){
            letraencriptada.push((mensajeNum[i]+claveNum[i])%57);
            console.log("letra encriptada: "+letraencriptada[i]);
            msgEncriptado+=abcMin.charAt(letraencriptada[i]);
        }
    }

    //Escribimos en nuestra caja de salida
    document.getElementById("resultado").innerText ="Resultado: "+ msgEncriptado; 
    console.log(msgEncriptado);
}

function descifrarVigenere(idMensaje,idClave){
    //variables
    var msgEncriptado="";
    var newClave="";
    var letraencriptada=[];

    //Obtenemos los valores del mensaje
    var clave = document.getElementById(idClave).value.toLowerCase();
    var mensaje = document.getElementById(idMensaje).value.toLowerCase();
    //Verificacion de variables
    //console.log(typeof(mensaje)+" "+typeof(clave));
    //console.log(mensaje+" "+clave);

    //comparamos las longitudes de las entradas
    if(mensaje.length==clave.length){
        //Si tienen la misma longitud de las palabras
        var mensajeNum = castNum(mensaje);
        var claveNum = castNum(clave);

        for (var i=0; i<mensajeNum.length; i++){

            if(mensajeNum[i]-claveNum[i] >=0){
                letraencriptada.push((mensajeNum[i]-claveNum[i])%57);
                console.log("letra encriptada: "+letraencriptada[i]);
                msgEncriptado+=abcMin.charAt(letraencriptada[i]);
            }else{
                letraencriptada.push((mensajeNum[i]-claveNum[i]+57)%57);
                console.log("letra encriptada: "+letraencriptada[i]);
                msgEncriptado+=abcMin.charAt(letraencriptada[i]);
            }
        }
    }else{
        //Si es diferente la longitud de las palabras
        var multp = Math.trunc(mensaje.length/clave.length)+1;
        if(multp>1){
            for(var i=0;i<multp;i++){
                clave+=clave;
            }
            clave=clave.substr(0, mensaje.length);
            console.log(clave);
        }else{
            clave=clave.substr(0, mensaje.length);
        }

        var mensajeNum = castNum(mensaje);
        var claveNum = castNum(clave);

        for (var i=0; i<mensajeNum.length; i++){
            
            if(mensajeNum[i]-claveNum[i] >=0){
                letraencriptada.push((mensajeNum[i]-claveNum[i])%57);
                console.log("letra encriptada: "+letraencriptada[i]);
                msgEncriptado+=abcMin.charAt(letraencriptada[i]);
            }else{
                letraencriptada.push((mensajeNum[i]-claveNum[i]+57)%57);
                console.log("letra encriptada: "+letraencriptada[i]);
                msgEncriptado+=abcMin.charAt(letraencriptada[i]);
            }
        }
    }

    //Escribimos en nuestra caja de salida
    document.getElementById("resultado").innerText ="Resultado: "+ msgEncriptado; 
    console.log(msgEncriptado);
}

function castNum(palabra){
    var numericStg=[];
    for(var j=0;j<palabra.length;j++){
        for(var i=0;i<sizeabc;i++){
            if(palabra[j]===abcMin[i]){
                numericStg.push(i);
                break; //Cambiamos a la sig letra de la palabra
            }else{
                if(palabra[j]){


                }else{
                    console.log("No es una letra del abecedario");
                }
            }
        }
    }
    console.log(numericStg);
    return numericStg;
}

function limpiar(){
    document.getElementById("clave").value="";
    document.getElementById("mensaje").value="";
    document.getElementById("resultado").innerText ="Resultado: ";
}