export const signin = (user) => {
    return{
        type: "SIGN_IN",
        username: user
    }
}
export const signout = () => {
    return{
        type:"SIGN_OUT"
    }
}