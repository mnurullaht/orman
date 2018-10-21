import { Component, OnInit, Input } from '@angular/core';
import { DataService } from '../data.service';
import { ShowData, Ilce, Tahmin } from '../istasyon';
import { setDefaultService } from 'selenium-webdriver/opera';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.css']
})
export class ContentComponent implements OnInit {
  
  ilceler:Ilce[];
  sd:ShowData[];
  i:number=0;
  constructor(private dataService: DataService) { }

  ngOnInit() {
    this.dataService.getIlce(this.dataService.seciliIl).subscribe(
      ilceler=>{
      this.ilceler=ilceler as Ilce[];
        this.ilceler.forEach(element => {
          this.ilceVeTahmin(element);
        });        
      });   
  }

  ilceVeTahmin(ilce:Ilce):void {
    this.dataService.getIlceTahmin(ilce.merkezId).subscribe(
      tahmin=>
      {
        
        if(tahmin[0]!=undefined){
          var sd1:ShowData=new ShowData();
          console.log(sd1);
          // sd1.il=ilce.il;
          // sd1.ilce=ilce.ilce;
          
          this.sd[this.i]=new ShowData();
          this.sd[this.i].il=ilce.il;
          this.sd[this.i].ilce=ilce.ilce;
          //this.sd.push(sd1);
          this.i++;
          console.log(this.sd);
          console.log(ilce.il+" "+ilce.ilce  +" "+ tahmin[0].enDusukGun1);
        }
      })
    
  }
}
