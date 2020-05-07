import { Injectable } from '@angular/core';
import { Wish } from '../../interfaces/wish.interface';
import { Category } from '../../interfaces/category.interface';

@Injectable({
  providedIn: 'root'
})
export class WisherService {

  wishList: Wish[];
  categoryList: Category[];

  constructor() {
    this.categoryList = JSON.parse(localStorage.getItem('category-list') || '[]');
    this.wishList = JSON.parse(localStorage.getItem('wish-list') || '[]');
  }

  save() {
    localStorage.setItem('wish-list', JSON.stringify(this.wishList));
    localStorage.setItem('category-list', JSON.stringify(this.categoryList));
  }

  addWish(wish: Wish, ): void {
    wish.category = +wish.category;
    this.wishList.unshift(wish);
    this.save();
  }

  removeWish(wish: Wish): void {
    this.wishList = this.wishList.filter(w => w != wish);
    this.save();
  }

  addCategory(name: string): number {
    const identifier = new Date().getTime();

    this.categoryList.unshift({ title: name, identifier });
    this.save();

    return identifier;
  }

  removeCategory(category: Category): void {
    this.categoryList = this.categoryList.filter(c => c != category);
    this.save();
  }
}
