    // Typing effect
    const el=document.querySelector(".typing");const words=el.getAttribute("data-words").split(",");
    let i=0,j=0,del=false;function loop(){el.textContent=words[i].substring(0,j);
    if(!del&&j++===words[i].length+10)del=true;else if(del&&--j===0){del=false;i=(i+1)%words.length;}
    setTimeout(loop,del?50:120);}loop();

    // Scroll animation
    const items=document.querySelectorAll('.timeline-item');
    const observer=new IntersectionObserver(e=>{e.forEach(x=>{if(x.isIntersecting)x.target.classList.add('show');});});
    items.forEach(i=>observer.observe(i));