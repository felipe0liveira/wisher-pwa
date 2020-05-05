import { Component, OnInit } from '@angular/core';
import { trigger, style, transition, animate } from "@angular/animations";

@Component({
  selector: 'app-category-menu',
  templateUrl: './category-menu.component.html',
  styleUrls: ['./category-menu.component.scss'],
  animations: [
    trigger('verticalSlide', [
      transition(':enter', [
        style({ transform: 'translateY(-100%)' }),
        animate('500ms ease-in', style({ transform: 'translateY(0%)' }))
      ]),
      transition(':leave', [
        style({ transform: 'translateY(0%)' }),
        animate('200ms', style({ transform: 'translateY(-100%)' }))
      ]),
    ])
  ]
})
export class CategoryMenuComponent implements OnInit {

  status: boolean;
  constructor() {
    this.status = false;
  }

  ngOnInit(): void {
  }

  open(): void {
    this.status = true;
  }

  close(): void {
    this.status = false;
  }

}
