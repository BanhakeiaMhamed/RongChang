import { Component, OnInit } from '@angular/core';
import {Image} from '../Image';

import { AudioContextModule } from 'angular-audio-context';

@Component({
  selector: 'app-kitchen',
  templateUrl: './kitchen.component.html',
  styleUrls: ['./kitchen.component.css']
})
export class KitchenComponent implements OnInit {
  audioObj = new Audio();
  imagesList: Array<Image> = [
     {name: 'Akasrun/ⴰⴽⴰⵙⵔⵓⵏ', path: 'assets/kitchenImages/cassrol.jpg', index: 0, urlAudio: "assets/kitchenAudio/cassrole.ogg"},
     {name: ' tamarmitat/ ⵜⴰⵎⴰⵔⵎⵉⵜⴰⵜ', path: 'assets/kitchenImages/Marmite.jpg', index: 1, urlAudio: "assets/kitchenAudio/une marmite.ogg"},
     {name: 'abarrad/ ⴰⴱⴰⵔⵔⴰⴷ', path: 'assets/kitchenImages/theiere.jpg', index: 2, urlAudio: "assets/kitchenAudio/Lethéière.ogg"},
     {name: ' lmus/ⵍⵎⵓⵙ', path: 'assets/kitchenImages/couteau.jpg', index: 3, urlAudio: "assets/kitchenAudio/couteau.ogg"},
     {name: 'Le filtre', path: 'assets/kitchenImages/filtreCafé.jpg', index: 4, urlAudio:"assets/kitchenAudio/lefiltre.ogg"},
     {name: 'La cuillière', path: 'assets/kitchenImages/cuilliere.jpg', index: 5, urlAudio: "assets/kitchenAudio/cuillière.ogg"},
     {name: 'la cuisine', path: 'assets/kitchenImages/la cuisine.jpg', index: 5, urlAudio: "assets/kitchenAudio/lacuisine.ogg"},
     {name: 'La table', path: 'assets/kitchenImages/La table.jpg', index: 5, urlAudio: "assets/kitchenAudio/laTable.ogg"},
     {name: 'Le four', path: 'assets/kitchenImages/Le four.jpg', index: 5, urlAudio: "assets/kitchenAudio/leFour.ogg"},
     {name: 'Les assiettes', path: 'assets/kitchenImages/Les assietes.jpg', index: 5, urlAudio: "assets/kitchenAudio/lesassiettes.ogg"},
     {name: 'Le réfrégirateur', path: 'assets/kitchenImages/refrigerateur.jpg', index: 5, urlAudio: "assets/kitchenAudio/leRéfrégirateur.ogg"}
   ];

  constructor() {
  }

  ngOnInit(): void {
  }

  play(e) {
  this.audioObj.src=e.path[0].name;
  console.log(this.audioObj.src);
  this.audioObj.play();
  }
  afficher(e): void{
      console.log(this.imagesList);
      console.log(e.path[0].name);
              }

  displayName(e) {
    console.log(e.path[1].id);
    console.log(e.path[1].name);
    console.log(e.path[0]);
  }


}
