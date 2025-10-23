import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GlassModalComponent } from './glass-modal.component';

describe('GlassModalComponent', () => {
  let component: GlassModalComponent;
  let fixture: ComponentFixture<GlassModalComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [GlassModalComponent]
    });
    fixture = TestBed.createComponent(GlassModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
