
export class AccountModel {
  public isLoggedIn : boolean = false;
  constructor(public email?: string,public displayName?: string){
      if (email && displayName) {
        this.isLoggedIn = true;
      }
  }
}
