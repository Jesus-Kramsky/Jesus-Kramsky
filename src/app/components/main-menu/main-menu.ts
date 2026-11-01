import { Information } from './../information/information';
import { Component } from '@angular/core';
import { Home } from '../home/home';

@Component({
  selector: 'app-main-menu',
  imports: [Home, Information],
  templateUrl: './main-menu.html',
  styleUrl: './main-menu.scss',
})
export class MainMenu {
  selectedComponent: string = 'home';

  selectComponent(component: string) {
    this.selectedComponent = component;
  }
}
