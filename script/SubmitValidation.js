

function Submit() {

    // Variables declaration : 
    // Text inputs
    let lName = document.getElementById("lName").value;
    let fName = document.getElementById("fName").value;
    let Email = document.getElementById("Email").value;
    let Phone = document.getElementById("Phone").value;
    // Radio inputs
    let man = document.getElementById("man");
    let woman = document.getElementById("woman");
    let Group1 =  document.getElementById("Group1");
    let Group2 =  document.getElementById("Group2");
    let Group3 =  document.getElementById("Group3");
    let Group4 =  document.getElementById("Group4");
    let Group5 =  document.getElementById("Group5");
    // Select list
    let clubs =  document.getElementById("clubs");

    // outputs
    let lNameOutput = document.getElementById("lNameOutput");
    let fNameOutput = document.getElementById("fNameOutput");
    let emailOutput = document.getElementById("emailOutput");
    let phoneOutput = document.getElementById("phoneOutput");
    let genderOutput = document.getElementById("genderOutput");
    let groupOutput = document.getElementById("groupOutput");
    let clubsOutput = document.getElementById("clubsOutput");

    //Option VARS for html page redirect 

    var varLastName = false;
    var varFirstName = false;
    var varEmail = false;
    var varEmail = false;
    var varPhone = false;
    var varGender = false;
    var varGroup = false;
    var varClubs = false;

    //--------------------------------------------------------------------------

    // Last Name verification : 

    if (lName.match(/[0-9]/g)) {
        lNameOutput.innerHTML = "*The Name must note containe any numbers";
        document.getElementById("lName" ).style.borderBottom = "1px solid #DE0068";
    }
    else if(lName.length < 30 && lName.length > 3){
        document.getElementById("lName").style.borderBottom = "1px solid #59CE8F";
        lNameOutput.innerHTML = "";
        varLastName === true;
    } else {
        lNameOutput.innerHTML = "*Your Name must be between 3 and 30 characters";
        document.getElementById("lName").style.borderBottom = "1px solid #DE0068";
    }

    // First Name verification : 

    if (fName.match(/[0-9]/g)) {
        fNameOutput.innerHTML = "* The Name must not contain any numbers";
        document.getElementById("fName" ).style.borderBottom = "1px solid #DE0068";
    }
    else if(fName.length < 30 && fName.length > 3){
        document.getElementById("fName").style.borderBottom = "1px solid #59CE8F";
        fNameOutput.innerHTML = "";
        varFirstName === true;
    } else {
        fNameOutput.innerHTML = "* Your Name must be between 3 and 30 characters";
        document.getElementById("fName").style.borderBottom = "1px solid #DE0068";
    }

     // Email Adresse verification : 

     if(Email == lName+"."+fName+"@ofppt.ma"){
        document.getElementById("Email").style.borderBottom = "1px solid #59CE8F";
        emailOutput.innerHTML = "";
        varEmail === true;
    } else {
        emailOutput.innerHTML = "*The Email Must be in this formula : LastName.FirstName@ofppt.ma";
        document.getElementById("Email").style.borderBottom = "1px solid #DE0068";
    }

    // Phone Number Verification : 

    let y = new RegExp('[0-9]','g');
    if(y.test(Phone) == true && Phone.length == 10 && Phone[0] == 0 && ( Phone[1] == 5 || Phone[1] == 6 || Phone[1] == 7)){
        document.getElementById("Phone").style.borderBottom = "1px solid #59CE8F";
        phoneOutput.innerHTML = "";
        varPhone === true;
    } else if(Phone.length > 10){
        phoneOutput.innerHTML = "* The Phone number Must containe 10 numbers";
        document.getElementById("Phone").style.borderBottom = "1px solid #DE0068";
    }
     else {
        phoneOutput.innerHTML = "* The Phone number must containe 10 caracters & commence with 06 or 07 or 05";
        document.getElementById("Phone").style.borderBottom = "1px solid #DE0068";
    }

    // Gender Verification : 

    if(man.cheked || woman.cheked) {
        document.querySelector(".gender").style.borderBottom ="1px solid green";
    }
    else {
        document.querySelector(".gender").style.borderBottom ="1px solid #DE0068";
        genderOutput.innerHTML = "choose your gender Please !";
    }

    // Group Verification : 

    if(Group1.cheked || Group2.cheked || Group3.cheked || Group4.cheked || Group5.cheked ){
        groupOutput.innerHTML = "valide";
        document.querySelector('.clubs').style.borderBottom = "1px solid #DE0068";
    }
    else {
        groupOutput.innerHTML = "choose your group Please !";
    }

    // Group Verification : 

    let counter = 0;
        for(let x=0; x< clubs.options.length; x++) {
            if(clubs.options[x].selected == true ) {
                counter++;
            }
        } 
        if(counter>=1 && counter<=3) {
            clubs.style.borderBottom = "1px solid #59CE8F";
            clubsOutput.innerHTML = "";
            varClubs === true;
        } else {
            clubs.style.borderBottom = "1px solid #DE0068";
            clubsOutput.innerHTML = "*3 Clubs Maximum"; 
        }

    if (varLastName === true &&
        varFirstName === true &&
        varEmail === true &&
        varEmail === true &&
        varPhone === true &&
        varClubs === true) {
        window.location.href = "confirmation.html";
    }
    
}