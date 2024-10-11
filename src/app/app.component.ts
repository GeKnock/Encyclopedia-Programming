import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {NavItemComponent } from "./nav-item/nav-item.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, NavItemComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.less'
})
export class AppComponent {
  test = 'Test Angular Project Encyclopedia-Programming v-0.0.3';
}
