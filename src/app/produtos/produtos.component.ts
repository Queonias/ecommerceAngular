import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { IProduto, produtos } from '../produtos';
import { ProdutosService } from '../produtos.service';

@Component({
  selector: 'app-produtos',
  templateUrl: './produtos.component.html',
  styleUrls: ['./produtos.component.css']
})
export class ProdutosComponent  implements OnInit {
  produtos: IProduto[] | undefined;

  constructor(
    private ProdutosService: ProdutosService,
    private route: ActivatedRoute,
  ) {}

  ngOnInit() {
    const produtos = this.ProdutosService.getAll();
    this.route.queryParamMap.subscribe(params => {
      const descricao = params.get("descricao")?.toLocaleLowerCase();

      if (descricao) {
        this.produtos = produtos.filter(produtos => produtos.descricao.toLocaleLowerCase().includes(descricao));
        return;
      }

      this.produtos = produtos;
    });
  }
}
