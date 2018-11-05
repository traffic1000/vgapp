import {
  Component,
  OnInit
} from '@angular/core';
import {
  DataService
} from '../data.service';
import {
  ActivatedRoute
} from '@angular/router';

@Component({
  selector: 'app-games',
  templateUrl: './games.component.html',
  styleUrls: ['./games.component.scss']
})
export class GamesComponent implements OnInit {

  public games = [];

  console$: Object;

  constructor(private data: DataService, private route: ActivatedRoute) {
    this.route.params.subscribe(params => this.console$ = params.id)
  }

  ngOnInit() {
    this.data.getGamesByConsole(this.console$).subscribe(
      data => this.games = data
    );
  }

  // https://akveo.github.io/ng2-smart-table/#/documentation
  settings = {
    columns: {
      videogameName: {
        title: 'Name',
        sortDirection: 'asc'
      },
      reviewValue: {
        title: 'Value'
      },
      reviewIssue: {
        title: 'Issue'
      },
      remark: {
        title: 'Remark'
      }
    },
    pager: {
      display: false
    },
    actions: {
      add: false,
      delete: false,
      edit: false
    }
  };
}
