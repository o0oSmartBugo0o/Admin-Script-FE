import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AuthLayerComponent } from './auth-layer.component';

describe('AuthLayerComponent', () => {
  let component: AuthLayerComponent;
  let fixture: ComponentFixture<AuthLayerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AuthLayerComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(AuthLayerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
