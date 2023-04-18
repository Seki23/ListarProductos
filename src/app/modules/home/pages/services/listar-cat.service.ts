import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ICategoria } from '../interface/categoria.interface';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { IProducto } from '../interface/producto.interface';

@Injectable({
  providedIn: 'root'
})
export class ListarCatService {

  categoria:ICategoria[]=[];
  Productos:IProducto[]=[];
  baseUrl: string=environment.baseUrl;

  constructor(private http: HttpClient) { }
  
  getCategorias():Observable<ICategoria[]>{
    return this.http.get<ICategoria[]>(`${this.baseUrl}/listaProductos/listCat`);
   }

   getProductosByCat(id:string):Observable<IProducto[]>{
    return this.http.get<IProducto[]>(`${this.baseUrl}/listaProductos/ListProd/${id}`);
   }

   
}
