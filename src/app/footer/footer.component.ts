import { GlobalService } from './../services/global.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {

  inputVal = 'dark';

  constructor(private _globalService: GlobalService) { }

  ngOnInit(): void {
    this.inputVal = 'dark';

    this._globalService.colorValue.subscribe(
       (color: any) => {
        this.inputVal = color || 'dark';
      }
    )
  }
}
