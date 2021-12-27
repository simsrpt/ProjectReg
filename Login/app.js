function validateForm() {
    let x = document.forms["myForm"]["email"].value;
    if (x == "") {
        alert("Name must be filled out");
        return false;

    }
    let y = document.forms["myForm"]["pwd"].value;
    if (y == "") {
        alert("Name must be filled out");
        return false;
    } else if (y < 5) {
        alert("Password should be more than 5 char");
        return false;
    }
}