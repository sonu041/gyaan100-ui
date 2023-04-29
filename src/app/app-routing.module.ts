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
import { ContactsComponent } from './contacts/contacts.component';
import { ContactAddEditComponent } from './contacts/contact-add-edit.component';
import { ContactViewComponent } from './contacts/contact-view.component';
import { ContactDeleteComponent } from './contacts/contact-delete.component';
import { RcasComponent } from './rca/rcas.component';
import { RcaAddEditComponent } from './rca/rca-add-edit.component';
import { RcaViewComponent } from './rca/rca-view.component';
import { RcaDeleteComponent } from './rca/rca-delete.component';
import { TemplatesComponent } from './templates/templates.component';
import { TemplateAddEditComponent } from './templates/template-add-edit.component';
import { TemplateViewComponent } from './templates/template-view.component';
import { TemplateDeleteComponent } from './templates/template-delete.component';

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
  { path: 'contacts', component: ContactsComponent },
  { path: 'contacts/add', component: ContactAddEditComponent },
  { path: 'contacts/view/:id', component: ContactViewComponent },
  { path: 'contacts/edit/:id', component: ContactAddEditComponent },
  { path: 'contacts/delete/:id', component: ContactDeleteComponent },
  { path: 'templates', component: TemplatesComponent },
  { path: 'templates/add', component: TemplateAddEditComponent },
  { path: 'templates/view/:id', component: TemplateViewComponent },
  { path: 'templates/edit/:id', component: TemplateAddEditComponent },
  { path: 'templates/delete/:id', component: TemplateDeleteComponent },
  { path: 'rca', component: RcasComponent },
  { path: 'rca/add', component: RcaAddEditComponent },
  { path: 'rca/view/:id', component: RcaViewComponent },
  { path: 'rca/edit/:id', component: RcaAddEditComponent },
  { path: 'rca/delete/:id', component: RcaDeleteComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
