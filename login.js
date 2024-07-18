function validate()
{
    var username=document.getElementById("name").value;
    var pass=document.getElementById("password").value;
    if (  !((/^[A-Z]/).test(username))|| username=="" || (/[!@#$%^&*+=/-?.,;:]/).test(username)|| (/\d/).test(username)){
        alert("First letter capital and digits ,special characters are not allowed");
    }
    const pattern=/(?=.*\d)(?=.*[A-Z])(?=.[a-z])(?=.[@#$%^&*-=+-.,]).{8,}/;
    if (!(pattern.test(pass)))
    {
        alert("password must contain atleast one [A-Z],[a-z],[0-9],special characters");
    }
}