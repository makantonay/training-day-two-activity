import { GlobalService } from './../../services/global.service';
import { Component, OnInit, OnDestroy } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit, OnDestroy {

  colorValue = '';

  constructor(private _globalService: GlobalService) { }

  ngOnInit(): void {
  }

  onClick(): void {
    this._globalService.colorValue.next(this.colorValue);
  }

  ngOnDestroy(): void {
    this._globalService.colorValue.next('dark');
  }
}
