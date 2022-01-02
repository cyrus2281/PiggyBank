
export class Account {
  public isLoggedIn : boolean = false;
  public email!: string;
  public displayName!: string;


  constructor(private uid: string, email:string = "test@email.com", displayName?:string){
      if (uid) {
        this.isLoggedIn = true;
      }

      if (email) {
        this.email = email;
      }

      if (displayName) {
        this.displayName =  displayName;
      }
  }
}
