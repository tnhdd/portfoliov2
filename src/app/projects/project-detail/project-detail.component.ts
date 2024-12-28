import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-project-detail',
  templateUrl: './project-detail.component.html',
  styleUrls: ['./project-detail.component.css'],
})
export class ProjectDetailComponent implements OnInit {
  projectName: string = '';
  projectDescription: string = '';
  photos: string[] = [];
  currentPhotoIndex: number = 0;
  downloadLink: string = '';

  constructor(private route: ActivatedRoute, private http: HttpClient) {}

  ngOnInit(): void {
    // Get the project name from the route parameter
    this.projectName = this.route.snapshot.paramMap.get('projectName') || '';

    this.http.get<any[]>('/assets/projects.json').subscribe({
      next: (projects) => {
        console.log('Projects JSON:', projects);

        // Find the project matching the current name
        const project = projects.find((p) => p.name === this.projectName);
        if (project) {
          this.projectDescription = project.description.replace(/\n/g, '<br>');
          this.photos = project.photos.map((photo: any) => `assets/${photo}`); 
          this.downloadLink = project.downloadLink;
        } else {
          console.error('Project not found in JSON:', this.projectName);
        }
      },
      error: (err) => {
        console.error('Error fetching projects.json:', err);
      },
    });
    // Generate a list of photo URLs dynamically
    const photoCount = 3; // Adjust this to the number of photos per project
    this.photos = Array.from(
      { length: photoCount },
      (_, index) => `/${this.projectName}/photo${index + 1}.jpg`
    );
  }

  // Navigate to the previous photo
  previousPhoto(): void {
    if (this.currentPhotoIndex > 0) {
      this.currentPhotoIndex--;
    } else {
      this.currentPhotoIndex = this.photos.length - 1; // Loop to the last photo
    }
  }

  // Navigate to the next photo
  nextPhoto(): void {
    if (this.currentPhotoIndex < this.photos.length - 1) {
      this.currentPhotoIndex++;
    } else {
      this.currentPhotoIndex = 0; // Loop to the first photo
    }
  }
}
