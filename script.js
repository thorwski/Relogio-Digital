const horas = document.getElementById("horas");
const minutos = document.getElementById("minutos");
const segundos = document.getElementById("segundos");
const amPM = document.getElementById("ampm");

function relogio(){
  let h = new Date().getHours();
  let m = new Date().getMinutes();
  let s = new Date().getSeconds();
  let ampm = "AM"

  if(h>12){
    h = h - 12;
    ampm = "PM";
  }

  h = h < 10 ? "0" + h : h;
  m = m < 10 ? "0" + m : m;
  s = s < 10 ? "0" + s : s;

  horas.innerText = h;
  minutos.innerText = m;
  segundos.innerText = s;
  amPM.innerText = ampm;

  setTimeout(()=>{
    relogio();
  }, 1000)
}

relogio();