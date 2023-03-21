export class AuthService{
    loggedin:Boolean=true;

    login(){
        this.loggedin=true;
    }
    logout(){
        this.loggedin=false;
    }
    IsAuthenticate(){
       return this.loggedin;
    }
}
