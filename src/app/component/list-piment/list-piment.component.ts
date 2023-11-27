import { Component } from '@angular/core';
import { ChiliService } from '../../../../services/chili.service';
import { PimentData } from '../../fakeData/pimentData';
import { Router } from '@angular/router';
@Component({
  selector: 'app-list-piment',
  templateUrl: './list-piment.component.html',
  styleUrl: './list-piment.component.scss',
})
export class ListPimentComponent {
  listPiment!: PimentData[];

  constructor(private _service: ChiliService, private _router: Router) {
    this.RecupPiment();
  }

  RecupPiment() {
    this._service.get().subscribe({
      next: (data: any[]) => {
        this.listPiment = data;
        console.log(data);
      },
    });
  }
  RecupId(id: number) {
    this._router.navigate(['/description', id]);
  }
}
