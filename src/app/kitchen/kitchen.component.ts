import { Component, OnInit } from '@angular/core';
import {Image} from '../Image';

@Component({
  selector: 'app-kitchen',
  templateUrl: './kitchen.component.html',
  styleUrls: ['./kitchen.component.css']
})
export class KitchenComponent implements OnInit {
   imagesList: Array<Image> = [
     {name: 'Le cassrole', path: 'assets/kitchenImages/cassrol.jpg', index: 0},
     {name: 'La marmite', path: 'assets/kitchenImages/Marmite.jpg', index: 1},
     {name: 'Le théière', path: 'assets/kitchenImages/theiere.jpg', index: 2},
     {name: 'Le couteau', path: 'assets/kitchenImages/couteau.jpg', index: 3},
     {name: 'Le filtre', path: 'assets/kitchenImages/filtreCafé.jpg', index: 4},
     {name: 'La cuillière', path: 'assets/kitchenImages/cuilliere.jpg', index: 5},
   ];

  constructor() {
  }

  ngOnInit(): void {
  }

  displayName(e) {
    console.log(e.path[0].id);
  }

  afficher(event: MouseEvent) {
    alert('its me');

  }
}
