import { Component } from '@angular/core';
import { ChiliService } from '../../../../services/chili.service';
import { FormBuilder, FormGroup } from '@angular/forms';
import { AddPiment } from '../../Forms/addPiment';
import { Router } from '@angular/router';

@Component({
  selector: 'app-ajout-piment',
  templateUrl: './ajout-piment.component.html',
  styleUrl: './ajout-piment.component.scss',
})
export class AjoutPimentComponent {
  formGroup!: FormGroup;

  constructor(
    private _service: ChiliService,
    private _fb: FormBuilder,
    private _router: Router
  ) {
    this.LoadForm();
  }
  ajoutPiment() {
    if (this.formGroup.invalid) {
      return console.error('Formulair invalide');
    }
    this._service.addPiment(this.formGroup.value).subscribe({
      next: () => this._router.navigate(['/piment']),
    });
  }
  LoadForm() {
    this.formGroup = this._fb.group(AddPiment);
  }
}
