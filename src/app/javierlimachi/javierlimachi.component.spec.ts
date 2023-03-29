import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JavierlimachiComponent } from './javierlimachi.component';

describe('JavierlimachiComponent', () => {
  let component: JavierlimachiComponent;
  let fixture: ComponentFixture<JavierlimachiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ JavierlimachiComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(JavierlimachiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
