import { Component, OnInit, Input} from '@angular/core';

@Component({
  selector: 'app-price',
  templateUrl: './price.component.html',
  styleUrls: ['./price.component.css']
})
export class PriceComponent implements OnInit {
  @Input() title: string;
  @Input() content: string;
  @Input() price: string;
  @Input() colour: string;

  constructor() { }

  ngOnInit() {
  }

  getTextStyle() {
    if (this.colour === 'teal') {
      return 'white-text';
    } else {
      return 'black-text';
    }
  }

}
