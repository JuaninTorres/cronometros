/* Author: Juan Torres

*/

var tiempoGeneral = parseInt(0);
var cronometroEnEjecucion = false;

function formatearTiempo(t){
    // El tiempo viene en milisegundos
    var m_tmp   = parseInt(t);
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

function cronometroPrincipal()
{
    $("#cronometroPrincipal").html(formatearTiempo(tiempoGeneral));
    if(cronometroEnEjecucion)
    {
    	tiempoGeneral = tiempoGeneral +100;
    	setTimeout("cronometroPrincipal()",100);
    }

}

function iniciarCronometro(){cronometroEnEjecucion = true;cronometroPrincipal();}
function detenerCronometro(){cronometroEnEjecucion = false;}
function resetCronometro(){cronometroEnEjecucion = false;tiempoGeneral=0;cronometroPrincipal();}
