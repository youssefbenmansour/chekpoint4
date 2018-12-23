

function youssef(){
    if(document.getElementById("test").style.color=="blue"){
 document.getElementById("test").style.color="black";
 document.getElementById("test").style.fontSize="1em"
    }
 else{
     document.getElementById("test").style.color="blue";
     document.getElementById("test").style.fontSize="5em"
 }} 
 


 function bold(){
    if(document.getElementById("test2").style.fontWeight=="bold"){
 document.getElementById("test2").style.fontWeight="normal";
 document.getElementById("test2").style.fontSize="1em"
    }
 else{
     document.getElementById("test2").style.fontWeight= "bold";
     document.getElementById("test2").style.fontSize="5em";
 }}

 
 function italic(){
    if(document.getElementById("test3").style.fontStyle=="italic"){
 document.getElementById("test3").style.fontStyle="normal";
 document.getElementById("test3").style.fontSize="1em"
    }
 else{
     document.getElementById("test3").style.fontStyle="italic";
     document.getElementById("test3").style.fontSize="5em";
 }}

 function underline(){
     console.log(document.getElementById("test4").style.texDecoration)
    if(document.getElementById("test4").style.textDecoration=="underline"){
        document.getElementById("test4").style.fontSize="1em"
        document.getElementById("test4").style.textDecoration="none"
    }
    else{
        document.getElementById("test4").style.textDecoration="underline";
        document.getElementById("test4").style.fontSize="5em";
    }
 

 };
   
function font(){
    var font = document.getElementById("idd").value
    console.log(font);
    document.getElementById("hello").style.fontSize=font
}


    