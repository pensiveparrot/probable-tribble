import { ComponentFixture, TestBed, fakeAsync, tick } from '@angular/core/testing';
import { of } from 'rxjs';
import { ShopComponent } from './shop.component';
import { ProductService } from './product/product.service';

describe('ShopComponent', () => {
  let component: ShopComponent;
  let fixture: ComponentFixture<ShopComponent>;
  let productService: ProductService;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ShopComponent],
      providers: [ProductService]
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ShopComponent);
    component = fixture.componentInstance;
    productService = TestBed.inject(ProductService);
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


  it('should set showText to true after 4 seconds', fakeAsync(() => {
    component.ngOnInit();
    tick(4000);
    expect(component.showText).toBeTrue();
  }));

  it('should call loadAllProducts when ngOnInit is executed', () => {
    spyOn(component, 'loadAllProducts').and.callThrough();
    component.ngOnInit();
    expect(component.loadAllProducts).toHaveBeenCalled();
  });

  it('should load all products', fakeAsync(() => {
    spyOn(productService, 'getAllProducts').and.returnValue(of([
      { id: "1", productname: "Product 1", price: 100, image: "image1.jpg", inventorystatus: "In Stock", shoplink: "link1" },
      { id: "2", productname: "Product 2", price: 200, image: "image2.jpg", inventorystatus: "Low Stock", shoplink: "link2" }
    ]));
    component.loadAllProducts();
    tick();
    expect(component.products.length).toBe(2);
  }));
});