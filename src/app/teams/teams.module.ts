import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TeamsRoutingModule } from './teams-routing.module';
import { TeamsComponent } from './teams.component';
import { TeamsTableComponent } from './components/teams-table/teams-table.component';
import { TeamsButtonsComponent } from './components/teams-buttons/teams-buttons.component';
import { NgxsModule } from '@ngxs/store';
import { TeamsState } from '../states/teams/teams.state';
import { TeamsEditionModalComponent } from './components/teams-edition-modal/teams-edition-modal.component';

@NgModule({
  declarations: [TeamsComponent, TeamsTableComponent, TeamsButtonsComponent, TeamsEditionModalComponent],
  imports: [CommonModule, TeamsRoutingModule, NgxsModule.forRoot([TeamsState])],
})
export class TeamsModule {}
