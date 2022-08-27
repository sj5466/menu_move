//버튼을 클릭
document.querySelectorAll('#parallax__nav ul li a').forEach(li=>{ // 
    li.addEventListener('click', e =>{
        e.preventDefault();
        document.querySelector(li.getAttribute('href')).scrollIntoView({
            behavior:"smooth"
        });
    });
});

//스크롤 했을 때
window.addEventListener("scroll",function(){
    let scrollTop = window.pageXOffset || document.documentElement.scrollTop || window.scrollY //호환성문제를 잡을 수 있음
    
    if( scrollTop >= document.getElementById('section1').offsetTop-10){
        document.querySelectorAll('#parallax__nav ul li').forEach(li =>{
            li.classList.remove('active');
        });
        document.querySelector('#parallax__nav ul li:nth-child(1)').classList.add('active');
    }
    if( scrollTop >= document.getElementById('section2').offsetTop-10){
        document.querySelectorAll('#parallax__nav ul li').forEach(li =>{
            li.classList.remove('active');
        });
        document.querySelector('#parallax__nav ul li:nth-child(2)').classList.add('active');
    }
    if( scrollTop >= document.getElementById('section3').offsetTop-10){
        document.querySelectorAll('#parallax__nav ul li').forEach(li =>{
            li.classList.remove('active');
        });
        document.querySelector('#parallax__nav ul li:nth-child(3)').classList.add('active');
    }
    if( scrollTop >= document.getElementById('section4').offsetTop-10){
        document.querySelectorAll('#parallax__nav ul li').forEach(li =>{
            li.classList.remove('active');
        });
        document.querySelector('#parallax__nav ul li:nth-child(4)').classList.add('active');
    }
    if( scrollTop >= document.getElementById('section5').offsetTop-10){
        document.querySelectorAll('#parallax__nav ul li').forEach(li =>{
            li.classList.remove('active');
        });
        document.querySelector('#parallax__nav ul li:nth-child(5)').classList.add('active');
    }
    if( scrollTop >= document.getElementById('section6').offsetTop-10){
        document.querySelectorAll('#parallax__nav ul li').forEach(li =>{
            li.classList.remove('active');
        });
        document.querySelector('#parallax__nav ul li:nth-child(6)').classList.add('active');
    }
    if( scrollTop >= document.getElementById('section7').offsetTop-10){
        document.querySelectorAll('#parallax__nav ul li').forEach(li =>{
            li.classList.remove('active');
        });
        document.querySelector('#parallax__nav ul li:nth-child(7)').classList.add('active');
    }
    if( scrollTop >= document.getElementById('section8').offsetTop-10){
        document.querySelectorAll('#parallax__nav ul li').forEach(li =>{
            li.classList.remove('active');
        });
        document.querySelector('#parallax__nav ul li:nth-child(8)').classList.add('active');
    }
    if( scrollTop >= document.getElementById('section9').offsetTop -10){
        document.querySelectorAll('#parallax__nav ul li').forEach(li =>{
            li.classList.remove('active');
        });
        document.querySelector('#parallax__nav ul li:nth-child(9)').classList.add('active');
    }

    //info
    document.querySelector(".paraScroll span").innerText = parseInt(scrollTop);

    document.querySelector(".Offset1").innerText = parseInt(document.getElementById("section1").offsetTop) +"px";
    document.querySelector(".Offset2").innerText = parseInt(document.getElementById("section2").offsetTop) +"px";
    document.querySelector(".Offset3").innerText = parseInt(document.getElementById("section3").offsetTop) +"px";
    document.querySelector(".Offset4").innerText = parseInt(document.getElementById("section4").offsetTop) +"px";
    document.querySelector(".Offset5").innerText = parseInt(document.getElementById("section5").offsetTop) +"px";
    document.querySelector(".Offset6").innerText = parseInt(document.getElementById("section6").offsetTop) +"px";
    document.querySelector(".Offset7").innerText = parseInt(document.getElementById("section7").offsetTop) +"px";
    document.querySelector(".Offset8").innerText = parseInt(document.getElementById("section8").offsetTop) +"px";
    document.querySelector(".Offset9").innerText = parseInt(document.getElementById("section9").offsetTop) +"px";
});