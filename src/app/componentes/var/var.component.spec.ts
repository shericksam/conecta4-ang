
import { fakeAsync, ComponentFixture, TestBed } from '@angular/core/testing';

import { VarComponent } from './var.component';

describe('VarComponent', () => {
  let component: VarComponent;
  let fixture: ComponentFixture<VarComponent>;

  beforeEach(fakeAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ VarComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(VarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should compile', () => {
    expect(component).toBeTruthy();
  });
});
