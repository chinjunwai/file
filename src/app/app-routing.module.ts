import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)},
  {
    path: 'branch',
    loadChildren: () => import('./branch/branch.module').then( m => m.BranchPageModule)
  },
  {
    path: 'addshipment',
    loadChildren: () => import('./addshipment/addshipment.module').then( m => m.AddshipmentPageModule)
  },
  {
    path: 'addbranch',
    loadChildren: () => import('./addbranch/addbranch.module').then( m => m.AddbranchPageModule)
  },
  {
    path: 'shipmentdetails/:key',
    loadChildren: () => import('./shipmentdetails/shipmentdetails.module').then( m => m.ShipmentdetailsPageModule)
  },
  {
    path: 'dispatch',
    loadChildren: () => import('./dispatch/dispatch.module').then( m => m.DispatchPageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
