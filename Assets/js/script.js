var s = 0;
var m = 0;
var h = 0;
var click = 0;
var intervalo;
display = document.getElementById('display');
display.innerHTML = '00:00:00'; 
iniciar = () =>{
    click ++;
    if (click == 1) { intervalo = setInterval(() => {tempo();}, 1000); } // Este 'if' define a quantidade de vezes que o comando será aceito, caso contrário chamará o 'intervalo' a cada clique e isso ocasionará um erro na contagem.
    
  };

pausar = () => {
click = 0;
clearInterval(intervalo);

}

zerar = () => {
clearInterval(intervalo);
h = 0; m = 0; s = 0; click = 0;
display.innerHTML = '00:00:00';
}
tempo = () =>{
    
    s++; 
    if(s == 59){
     s = 0;
     m++;
    };
    if (m == 59) { 
      m = 0;
      h++;  
    }
    if (h == 99){
      clearInterval(intervalo);
    }
   
   display.innerHTML = (h < 10 ?  "0" + h : h) + ':' + (m < 10 ?  "0" + m : m) + ':' + (s < 10 ?  "0" + s : s);
                           
};








