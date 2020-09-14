import { GithhubFollowersService } from './services/githhub-followers.service';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule, ErrorHandler } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ContactFormComponent } from './contact-form(template driven)/contact-form.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ViewModesComponent } from './view-modes(ngSwitch eg)/view-modes.component';
import { SignupFormComponent } from './signup-form(reactive form)/signup-form.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { NewCourseFormComponent } from './new-course-form(form array)/new-course-form.component';
import { ChangePasswordComponent } from './change-password(form builder exercise)/change-password.component';
import { TitleCasePipe } from './pipes/title-case.pipe';
import { InputFormatDirective } from './directives/input-format.directive';
import { PostComponentComponent } from './post-component(consuming HTTP services)/post-component.component';
import { PostService } from './services/post.service';
import { AppErrorHandler } from './common/app-error-handler';
import { GithhubFollowersComponent } from './githhub-followers(consuming HTTP services)/githhub-followers.component';
import { NavbarComponent } from './navbar/navbar.component';
import { HomeComponent } from './home/home.component';
import { GithubProfileComponent } from './github-profile/github-profile.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [
    AppComponent,
    ContactFormComponent,
    ViewModesComponent,
    SignupFormComponent,
    NewCourseFormComponent,
    ChangePasswordComponent,
    TitleCasePipe,
    InputFormatDirective,
    PostComponentComponent,
    GithhubFollowersComponent,
    NavbarComponent,
    HomeComponent,
    GithubProfileComponent,
    NotFoundComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    NgbModule,
    ReactiveFormsModule,
    HttpClientModule,
    RouterModule.forRoot([
      { path: '', component: HomeComponent },
      { path: 'followers/:username/:id', component: GithubProfileComponent },
      { path: 'followers', component: GithhubFollowersComponent },
      { path: 'posts', component: PostComponentComponent },
      { path: '**', component: NotFoundComponent },
    ]),
  ],
  providers: [
    PostService,
    GithhubFollowersService,
    { provide: ErrorHandler, useClass: AppErrorHandler },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
