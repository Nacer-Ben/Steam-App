import {Component, OnInit, ChangeDetectionStrategy} from '@angular/core';
import {GetDataService} from "../get-data.service";
import {FavorisService} from "../favoris.service";


@Component({
  selector: 'app-jeu',
  templateUrl: './jeu.component.html',
  styleUrls: ['./jeu.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,

})
export class JeuComponent implements OnInit {
  page: number = 1;
  games: any = "";
  cats: any = "";
  gameFav: any = "";
  search: any = "";
  searchResult: any = "";
  searchCatResult: any = "";


  constructor(private dataService: GetDataService, private favService: FavorisService) {
  }

  ngOnInit() {
  //Recuperation des donnees jeux
    this.games = this.dataService.getData();
  //Recuperation des donnees categories
    this.cats = this.dataService.getCat();
  //Recuperation des jeux en favoris
    this.gameFav = this.favService.getGameFav();
  }

// Traitement de la recherche
  searchGame(event) {
    event.preventDefault();
    if (this.search == "") return;
    let searchTerm = this.search;
    this.searchResult = [];
  //Verification: est-ce que la recherche correspond à un jeu
    this.games.forEach((jeu, i) => {
      console.log('Dans la boucle jeux');
      if (jeu.name.toLowerCase().indexOf(searchTerm.toLowerCase()) >= 0) {
        console.log("Oui c'est bon ! -- JEU ");
        let id = jeu.id;
        let idFinale: number = parseInt(id) - 1;
        this.searchResult.push(this.games[idFinale % this.games.length]);
        this.search = "";
        return false;
      }
    });

  // Verification: Est-ce que la recherche correspond à une categorie
    this.searchCatResult = [];
    this.cats.forEach((cat, i) => {
      console.log('Dans la boucle categorie');
      if (cat.name.toLowerCase().indexOf(searchTerm.toLowerCase()) >= 0) {
        console.log("Oui c'est bon ! -- CAT");
        let idCat = cat.id;

        this.games.forEach((jeu, i) => {
          console.log('Entrée boucle jeu par catégorie');
          let idRef = idCat;
          if (jeu.genres == idRef) {
            console.log("FINAL !");
            let id = jeu.id;
            let idIndex = id - 1;

            this.searchCatResult.push(this.games[idIndex]);
            this.search = "";
          }
        });
        return false;
      }
    });

  }

//Recuperation: On recupere l'ID de la categorie par son nom, afin de l'utiliser avec l'array des jeux

  searchCat() {
    if (this.search == "") return;
    let searchTerm = this.search;
    this.searchCatResult = [];

    this.cats.forEach((cat, j) => {
      console.log('Entré boucle afficher jeu/cat');
      if (cat.name.toLowerCase().indexOf(searchTerm.toLowerCase()) >= 0) {
        let id = cat.id;
        let idFinal: number = parseInt(id) - 1;

        this.searchCatResult.push(this.cats[idFinal]);
        this.search = "";
      }
    });
  }

  addFav(game) {
  //Ajout des jeux favoris dans le LocalStorage via le service favService
    this.favService.addGameFav(game);
    this.gameFav = this.favService.getGameFav();
  }

  deleteGameFav(game) {
  //Suppresion des jeux favoris dans le LocalStorage via le service favService
    this.favService.deleteGameFav(game);
    this.gameFav = this.favService.getGameFav();
  }

  gameOnFav(game) {
  //Verification: Est-ce que le jeu est dans les favoris du LocalStorage
    let test = game.name;
    for (var i = 0, len = this.gameFav.length; i < len; i++) {
      if (this.gameFav[i].name == test) {
        console.log('good');
        return true;
      }
    }

  }

}
