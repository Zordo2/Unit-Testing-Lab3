import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserComponent } from './user.component';
import { UserServiceService } from './../user-service.service';

fdescribe('UserComponent', () => {
  let component: UserComponent;
  let fixture: ComponentFixture<UserComponent>;
  let service:UserServiceService
  
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UserComponent ],
      providers:[UserServiceService]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UserComponent);
    component = fixture.componentInstance;
    service=TestBed.get(UserServiceService)
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('test the value in the service', () => {
    spyOn(service,'getValue')
    component.ngOnInit()
    expect(service.getValue).toHaveBeenCalled();
    expect(service.getValue).toHaveBeenCalledTimes(1);
  });
});
