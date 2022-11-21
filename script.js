function redirect() {
    location.replace('confirmation.html');
   };

function redirectback() {
    location.replace('./index.html');
   };


function LastNameCheck(){
    const x = document.getElementById("lName").value;
    if(x.length < 30 && x =! ){
        document.getElementById("lName").style.border = "1px solid #59CE8F";
        document.getElementById("lNameOutput").innerHTML = "";
    } else {
        document.getElementById("lNameOutput").innerHTML = "* Le nom doit etre moins de 30 charactere";
        document.getElementById("lName").style.border = "1px solid #DE0068";
    }
}

function FirstNameCheck(){
    const x = document.getElementById("fName").value;
    if(x.length < 30 && x.length > 0){
        document.getElementById("fName").style.border = "1px solid #59CE8F";
        document.getElementById("fNameOutput").innerHTML = "";
    } else {
        document.getElementById("fNameOutput").innerHTML = "* Le nom doit etre moins de 30 charactere";
        document.getElementById("fName").style.border = "1px solid #DE0068";
    }
}
