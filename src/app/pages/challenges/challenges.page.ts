import { Component, OnInit } from '@angular/core';
import { DataService } from '../../services/data.service';
import { Observable } from 'rxjs';
import Challenges from '../../Challenges';

@Component({
  selector: 'app-challenges',
  templateUrl: './challenges.page.html',
  styleUrls: ['./challenges.page.scss'],
})
export class ChallengesPage implements OnInit {


  retos: Challenges[] ;

  constructor(private dataService : DataService) { }
  ngOnInit() {
    this.dataService
    .getChallenge()
    .subscribe((data: Challenges[]) => {
      this.retos = data;
      console.log(this.retos[0].language);
    });
  }

}
