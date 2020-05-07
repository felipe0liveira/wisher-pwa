import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { trigger, style, transition, animate } from "@angular/animations";
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { WisherService } from '../../services/wisher-service/wisher.service';

@Component({
  selector: 'app-wisher-form',
  templateUrl: './wisher-form.component.html',
  styleUrls: ['./wisher-form.component.scss'],
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
export class WisherFormComponent implements OnInit {

  @ViewChild('newCategoryInput') newCategoryInput: ElementRef;

  wisherForm: FormGroup;
  status: boolean;
  constructor(public wisherService: WisherService) {
    this.status = false;

    this.wisherForm = new FormGroup({
      url: new FormControl('', Validators.required),
      title: new FormControl('', Validators.required),
      description: new FormControl(''),
      category: new FormControl('0', Validators.required),
      newCategory: new FormControl(''),
    });

    this.wisherForm.get('category').valueChanges.subscribe(v => {
      if (+v === 1) {
        setTimeout(() => this.newCategoryInput.nativeElement.focus(), 10);
      }
    })
  }

  ngOnInit(): void {
  }

  open(): void {
    this.status = true;
  }

  close(): void {
    this.status = false;
  }

  submit(): void {
    if (this.wisherForm.valid) {
      let formValues = this.wisherForm.value;
      if (+formValues.category === 1) {
        formValues.category = this.wisherService.addCategory(formValues.newCategory);
      }

      delete formValues.newCategory;
      this.wisherService.addWish(formValues);
      this.wisherForm.reset(undefined);
      this.wisherForm.controls['category'].setValue(0);
      this.close();
    }
  }

}
