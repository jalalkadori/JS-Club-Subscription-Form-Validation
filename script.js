function redirect() {
    location.replace('confirmation.html');
   };

function redirectback() {
    location.replace('./index.html');
   };
   

function loading() {
    let lName = document.getElementById("lName").value;
    let fName = document.getElementById("fName").value;
    let Email = document.getElementById("Email").value;
    let Phone = document.getElementById("Phone").value;
    let man = document.getElementById("man").selected;
    let woman = document.getElementById("woman").selected;


    if(lName === '' || lName == null) {
        document.getElementById("lNameOutput").innerHTML = "*required";
        document.getElementById("lName" ).style.border = "1px solid #DE0068";
    }
    if(fName === '' || fName == null) {
        document.getElementById("fNameOutput").innerHTML = "*required";
        document.getElementById("fName" ).style.border = "1px solid #DE0068";
    }
    if(Email === '' || Email == null) {
        document.getElementById("emailOutput").innerHTML = "*required";
        document.getElementById("Email" ).style.border = "1px solid #DE0068";
    }
    if(Phone === '' || Phone == null) {
        document.getElementById("phoneOutput").innerHTML = "*required";
        document.getElementById("Phone" ).style.border = "1px solid #DE0068";
    }
    if(man == null && woman == null) {
        document.getElementById("genderOutput").innerHTML = "*required";
    }
    
}

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
    let x = document.getElementById("Phone").value;
    let y = new RegExp('[0-9]','g');
    if(y.test(x) == true && x.length == 10 && x[0] == 0 && ( x[1] == 5 || x[1] == 6 || x[1] == 7)){
        document.getElementById("Phone").style.border = "1px solid #59CE8F";
        document.getElementById("phoneOutput").innerHTML = "";
    } else if(x.length > 10){
        document.getElementById("phoneOutput").innerHTML = "* The Phone number Must containe 10 numbers";
        document.getElementById("Phone").style.border = "1px solid #DE0068";
    }
     else {
        document.getElementById("phoneOutput").innerHTML = "* The Phone number must containe 10 caracters & commence with 06 or 07 or 05";
        document.getElementById("Phone").style.border = "1px solid #DE0068";
    }
}

function genderCheck(){
    let man =  document.getElementById("man").selected;
    let woman =  document.getElementById("woman").selected;
    
    if(man.selected === true) {
        document.getElementById('MAN').style.color = "green";
    }
    else if( woman.selected  === true){
        document.getElementById('WOMAN').style.color = "green";
    } else {
        document.getElementById('genderOutput').innerHTML = "Select yout Gender Please";
        document.getElementById('WOMAN').style.color = "green";
    }

}
function groupCheck(){
    let Group1 =  document.getElementById("Group1").selected;
    let Group2 =  document.getElementById("Group2").selected;
    let Group3 =  document.getElementById("Group3").selected;
    let Group4 =  document.getElementById("Group4").selected;
    let Group5 =  document.getElementById("Group5").selected;
    
    if(Group1 === true || Group2 === true || Group3 === true || Group4 === true || Group5 === true){
        document.getElementById('groupOutput').innerHTML = "valide";
    }
    else {
        document.getElementById('groupOutput').innerHTML = "choose your group Please !";
    }

}
function clubsCheck(){
    let clubs =  document.getElementById("clubs");
    let counter = 0;
        for(let x=0; x< clubs.options.length; x++) {
            if(clubs.options[x].selected == true ) {
                counter++;
            }
        } 
        if(counter>=1 && counter<=3) {
            document.getElementById("clubs").style.border = "1px solid #59CE8F";
        } else {
            document.getElementById("clubs").style.border = "1px solid #DE0068";
            document.getElementById("clubsOutput").innerHTML = "*3 Clubs Maximum"; 
        }
}