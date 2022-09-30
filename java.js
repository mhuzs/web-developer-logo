//AOS.init();
 let mine=document.getElementById('my');
 let bon=document.querySelector('#bak')
 console.log(mine);
 bon.addEventListener('mouseenter',(e)=>{
    mine.src.match('pictures/logo.png')
        mine.src='pictures/my.jpeg'
 })
 bon.addEventListener('mouseleave',(q)=>{
    mine.src.match('pictures/my.jpeg')
        mine.src='pictures/logo.png'  
 })