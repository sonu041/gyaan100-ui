import { HTTP_INTERCEPTORS, HttpClient, HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { OAuthModule } from 'angular-oauth2-oidc';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { KnowledgesComponent } from './knowledges/knowledges.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { NavbarComponent } from './shared/navbar/navbar.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatDividerModule } from '@angular/material/divider';
import { MatListModule } from '@angular/material/list';
import { MatFormFieldModule } from '@angular/material/form-field'
import { MatSelectModule } from '@angular/material/select'
import { KnowledgeAddEditComponent } from './knowledges/knowledge-add-edit.component';
import { MatLabel } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { KnowledgeViewComponent } from './knowledges/knowledge-view.component';
import { KnowledgeDeleteComponent } from './knowledges/knowledge-delete.component';
import { ServersComponent } from './servers/servers.component';
import { ServerViewComponent } from './servers/server-view.component';
import { ServerAddEditComponent } from './servers/server-add-edit.component';
import { ContactsComponent } from './contacts/contacts.component';
import { ContactViewComponent } from './contacts/contact-view.component';
import { ContactAddEditComponent } from './contacts/contact-add-edit.component';
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
import { ServerDeleteComponent } from './servers/server-delete.component';
// import { QuillModule } from 'ngx-quill';

@NgModule({
  declarations: [
    AppComponent,
    KnowledgesComponent,
    KnowledgeAddEditComponent,
    KnowledgeDeleteComponent,
    KnowledgeViewComponent,
    DashboardComponent,
    NavbarComponent,
    ServersComponent,
    ServerViewComponent,
    ServerAddEditComponent,
    ServerDeleteComponent,
    ContactsComponent,
    ContactViewComponent,
    ContactAddEditComponent,
    ContactDeleteComponent,
    TemplatesComponent,
    TemplateAddEditComponent,
    TemplateViewComponent,
    TemplateDeleteComponent,
    RcasComponent,
    RcaAddEditComponent,
    RcaViewComponent,
    RcaDeleteComponent,
    LogoutComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    OAuthModule.forRoot({
      resourceServer: {
        allowedUrls: ['http://localhost:8080/api'],
        sendAccessToken:true
      }
    }),
    BrowserAnimationsModule,
    MatToolbarModule,
    MatSidenavModule,
    MatButtonModule,
    MatIconModule,
    MatDividerModule,
    MatListModule,
    MatFormFieldModule,
    MatSelectModule,
    MatInputModule,
    FormsModule,
    ReactiveFormsModule,
    MatSnackBarModule,
    // QuillModule.forRoot()
  ],
  providers: [    
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
