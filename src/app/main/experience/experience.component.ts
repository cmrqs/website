import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { NgbCarouselModule, NgbNavModule } from '@ng-bootstrap/ng-bootstrap';

import {
  TimelineComponent,
  TimelineEntry,
} from 'src/app/shared/timeline/timeline.component';

interface CarouselItem {
  title: string;
  description: string;
  link: string;
  imgSrc: string;
  releaseDate?: Date;
}

const EXPERIENCE: TimelineEntry[] = [
  {
    icon: 'star-fill',
    title: 'Nelogica',
    subtitle: 'Backend Developer',
    description:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit necessitatibus adipisci, ad alias',
    startDate: new Date(2022, 5),
  },
  {
    icon: 'star-fill',
    title: 'MC1',
    subtitle: 'Programmer Analyst',
    description:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit necessitatibus adipisci, ad alias',
    startDate: new Date(2020, 0),
    endDate: new Date(2022, 5),
  },
];

const GAMES: CarouselItem[] = [
  {
    title: 'Welcome to Uni',
    description: '',
    link: '',
    imgSrc: '',
  },
  {
    title: 'JumonGO',
    description: '',
    link: '',
    imgSrc: 'assets/img/jumongo.jpg',
    releaseDate: new Date(),
  },
];

const WEBSITES: CarouselItem[] = [
  {
    title: 'Portfolio',
    description: '',
    link: '',
    imgSrc: '',
    releaseDate: new Date(),
  },
  {
    title: 'DASMind',
    description: '',
    link: '',
    imgSrc: '',
    releaseDate: new Date(),
  },
  {
    title: 'Gamux',
    description: '',
    link: '',
    imgSrc: '',
    releaseDate: new Date(),
  },
];

@Component({
  selector: 'app-experience',
  standalone: true,
  imports: [CommonModule, NgbCarouselModule, NgbNavModule, TimelineComponent],
  templateUrl: './experience.component.html',
  styleUrls: ['./experience.component.scss'],
})
export class ExperienceComponent {
  experience = EXPERIENCE;
  games = GAMES;
  websites = WEBSITES;
}
