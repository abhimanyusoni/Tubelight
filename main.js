const Button = document.querySelector('.toggle-button');

Button.addEventListener('click', function(){
    document.querySelector('body').classList.toggle('on');
    if(document.querySelector('body').classList.contains('on') == true){
        Button.innerText = "Turn off";
    }else{
        Button.innerText = "Turn on";
    }
})