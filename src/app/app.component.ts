import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {NavItemComponent } from "./nav-item/nav-item.component";
import {Config} from "./app.component.data";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, NavItemComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.less'
})
export class AppComponent {
  public test: string = 'Test Angular Project Encyclopedia-Programming v-0.0.12';

  public configApp: any = Config;

  public htmlV: Array<string> = this.configApp.htmlv;
  public cssV: Array<string> = this.configApp.cssv;
  public jsV: Array<string> = this.configApp.jsv;

}
