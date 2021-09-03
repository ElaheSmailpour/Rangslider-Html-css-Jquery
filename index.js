$(document).ready(function(){

   
      var slide=document.querySelector("input");
      var result=document.querySelector(".result-box");
      result.textContent=slide.value;
      slide.oninput=function(){
        result.textContent=this.value;  
      }


})