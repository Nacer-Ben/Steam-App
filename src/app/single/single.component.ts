import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {GetDataService} from "../get-data.service";

@Component({
  selector: 'app-single',
  templateUrl: './single.component.html',
  styleUrls: ['./single.component.css']
})
export class SingleComponent implements OnInit {

  games: any;
  id: any;
  test: any;

  urlScreen1: any;
  urlScreen2: any;

  urlCover: any;
  idFinal: any;

  constructor(private dataService: GetDataService, private route: ActivatedRoute) {
  }


  ngOnInit() {
    //Recuperation de l'id donnee en parametre dans l'url
    this.id = this.route.snapshot.params['gameId'];
    //Recuperation des donnees jeux
    this.games = this.dataService.getData();
    //Preparation de l'id afin d'afficher les donnees du jeu
    this.idFinal = this.id - 1;

    //Recuperation des donnees du jeu en question
    //Aucune inspiration pour cette variable...
    this.test = this.games[this.idFinal];

    //Preparation de variable pour recuperer plus facilement ses images
    this.urlScreen1 = this.test.screenshots[0].url;
    this.urlScreen2 = this.test.screenshots[1].url;
    this.urlCover = this.test.cover.url;

  }

}
