import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.page.html',
  styleUrls: ['./inicio.page.scss'],
})
export class InicioPage implements OnInit {


   componentes: Componentes[] = [
    {
      icon:'logo-game-controller-a',
      name:'challenges',
      redirecTo:'/challenges'
    },
    {
      icon:'logo-reddit',
      name:'usuarios',
      redirecTo:'/usuarios'
    },
    {
      icon:'flame',
      name:'weapons',
      redirecTo:'/weapons'
    }




   ];

  constructor() { }

  ngOnInit() {
  }

}
interface Componentes{

   icon: string;
   name: string;
   redirecTo: string;
}