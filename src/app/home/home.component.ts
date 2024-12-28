import { Component } from '@angular/core';
import { AboutComponent } from "../about/about.component";
import { ExperiencesComponent } from "../experiences/experiences.component";
import { ProjectsComponent } from "../projects/projects.component";
import { ContactsComponent } from "../contacts/contacts.component";
import { SccrollSpyDirective } from '../sccroll-spy.directive';
@Component({
  selector: 'app-home',
  standalone: true,
  imports: [AboutComponent, ExperiencesComponent, ProjectsComponent, ContactsComponent, SccrollSpyDirective],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

}
