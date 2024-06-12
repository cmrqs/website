import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';
import { AboutComponent } from './main/about/about.component';
import { ContactComponent } from './main/contact/contact.component';
import { EducationComponent } from './main/education/education.component';
import { ExperienceComponent } from './main/experience/experience.component';
import { HomeComponent } from './main/home/home.component';
import { SeparatorComponent } from './separator/separator.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    CommonModule,
    AboutComponent,
    ContactComponent,
    EducationComponent,
    ExperienceComponent,
    FooterComponent,
    HeaderComponent,
    HomeComponent,
    SeparatorComponent,
  ],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'Carlos Marques';
}
