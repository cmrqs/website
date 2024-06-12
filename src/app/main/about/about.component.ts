import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss'],
})
export class AboutComponent {
  info = {
    name: 'Carlos Marques',
    birthday: new Date(2000, 5, 24),
    hometown: 'Vitória, Brazil',
    residence: 'Campinas, Brazil',
  };

  birthdayToday: boolean = this.isBirthdayToday();

  private isBirthdayToday(): boolean {
    const now = new Date();
    const birthday = this.info.birthday;

    return (
      now.getMonth() === birthday.getMonth() &&
      now.getDay() === birthday.getDay()
    );
  }
}
