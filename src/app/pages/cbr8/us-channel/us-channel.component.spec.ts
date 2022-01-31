import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UsChannelComponent } from './us-channel.component';

describe('UsChannelComponent', () => {
  let component: UsChannelComponent;
  let fixture: ComponentFixture<UsChannelComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UsChannelComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UsChannelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
