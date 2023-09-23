import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TeamsRoutingModule } from './teams-routing.module';
import { TeamsComponent } from './teams.component';
import { TeamsTableComponent } from './components/teams-table/teams-table.component';
import { TeamsButtonsComponent } from './components/teams-buttons/teams-buttons.component';

@NgModule({
  declarations: [TeamsComponent, TeamsTableComponent, TeamsButtonsComponent],
  imports: [CommonModule, TeamsRoutingModule],
})
export class TeamsModule {}
