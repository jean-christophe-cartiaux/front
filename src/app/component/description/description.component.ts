import { Component } from '@angular/core';
import { ChiliService } from '../../../../services/chili.service';
import { ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-description',
  templateUrl: './description.component.html',
  styleUrl: './description.component.scss',
})
export class DescriptionComponent {
  listPimentId!: number;
  piment: any;
  constructor(private _route: ActivatedRoute, private _service: ChiliService) {
    this._route.params.subscribe((params) => {
      this.listPimentId = +params['id'];
      console.log(this.listPimentId);
    });
    this.getPiment(this.listPimentId);
  }
  getPiment(id: number) {
    this._service.getById(id).subscribe({
      next: (data: any) => {
        this.piment = data;
        console.log(data);
      },
    });
  }
}
