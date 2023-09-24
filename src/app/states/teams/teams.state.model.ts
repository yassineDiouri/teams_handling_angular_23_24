import { Team } from '../../models/teams/team';

export interface TeamsStateModel {
  teams: Team[];
}

export const TEAMS_STATE_MODEL_DEFAULT: TeamsStateModel = {
  teams: [],
};
