import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GreetingsComponent } from './greetings.component';

describe('GreetingsComponent', () => {
  let component: GreetingsComponent;
  let fixture: ComponentFixture<GreetingsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GreetingsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GreetingsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should display default message', () => {
    const element: HTMLElement = fixture.nativeElement;
    const paragraph = element.querySelector('.mensaje');
    expect(paragraph?.textContent).toContain('Valor por defecto');
  });
});

