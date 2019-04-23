import { Component, OnInit } from '@angular/core';
import { Observable, fromEvent } from 'rxjs';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {

  ngOnInit(): void {
    const ESC_KEY = 27;
    const nameInput = document.getElementById('name') as HTMLInputElement;
    const subscription = fromEvent(nameInput, 'keydown')
    .subscribe((e: KeyboardEvent) => {
      if (e.keyCode === ESC_KEY) {
        nameInput.value = '';
      } else {
        console.log(e.key);
      }
    });

  }


  fromEvent(target, eventName) {
    return new Observable((observer) => {
      const handler = (e) => observer.next(e);

      // add the event handler to the target
      target.addEventListener(eventName, handler);

      return () => {
        // detach the event handler from the target
        target.removeEventListener(eventName, handler);
      };
    });
  }
}
