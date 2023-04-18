import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { SharedModule } from '@shared/shared.module';
import { HomeComponent } from './pages/home/home.component';
import { ListarCatComponent } from './pages/listar-cat/listar-cat.component';
import { CardComponent } from './pages/components/card/card.component';
import { ListProComponent } from './pages/components/list-pro/list-pro.component';


@NgModule({
  declarations: [
    HomeComponent,
    ListarCatComponent,
    CardComponent,
    ListProComponent
  ],
  imports: [
    CommonModule,
    HomeRoutingModule,
    SharedModule
  ]
})
export class HomeModule { }
