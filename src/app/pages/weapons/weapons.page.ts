import { Component, OnInit, ViewChild } from '@angular/core';
import { DataService } from 'src/app/services/data.service';
import { Observable } from 'rxjs';
import { IonList } from '@ionic/angular';
import Weapons from '../../Weapons';


@Component({
  selector: 'app-weapons',
  templateUrl: './weapons.page.html',
  styleUrls: ['./weapons.page.scss'],
})
export class WeaponsPage implements OnInit {


  //llamar a cualquier metodo de la lista

  @ViewChild('lista') lista: IonList;
  
  armas: Weapons[];


  constructor(private dataService:DataService) { }

  ngOnInit() {

     this.dataService.getWeapon().subscribe(
       (data)=> {
           console.log("armas", data);
           console.log("weapons", data.weapons);
          this.armas = data.weapons;
          
       }
     );
    // this.dataService.getWeapon()
    // .subscribe(console.log);
    


  }


}
