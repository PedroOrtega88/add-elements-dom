 // Aquí tu código

 const lista = document.getElementById('lista');  // Corregir paréntesis aquí
 const agregar = document.getElementById('agregar');
 
 agregar.addEventListener('click', function(){
     let cartel = prompt('Agregar elemento');
     if (cartel !== null) {  // Verificar si el usuario hizo clic en "Cancelar"
         let cartelOne = document.createElement('li');
         cartelOne.innerText = cartel;
         lista.appendChild(cartelOne);
     }
 });
   
