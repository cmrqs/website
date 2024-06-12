import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

export interface TimelineEntry {
  icon: string;
  title: string;
  subtitle: string;
  description: string;
  startDate: Date;
  endDate?: Date;
}

@Component({
  selector: 'app-timeline',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './timeline.component.html',
  styleUrl: './timeline.component.scss',
})
export class TimelineComponent {
  @Input() entries!: TimelineEntry[];
}
