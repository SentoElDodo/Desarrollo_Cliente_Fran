import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-producto',
  templateUrl: './producto.component.html',
  styleUrls: ['./producto.component.css']
})
export class ProductoComponent {
  @Input() codigoProducto = "";
  @Input() nombre="";
  @Input() descripcion="";
  @Input() precio="";
  @Input() stock="";
  @Input() imagen="https://picsum.photos/id/237/200/300";
}
