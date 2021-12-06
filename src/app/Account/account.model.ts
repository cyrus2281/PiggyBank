
export class AccountModel {
  public isLoggedIn : boolean = false;
  private email!: string;
  private displayName!: string;


  constructor(private uid: string){
      if (uid) {
        this.isLoggedIn = true;
      }
  }
}
