import 'zone.js/dist/zone';
import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { bootstrapApplication } from '@angular/platform-browser';
import { TitleService } from './title.service';
import { Title } from './title.model';

@Component({
  selector: 'my-app',
  standalone: true,
  imports: [CommonModule],
  template: `
  
  <h1>simple angular example rendering data in dropdown from service</h1>
  <form>
    <div class="field" >
      <label class="label1">Title :</label>
      <select #ref (change)="getSelectedValue(ref.value)">
        <option [value]="t.name" *ngFor="let t of titles" >{{t.name}}</option>
      </select>
    </div>  
    <p>My name is {{selectedTitle}}:Ankit Yadav</p>

  </form> 
  `,
})
export class App implements OnInit {
  public titles: Title[];
  selectedTitle: any;
  constructor(private service: TitleService) {}

  ngOnInit() {
    this.service.getTitles().subscribe((data) => {
      this.titles = data;
    });
  }

  getSelectedValue(value:any){
    this.selectedTitle = value;
  }
}

bootstrapApplication(App);
