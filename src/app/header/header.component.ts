import { GlobalService } from './../services/global.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  inputVal = 'dark';

  title = "Angular";
  subtitle = 'Angular subtitle'
  constructor(private _globalService: GlobalService) { }

  ngOnInit(): void {
    this.title = this._globalService.toUpperCase(this._globalService.appTitle);
    this.subtitle = this._globalService.appSubtitle;

    this._globalService.subjectName.subscribe(
      (name: any) => {
        this.title = name;
        if(this.title === ''){
          this.title = this._globalService.toUpperCase(this._globalService.appTitle);
        }
      }
    )

    this._globalService.colorValue.subscribe(
       (color: any) => {
         console.log(color)
        this.inputVal = color || 'dark';
      }
    )
  }

}
