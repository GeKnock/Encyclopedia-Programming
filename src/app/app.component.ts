import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavItemComponent } from "./nav-item/nav-item.component";
import { Config } from "./app.component.data";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, NavItemComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.less'
})
export class AppComponent {
  public test: string = 'Test Angular Project Encyclopedia-Programming v-0.0.25';

  public configApp: any = Config;

  public htmlV: Array<string> = this.configApp.htmlV;
  public cssV: Array<string> = this.configApp.cssV;
  public jsV: Array<string> = this.configApp.jsV;
  public headerV: Array<string> = this.configApp.headerV;

}
