import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class HeaderService {
  public actionBarOpen: boolean = false;
  public sideBarOpen: boolean = false;

  constructor() { }

  toggleActionBar(){
    this.actionBarOpen = !this.actionBarOpen;
  }

  toggleSideBar(){
    this.sideBarOpen = !this.sideBarOpen;
  }

}
