import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MeetTheBoardComponent } from './meet-the-board.component';

describe('MeetTheBoardComponent', () => {
  let component: MeetTheBoardComponent;
  let fixture: ComponentFixture<MeetTheBoardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MeetTheBoardComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MeetTheBoardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
