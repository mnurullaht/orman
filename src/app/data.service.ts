import { Injectable, Output, EventEmitter } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../environments/environment.prod';
import { Ilce} from './istasyon';
// import { GunlerComponent } from './nav/gunler/gunler.component';
// import { IllerComponent } from './nav/iller/iller.component';
// import { MinNemComponent } from './nav/min-nem/min-nem.component';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private http: HttpClient) { }
  @Output() ilDegis = new EventEmitter<string>();
  @Output() tarihDegis = new EventEmitter<number>();
  @Output() minNemDegis = new EventEmitter<number>();

  seciliIl:string="Adana";
  ilce:Ilce[];
  minNemEsik:number=30;
  seciliGun:number=1; 
  
  getIlce(ilAd: string) {
    return this.http.get(environment.ilceService + ilAd + "&limit=100");
  }
  getIlceTahmin(merkezID: number) {
    return this.http.get(environment.tahminService + merkezID);
  }

  ilDegisti(evt) {
    //this.ilDegis.emit(evt.target.value);
    this.getIlce(evt).subscribe(ilceler =>this.ilce=ilceler as Ilce[]);
  }
  tarihDegisti(gun: number): void {
    //this.tarihDegis.emit(gun);
    this.seciliGun=gun;
  }

  minNemDegisti(minNem:number):void{
    //this.minNemDegis.emit(minNem);
    this.minNemEsik=minNem;
  }

}
