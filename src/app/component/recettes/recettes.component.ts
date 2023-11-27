import { Component } from '@angular/core';

@Component({
  selector: 'app-recettes',
  templateUrl: './recettes.component.html',
  styleUrl: './recettes.component.scss',
})
export class RecettesComponent {
  recettePiment!: string;
  urlSauce!: string;
}
