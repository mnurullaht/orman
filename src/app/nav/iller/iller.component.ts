import { Component, OnInit } from '@angular/core';
import { DataService } from '../../data.service';

@Component({
  selector: 'app-iller',
  templateUrl: './iller.component.html',
  styleUrls: ['./iller.component.css']
})
export class IllerComponent implements OnInit {

  constructor(private ds:DataService) { }

  ngOnInit() {
    
  }
 
  ilChange(evt):void{
    //console.log(evt.target.value);
    this.ds.ilDegisti(evt.target.value);
    
  }
}
