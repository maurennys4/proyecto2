 const btn=document.querySelector('button');
 const body=document.querySelector('body');

 const colores=['blue','yellow','green','white'];

 btn .addEventListener('click',fondo);
 function fondo(){
    const indice=parseInt(Math.random()*colores.length);
    body.style.backgrounColor=colores[indice];
 }

    

    



       
