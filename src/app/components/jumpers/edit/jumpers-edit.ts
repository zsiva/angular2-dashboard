import {Component, View} from 'angular2/angular2';
import {EditInputComponent} from './edit-input';

@Component({
  selector: 'edit-jumper'
})
@View({
  templateUrl: './components/jumpers/edit/jumpers-edit.html',
  directives: [EditInputComponent]
})
export class EditJumperComponent {

}
