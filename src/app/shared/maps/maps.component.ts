import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-maps',
  templateUrl: './maps.component.html',
  styleUrls: ['./maps.component.css']
})
export class MapsComponent implements OnInit {

  title = 'Orient Express';
  lat = 41.015137;
  lng =  28.979530;

  constructor() { }

  ngOnInit(): void {
  }

}
