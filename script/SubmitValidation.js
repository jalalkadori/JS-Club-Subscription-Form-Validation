

function Submit() {

    // Variables declaration : 
    //inputs
    let lName = document.getElementById("lName").value;
    let fName = document.getElementById("fName").value;
    let Email = document.getElementById("Email").value;
    let Phone = document.getElementById("Phone").value;
    // outputs
    let lNameOutput = document.getElementById("lNameOutput");
    let fNameOutput = document.getElementById("fNameOutput");
    let emailOutput = document.getElementById("emailOutput");
    let phoneOutput = document.getElementById("phoneOutput");
    let genderOutput = document.getElementById("genderOutput");
    let groupOutput = document.getElementById("groupOutput");
    let clubsOutput = document.getElementById("clubsOutput");
    //submit button 

    //--------------------------------------------------------------------------

    // Last Name verification : 

    if (lName.match(/[0-9]/g)) {
        document.getElementById("lNameOutput").innerHTML = "*The Name must note containe any numbers";
        document.getElementById("lName" ).style.borderBottom = "1px solid #DE0068";
    }
    else if(lName.length < 30 && lName.length > 3){
        document.getElementById("lName").style.borderBottom = "1px solid #59CE8F";
        document.getElementById("lNameOutput").innerHTML = "";
    } else {
        document.getElementById("lNameOutput").innerHTML = "*Your Name must be between 3 and 30 characters";
        document.getElementById("lName" ).style.borderBottom = "1px solid #DE0068";
    }

    // First Name verification : 

    if (fName.match(/[0-9]/g)) {
        document.getElementById("fNameOutput").innerHTML = "* The Name must not contain any numbers";
        document.getElementById("fName" ).style.borderBottom = "1px solid #DE0068";
    }
    else if(fName.length < 30 && fName.length > 3){
        document.getElementById("fName").style.borderBottom = "1px solid #59CE8F";
        document.getElementById("fNameOutput").innerHTML = "";
    } else {
        document.getElementById("fNameOutput").innerHTML = "* Your Name must be between 3 and 30 characters";
        document.getElementById("fName").style.borderBottom = "1px solid #DE0068";
    }

     // Email Adresse verification : 

     if(Email == lName+"."+fName+"@ofppt.ma"){
        document.getElementById("Email").style.borderBottom = "1px solid #59CE8F";
        document.getElementById("emailOutput").innerHTML = "";
    } else {
        document.getElementById("emailOutput").innerHTML = "*The Email Must be in this formula : LastName.FirstName@ofppt.ma";
        document.getElementById("Email").style.borderBottom = "1px solid #DE0068";
    }

    // Phone Number Verification : 
}