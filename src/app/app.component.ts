import { Component } from '@angular/core';
function remove(item: string, list: string[]) {
  if (list.indexOf(item) !== -1) {
    list.splice(list.indexOf(item), 1);
  }
}
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  availableBoxes = [
    'Box 1',
    'Box 2',
    'Box 3',
    'Box 4',
    'Box 5',
  ];

  dropzone1 = [
    'Box 6'
  ];

  dropzone2 = [
    'Box 7'
  ];

  currentBox?: string;

  move(box: string, toList: string[]): void {
    remove(box, this.availableBoxes);
    remove(box, this.dropzone1);
    remove(box, this.dropzone2);

    toList.push(box);
  }
}
