import { Component, OnInit } from '@angular/core';
import {ContentComponent} from '../../content/content.component';
import { DataService } from '../../data.service';

@Component({
  selector: 'app-min-nem',
  templateUrl: './min-nem.component.html',
  styleUrls: ['./min-nem.component.css']
})
export class MinNemComponent implements OnInit {

  constructor(private ds:DataService) { }

  content:ContentComponent;

  ngOnInit() {
  }

  NemDegisti(evt){
    this.ds.minNemDegisti(evt.target.value);
    console.log(evt.target.value);
  }
}
