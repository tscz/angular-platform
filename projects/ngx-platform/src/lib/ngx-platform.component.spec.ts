import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NgxPlatformComponent } from './ngx-platform.component';

describe('NgxPlatformComponent', () => {
  let component: NgxPlatformComponent;
  let fixture: ComponentFixture<NgxPlatformComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NgxPlatformComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NgxPlatformComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
