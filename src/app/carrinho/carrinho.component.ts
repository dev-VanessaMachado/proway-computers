import { Component } from '@angular/core';
import {CarrinhoService} from "../carrinho.service";
import {IProdutoCarrinho} from "../produtos";
import {CommonModule} from "@angular/common";
import {Form, FormsModule} from "@angular/forms";
import {Router} from "@angular/router";

@Component({
  selector: 'app-carrinho',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './carrinho.component.html',
  styleUrl: './carrinho.component.css'
})
export class CarrinhoComponent {
  itensCarrinho: IProdutoCarrinho[] = [];

  total = 0;

  constructor(
    public carrinhoService: CarrinhoService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.itensCarrinho = this.carrinhoService.obtemCarrinho();
    this.calculaTotal();
  }

  calculaTotal(){
    this.total = this.itensCarrinho.reduce((prev, curr) => prev + (curr.preco * curr.quantidade), 0);
  }

  removerProdutoCarrinho(produtoId: number){
    this.itensCarrinho = this.itensCarrinho.filter(item => item.id !== produtoId);

    this.carrinhoService.removerProdutoCarrinho(produtoId);

    this.calculaTotal()
  }

  comprar(){
    alert("Parabéns, você finalizou a sua compra!");
    this.carrinhoService.limparCarrinho();
    this.router.navigate(["produtos"]);

  }
}
