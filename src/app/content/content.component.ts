import { Component, OnInit, Input } from '@angular/core';
import { DataService } from '../data.service';
import { ShowData, Ilce } from '../istasyon';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.css']
})
export class ContentComponent implements OnInit {
  
  ilceler:Ilce[];
  sd:ShowData[]=[];
  sdFiltered:ShowData[];
  //i:number=1;
  constructor(private dataService: DataService) { }

  ngOnInit() {
    this.dataService.SdDoldur(this.dataService.seciliIl);
    this.dataService.ilDegis.subscribe(il=>this.dataService.SdDoldur(il));
    this.dataService.sdDoldu.subscribe(sd=>this.sd=sd);
    this.dataService.minNemDegis.subscribe(s=>this.sdFiltered=this.sd.filter(el=>el.enDusukNem<=s));
  }  
}
