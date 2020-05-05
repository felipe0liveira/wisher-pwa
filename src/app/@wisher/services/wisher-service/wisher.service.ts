import { Injectable } from '@angular/core';
import { Wish } from '../../interfaces/wish.interface';

@Injectable({
  providedIn: 'root'
})
export class WisherService {

  wishList: Wish[];
  constructor() {
    this.wishList = [
      { title: 'GoPro Hero 8', description: 'Action Camera', url: 'https://produto.mercadolivre.com.br/MLB-1153418921-cmera-gopro-hero-8-black-nota-fiscal-envio-imediato-_JM', category: 0 },
      { title: 'Lente T5i', description: '50mm F1.8', url: 'https://produto.mercadolivre.com.br/MLB-1214476924-lente-canon-50mm-18-stm-garantia-nf-produto-novo-_JM', category: 0 },
      { title: 'Bolsa DSLR', url: 'https://produto.mercadolivre.com.br/MLB-1195404431-bolsa-canon-para-acessorios-eos-shoulder-bag-300dg-_JM', category: 0 },
    ];
  }

  addWish(wish: Wish): void {
    this.wishList.unshift(wish);
  }

  removeWish(wish: Wish): void {
    this.wishList = this.wishList.filter(w => w != wish);
  }
}
