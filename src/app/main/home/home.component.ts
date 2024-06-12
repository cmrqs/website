import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { NgbScrollSpyService } from '@ng-bootstrap/ng-bootstrap';

import Typewriter from 't-writer.js';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule],
  providers: [NgbScrollSpyService],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  constructor(public scrollSpy: NgbScrollSpyService) {}

  ngOnInit(): void {
    queueMicrotask(() => {
      this.scrollSpy.start({
        fragments: ['contact'],
        threshold: 0.5,
      });
    });

    const introductionElement = document.getElementById('introduction');
    const nameElement = document.getElementById('name');
    const titleElement = document.getElementById('title');
    const descriptionElement = document.getElementById('description');

    const introductionTypewriter = new Typewriter(introductionElement, {
      typeSpeed: 'random',
      typeSpeedMin: 20,
      typeSpeedMax: 60,
      typeColor: 'text-body',
      cursorColor: 'text-body',
    });
    const nameTypewriter = new Typewriter(nameElement, {
      typeSpeed: 'random',
      typeColor: 'text-body',
      cursorColor: 'text-body',
    });
    const titleTypewriter = new Typewriter(titleElement, {
      loop: true,
      typeSpeed: 'random',
      typeSpeedMin: 40,
      typeSpeedMax: 60,
      deleteSpeed: 'random',
      typeColor: 'text-body',
      cursorColor: 'text-body',
    });
    const descriptionTypewriter = new Typewriter(descriptionElement, {
      typeSpeed: 'random',
      typeSpeedMin: 5,
      typeSpeedMax: 25,
      typeColor: 'text-body',
      cursorColor: 'text-body',
    });

    introductionTypewriter
      .type('Welcome! My name is')
      .rest(250)
      .removeCursor()
      .start();

    nameTypewriter
      .removeCursor()
      .rest(1500)
      .addCursor()
      .rest(200)
      .type('Carlos Marques')
      .rest(500)
      .removeCursor()
      .start();

    descriptionTypewriter
      .removeCursor()
      .rest(7000)
      .addCursor()
      .rest(300)
      .type(
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam dapibus quam vitae malesuada dapibus. Nulla a hendrerit nibh, vel placerat leo. Duis in mauris ac urna ultricies dictum ut id sapien.'
      )
      .rest(500)
      .removeCursor()
      .start();

    titleTypewriter
      .removeCursor()
      .rest(4000)
      .addCursor()
      .rest(200)
      .type("and I'm a computer scientist")
      .rest(500)
      .removeCursor()
      .rest(9000)
      .addCursor()
      .rest(300)
      .remove(18)
      .rest(200)
      .type('game developer')
      .rest(500)
      .removeCursor()
      .rest(this.getRandomInterval())
      .addCursor()
      .rest(300)
      .remove(14)
      .rest(200)
      .type('software developer')
      .rest(500)
      .removeCursor()
      .rest(this.getRandomInterval())
      .addCursor()
      .rest(300)
      .remove(18)
      .rest(200)
      .type('backend developer')
      .rest(500)
      .removeCursor()
      .rest(this.getRandomInterval())
      .addCursor()
      .rest(300)
      .remove(17)
      .rest(200)
      .type('cat lover')
      .rest(500)
      .removeCursor()
      .rest(this.getRandomInterval())
      .addCursor()
      .rest(300)
      .remove(14)
      .rest(200)
      .type(' use Arch, btw')
      .rest(500)
      .removeCursor()
      .rest(this.getRandomInterval())
      .addCursor()
      .rest(300)
      .clear()
      .start();
  }

  getRandomInterval(min = 3500, max = 6500): number {
    return Math.floor(Math.random() * (max - min + 1) + min);
  }
}
