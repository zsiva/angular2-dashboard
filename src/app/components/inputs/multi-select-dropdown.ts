import { Input, Output, Component, EventEmitter } from '@angular/core';
/*
 * Multi select dropdown for Angular 2 by @danfickle.
 * Based loosely on angular 1 multi select by @dotansimha (http://dotansimha.github.io/angularjs-dropdown-multiselect/)
 * Known to work with Angular 2.0.0-beta.0
 */

export interface DropdownItem {
  id: number,
  text: string
}

export interface DropdownSelectionItem {
  id: number
}

@Component({
  selector: 'multi-select-dropdown',
  template: `
    <div class="multiselect-parent btn-group dropdown-multiselect">
      <button type="button" class="dropdown-toggle btn btn-default" (click)="toggleDropdown()">
        <span *ngIf="selectionModel.length == 0">No selected items</span>
        <span *ngIf="selectionModel.length != 0">Selected Items:</span>
        {{ getButtonText() }}&nbsp;<span class="caret"></span>
      </button>
      <ul class="dropdown-menu dropdown-menu-form" [style.display]="isOpen ? 'block' : 'none'" style="overflow: scroll" >
        <li><a href="#" (click)="deselectAll($event);"><span class="glyphicon glyphicon-remove"></span>&nbsp;Clear All</a></li>
        <li><div class="dropdown-header">
          <div class="control-group"><div class="input-group">
            <input type="text" class="form-control" [(ngModel)]="searchFilter" placeholder="Search" />
            <span class="glyphicon glyphicon-remove input-group-addon" (click)="clearSearch()"></span>
          </div></div>
          </div></li>
        <template ngFor #item [ngForOf]="items">
        <li role="presentation" *ngIf="searchFilter == '' || isShowItem(item.text)">
          <a href="#" role="menuitem" (click)="toggleSelectedItem($event, item.id)">
            <span class="glyphicon" [class.glyphicon-ok]="isChecked(item.id)"></span>
            {{item.text}}
          </a>
        </li>
        </template>
        <li *ngIf="items.length == 0">No items</li>
      </ul>
    </div>
  `
})
export class MutliSelectDropdownComponent {
  @Input() selectionModel: Array<DropdownSelectionItem>;
  @Input() items: Array<DropdownItem>;
  @Output() selectionModelChange: EventEmitter<Array<DropdownSelectionItem>> = new EventEmitter();
  isOpen: boolean = false;
  searchFilter: string = '';

  toggleDropdown() : void {
    this.isOpen = !this.isOpen;
  }

  clearSearch() : void {
    this.searchFilter = '';
  }

  isShowItem(txt: string) : boolean {
    return txt.toLowerCase().indexOf(this.searchFilter.toLowerCase()) >= 0;
  }

  deselectAll(ev: Event) : void {
    this.selectionModel = [];
    this.clearSearch();
    this.onUpdate();
    ev.preventDefault();
  }

  isChecked(id: number) : boolean {
      return this.selectionModel.findIndex((itm) => itm.id == id) >= 0;
  }

  onUpdate() : void {
    this.selectionModelChange.emit(this.selectionModel);
  }

  toggleSelectedItem(ev: Event, id: number) : void {
    const idx = this.selectionModel.findIndex((itm) => itm.id == id);

    if (idx >= 0) {
      this.selectionModel.splice(idx, 1);
    }
    else {
      this.selectionModel.push({ 'id' : id });
    }

    this.onUpdate();
    ev.preventDefault();
  }

  getButtonText(): string {
    const selectedTexts: Array<string> =
      this.items
          .filter((itm) => this.isChecked(itm.id))
          .map((itm) => itm.text);

    return selectedTexts.join(', ');
  }
}
