import {Injectable} from '@angular/core';

const KEY: string = 'FAV';

@Injectable()
export class FavorisService {

  constructor() {

//Verification : Est-ce qu'une sauvegarde existe deja ?..
    if (localStorage.getItem(KEY) === null
      || localStorage.getItem(KEY) == undefined) {

//Creation d'un array afin de preparer la futur sauvegarde
      console.log("Aucun jeu trouvé, création d'un emplacement.");
      var favoris = [];

      localStorage.setItem(KEY, JSON.stringify(favoris));
    } else {

      console.log("Vous possédez des déjà des jeux");
    }

  }

//Recuperation de la sauvegarde du LocalStorage
  getGameFav() {
    return JSON.parse(localStorage.getItem(KEY));
  }

//Sauvegarde du tableau favoris dans le LocalStorage
  saveGameFav(favoris) {
    localStorage.setItem(KEY, JSON.stringify(favoris));
  }

//Suppresion d'un jeu des favoris puis sauvegarde des modifs dans le LocalStorage
  deleteGameFav(game) {
    var favoris = this.getGameFav();
    console.log('debug false');
    if (favoris.some(jeu => jeu.name == game.name)) {
      favoris = favoris.filter(jeu => jeu.name != game.name);
      this.saveGameFav(favoris);
    }
  }
//Ajout d'un jeu dans les favoris puis sauvegarde des modifs dans le LocalStorage
  addGameFav(game) {
    var favoris = this.getGameFav();
    console.log('debug false');

    if (!favoris.some(jeu => jeu.name == game.name)) {
      console.log('debug good');
      favoris.push({
        id: game.id,
        name: game.name,
        summary: game.summary,
        genres: game.genres,
        screenshots: game.screenshots,
        cover: game.cover
      });
    }
    this.saveGameFav(favoris);
    console.log('good');
  }

}
