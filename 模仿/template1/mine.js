var toggle = document.querySelector('.toggle');
var phone_nav = document.querySelector('.phone-nav');

phone_nav.onclick = function(){
    var display = toggle.style.display;
    if(display == 'none'){
        toggle.style.display = 'block';
    } else {
        toggle.style.display = 'none';
    }
    console.log(display)
}
console.log(phone_nav);
console.log(toggle);
