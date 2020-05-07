import { Component, ViewChild } from '@angular/core';
import { SwUpdate } from '@angular/service-worker';
import { AlertBoxComponent } from './@shared/components/alert-box/alert-box.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent{

  @ViewChild('AlertBox') alertBox: AlertBoxComponent;
  constructor(updates: SwUpdate) {
    updates.available.subscribe(event => {
      if (confirm('Uma nova atualização do Wisher acabou de chegar!\nDeseja atualizar seu app?')) {
        updates.activateUpdate().then(() => document.location.reload());
      }
    });
  }
}
