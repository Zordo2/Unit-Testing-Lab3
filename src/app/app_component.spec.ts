import { ComponentFixture, fakeAsync, TestBed, tick } from '@angular/core/testing';
import { AppComponent } from './app.component';
import { routes } from './app-routing.module';
import { RouterTestingModule } from '@angular/router/testing';
import { DebugElement } from '@angular/core';
import { By } from '@angular/platform-browser';
import { Router, RouterLinkWithHref } from '@angular/router';
import { Location } from '@angular/common';
describe('UserComponent', () => {
  let component: AppComponent;
  let fixture: ComponentFixture<AppComponent>;
  let mydebugElement:DebugElement
  let location:Location // to get url
  let router:Router  // to gst initial route
  
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AppComponent ],
      imports:[RouterTestingModule.withRoutes(routes)]
    })

    .compileComponents();

    fixture = TestBed.createComponent(AppComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
    mydebugElement=fixture.debugElement
    location=TestBed.get(location)
    router=TestBed.get(router)
    router.initialNavigation()
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('test that anchor go to its route', fakeAsync( () => {
//   var link =mydebugElement.query(By.css("a")) // can catch the element by this way or by var link =mydebugElement.queryAll(By.directive(RouterLinkWithHref))
   var link =mydebugElement.queryAll(By.directive(RouterLinkWithHref))
//    link[0].triggerEventHandler("click",null)
link[0].nativeElement.click()
   tick(100)
   expect(location.path()).toEqual("/user")
  }));
});
