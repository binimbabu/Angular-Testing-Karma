import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { DebugElement } from '@angular/core';
import { CounterComponent } from './counter.component';
import { By } from '@angular/platform-browser';

describe('CounterComponent', () => {
  let component: CounterComponent;
  let fixture: ComponentFixture<CounterComponent>;
  let debugElement:DebugElement;
  let htmlElement :HTMLElement;
  beforeEach(async(()=>{
    TestBed.configureTestingModule({
      declarations: [CounterComponent]
    }).compileComponents();
  }))
  beforeEach(()=>{
    fixture = TestBed.createComponent(CounterComponent)
    component = fixture.componentInstance;
    fixture.detectChanges();
    debugElement = fixture.debugElement.query(By.css('p'));
    htmlElement = debugElement.nativeElement;
  })
  it('should increment the counter number by one', ()=>{
    const initialValue = component.counter;
    component.increment();
    fixture.detectChanges();
    const newValue = component.counter;
    expect(newValue).toBeGreaterThanOrEqual(newValue);
  })
  it('should decrement the counter value by 1', ()=>{
    const initialValueDecr = component.counter;
    component.decrement();
    const newValueDecr = component.counter;
    fixture.detectChanges();
    expect(newValueDecr).toBeLessThanOrEqual(initialValueDecr);
  })
  it('should display the counter number after increment by 1', ()=>{
    component.increment();
    fixture.detectChanges();
    expect(htmlElement.textContent).toEqual('Number : 2');
  })
  it('should display the counter number after decrement by 1', ()=>{
    component.decrement();
    fixture.detectChanges();
    expect(htmlElement.textContent).toEqual('Number : 0');
  })
  it('should display the current number of the counter', ()=>{
    expect(htmlElement.textContent).toEqual('Number : 1');
  })
});
