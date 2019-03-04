/* import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { LangToggleComponent } from './lang-toggle.component';


describe("LangToggleComponent when tested directly", () => {
  let component: LangToggleComponent;
  let expectedPath: boolean;
  let fixture: ComponentFixture<LangToggleComponent>;
  let componentDe: DebugElement;
  let componentEl: HTMLElement;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [LangToggleComponent]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LangToggleComponent);
    component = fixture.componentInstance;
    componentDe = fixture.debugElement.query(By.css(".header-lang"));
    componentEl = componentDe.nativeElement;

    expectedPath = false;

    component.path = expectedPath;

    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
 */
