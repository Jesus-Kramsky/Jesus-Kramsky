import { Component, EventEmitter, Output } from '@angular/core';
import { NgOptimizedImage } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import { TranslatePipe, TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-home',
  imports: [NgOptimizedImage, MatButtonModule, TranslatePipe],
  templateUrl: './home.html',
  styleUrl: './home.scss',
})
export class Home {
  protected readonly pixelArt = '/assets/New_Piskel.gif';

  constructor(private readonly translate: TranslateService) {}

  @Output() componentSelected = new EventEmitter<string>();

  selectComponent(component: string) {
    this.componentSelected.emit(component);
  }

  toggleLanguage() {
    const language = this.translate.currentLang() === 'es' ? 'en' : 'es';
    this.translate.use(language).subscribe(() => localStorage.setItem('language', language));
  }
}
