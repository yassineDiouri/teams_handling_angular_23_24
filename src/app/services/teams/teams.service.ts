import { Injectable } from '@angular/core';
import { Team } from '../../models/teams/team';
import { TEAMS } from '../../mocks/teams/teams.mocks';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class TeamsService {
  constructor() {}

  fetchAll(): Observable<Team[]> {
    return of(TEAMS);
  }
}
