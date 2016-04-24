import {Component} from 'angular2/core';
import {EditInputComponent} from './edit-input';

@Component({
  selector: 'edit-jumper',
  templateUrl: 'app/components/jumpers/edit/jumpers-edit.html',
  directives: [EditInputComponent]
})
export class EditJumperComponent {

}
