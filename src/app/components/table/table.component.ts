import { Component, OnInit, ViewChild } from '@angular/core';
import { MatSort, MatSortable,MatTableDataSource} from '@angular/material';
import { UserService} from '../../user.service';
import {MatFormFieldModule} from '@angular/material/form-field';
import { Observable } from 'rxjs/Observable';
import { FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss']
})
export class TableComponent implements OnInit {
  @ViewChild(MatSort) sort: MatSort;
  dataSource;
  displayedColumns =  ['name','stargazers_count','github'];

  constructor(private userService: UserService) { }
  buscaUsuarioFormControl = new FormControl('', [
    Validators.required
  ]);
  ngOnInit() {
    this.userService.getRepos().subscribe(results => {
      this.dataSource = new MatTableDataSource(results);
      this.dataSource.sort = this.sort;

    });
    // this.userService.getUser().subscribe(results => {

    //   if(!results)
    //   return

    //   this.dataSource = new MatTableDataSource(results);
    // })
  }

  teste(string){
      console.log("ola" +string);
  }

}
