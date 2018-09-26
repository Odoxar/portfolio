import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'dsa-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit {

  public linkPages: Object[] = [
    { link: 'bill', name: 'Счет'},
    { link: 'history', name: 'История'},
    { link: 'planning', name: 'Планирование'},
    { link: 'records', name: 'Запись'},
  ];

  constructor() { }

  ngOnInit() {
  }

}
