import {Component, EventEmitter, Output} from '@angular/core';

@Component({
  selector: 'form-test',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})
export class FormComponent {
  title = '';
  @Output() textEvent = new EventEmitter<string>();
  write(): void {
    this.textEvent.emit(this.title);
  }
}
