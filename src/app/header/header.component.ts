import { Component } from '@angular/core';
import {RouterLink} from "@angular/router";
import {CarrinhoService} from "../carrinho.service";
import {BarraPesquisaComponent} from "../barra-pesquisa/barra-pesquisa.component";
import {FormsModule} from "@angular/forms";

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [RouterLink, BarraPesquisaComponent, FormsModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {
  constructor(
    public carrinhoService: CarrinhoService
  ) {
  }
}
