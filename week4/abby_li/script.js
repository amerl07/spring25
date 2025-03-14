
let counter = 0;  
let clicks = [];  
let totalClicks = 0;  
let bestCPS = 0;  


document.getElementById('bestCPS').textContent = bestCPS;


function addOneToCounter(event) {
    counter++;
    totalClicks++;
    document.getElementById("counter").textContent = counter;
    document.getElementById("totalClicks").textContent = totalClicks;
    
    const now = Date.now();
    clicks.push(now);
    updateClicksPerSecond();
    
    
    createClickEffect(event);
}

function updateClicksPerSecond() {
    const now = Date.now();
    clicks = clicks.filter(time => now - time < 1000);
    const cps = clicks.length;
    document.getElementById("clicksPerSecond").textContent = cps;
    
    if (cps > bestCPS) {
        bestCPS = cps;
        document.getElementById('bestCPS').textContent = bestCPS;
    }
}

function handleTouch(event) {
    event.preventDefault();
    event.stopPropagation();
    addOneToCounter(event);
    return false;
}

function createClickEffect(event) {
    const effect = document.createElement('div');
    effect.innerText = '+1';
    effect.style.position = 'absolute';
    effect.style.left = (event.pageX - 10) + 'px';
    effect.style.top = (event.pageY - 10) + 'px';
    effect.style.color = '#d2691e';
    effect.style.fontSize = '20px';
    effect.style.pointerEvents = 'none';
    effect.style.userSelect = 'none';
    effect.style.animation = 'fadeUp 0.5s ease-out';
    effect.style.zIndex = '1000';
    
    document.body.appendChild(effect);
    
    setTimeout(() => {
        document.body.removeChild(effect);
    }, 500);
}


const style = document.createElement('style');
style.textContent = `
    @keyframes fadeUp {
        from {
            opacity: 1;
            transform: translateY(0);
        }
        to {
            opacity: 0;
            transform: translateY(-20px);
        }
    }
`;
document.head.appendChild(style);

setInterval(updateClicksPerSecond, 100);