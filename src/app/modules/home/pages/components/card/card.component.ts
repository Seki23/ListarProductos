import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ICategoria } from '../../interface/categoria.interface';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent implements OnInit {
  @Input () obj!:ICategoria;

  
  @Output() Event=new EventEmitter<string>();
  constructor(private sanitizer: DomSanitizer) { 
  
  }
  public getSantizeUrl(url : string) {
    return this.sanitizer.bypassSecurityTrustUrl(url);
}

filtrar(parametro:string){
  this.Event.emit(parametro);
}


  ngOnInit(): void {
 
       
  }

}
