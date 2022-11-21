function redirect() {
    location.replace('./confirmation.html');
   };

function redirectback() {
    location.replace('./index.html');
   };


function LastNameCheck(){
    const x = document.getElementById("lName").value;
    if (x.match(/[0-9]/g)) {
        document.getElementById("lNameOutput").innerHTML = "*The Name must note containe any numbers";
        document.getElementById("lName" ).style.border = "1px solid #DE0068";
    }
    else if(x.length < 30 && x.length > 3){
        document.getElementById("lName").style.border = "1px solid #59CE8F";
        document.getElementById("lNameOutput").innerHTML = "";
    } else {
        document.getElementById("lNameOutput").innerHTML = "*Your Name must be between 3 and 30 characters";
        document.getElementById("lName" ).style.border = "1px solid #DE0068";
    }

}

function FirstNameCheck(){
    const x = document.getElementById("fName").value;
    if (x.match(/[0-9]/g)) {
        document.getElementById("fNameOutput").innerHTML = "* The Name must not contain any numbers";
        document.getElementById("fName" ).style.border = "1px solid #DE0068";
    }
    else if(x.length < 30 && x.length > 3){
        document.getElementById("fName").style.border = "1px solid #59CE8F";
        document.getElementById("fNameOutput").innerHTML = "";
    } else {
        document.getElementById("fNameOutput").innerHTML = "* Your Name must be between 3 and 30 characters";
        document.getElementById("fName").style.border = "1px solid #DE0068";
    }
}

function emailCheck(){
    const x = document.getElementById("Email").value;
    if(x == lName.value+"."+fName.value+"@ofppt.ma"){
        document.getElementById("Email").style.border = "1px solid #59CE8F";
        document.getElementById("emailOutput").innerHTML = "";
    } else {
        document.getElementById("emailOutput").innerHTML = "*The Email Must be in this formula : LastName.FirstName@ofppt.ma";
        document.getElementById("Email").style.border = "1px solid #DE0068";
    }
}
function numberCheck(){
    const x = document.getElementById("Phone").value;
    let y = new RegExp('[0-9]','g');
    if(y.test(x) == true && x.length == 10 && x[0] == 0 && ( x[1] == 5 || x[1] == 6 || x[1] == 7)){
        
        document.getElementById("Phone").style.border = "1px solid #59CE8F";
        document.getElementById("phoneOutput").innerHTML = "";
    } else {
        document.getElementById("phoneOutput").innerHTML = "* Please Entre a valid Phone number";
        document.getElementById("Phone").style.border = "1px solid #DE0068";
    }
}

