import { Component } from '@angular/core';
import {NgClass, NgForOf} from "@angular/common";
import {liitem} from "./nav-item.component.data";

@Component({
  selector: 'app-nav-item',
  standalone: true,
  imports: [
    NgClass,
    NgForOf
  ],
  templateUrl: './nav-item.component.html',
  styleUrl: './nav-item.component.less'
})
export class NavItemComponent {

  public isOpenMenu: boolean = false;

  public setStatusShowMenu (method: string) {

    if (method === "toggle") {
      this.isOpenMenu = !this.isOpenMenu;
    } else if (method === "hide") {
      if (this.isOpenMenu) {
        this.isOpenMenu = false;
      }
    } else if (method === "show") {
      this.isOpenMenu = true;
    }


  }

  protected readonly liitem = liitem;
}
