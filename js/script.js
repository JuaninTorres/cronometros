/* Author: Juan Torres

*/

var tiempoGeneral = parseInt(0,10);
var cronometroEnEjecucion = false;
var resultado = [];

function formatearTiempo(t){
    // El tiempo viene en milisegundos
    var m_tmp   = parseInt(t,10);
    var horas   = Math.floor(m_tmp/ 3600000);
    var minutos = Math.floor((m_tmp - (horas * 3600000)) / 60000);
    var segundos = Math.floor((m_tmp - (horas * 3600000) - (minutos * 60000))/1000);
    var milisegundos = ((m_tmp - (horas * 3600000) - (minutos * 60000)) - (segundos * 1000) )/100;

    if (horas   < 10) {horas   = "0"+horas;}
    if (minutos < 10) {minutos = "0"+minutos;}
    if (segundos < 10) {segundos = "0"+segundos;}
    var time    = horas+':'+minutos+':'+segundos+'.'+milisegundos;
    return time;
}

function removeA(arr){
    var what, a= arguments, L= a.length, ax;
    while(L> 1 && arr.length){
        what= a[--L];
        while((ax= arr.indexOf(what))!= -1){
            arr.splice(ax, 1);
        }
    }
    return arr;
}

function cronometroPrincipal()
{
    $("#cronometroPrincipal").html(formatearTiempo(tiempoGeneral));
    if(cronometroEnEjecucion)
    {
        tiempoGeneral = tiempoGeneral+100;
        setTimeout("cronometroPrincipal()",100);
    }
}

function detenerRelojEquipo(id){
    $("#reloj"+id).html(formatearTiempo(tiempoGeneral));
    $("#tiempo"+id).val(tiempoGeneral);

    if($.inArray(id,resultado)!=-1){
        removeA(resultado,id);
    }
    resultado.push(id);
}

function iniciarCronometro(ejecutando){
    if(!ejecutando)
    {
        cronometroEnEjecucion=true;
        cronometroPrincipal();
    }
    else
    {
        cronometroEnEjecucion=false;
    }
}
function detenerCronometro(){$("#btnIniciar").removeAttr("disabled");cronometroEnEjecucion=false;}
function resetCronometro(){$("#btnIniciar").removeAttr("disabled");cronometroEnEjecucion=false;tiempoGeneral=0;cronometroPrincipal();}
