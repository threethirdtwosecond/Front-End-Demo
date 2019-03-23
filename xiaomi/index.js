//轮播slider
function slider(slider_num,image_array){
	slider_num.innerHTML = 
				   `<span class='j_slider-left'>
	                    <span class='left-arrow'></span>
	                </span>
	                <span class='j_slider-right'>
	                    <span class='right-arrow'></span>
	                </span>
	                <div class="j_slider-dot-link">
	                    <a href=""></a>
	                    <a href=""></a>
	                    <a href=""></a>
	                    <a href=""></a>
	                    <a href=""></a>
	                </div>
	                <div>
                       <a href="" class="j_slider-image">
                           <img src=` + image_array[0] + `>
                       </a>
	                </div>`;
	var display = document.getElementsByClassName('j_slider-image')[0].children[0];
	var left = document.getElementsByClassName('j_slider-left')[0];
	var right = document.getElementsByClassName('j_slider-right')[0];
	const index_0 = image_array[0];
	var current = 0;
	var dot = document.getElementsByClassName('j_slider-dot-link')[0].children;
	left.onclick = function(){
	    image_array.push(image_array.shift());
	    display.attributes[0].value = image_array[0];
	    display.style.animation = 'none';
	    setTimeout(function() {
	        display.style.animation = 'fade .5s';
	    }, 10);
	    current = image_array.indexOf(index_0);
	    //console.log(current);
	    dot[current].style.background = '#fff';
	    for(var i=0;i<image_array.length;i++){
	        if(i == current) {
	            continue;
	        }
	        dot[i].style.background = 'rgba(0,0,0,0.6)';
	    }
	}
	right.onclick = function(){
	    image_array.unshift(image_array.pop());
	    display.attributes[0].value = image_array[0];
	    display.style.animation = 'none';
	    setTimeout(function() {
	        display.style.animation = 'fade .5s';
	    }, 10);
	    current = image_array.indexOf(index_0);
	    //console.log(current);
	    dot[current].style.background = '#fff';
	    for(var i=0;i<image_array.length;i++){
	        if(i == current) {
	            continue;
	        }
	        dot[i].style.background = 'rgba(0,0,0,0.6)';
	    }
	}
}

var image_array1 = [
    "img/slide/slide1.jpg",
    "img/slide/slide2.jpg",
    "img/slide/slide3.jpg",
    "img/slide/slide4.jpg",
    "img/slide/slide5.jpg"
];
var slider1 = document.getElementsByClassName('slider')[0];
slider(slider1,image_array1);

function purchase_slide(){
    var j_flashpurchase = document.getElementsByClassName('j_flashpurchase')[0];
    var position = 0;
    var left = document.getElementsByClassName('more')[0].children[0];
    var right = document.getElementsByClassName('more')[0].children[1];
    left.onclick = function(){
        position = position < 0 ? position+= 992 : 0;
        console.log(position);
        j_flashpurchase.style.left = position + 'px';
        if(position == 0){
            left.style.opacity = 0.5;
        } 
        right.style.opacity = 1;
    }
    right.onclick = function(){
        position = position <= -1984 ? -1984 : position-= 992;
        j_flashpurchase.style.left = position + 'px';
        console.log(position);
        if(position == -1984) {
            right.style.opacity = 0.5;
            
        }
        left.style.opacity = 1;
    }
}
purchase_slide();