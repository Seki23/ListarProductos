import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { ListProComponent } from './pages/components/list-pro/list-pro.component';

const routes: Routes = [
  {path:'',component:HomeComponent,title:'Home'},
  {path:'listar/:id',component:ListProComponent,title:'menu'},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomeRoutingModule { }
