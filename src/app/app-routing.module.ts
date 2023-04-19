import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { KnowledgesComponent } from './knowledges/knowledges.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { AddEditKnowledgeComponent } from './knowledges/add-edit-knowledge.component';

const routes: Routes = [
  // { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
  { path: 'dashboard', component: DashboardComponent },
  { path: 'knowledges', component: KnowledgesComponent },
  { path: 'knowledges/add', component: AddEditKnowledgeComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
