import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
 
  {
    path: 'inicio',
    loadChildren: () => import('./inicio/inicio.module').then( m => m.InicioPageModule)
  },
  {
    path: 'login',
    loadChildren: () => import('./login/login.module').then( m => m.LoginPageModule)
  },
  {
    path: 'modificar',
    loadChildren: () => import('./modificar/modificar.module').then( m => m.ModificarPageModule)
  },
  {
    path: 'actualizar',
    loadChildren: () => import('./actualizar/actualizar.module').then( m => m.ActualizarPageModule)
  },
  {
    path: 'eliminar',
    loadChildren: () => import('./eliminar/eliminar.module').then( m => m.EliminarPageModule)
  },
  {
    path: 'inventario',
    loadChildren: () => import('./inventario/inventario.module').then( m => m.InventarioPageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
