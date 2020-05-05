import { Component, OnInit, ViewChild } from '@angular/core';
import { CategoryMenuComponent } from '../../components/category-menu/category-menu.component';
import { WisherFormComponent } from '../../components/wisher-form/wisher-form.component';
import { WisherService } from '../../services/wisher-service/wisher.service';
import { Wish } from '../../interfaces/wish.interface';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  @ViewChild('CategoryMenu') categoryMenu: CategoryMenuComponent;
  @ViewChild('WisherForm') wisherForm: WisherFormComponent;

  constructor(public wisherService: WisherService) { }

  ngOnInit(): void {
  }

  openCategoryMenu(): void {
    this.categoryMenu.open();
  }

  openWisherForm(): void {
    this.wisherForm.open();
  }

  goToWish(wish: Wish):void {    
    if (confirm('Deseja acessar seu wish?'))
      window.open(wish.url, '_blank');
  }

}
