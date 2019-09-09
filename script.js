var loggainBlock = document.getElementById("loggain_block");
var loggautBlock = document.getElementById("loggaut_block");
var userName = document.getElementById("user_name");
var pswrd = document.getElementById("pswrd");
const namn = "test";
const lsnord = "1234";
var loggainBtn = document.getElementById("logga_in");
var loggautBtn = document.getElementById("logga_ut");
var felBlock = document.getElementById("fel");

  if(localStorage.length!==0)
   { userName.value = localStorage.getItem("userName");
    pswrd.value = localStorage.getItem("pswrd");
    loggainBlock.style.display = "none"; 
    loggautBlock.style.display = "block";    
   }

loggainBtn.addEventListener("click",function()
{
   if(userName.value==namn && pswrd.value==lsnord)
    {
    localStorage.setItem("userName",userName.value);
    localStorage.setItem("pswrd",pswrd.value);
    userName.value = "";
    pswrd.value = "";
    loggainBlock.style.display="none";
    loggautBlock.style.display="block";    
   }
   else{
    loggainBlock.style.display="none";
    loggautBlock.style.display="none";
    felBlock.style.display="block";
    }
})
loggautBtn.addEventListener("click",function()
{ 
    localStorage.clear();
    userName.value="";
    pswrd.value="";
    loggainBlock.style.display="block";
    loggautBlock.style.display="none";
    felBlock.style.display="none";
})
    
console.log(localStorage);