document.addEventListener("click",e=>{// write code here
let i=e.target;for(;!i.classList.contains("wall");)if(!(i=i.parrentNode))return;let h=i.querySelector(".spider"),{x:s,y:n}=i.getBoundingClientRect(),o=new t(s+i.clientLeft,n+i.clientTop,i.clientWidth,i.clientHeight),l=h.offsetWidth/2,r=h.offsetHeight/2,c=new t(e.clientX-l,e.clientY-r,h.offsetWidth,h.offsetHeight);/*
    both spider and wall has position relative to viewport
    moveInside makes sure spider is inside wall
    sePosRealtive to make spider position relative to the wall
  */c.moveInside(o).setPosRelative(o),h.style.left=c.x+"px",h.style.top=c.y+"px"});class t{constructor(t,e,i,h){this.x=t,this.y=e,this.width=i,this.height=h}/*
    sets position relative to anothher rect
    both rects position must be relative to the same point
  */setPosRelative(e){if(!(e instanceof t))throw Error("not a rectangele");return this.x-=e.x,this.y-=e.y,this}/*
    method places this rect on border of passed rect if any part of it is
    outside of passed rect
    both rects position must be relative to the same point
  */moveInside(t){return this.x<t.x?this.x=t.x:this.x+this.width>t.x+t.width&&(this.x=t.x+t.width-this.width),this.y<t.y?this.y=t.y:this.y+this.height>t.y+t.height&&(this.y=t.y+t.height-this.height),this}}//# sourceMappingURL=index.a2bae947.js.map

//# sourceMappingURL=index.a2bae947.js.map
