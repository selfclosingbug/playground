import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SCBPaginationComponent } from './pagination.component';

describe('SCBPaginationComponent', () => {
  let component: SCBPaginationComponent;
  let fixture: ComponentFixture<SCBPaginationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [SCBPaginationComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SCBPaginationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
