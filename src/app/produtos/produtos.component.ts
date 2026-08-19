import { Component } from '@angular/core';
import {IProduto, produtos} from "../produtos";
import {CommonModule} from "@angular/common";
import {ProdutosService} from "../produtos.service";
import {ActivatedRoute, RouterLink} from "@angular/router";

@Component({
  selector: 'app-produtos',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './produtos.component.html',
  styleUrl: './produtos.component.css'
})
export class ProdutosComponent {
  produtos: IProduto[] | undefined;

  constructor(
    private  produtosService: ProdutosService,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void{
    const produtos = this.produtosService.getAll();

    this.route.queryParamMap.subscribe(params => {
      const descricao = params.get("descricao")?.toLowerCase();

      if(descricao){
        this.produtos = produtos.filter(produto => produto.descricao.toLowerCase().includes(descricao));
        return;
      }

      this.produtos = produtos;
    })


  }


}
