import { Component, OnInit } from '@angular/core';
import { ICategoria } from '../interface/categoria.interface';
import { ListarCatService } from '../services/listar-cat.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
 
  constructor() { }

  ngOnInit(): void {
   
  }

 

}
