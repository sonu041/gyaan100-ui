import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { KnowledgesComponent } from './knowledges/knowledges.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { KnowledgeAddEditComponent } from './knowledges/knowledge-add-edit.component';
import { KnowledgeViewComponent } from './knowledges/knowledge-view.component';
import { KnowledgeDeleteComponent } from './knowledges/knowledge-delete.component';
import { ServersComponent } from './servers/servers.component';
import { ServerViewComponent } from './servers/server-view.component';
import { ServerAddEditComponent } from './servers/server-add-edit.component';
import { ServerDeleteComponent } from './servers/server-delete.component';
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
import { LogoutComponent } from './logout/logout.component';

const routes: Routes = [
  // { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
  { path: 'logout', component: LogoutComponent },
  { path: 'dashboard', component: DashboardComponent },
  { path: 'knowledges', component: KnowledgesComponent },
  { path: 'knowledges/add', component: KnowledgeAddEditComponent },
  { path: 'knowledges/view/:id', component: KnowledgeViewComponent },
  { path: 'knowledges/edit/:id', component: KnowledgeAddEditComponent },
  { path: 'knowledges/delete/:id', component: KnowledgeDeleteComponent },
  { path: 'servers', component: ServersComponent },
  { path: 'servers/add', component: ServerAddEditComponent },
  { path: 'servers/view/:id', component: ServerViewComponent },
  { path: 'servers/edit/:id', component: ServerAddEditComponent },
  { path: 'servers/delete/:id', component: ServerDeleteComponent },
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
