const body = document.querySelector(".body");
const btn = document.querySelector(".btn");


btn.addEventListener('click', function(){
    const getRGB = rgbColection();
    body.style.background = getRGB;

    function rgbColection(){
         const red = Math.floor(Math.random() * 255);
         console.log(red);
         const blue = Math.floor(Math.random() * 255);
         console.log(blue);
         const yallow = Math.floor(Math.random() * 255);
         console.log(yallow);

         return `rgb(${red}, ${blue}, ${yallow})`
    }
})