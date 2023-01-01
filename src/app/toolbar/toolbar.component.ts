import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.css'],
})
export class ToolbarComponent implements OnInit {
  active = false;

  constructor() {}

  ngOnInit(): void {}

  setActive(): void {
    this.active = !this.active;
  }

  setView(): void {
    this.active = false;
  }
}
