import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { MDBBootstrapModule } from 'angular-bootstrap-md';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './modules/navbar/navbar.component';
import { FooterComponent } from './modules/footer/footer.component';
import { HomeLinkComponent } from './modules/home-link/home-link.component';
import { SocialLinksComponent } from './modules/social-links/social-links.component';
import { JumbotronComponent } from './modules/jumbotron/jumbotron.component';
import { ProfileComponent } from './modules/sections/profile/profile.component';
import { ExperienceComponent } from './modules/sections/experience/experience.component';
import { SkillsComponent } from './modules/sections/skills/skills.component';
import { EducationComponent } from './modules/sections/education/education.component';
import { ProjectsComponent } from './modules/sections/projects/projects.component';

@NgModule({
    declarations: [
        AppComponent,
        NavbarComponent,
        FooterComponent,
        HomeLinkComponent,
        SocialLinksComponent,
        JumbotronComponent,
        ProfileComponent,
        ExperienceComponent,
        SkillsComponent,
        EducationComponent,
        ProjectsComponent
    ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        HttpClientModule,
        MDBBootstrapModule.forRoot()
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule { }
