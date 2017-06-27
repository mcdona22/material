import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-leader',
  templateUrl: './leader.component.html',
  styleUrls: ['./leader.component.css']
})
export class LeaderComponent implements OnInit {
  @Input() title: string;
  @Input() content: string;
  @Input() graphic: string;

  constructor() { }

  ngOnInit() {
  }

}
