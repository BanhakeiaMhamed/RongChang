import { Component, OnInit } from '@angular/core';
import {Image} from "../Image";

@Component({
  selector: 'app-animals',
  templateUrl: './animals.component.html',
  styleUrls: ['./animals.component.css']
})
export class AnimalsComponent implements OnInit {

   audioObj = new Audio();
   imagesList: Array<Image> = [
      {name: "Ayis/ⴰⵢⵉⵙ", path: 'assets/animalesImages/Horse.jpg', index: 0, urlAudio: "assets/animalesImages/animalesAudio/yis.ogg"},
      {name: "Ayaẓiḍ/ⴰⵢⴰⵥⵉⴹ", path: 'assets/animalesImages/rooster.jpg', index: 1, urlAudio: "assets/animalesImages/animalesAudio/yazidh.ogg"},
      {name: "Tayaẓiḍt/ⵜⴰⵢⴰⵥⵉⴹⵜ", path: 'assets/animalesImages/hen.jpg', index: 2, urlAudio: "assets/animalesImages/animalesAudio/thyazit.ogg"},
      {name: "Tafunast/ⵜⴰⴼⵓⵏⴰⵙⵜ", path: 'assets/animalesImages/caw.jpg', index: 3, urlAudio: "assets/animalesImages/animalesAudio/thafonast.ogg"},
      {name: "Taḥelluft/ⵜⴰⵃⵍⵍⵓⴼⵜ", path: 'assets/animalesImages/sow.jpg', index: 4, urlAudio: "assets/animalesImages/animalesAudio/tha7loft.ogg"},
      {name: "Aɛenzi/ⴰⵄⵏⵣⵉ", path: 'assets/animalesImages/goat.jpg', index: 5, urlAudio: "assets/animalesImages/animalesAudio/r3anzi.ogg"},
      {name: "Afillus/ⴰⴼⵉⵍⵍⵓⵙ", path: 'assets/animalesImages/chik.jpg', index: 5, urlAudio: "assets/animalesImages/animalesAudio/fidjus.ogg"},
      {name: "Ayenduz/ⴰⵢⵏⴷⵓⵣ", path: 'assets/animalesImages/bull.jpg', index: 6, urlAudio: "assets/animalesImages/animalesAudio/ayndoz.ogg"},
      {name: "Asardun/ⴰⵙⴰⵔⴷⵓⵏ", path: 'assets/animalesImages/Horse.jpg', index: 7, urlAudio: "assets/animalesImages/animalesAudio/asardhun.ogg"},
      {name: "Aḥeluf-ilef/ⴰⵃⵍⵍⵓⴼ-ⵉⵍⴼ", path: 'assets/animalesImages/pig.jpg', index: 8, urlAudio: "assets/animalesImages/animalesAudio/ahlof.ogg"},
      {name: "Aɣyul/ⴰⵖⵢⵓⵍ", path: 'assets/animalesImages/danky.jpg', index: 9, urlAudio: "assets/animalesImages/animalesAudio/aghyour.ogg"},
      {name: "Aɛejmi/ⴰⵄⵊⵎⵉ", path: 'assets/animalesImages/bull.jpg', index: 10, urlAudio: "assets/animalesImages/animalesAudio/a3jmi.ogg"}];
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
