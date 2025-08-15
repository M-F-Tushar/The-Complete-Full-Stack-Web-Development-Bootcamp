var password = prompt("Enter your password: ");

if (password.length < 8) 
{
    console.log("Password must be at least 8 characters");
}
else
{
    console.log("Password is valid");
}