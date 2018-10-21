import { Component, OnInit } from '@angular/core';
import { DataService } from '../../data.service';

@Component({
  selector: 'app-gunler',
  templateUrl: './gunler.component.html',
  styleUrls: ['./gunler.component.css']
})
export class GunlerComponent implements OnInit {

  constructor(private ds:DataService) { }

  ngOnInit() {
  }

  tarihChange(gun:number){
    this.ds.tarihDegisti(gun);
  }

}
