window.onresize=screen;
window.onload=screen;
function screen(){
    console.log("hi");
    Width=window.innerWidth;
    console.log(Width);
    document.getElementById("size").innerHTML="width:"+Width+" px";
    
}
