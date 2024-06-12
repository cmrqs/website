import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

export interface ImageCardEntry {
  src: string;
  url: string;
  title: string;
  text: string;
  releaseDate?: Date;
}

@Component({
  selector: 'app-image-card',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './image-card.component.html',
  styleUrl: './image-card.component.scss',
})
export class ImageCardComponent {
  @Input() entry!: ImageCardEntry;

  size = 250;
}
