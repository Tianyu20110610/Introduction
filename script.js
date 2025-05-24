window.onresize=screen
window.onload=screen
function screen(){
    console.log("hi");
    Width=width.innerWidth;
    document.getElementById("size").innterHTML="width:"+Width+" px"
    
}