import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {RouterLink} from "@angular/router";

import {HeaderComponent} from "./header/header.component";

import {FooterComponent} from "./footer/footer.component";

import {ProdutosComponent} from "./produtos/produtos.component";

import {DetalhesProdutoComponent} from "./produtos/detalhes-produto/detalhes-produto.component";

import { MatSnackBarModule} from "@angular/material/snack-bar";

import {CarrinhoComponent} from "./carrinho/carrinho.component";

import {ContatoComponent} from "./contato/contato.component";

import {BarraPesquisaComponent} from "./barra-pesquisa/barra-pesquisa.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterLink,
    RouterOutlet,
    HeaderComponent,
    FooterComponent,
    ProdutosComponent,
    DetalhesProdutoComponent,
    MatSnackBarModule,
    CarrinhoComponent,
    ContatoComponent,
    BarraPesquisaComponent
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'proway-computers';
}
