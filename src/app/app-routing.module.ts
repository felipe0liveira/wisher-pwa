import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [
  // { path: '', loadChildren: () => import('./@auth/auth.module').then(m => m.AuthModule) },
  { path: '**', redirectTo: 'wisher/home', pathMatch: 'full' },
  { path: 'wisher', loadChildren: () => import('./@wisher/wisher.module').then(m => m.WisherModule) },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
