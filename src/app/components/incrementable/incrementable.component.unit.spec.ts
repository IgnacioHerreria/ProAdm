import { TestBed, ComponentFixture } from '@angular/core/testing';
import { IncrementableComponent } from './incrementable.component';
import { FormsModule } from '@angular/forms';
import { By } from '@angular/platform-browser';


describe('Incremendator Component unit', () => {

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

  it("Show buttons: click to plus 5", () => {
    const elements = fixture.debugElement.queryAll(By.css(".btn-skype"));
    elements[0].triggerEventHandler('click', null);
    expect(component.progress).toBe(25);
  })
});
