import { Injectable } from '@angular/core';
import { Action, Selector, State, StateContext } from '@ngxs/store';
import {
  TEAMS_STATE_MODEL_DEFAULT,
  TeamsStateModel,
} from './teams.state.model';
import { Team } from '../../models/teams/team';
import { Teams } from './teams.state.actions';
import { TeamsService } from '../../services/teams/teams.service';

@State<TeamsStateModel>({
  name: 'teams',
  defaults: TEAMS_STATE_MODEL_DEFAULT,
})
@Injectable()
export class TeamsState {
  constructor(private readonly teamsService: TeamsService) {}

  @Selector()
  static teams(state: TeamsStateModel): Team[] {
    return state.teams;
  }

  @Action(Teams.FetchAll)
  fetchAll(ctx: StateContext<TeamsStateModel>) {
    this.teamsService
      .fetchAll()
      .subscribe((teams) => ctx.patchState({ teams }));
  }
}
