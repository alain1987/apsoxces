import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ShopListComponent } from './shop/shop-list/shop-list.component';
import { ShopDetailComponent } from './shop/shop-detail/shop-detail.component';
import { NotFoundComponent } from './errors/not-found/not-found.component';

const routes: Routes = [
  { path: 'shop/allProducts', component: ShopListComponent },
  { path: 'shop/itemDetail', component: ShopDetailComponent },
  { path: '', redirectTo: '/shop/allProducts', pathMatch: 'full' },
  { path: '**', component: NotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
