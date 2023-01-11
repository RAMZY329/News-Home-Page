
function show(){
    console.log("clicked")
    document.body.classList.add("dim");
    let x=document.getElementById("mylist")
    if (x.style.display==="block"){
        x.style.display="none"
    }else{
        x.style.display ="block"
    }
    
}
function hide(){
    let x=document.getElementById("mylist")
    document.body.classList.remove("dim");
    if (x.style.display==="block"){
        x.style.display="none"
    }else{
        x.style.display ="block"
    }
}
 