// Validation for SIGNIN form...........................
const checkValidData = (email,password) => {
    // I] Here i am using the Reg Expreession to validate the Email addesss.
    // Must start with a letter or number
    // Can contain letters, numbers, dots (.), underscores (_), percent (%), plus (+), or hyphens (-) before @
    // Must include @ (at the rate symbol)
    // Domain name (after @) can contain letters, numbers, dots (.), and hyphens (-)
    // Must have a dot (.) followed by at least 2 letters (like .com, .in, .org)
    // No spaces allowed
    const isEmailValid =/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(email);  // Here Reg expression will have the test() function to validate the email.And this test() method will reture the Boolean value i.e) T/F

    // II] Here i am using the Reg Expreession to validate the Password addesss. 
    // i.e) 
    // It contains at least 8 characters and at most 20 characters.
    // It contains at least one digit.
    // It contains at least one upper case alphabet.
    // It contains at least one lower case alphabet.
    // It contains at least one special character which includes !@#$%&*()-+=^.
    // It doesn't contain any white space.
    const isPasswordValid = /^(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z])(?=.*[@#$%^&\-+=()])(?=\S+$).{8,20}$/.test(password);// Here Reg expression will have the test() function to validate the password .And this test() method will reture the Boolean value i.e) T/F

    if(!isEmailValid) return "Email ID is not valid."
    if(!isPasswordValid) return "Password is not valid"

    // if both are valid then, it will return null
    return null;
};


// Validation for SIGNUP form...........................
const checkValidDataSignUp =(email,password,name)=>{
    const isEmailValid =/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(email);
    const isPasswordValid = /^(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z])(?=.*[@#$%^&\-+=()])(?=\S+$).{8,20}$/.test(password);
    // III] Here i am using the Reg Expreession to validate the user Name.
    // Must start with a letter
    // Can contain letters, numbers, underscores (_), or dots (.)
    // Length between 3 and 20 characters
    // No spaces, special symbols like @!#$%^&* etc.
    const isNameValid = /^[a-zA-Z][a-zA-Z0-9._]{2,19}$/.test(name); // Here Reg expression will have the test() function to validate the user Name .And this test() method will reture the Boolean value i.e) T/F

    if(!isEmailValid) return "Email ID is not valid."
    if(!isPasswordValid) return "Password is not valid"
    if(!isNameValid) return "User Name is not valid"

    // if both are valid then, it will return null
    return null;
};

export {checkValidData, checkValidDataSignUp}