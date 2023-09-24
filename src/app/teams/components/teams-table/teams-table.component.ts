import { Component } from '@angular/core';
import { Select, Store } from '@ngxs/store';
import { TeamsState } from '../../../states/teams/teams.state';
import { Observable } from 'rxjs';
import { Team } from '../../../models/teams/team';
import { Teams } from '../../../states/teams/teams.state.actions';

@Component({
  selector: 'app-teams-table',
  templateUrl: './teams-table.component.html',
  styleUrls: ['./teams-table.component.scss'],
})
export class TeamsTableComponent {
  @Select(TeamsState.teams)
  teams$!: Observable<Team[]>;

  constructor(private readonly store: Store) {
    this.store.dispatch(new Teams.FetchAll());
  }
}
