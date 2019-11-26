import { Injectable } from '@angular/core';
import { Hero } from './hero';
import { HEROES } from './mock-heroes';
import { Observable, of } from 'rxjs';
import { MessageService } from './message.service';

@Injectable({
  providedIn: 'root',
})
export class HeroService {
  // Service-in-service scenario
  // MessageService is injected into the property when HeroService is constructed
  constructor(private messageService: MessageService) { }

  getHeroes(): Observable<Hero[]> {
    // TODO: send the message _after_ fetching the HeroService
    this.messageService.add('HeroService: fetched heroes')
    return of(HEROES);
  }
}