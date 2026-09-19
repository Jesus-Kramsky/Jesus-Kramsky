import { Component, EventEmitter, Output } from '@angular/core';
import { NgOptimizedImage } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-home',
  imports: [NgOptimizedImage, MatButtonModule],
  templateUrl: './home.html',
  styleUrl: './home.scss',
})
export class Home {
  protected readonly pixelArt = '/assets/New_Piskel.gif';

  @Output() componentSelected = new EventEmitter<string>();

  selectComponent(component: string) {
    this.componentSelected.emit(component);
  }
}
