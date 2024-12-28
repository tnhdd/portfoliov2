import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.css',
})
export class ProjectsComponent {
  projects = [
    {
      name: 'Portfolio',
      description: 'Personal portfolio.'
    }, 
    {
      name: 'Chickey',
      description:
        'Chickey is 3D game for my final school project. This project was created with the Unity Game Engine, C#.',
    },
    {
      name: 'BarApp',
      description:
        'BarApp is an Android application that allows you to check the ingredients and steps to make cocktails and drinks.',
    },
  ];
  
}
