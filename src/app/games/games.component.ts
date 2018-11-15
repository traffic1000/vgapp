import {Component, OnInit, ViewChild} from '@angular/core';
import {DataService} from '../data.service';
import {ActivatedRoute, Router} from '@angular/router';
import {MatTableDataSource, MatSort, MatFormFieldControl} from '@angular/material';
import {IGame } from '../game';

@Component({
  selector: 'app-games',
  templateUrl: './games.component.html',
  styleUrls: ['./games.component.scss']
})

export class GamesComponent implements OnInit {

  gameNum;
  console$: Object;
  displayedColumns: string[] = ['videogameName', 'reviewValue'];
  dataSource;

  @ViewChild(MatSort) sort: MatSort;

  constructor(private data: DataService, private route: ActivatedRoute, private router: Router) {
    this.route.params.subscribe(params => this.console$ = params.id)
  }

  ngOnInit() {
    //https://stackoverflow.com/questions/50619337/mattabledatasource-how-to-refresh-table-when-a-new-record-is-added-to-the-serv
    this.data.getGamesByConsole(this.console$).subscribe((data: IGame[]) => {
      const sorted = data.sort((a, b) => a.videogameName.localeCompare(b.videogameName));
      this.dataSource = new MatTableDataSource<IGame>(sorted);
      this.dataSource.sort = this.sort;
      //console.log(this.dataSource)
      this.gameNum = sorted.length;
    });
  }

  private navigate(gameID){
    this.router.navigate(['/game', gameID]);
  }
}
