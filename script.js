let favIcon = document.querySelector('#fav-icon i'); 
let favContainerNum = document.querySelector("#fav-container-num"); 

// need to change background color of the heart
favIcon.addEventListener('click',function(){
    if(favContainerNum.textContent == '0'){
        favContainerNum.textContent = '1'; 
    }else{
        favContainerNum.textContent = '0'; 
    }

    favIcon.classList.toggle("fas"); 
    
}); 

$('.book-1').on('click',function(){
   $('.book-1').datepicker(); 
}); 