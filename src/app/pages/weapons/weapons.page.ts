import { Component, OnInit, ViewChild } from '@angular/core';
import { DataService } from 'src/app/services/data.service';
import { Observable } from 'rxjs';
import { IonList } from '@ionic/angular';

@Component({
  selector: 'app-weapons',
  templateUrl: './weapons.page.html',
  styleUrls: ['./weapons.page.scss'],
})
export class WeaponsPage implements OnInit {


  //llamar a cualquier metodo de la lista

  @ViewChild('lista') lista: IonList;
  
  armas: Observable <any>;

  constructor(private dataService:DataService) { }

  ngOnInit() {

    //  this.armas=this.dataService.getWeapon();
    this.dataService.getWeapon()
    .subscribe(console.log);
    


  }


}
