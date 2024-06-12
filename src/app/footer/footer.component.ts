import { CommonModule } from '@angular/common';
import { Component, VERSION } from '@angular/core';

import packageJson from 'package.json';

interface SocialMedia {
  icon: string;
  hoverIcon?: string;
  url: string;
}

const SOCIAL_MEDIA: SocialMedia[] = [
  {
    icon: 'facebook',
    url: 'https://www.facebook.com/carl.marqs',
  },
  {
    icon: 'instagram',
    url: 'https://www.instagram.com/carlmarqs/',
  },
  {
    icon: 'github',
    url: 'https://github.com/carl-marqs',
  },
  {
    icon: 'gitlab',
    url: 'https://gitlab.com/carl_marqs',
  },
  {
    icon: 'linkedin',
    url: 'https://www.linkedin.com/in/carl-marqs/',
  },
  {
    icon: 'tiktok',
    url: 'https://www.tiktok.com/@carl.marqs',
  },
  {
    icon: 'twitter-x',
    hoverIcon: 'twitter',
    url: 'https://twitter.com/Carl_Marqs',
  },
];

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss'],
})
export class FooterComponent {
  hoveredIcons: string[] = [];
  socialMedia = SOCIAL_MEDIA.sort((a, b) => a.icon.localeCompare(b.icon));

  getYear(): number {
    return new Date().getFullYear();
  }

  getAppVersion(): string {
    return packageJson.version;
  }

  getAngularVersion(): string {
    return VERSION.full;
  }

  getBootstrapVersion(): string {
    const version = packageJson.dependencies['bootstrap'];
    return Number.isInteger(version[0]) ? version : version.substring(1);
  }
}
