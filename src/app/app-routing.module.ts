import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', loadChildren: './home/home.module#HomePageModule' },
  { path: 'seller', loadChildren: './seller/seller.module#SellerPageModule' },
  { path: 'menus', loadChildren: './seller/menus/menus.module#MenusPageModule' },
  { path: 'new-menu', loadChildren: './seller/menus/new-menu/new-menu.module#NewMenuPageModule' },
  { path: 'menu-item', loadChildren: './seller/menus/menu-item/menu-item.module#MenuItemPageModule' },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
