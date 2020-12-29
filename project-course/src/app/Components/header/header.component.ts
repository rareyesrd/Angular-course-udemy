import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent implements OnInit {
  @Output() link = new EventEmitter<string>();
  collapsed = true;
  constructor() { }
  ngOnInit(): void { }

  onSelected(link: string): void {
    this.link.emit(link);
  }
}
