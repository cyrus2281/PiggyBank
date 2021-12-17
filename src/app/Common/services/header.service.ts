import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HeaderService {
  private menuOpen: boolean = false;
  private menuOpen$ = new BehaviorSubject<boolean>(this.menuOpen);
  private sideBarOpen: boolean = false;
  private sideBarOpen$ = new BehaviorSubject<boolean>(this.sideBarOpen);

  constructor() { }

  toggleMenu(){
    this.menuOpen = !this.menuOpen;
    this.menuOpen$.next(this.menuOpen);
  }

  toggleSideBar(){
    this.sideBarOpen = !this.sideBarOpen;
    this.sideBarOpen$.next(this.sideBarOpen);
  }

  showMenu(show: boolean){
    this.menuOpen = show;
    this.menuOpen$.next(this.menuOpen);
  }

  showSideBar(show: boolean){
    this.sideBarOpen = show;
    this.sideBarOpen$.next(this.sideBarOpen);
  }

  getMenuStatus(): Observable<boolean> {
    return this.menuOpen$;
  }

  getSideBarStatus(): Observable<boolean> {
    return this.sideBarOpen$;
  }
}
