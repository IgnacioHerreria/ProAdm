import { TestBed, ComponentFixture } from '@angular/core/testing';
import { IncrementableComponent } from './incrementable.component';
import { FormsModule } from '@angular/forms';
import { By } from '@angular/platform-browser';
import { element } from 'protractor';


describe('Incremendator Component', () => {

  let component: IncrementableComponent;
  let fixture: ComponentFixture<IncrementableComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [IncrementableComponent],
      imports: [FormsModule]
    });

    fixture = TestBed.createComponent(IncrementableComponent);
    component = fixture.componentInstance;

  });

  it('Must show legend', () => {
    let legend = 'test component incrementable';
    component.legend = legend

    fixture.detectChanges();
    const elem: HTMLElement = fixture.debugElement.query(By.css('h3')).nativeElement;

    expect(elem.innerHTML).toContain(legend)
  });

  it('Show value of progress', () => {
    component.changeValue(5);
    fixture.detectChanges();

    fixture.whenStable().then(() => {
      const input = fixture.debugElement.query(By.css('input'));
      const elem = input.nativeElement;
      expect(elem.value).toBe('25');
    });
  })

});
