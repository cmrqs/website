import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import {
  NgbNavModule,
  NgbPaginationModule,
  NgbProgressbarModule,
  NgbRatingModule,
} from '@ng-bootstrap/ng-bootstrap';

import {
  TimelineComponent,
  TimelineEntry,
} from 'src/app/shared/timeline/timeline.component';

enum LanguageProficiency {
  None,
  Beginner,
  Elementary,
  Intermediate,
  UpperIntermediate,
  Advanced,
  Fluent,
  Native,
}

interface Language {
  originalName: string;
  translatedName: string;
  proficiency: LanguageProficiency;
}

const LANGUAGES: Language[] = [
  {
    originalName: 'Português',
    translatedName: 'Portuguese',
    proficiency: LanguageProficiency.Native,
  },
  {
    originalName: 'English',
    translatedName: 'English',
    proficiency: LanguageProficiency.Fluent,
  },
  {
    originalName: '日本語',
    translatedName: 'Japanese',
    proficiency: LanguageProficiency.Elementary,
  },
  {
    originalName: 'Español',
    translatedName: 'Spanish',
    proficiency: LanguageProficiency.Elementary,
  },
];

const EDUCATION: TimelineEntry[] = [
  {
    icon: 'star-fill',
    title: 'Bachelor of Computer Science',
    subtitle: 'State University of Campinas',
    description:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit necessitatibus adipisci, ad alias',
    startDate: new Date(2018, 1),
    endDate: new Date(2022, 11),
  },
  {
    icon: 'star-fill',
    title: 'Computer Technical Course',
    subtitle:
      'Federal Institute of Education, Science and Technology of Espírito Santo',
    description:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit necessitatibus adipisci, ad alias',
    startDate: new Date(2015, 2),
    endDate: new Date(2017, 11),
  },
];

interface ProgrammingLanguage {
  name: string;
  hours: number;
  icon: string;
}

const PROGRAMMING_LANGUAGES: ProgrammingLanguage[] = [
  { name: 'C', hours: 200, icon: 'c-plain' },
  { name: 'C++', hours: 100, icon: 'cplusplus-plain' },
  { name: 'C#', hours: 1000, icon: 'csharp-plain' },
  { name: 'Delphi', hours: 900, icon: 'devicon-plain' },
  { name: 'GDScript', hours: 500, icon: 'godot-plain' },
  { name: 'Python', hours: 400, icon: 'python-plain' },
  { name: 'Rust', hours: 200, icon: 'rust-plain' },
  { name: 'SQL', hours: 100, icon: 'sqlite-plain' },
  { name: 'TypeScript', hours: 100, icon: 'typescript-plain' },
];

interface Course {
  name: string;
  hours: number;
  description: string;
  completionDate: Date;
  link: string;
  certificate: string;
}

const COURSES: Course[] = [
  {
    name: 'Angular - The Complete Guide',
    hours: 36.5,
    description:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit necessitatibus adipisci, ad alias',
    completionDate: new Date(2023, 9, 20),
    link: 'https://www.udemy.com/course/the-complete-guide-to-angular-2',
    certificate: 'http://ude.my/UC-dc84732b-8f14-4246-beab-ef4fd2136fd2',
  },
];

@Component({
  selector: 'app-education',
  standalone: true,
  imports: [
    CommonModule,
    NgbNavModule,
    NgbPaginationModule,
    NgbProgressbarModule,
    NgbRatingModule,
    TimelineComponent,
  ],
  templateUrl: './education.component.html',
  styleUrls: ['./education.component.scss'],
})
export class EducationComponent {
  education = EDUCATION.sort(
    (a, b) => b.startDate.getTime() - a.startDate.getTime()
  );
  languages = LANGUAGES.sort((a, b) => b.proficiency - a.proficiency);
  programmingLanguages = PROGRAMMING_LANGUAGES.sort(
    (a, b) => b.hours - a.hours
  );
  courses = COURSES.sort(
    (a, b) => b.completionDate.getTime() - a.completionDate.getTime()
  );
  page = 1;
  pageSize = 8;
  languageSize = PROGRAMMING_LANGUAGES.length;

  maxProgrammingHours = this.getMaxProgrammingHours();
  maxProficiency = LanguageProficiency.Native;

  constructor() {
    this.refreshLanguages();
  }

  refreshLanguages() {
    this.programmingLanguages = PROGRAMMING_LANGUAGES.map((language, i) => ({
      id: i + 1,
      ...language,
    })).slice(
      (this.page - 1) * this.pageSize,
      (this.page - 1) * this.pageSize + this.pageSize
    );
  }

  getProficiencyName(proficiency: LanguageProficiency): string {
    return LanguageProficiency[proficiency];
  }

  private getMaxProgrammingHours(): number {
    return Math.max(...PROGRAMMING_LANGUAGES.map((l) => l.hours));
  }
}
