import { Component } from '@angular/core';
import { Panes } from './shared/panes';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'productos';
  productos = Panes;

  estilo =  "btn btn-primary";
}
