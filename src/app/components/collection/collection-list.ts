import {Component, Input} from 'angular2/core';
import {NgFor} from 'angular2/common';

@Component({
  selector: 'collection-list',
  directives: [NgFor],
  template: `
  <div class="table-responsive">
  <table class="table table-bordered">
    <thead>
        <th class="bg-primary" *ngFor="#headerItem of header">{{headerItem}}</th>
        <th class="bg-primary">Actions</th>
    </thead>
    <tbody>
        <tr *ngFor="#row of model">
            <td *ngFor="#item of items(row);">{{row[item]}}</td>
            <td><button (click)="edit()">Edit</button></td>
        </tr>
      </tbody>
  </table>
  </div>
`
})

export class CollectionList {

  @Input() model:any[];
  header:any[];

  constructor() {
  }
  ngOnInit() {
      console.log('model: ', this.model);
      this.header = Object.keys(this.model[0]);
  }
  items(row) : Array<string> {
    return Object.keys(row);
  }
  edit() {
  }
}
