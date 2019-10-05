import { Component, OnInit } from '@angular/core';
import { MyserviceService } from './myservice.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'my-angular8';
  longest = 'tes dgd dsgfsgis dfiusdg hfiusd vsdbs';
  constructor(private service: MyserviceService) { }
  ngOnInit() {
    this.service.getData().subscribe((data) =>  {
      console.log(data);
    });
  }
}
