import {Component, Input} from '@angular/core';
import {NgClass, NgForOf, NgIf} from "@angular/common";

@Component({
  selector: 'app-nav-item',
  standalone: true,
  imports: [
    NgClass,
    NgForOf,
    NgIf
  ],
  templateUrl: './nav-item.component.html',
  styleUrl: './nav-item.component.less'
})
export class NavItemComponent {

  public isOpenMenu: boolean = false;

  public colormenudrawable = {
    'green': true,
    'purple': false,
    'orange': false,
  }


  public getCombinedClasses() {
      return {
        'menu-button': true,
        ...this.colormenudrawable };
    }


  @Input() public data: any;
  @Input() public header: any;

  public setStatusShowMenu (method: string) {

    if (method === "toggle") {
      this.isOpenMenu = !this.isOpenMenu;
    } else if (method === "hide" && this.isOpenMenu) {
        this.isOpenMenu = false;
    } else if (method === "show") {
      this.isOpenMenu = true;
    }


  }
}
