
document.addEventListener('DOMContentLoaded', function () {
  
  document.getElementById('button1').addEventListener('click', () => {
    var counter1 = document.getElementById('counter1');
    counter1.textContent = parseInt(counter1.textContent) + 1;
  });
  
  document.getElementById('button2').addEventListener('click', function() {
    var counter2 = document.getElementById('counter2');
    counter2.textContent = parseInt(counter2.textContent) + 1;
  });

  document.getElementById('green').addEventListener('click', function () {
    const ball = document.getElementById('ball');
    let mouseX = event.clientX;
    let mouseY = event.clientY;
    
    ball.style.position = "fixed";
    ball.style.left = "0";
    ball.style.top = "0";
    ball.style.margin = "0";

    ball.style.transform = `translate(${mouseX}px, ${mouseY}px)`;
  });
  
});





