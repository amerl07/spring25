degree = 0
imgs =["https://pngimg.com/d/cookie_PNG13656.png",
"https://freepngimg.com/thumb/cookie/4-2-cookie-picture.png", 
"https://static.vecteezy.com/system/resources/previews/049/389/988/non_2x/a-single-chocolate-chip-cookie-with-a-transparent-background-a-delicious-treat-free-png.png"
]
setColor();
function addOneToCounter(){
    numCookie = parseInt(document.getElementById("count").innerText);
    document.getElementById("count").innerText = 
    parseInt(document.getElementById("count").innerText) + 1
    const image = document.getElementsByClassName("cookie");
    
    const letter = document.getElementById("letter");
    letter.style.transform = 'rotateY(360deg)';
    degree = degree + 20;

    var elemm = document.createElement('img'); 
    elemm.classList.add("cookie");
    elemm.onclick = "addOneToCounter()";
    elemm.addEventListener('click', addOneToCounter);
    num = Math.floor(Math.random() * 3);
    elemm.src = imgs[num];
    document.body.appendChild(elemm);

    for(var i=0, len=image.length; i<len; i++)
        {
    console.log("click");

            size = Math.floor(Math.random() * 100) + 500/(numCookie** 1/2);
            num_contrast = Math.floor(Math.random() * 150);
            num_rotate = Math.floor(Math.random() * 360);

            image[i].style["max-height"] = size +'px';
            image[i].style["transform"] = 'rotate(' + degree + 'deg)';
            image[i].style["filter"] = 'contrast(' + num_contrast + '%)' + ' hue-rotate(' + num_rotate + 'deg)';
        // image[i].style["filter"] = 'hue-rotate(' + num_contrast + ')';
            // image[i].style.webkitFilter = 'contrast(' + num_contrast +  '%)';
        }
    }

    function randomColor() {
        return '#'+ ('000000' + (Math.random()*0xFFFFFF<<0).toString(16)).slice(-6)
    }
    
    function setColor(){
        document.getElementById('myBody').style.backgroundImage = "linear-gradient("+ randomColor() + "," + randomColor()+ ")";
        setTimeout(setColor, 2000);
        console.log("set_color");
    }

