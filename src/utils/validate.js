export const checkvalidation= (name,email ,password) => {
    const isNameValid = (name?.current?.value) ? /[a-zA-Z]+$/.test(name.current.value) : null;
    const isEmailValid = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/.test(email);
    const isPasswordValid = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/.test(password);
    if (name?.current?.value){
        if (!isNameValid) return "Name is not valid";
    }
    if (!isEmailValid) return "Email Id is not valid !";
    if (!isPasswordValid) return "Password is not valid !";
    return null;
}