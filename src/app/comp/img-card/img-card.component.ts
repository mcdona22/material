import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-img-card',
  templateUrl: './img-card.component.html',
  styleUrls: ['./img-card.component.css']
})
export class ImgCardComponent implements OnInit {
  @Input() title: string;
  @Input() content: string;
  @Input() graphic: string;

  constructor() { }

  ngOnInit() {
  }

}
