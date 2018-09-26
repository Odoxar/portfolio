import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'dsa-currency-card',
  templateUrl: './currency-card.component.html',
  styleUrls: ['./currency-card.component.scss']
})
export class CurrencyCardComponent {

  @Input() currency: any;
  currencies: string[] = ['USD', 'EUR'];

}
