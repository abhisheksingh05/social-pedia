export default function isLoggedIn() {
    let user = sessionStorage.getItem('user');
    if(user){
        return true;
    } else{
        return false;
    }
}