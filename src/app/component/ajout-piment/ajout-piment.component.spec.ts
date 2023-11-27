import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AjoutPimentComponent } from './ajout-piment.component';

describe('AjoutPimentComponent', () => {
  let component: AjoutPimentComponent;
  let fixture: ComponentFixture<AjoutPimentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AjoutPimentComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AjoutPimentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
