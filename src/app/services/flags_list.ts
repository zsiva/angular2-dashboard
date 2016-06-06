import {Injectable} from 'angular2/core';

@Injectable()
export class FlagsListService {
    flags:any[] = [
        {"name": "Afghanistan", "capital": "Kabul" },
        {"name": "Aland islands", "capital": "Mariehamn"},
        {"name": "Albania", "capital": "Tirana"},
        {"name": "Algeria", "capital": "Algiers"},
        {"name": "American Samoa", "capital": "Pago Pago"},
        {"name": "Andorra", "capital": "Andorra la Vella"},
        {"name": "Angola", "capital": "Luanda"},
        {"name": "Anguilla", "capital": "The Valley"},
        {"name": "Antarctica"}

    ];

    constructor() {
        this.createTableData();
    }


  add(value:any):void {
    this.flags.push(value);
  }
  //TODO: get jumper through ID
  get():any[] {
    return this.flags[0];
  }

  all():any[] {
    return this.flags;
  }

  createTableData () {
      for (let i = 0; i < this.flags.length; i++) {
          this.flags[i].class = this.slugify(this.flags[i].name);
      }
  }
  slugify(text){
  return text.toString().toLowerCase()
    .replace(/\s+/g, '_')           // Replace spaces with -
    .replace(/[^\w\-]+/g, '')       // Remove all non-word chars
    .replace(/\-\-+/g, '_')         // Replace multiple - with single -
    .replace(/^-+/, '')             // Trim - from start of text
    .replace(/-+$/, '');            // Trim - from end of text
    }
}
