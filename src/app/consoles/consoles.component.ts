import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'app-consoles',
  templateUrl: './consoles.component.html',
  styleUrls: ['./consoles.component.scss']
})
export class ConsolesComponent implements OnInit {

  public consoles;
  
  constructor(private data: DataService) { }

  ngOnInit() {
    this.data.getConsoles().subscribe(
      data => this.consoles = data
    );
  }

}
