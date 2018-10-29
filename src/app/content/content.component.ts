import { Component, OnInit, Input } from '@angular/core';
import { DataService } from '../data.service';
import { ShowData, Ilce } from '../istasyon';
import { environment } from '../../environments/environment.prod';


@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.css']
})
export class ContentComponent implements OnInit {
  
  ilceler:Ilce[];
  sd:ShowData[]=[];
  sdFiltered:ShowData[];
  iconPath:string=environment.iconPath;
  rYonPath:string=environment.rYonIconPath;
  
  constructor(private dataService: DataService) { }

  ngOnInit() {
    this.dataService.SdDoldur(this.dataService.seciliIl);
    this.dataService.ilDegis.subscribe(il=>this.dataService.SdDoldur(il));
    this.dataService.sdDoldu.subscribe(sd=>this.sd=sd);
  }  
}
