import {ComponentFixture, TestBed} from '@angular/core/testing';

import {ModalResponseComponent} from './modal-response.component';
import {MAT_DIALOG_DATA, MatDialogRef} from "@angular/material/dialog";
import {MatCardModule} from "@angular/material/card";
import {Pipe, PipeTransform} from "@angular/core";

@Pipe({name: 'formatTimePipe'})
class MockPipeTest implements PipeTransform {
  transform(value: any, ...args): any {
  }
}

describe('ModalResponseComponent', () => {
  let component: ModalResponseComponent;
  let fixture: ComponentFixture<ModalResponseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        MatCardModule
      ],
      providers: [
        {provide: MAT_DIALOG_DATA, useValue: {}},
        {provide: MatDialogRef, useValue: {}}
      ],
      declarations: [
        ModalResponseComponent,
        MockPipeTest
      ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ModalResponseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
