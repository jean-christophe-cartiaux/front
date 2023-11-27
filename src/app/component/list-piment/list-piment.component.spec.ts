import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListPimentComponent } from './list-piment.component';

describe('ListPimentComponent', () => {
  let component: ListPimentComponent;
  let fixture: ComponentFixture<ListPimentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ListPimentComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ListPimentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
