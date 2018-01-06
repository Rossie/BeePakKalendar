import { Component, OnInit } from '@angular/core';

@Component({
  moduleId: module.id,
  selector: 'app-closeable',
  templateUrl: './closeable.component.html',
  styleUrls: ['./closeable.component.scss']
})
export class CloseableComponent implements OnInit {
  
  public closed:boolean = false;

  constructor() { }

  ngOnInit() { }

}
