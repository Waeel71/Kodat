setdate();
function setdate(){
    var date =new Date();
   document.getElementById("dateTime").innerHTML = date.getDate()+"."+date.getMonth()+"."+date.getFullYear();
}
