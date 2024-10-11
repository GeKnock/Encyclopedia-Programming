import {Component, Input} from '@angular/core';
import {NgClass, NgForOf} from "@angular/common";
import {TextList} from "./nav-item.component.model";

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

  public textMenu = [
    new TextList("Description 1"), new TextList("Description 2"), new TextList("Description 3"), new TextList("Description 4"),
  ]

  public isOpenMenu: boolean = false;
  @Input() public datam: any;
  @Input() public header: any;

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
}
