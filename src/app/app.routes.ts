import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { ExperiencesComponent } from './experiences/experiences.component';
import { ProjectsComponent } from './projects/projects.component';
import { ContactsComponent } from './contacts/contacts.component';
import { ProjectDetailComponent } from './projects/project-detail/project-detail.component';

export const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'about', component: AboutComponent },
  { path: 'experiences', component: ExperiencesComponent },
  { path: 'projects', component: ProjectsComponent },
  { path: 'contacts', component: ContactsComponent },

  {path: 'project/:projectName', component: ProjectDetailComponent}
];
