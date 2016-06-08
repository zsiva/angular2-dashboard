import {Pipe} from '@angular/core';

@Pipe({
    name: 'searchName'
})
export class SearchNamePipe {
    transform(value, args?){
        return value.filter(item => item.name.indexOf(args) > -1)
    }
}
