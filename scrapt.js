let container = document.querySelector(".container");
let btn = document.getElementById("spin");
let number = Math.ceil(Math.random() * 1000);
btn.onclick = function () {
	container.style.transform = "rotate(" + number + "deg)";
	number += Math.ceil(Math.random() * 1000);
    setTimeout(function(){
        //alert
        Swal.fire({
            title: 'Sweet!',
            text: 'Modal with a custom image.',
            imageUrl: 'https://unsplash.it/400/200',
            imageWidth: 400,
            imageHeight: 200,
            confirmButtonText: 'Confirm Number',
            imageAlt: 'Custom image',
          })
    }, 5500)
}



let btnShow = document.querySelector('button');
let input = document.querySelector('input');

input.addEventListener('keyup', () =>{
    
    if(input.value.length > 0){
        
        btnShow.removeAttribute('disabled');
    }else{
        btnShow.setAttribute ('disabled' , 'disabled');
    } 
     
});
