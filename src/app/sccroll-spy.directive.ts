import { Directive, ElementRef, HostListener,Renderer2 } from '@angular/core';

@Directive({
  selector: '[appSccrollSpy]',
  standalone: true
})

export class SccrollSpyDirective {

  constructor(private elementRef: ElementRef, private renderer: Renderer2) { }

  @HostListener('window:scroll',[])
  onWindowScroll(){
    const sections = document.querySelectorAll('.section')
    const navbarLinks = document.querySelectorAll('.nav-link')

    let currentSectionId = ''

    sections.forEach(section => {
      const sectionTop = section.getBoundingClientRect().top
      const offset = window.innerHeight / 2;
      const sectionElement = section as HTMLElement;

      if (sectionTop <= offset && sectionTop >= -sectionElement.offsetHeight) {
        currentSectionId = section.getAttribute('id') || '';
      }
    })

    navbarLinks.forEach(link => {
      const href = link.getAttribute('href') || '';
      if (href.includes(`#${currentSectionId}`)) {
        this.renderer.addClass(link, 'active');
      } else {
        this.renderer.removeClass(link, 'active');
      }
    })
  }

}
