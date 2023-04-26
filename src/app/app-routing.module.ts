import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { KnowledgesComponent } from './knowledges/knowledges.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { AddEditKnowledgeComponent } from './knowledges/add-edit-knowledge.component';
import { KnowledgeViewComponent } from './knowledges/knowledge-view.component';
import { DeleteKnowledgeComponent } from './knowledges/delete-knowledge.component';
import { ServersComponent } from './servers/servers.component';
import { ServerViewComponent } from './servers/server-view.component';
import { AddEditServerComponent } from './servers/add-edit-server.component';
import { DeleteServerComponent } from './servers/delete-server.component';

const routes: Routes = [
  // { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
  { path: 'dashboard', component: DashboardComponent },
  { path: 'knowledges', component: KnowledgesComponent },
  { path: 'knowledges/add', component: AddEditKnowledgeComponent },
  { path: 'knowledges/view/:id', component: KnowledgeViewComponent },
  { path: 'knowledges/edit/:id', component: AddEditKnowledgeComponent },
  { path: 'knowledges/delete/:id', component: DeleteKnowledgeComponent },
  { path: 'servers', component: ServersComponent },
  { path: 'servers/add', component: AddEditServerComponent },
  { path: 'servers/view/:id', component: ServerViewComponent },
  { path: 'servers/edit/:id', component: AddEditServerComponent },
  { path: 'servers/delete/:id', component: DeleteServerComponent },


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
