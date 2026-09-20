import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-information',
  imports: [],
  templateUrl: './information.html',
  styleUrl: './information.scss',
})
export class Information {
  @Output() componentSelected = new EventEmitter<string>();

  selectComponent(component: string) {
    this.componentSelected.emit(component);
  }
}
