import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SidebarService {

  private tabSource = new BehaviorSubject('employees');
  private sidebarVisibleSource = new BehaviorSubject(true);
  currentTab = this.tabSource.asObservable();
  sidebarVisible = this.sidebarVisibleSource.asObservable();

  constructor() { }

  changeTab(tab: string) {
    this.tabSource.next(tab);
  }

  toggleSidebar() {
    this.sidebarVisibleSource.next(!this.sidebarVisibleSource.getValue());
  }
}
