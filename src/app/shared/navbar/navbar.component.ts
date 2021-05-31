import { Component, EventEmitter, HostListener, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  @Output()
  buttonClick: EventEmitter<String> = new EventEmitter<String>();

  

  constructor() { }

  ngOnInit(): void {
  }
clickButton(language: String){
  this.buttonClick.emit(language);
}

@HostListener('window:scroll', ['$event'])

onWindowScroll() {
    let element = document.querySelector('.navbar') as HTMLElement;
    let dropdown = document.querySelector('.dropdown-menu') as HTMLElement;
    if (window.pageYOffset > element.clientHeight) {
      element.classList.add('navbar-inverse');
      element.classList.add('sticky-top');
      dropdown.classList.add('navbar-inverse');
    } else {
      element.classList.remove('navbar-inverse');
      dropdown.classList.remove('navbar-inverse');
      element.classList.remove('sticky-top');
    }
  }

}


