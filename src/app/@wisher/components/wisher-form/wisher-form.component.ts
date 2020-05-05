import { Component, OnInit } from '@angular/core';
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

  wisherForm: FormGroup;
  status: boolean;
  constructor(private wisherService: WisherService) {
    this.status = false;

    this.wisherForm = new FormGroup({
      url: new FormControl('', Validators.required),
      title: new FormControl('', Validators.required),
      description: new FormControl(''),
      category: new FormControl('', Validators.required),
    });
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
      this.wisherService.addWish(this.wisherForm.value);
      this.close();
    }
  }

}
