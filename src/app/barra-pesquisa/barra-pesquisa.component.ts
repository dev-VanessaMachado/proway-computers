import { Component } from '@angular/core';
import {FormsModule} from "@angular/forms";
import {Router} from "@angular/router";
import {CommonModule} from "@angular/common";

@Component({
  selector: 'app-barra-pesquisa',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './barra-pesquisa.component.html',
  styleUrl: './barra-pesquisa.component.css'
})
export class BarraPesquisaComponent {
  descricao = "";

  constructor(
    private router: Router
  ) {}

  pesquisar(){
    if(this.descricao){
      this.router.navigate(["produtos"], {queryParams: {descricao: this.descricao}});
      return;
    }
    this.router.navigate(["produtos"]);
  }
}
