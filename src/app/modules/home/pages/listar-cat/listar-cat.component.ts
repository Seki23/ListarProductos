import { Component, OnInit } from '@angular/core';
import { ICategoria } from '../interface/categoria.interface';
import { ListarCatService } from '../services/listar-cat.service';
import { IProducto } from '../interface/producto.interface';

@Component({
  selector: 'app-listar-cat',
  templateUrl: './listar-cat.component.html',
  styleUrls: ['./listar-cat.component.scss']
})
export class ListarCatComponent implements OnInit {
  categorias:ICategoria[]=[];
  productos:IProducto[]=[];
  parametro:string='';
  constructor(private listarService:ListarCatService) { }

  ngOnInit(): void {
    this.mostrarCategorias();
  }

  mostrarCategorias(){
    this.listarService.getCategorias().subscribe((resp) =>{
      this.categorias=resp;
       console.log(this.categorias);
       });
  }

  filtrar(parametro:string){
    this.parametro=parametro;
    this.listarService.getProductosByCat(parametro).subscribe((resp)=>{
      this.productos=resp;
      console.log(this.productos);
      
    })
    
  }

}
