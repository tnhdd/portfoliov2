import { Component } from '@angular/core';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [],
  templateUrl: './about.component.html',
  styleUrl: './about.component.css'
})
export class AboutComponent {

  downloadCV(language: string) {
    let fileName = '';
    if (language === 'spanish') {
      fileName = 'CV-ES-Tuan Anh Do Duy.pdf';  
    } else if (language === 'english') {
      fileName = 'CV-EN-Tuan Anh Do Duy.pdf';  
    }

    const link = document.createElement('a');
    link.href = `assets/${fileName}`;  // Assuming files are in the 'assets' folder
    link.download = fileName;
    link.click();
  }
}
