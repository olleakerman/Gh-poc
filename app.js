const c=game,x=c.getContext('2d');let notes=[];for(let i=0;i<20;i++)notes.push({lane:i%5,y:-i*120});
function draw(active=-1){x.clearRect(0,0,c.width,c.height);for(let i=0;i<5;i++){x.strokeRect(i*72,0,72,600)}
notes.forEach(n=>{n.y+=2;x.fillRect(n.lane*72+20,n.y,32,20);if(n.y>620)n.y=-50;});
if(active>=0){x.fillText("Lane "+active,10,20);}}
draw();
start.onclick=async()=>{status.textContent="Mic started (placeholder pitch detector)";setInterval(()=>draw(Math.floor(Math.random()*5)),100)};