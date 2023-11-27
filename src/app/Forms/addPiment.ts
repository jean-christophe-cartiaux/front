import { Validators } from '@angular/forms';

export const AddPiment = {
  img: [null],
  nom: [
    '',
    [Validators.required, Validators.maxLength(49), Validators.minLength(2)],
  ],
  scovile: [0, [Validators.required]],
  description: ['', [Validators.required, Validators.minLength(25)]],
};
