import { Routes } from '@angular/router';
import { NaoEncontradaComponent } from "./nao-encontrada/nao-encontrada.component";

export const routes: Routes = [
  {
    path: 'produtos',
    loadComponent: () => import('./produtos/produtos.component').then(m => m.ProdutosComponent)
  },
  {
    path: "",
    redirectTo: "produtos",
    pathMatch: "full"
  },
  {
    path: 'produtos/:id',
    loadComponent: () => import('./produtos/detalhes-produto/detalhes-produto.component').then(m => m.DetalhesProdutoComponent)
  },
  {
    path: 'carrinho',
    loadComponent: () => import('./carrinho/carrinho.component').then(m => m.CarrinhoComponent)
  },
  {
    path: 'contato',
    loadComponent: () => import('./contato/contato.component').then(m => m.ContatoComponent)
  },
  {
    path: "**",
    component: NaoEncontradaComponent
  }
];
