function scrollListener(catalogue,content) {
    var top_position = content.getBoundingClientRect().top;
    info.innerHTML = top_position;
    if(top_position <= 0 && top_position > -content.offsetHeight) {
        catalogue.classList.add('current');
    } else {
        catalogue.classList.remove('current');
    }
    if(window.innerHeight - top_position > 0) {
        content.style.animation = 'fade 2s';
    }
}//滚动监听函数，接收一个目录元素和一个内容元素




var mainbody = document.querySelector('.mainbody'),//内容
    mainbody_child = Array.from(document.querySelectorAll('.mainbody>div')),//内容子元素
    catalogue = Array.from(document.querySelectorAll('.part')),//目录
    info = document.querySelector('.info');//右上角输出元素值区域


mainbody.addEventListener('scroll',function(){
    for(var i=0; i<5; i++){
        scrollListener(catalogue[i],mainbody_child[i]);
    }
});

    