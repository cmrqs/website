import { CommonModule } from '@angular/common';
import { Component, OnInit, Renderer2 } from '@angular/core';
import {
  NgbCollapseModule,
  NgbDropdownModule,
  NgbNavModule,
  NgbScrollSpyModule,
  NgbScrollSpyService,
} from '@ng-bootstrap/ng-bootstrap';

interface Theme {
  name: string;
  icon: string;
}

const THEMES: Theme[] = [
  { name: 'auto', icon: 'circle-half' },
  { name: 'dark', icon: 'moon-stars-fill' },
  { name: 'light', icon: 'sun-fill' },
];
const DEFAULT_THEME_INDEX = 1;

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [
    CommonModule,
    NgbCollapseModule,
    NgbDropdownModule,
    NgbNavModule,
    NgbScrollSpyModule,
  ],
  providers: [NgbScrollSpyService],
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  collapsed: boolean = true;
  fragments = ['home', 'about', 'education', 'experience', 'contact'];

  themes = THEMES;
  selectedTheme: Theme = this.getLocalStorageTheme();

  constructor(
    public scrollSpy: NgbScrollSpyService,
    private renderer: Renderer2
  ) {}

  ngOnInit(): void {
    queueMicrotask(() => {
      this.scrollSpy.start({
        fragments: this.fragments,
        threshold: 0.5,
      });
    });

    this.setHTMLTheme(this.selectedTheme.name);
  }

  onButtonClicked(fragment: string): void {
    this.collapsed = true;
    this.scrollSpy.scrollTo(fragment);
  }

  onThemeButtonClicked(theme: Theme): void {
    if (this.selectedTheme.name === theme.name) return;

    this.selectedTheme = theme;
    this.setLocalStorageTheme(theme.name);

    this.setHTMLTheme(theme.name === 'auto' ? this.detectTheme() : theme.name);
  }

  getDefaultTheme(): Theme {
    return this.themes[DEFAULT_THEME_INDEX];
  }

  private detectTheme(): string {
    return window.matchMedia('(prefers-color-scheme: dark)').matches
      ? 'dark'
      : 'light';
  }

  private setHTMLTheme(attrValue: string): void {
    this.renderer.setAttribute(
      document.querySelector('html'),
      'data-bs-theme',
      attrValue
    );
  }

  private getLocalStorageTheme(): Theme {
    const key = 'selectedTheme';
    const themeName = localStorage.getItem(key);

    if (themeName) return this.getThemeByName(themeName);
    else return this.getDefaultTheme();
  }

  private setLocalStorageTheme(theme: string): void {
    const key = 'selectedTheme';

    if (theme === this.getDefaultTheme().name) localStorage.removeItem(key);
    else localStorage.setItem(key, theme);
  }

  private getThemeByName(name: string): Theme {
    for (let theme of this.themes) if (theme.name === name) return theme;

    return this.getDefaultTheme();
  }
}
