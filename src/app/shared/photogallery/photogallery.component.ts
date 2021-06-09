import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-photogallery',
  templateUrl: './photogallery.component.html',
  styleUrls: ['./photogallery.component.css']
})
export class PhotogalleryComponent implements OnInit {

  paths : String[] =
  [
    "../assets/images/invest2.jpg",
    "../assets/images/invest2.jpg",
    "../assets/images/invest2.jpg",
    "../assets/images/invest2.jpg",
    "../assets/images/invest2.jpg",
    "../assets/images/invest2.jpg",
    "../assets/images/invest2.jpg",
    "../assets/images/invest2.jpg",
    "../assets/images/invest2.jpg",
    "../assets/images/invest2.jpg",
    "../assets/images/invest2.jpg",
    "../assets/images/invest2.jpg",
    "../assets/images/invest2.jpg",
    "../assets/images/invest2.jpg"
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
