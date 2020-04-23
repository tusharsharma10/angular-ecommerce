import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ProductsComponent } from './products/products.component';
import { ShoppingCartComponent } from './shopping-cart/shopping-cart.component';
import { CheckoutComponent } from './checkout/checkout.component';
import { OrderSuccessComponent } from './order-success/order-success.component';
import { LoginComponent } from './login/login.component';
import { AdminOrdersComponent } from './admin/admin-orders/admin-orders.component';
import { AdminProductsComponent } from './admin/admin-products/admin-products.component';


const routes: Routes = [

  {path:'', component:HomeComponent},
  {path:'products', component:ProductsComponent},
  {path:'shopping-cart', component:ShoppingCartComponent},
  {path:'checkout', component:CheckoutComponent},
  {path:'order-success', component:OrderSuccessComponent},
  {path:'login', component:LoginComponent},
  {path:'admin/orders', component:AdminOrdersComponent},
  {path:'admin/products', component:AdminProductsComponent}
  

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
