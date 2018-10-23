import { Injectable, Output, EventEmitter } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../environments/environment.prod';
import { Ilce, ShowData } from './istasyon';
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
  @Output() sdDoldu = new EventEmitter();

  seciliIl: string = "Adana";
  ilce: Ilce[];
  sd: ShowData[];
  minNemEsik: number = 30;
  seciliGun: number = 1;


  getIlce(ilAd: string) {
    return this.http.get(environment.ilceService + ilAd + "&limit=100");
  }
  getIlceTahmin(merkezID: number) {
    return this.http.get(environment.tahminService + merkezID);
  }

  ilDegisti(evt) {
    this.ilDegis.emit(evt);
    this.getIlce(evt).subscribe(ilceler => this.ilce = ilceler as Ilce[]);
  }
  tarihDegisti(gun: number): void {
    //this.tarihDegis.emit(gun);
    this.seciliGun = gun;
    this.sd.forEach(sd => {
      sd.tarih=eval("sd.tarihGun" + this.seciliGun);
      sd.enDusuk = eval("sd.enDusukGun" + this.seciliGun);
      sd.enDusukNem = eval("sd.enDusukNemGun" + this.seciliGun);
      sd.enYuksek = eval("sd.enYuksekGun" + this.seciliGun);
      sd.enYuksekNem = eval("sd.enYuksekNemGun" + this.seciliGun);
      sd.hadise = eval("sd.hadiseGun" + this.seciliGun);
      sd.ruzgarHiz = eval("sd.ruzgarHizGun" + this.seciliGun);
      sd.ruzgarYon = eval("sd.ruzgarYonGun" + this.seciliGun);
    })
    this.minNemDegis.emit(this.minNemEsik);
  }

  minNemDegisti(minNem: number): void {
    this.minNemDegis.emit(minNem);
    this.minNemEsik = minNem;
  }

  SdDoldur(il: string) {
    this.sd = [];
    this.getIlce(il).subscribe(ilceler => {
      this.ilceVeTahmin(ilceler as Ilce[]);
      this.sdDoldu.emit(this.sd);
      this.minNemDegis.emit(this.minNemEsik);
    });
  }


  ilceVeTahmin(ilceler: Ilce[]): void {
    ilceler.forEach(ilce => {


      this.getIlceTahmin(ilce.merkezId).subscribe(
        tahmin => {
          if (tahmin[0] != undefined) {
            var sd1: ShowData = new ShowData();
            sd1.il = ilce.il;
            sd1.ilce = ilce.ilce;
            //tarihGun:Date;

            sd1.tarihGun1 = tahmin[0].tarihGun1 as Date;
            sd1.tarihGun2 = tahmin[0].tarihGun2 as Date;
            sd1.tarihGun3 = tahmin[0].tarihGun3 as Date;
            sd1.tarihGun4 = tahmin[0].tarihGun4 as Date;
            sd1.tarihGun5 = tahmin[0].tarihGun5 as Date;
            sd1.enDusukGun1 = tahmin[0].enDusukGun1;
            sd1.enDusukGun2 = tahmin[0].enDusukGun2;
            sd1.enDusukGun3 = tahmin[0].enDusukGun3;
            sd1.enDusukGun4 = tahmin[0].enDusukGun4;
            sd1.enDusukGun5 = tahmin[0].enDusukGun5;
            sd1.enDusukNemGun1 = tahmin[0].enDusukNemGun1;
            sd1.enDusukNemGun2 = tahmin[0].enDusukNemGun2;
            sd1.enDusukNemGun3 = tahmin[0].enDusukNemGun3;
            sd1.enDusukNemGun4 = tahmin[0].enDusukNemGun4;
            sd1.enDusukNemGun5 = tahmin[0].enDusukNemGun5;
            sd1.enYuksekGun1 = tahmin[0].enYuksekGun1;
            sd1.enYuksekGun2 = tahmin[0].enYuksekGun2;
            sd1.enYuksekGun3 = tahmin[0].enYuksekGun3;
            sd1.enYuksekGun4 = tahmin[0].enYuksekGun4;
            sd1.enYuksekGun5 = tahmin[0].enYuksekGun5;
            sd1.enYuksekNemGun1 = tahmin[0].enYuksekNemGun1;
            sd1.enYuksekNemGun2 = tahmin[0].enYuksekNemGun2;
            sd1.enYuksekNemGun3 = tahmin[0].enYuksekNemGun3;
            sd1.enYuksekNemGun4 = tahmin[0].enYuksekNemGun4;
            sd1.enYuksekNemGun5 = tahmin[0].enYuksekNemGun5;
            sd1.hadiseGun1 = tahmin[0].hadiseGun1;
            sd1.hadiseGun2 = tahmin[0].hadiseGun2;
            sd1.hadiseGun3 = tahmin[0].hadiseGun3;
            sd1.hadiseGun4 = tahmin[0].hadiseGun4;
            sd1.hadiseGun5 = tahmin[0].hadiseGun5;
            sd1.ruzgarHizGun1 = tahmin[0].ruzgarHizGun1;
            sd1.ruzgarHizGun2 = tahmin[0].ruzgarHizGun2;
            sd1.ruzgarHizGun3 = tahmin[0].ruzgarHizGun3;
            sd1.ruzgarHizGun4 = tahmin[0].ruzgarHizGun4;
            sd1.ruzgarHizGun5 = tahmin[0].ruzgarHizGun5;
            sd1.ruzgarYonGun1 = tahmin[0].ruzgarYonGun1;
            sd1.ruzgarYonGun2 = tahmin[0].ruzgarYonGun2;
            sd1.ruzgarYonGun3 = tahmin[0].ruzgarYonGun3;
            sd1.ruzgarYonGun4 = tahmin[0].ruzgarYonGun4;
            sd1.ruzgarYonGun5 = tahmin[0].ruzgarYonGun5;
            sd1.tarih=eval("sd1.tarihGun" + this.seciliGun);
            sd1.enDusuk = eval("sd1.enDusukGun" + this.seciliGun);
            sd1.enDusukNem = eval("sd1.enDusukNemGun" + this.seciliGun);
            sd1.enYuksek = eval("sd1.enYuksekGun" + this.seciliGun);
            sd1.enYuksekNem = eval("sd1.enYuksekNemGun" + this.seciliGun);
            sd1.hadise = eval("sd1.hadiseGun" + this.seciliGun);
            sd1.ruzgarHiz = eval("sd1.ruzgarHizGun" + this.seciliGun);
            sd1.ruzgarYon = eval("sd1.ruzgarYonGun" + this.seciliGun);
            this.sd.push(sd1);
          }
        })
    });
  }

}
