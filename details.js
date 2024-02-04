document.getElementById("click-me-btn").addEventListener("click", function() {
    document.getElementById("click-me-btn").style.display = "none";
    document.getElementById("valentine-question").style.display = "block";
    document.getElementById("roses").style.display="none";
    
});

  function createFlowers() {
    for(let i=0;i<100;i++)
    {const flower = document.createElement('div');
    flower.classList.add('flower');
    flower.style.left = `${Math.random() * 100}vw`; // Random horizontal position
    document.getElementById('roses').appendChild(flower);
    flower.style.animationDuration = `${Math.random() * 7 + 5}s`;
    flower.style.animationDelay = `${Math.random() * 2}s`;

    flower.addEventListener('animationend', function() {
      flower.remove();
    });}
  }

document.getElementById("no-btn").addEventListener("mouseover", function() {
    var xPos = Math.floor(Math.random() * window.innerWidth);
    var yPos = Math.floor(Math.random() * window.innerHeight);
    document.getElementById("no-btn").style.position = "absolute";
    document.getElementById("no-btn").style.left = xPos + "px";
    document.getElementById("no-btn").style.top = yPos + "px";
});

document.getElementById("yes-btn").addEventListener("click", function() {
    document.getElementById("valentine-question").style.display = "none";
    document.getElementById("roses").style.display = "block";
    document.getElementById("yeah-boi-gif").style.display = "block";
    createFlowers();
});
