import { Component, OnInit } from '@angular/core';
import {GetDataService} from "../get-data.service";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {


  games: any = "";
  urlImg: any = "";
  constructor(private dataService: GetDataService) { }

  ngOnInit() {
//Recuperation des donnees jeux
    this.games = this.dataService.getData();
//Preparation afin d'afficher les images
    this.urlImg = this.games

  }



}
