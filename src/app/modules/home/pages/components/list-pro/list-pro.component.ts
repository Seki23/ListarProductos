import { Component, Input, OnInit } from '@angular/core';
import { IProducto } from '../../interface/producto.interface';
import { ActivatedRoute, Router } from '@angular/router';
import { ListarCatService } from '../../services/listar-cat.service';

@Component({
  selector: 'app-list-pro',
  templateUrl: './list-pro.component.html',
  styleUrls: ['./list-pro.component.scss']
})
export class ListProComponent implements OnInit {
  @Input () objP!:IProducto;
  productos:IProducto[]=[];
  parametro:string='';
  constructor(
    private activateRoute: ActivatedRoute,
    private router: Router,
    private lista: ListarCatService) { }

  ngOnInit(): void {
    this.filtrar();
  }

  filtrar(){
    const id=this.activateRoute.snapshot.paramMap.get('id');
   
    this.lista.getProductosByCat(id ||'').subscribe((resp)=>{
      this.productos=resp;
      console.log(this.productos);
      
    })
    
  }

}
