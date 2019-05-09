import { Component, OnInit, ViewChild } from '@angular/core';
import { Observable } from 'rxjs';
import { DataService } from '../../services/data.service';
import { listLazyRoutes } from '@angular/compiler/src/aot/lazy_routes';
import { IonList } from '@ionic/angular';

@Component({
  selector: 'app-usuarios',
  templateUrl: './usuarios.page.html',
  styleUrls: ['./usuarios.page.scss'],
})
export class UsuariosPage implements OnInit {

 //llamar a cualquier metodo de la lista

  @ViewChild('lista') lista: IonList;


  jugadores:Observable<any>;

  constructor(private dataService: DataService) { }

  ngOnInit() {

    this.jugadores=this.dataService.getUsers();
  // }
  // this.dataService.getUsers()
  //    .subscribe(console.log);
 }
}