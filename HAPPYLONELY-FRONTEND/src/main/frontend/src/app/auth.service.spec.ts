import { ComponentFixture, TestBed } from '@angular/core/testing';
import { of } from 'rxjs';
import { AppComponent } from './app.component';
import { AuthService } from './common/service/auth.service';

describe('AppComponent', () => {
  let component: AppComponent;
  let fixture: ComponentFixture<AppComponent>;
  let authService: AuthService;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AppComponent],
      providers: [AuthService]
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AppComponent);
    component = fixture.componentInstance;
    authService = TestBed.inject(AuthService);
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should call ngOnInit', () => {
    spyOn(component, 'ngOnInit').and.callThrough();
    component.ngOnInit();
    expect(component.ngOnInit).toHaveBeenCalled();
  });

  it('should call getUserRole when ngOnInit is executed', () => {
    spyOn(component, 'getUserRole').and.callThrough();
    component.ngOnInit();
    expect(component.getUserRole).toHaveBeenCalled();
  });

  it('should update items array when user role is 5', (done) => {
    spyOn(authService, 'getUserRole').and.returnValue(of(5));
    component.getUserRole().then(() => {
      expect(component.items.length).toBe(6);
      expect(component.items[5].label).toBe('Admin');
      done();
    });
  });

  it('should not update items array when user role is not 5', (done) => {
    spyOn(authService, 'getUserRole').and.returnValue(of(4));
    component.getUserRole().catch(() => {
      expect(component.items.length).toBe(5);
      done();
    });
  });
});