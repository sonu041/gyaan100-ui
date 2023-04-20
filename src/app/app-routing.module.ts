import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { KnowledgesComponent } from './knowledges/knowledges.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { AddEditKnowledgeComponent } from './knowledges/add-edit-knowledge.component';
import { KnowledgeViewComponent } from './knowledges/knowledge-view.component';
import { DeleteKnowledgeComponent } from './knowledges/delete-knowledge.component';

const routes: Routes = [
  // { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
  { path: 'dashboard', component: DashboardComponent },
  { path: 'knowledges', component: KnowledgesComponent },
  { path: 'knowledges/add', component: AddEditKnowledgeComponent },
  { path: 'knowledges/view/:id', component: KnowledgeViewComponent },
  { path: 'knowledges/edit/:id', component: AddEditKnowledgeComponent },
  { path: 'knowledges/delete/:id', component: DeleteKnowledgeComponent },


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
