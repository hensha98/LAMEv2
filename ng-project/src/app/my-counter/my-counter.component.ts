import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { increment, decrement, reset, custom } from '../state/song.actions';

@Component({
  selector: 'app-my-counter',
  templateUrl: './my-counter.component.html',
  styleUrls: ['./my-counter.component.css']
})
export class MyCounterComponent implements OnInit {

  song$: Observable<number>;
 
  constructor(private store: Store<{ song: number }>) {
    this.song$ = store.select('song');
  }
 
  increment() {
    this.store.dispatch(increment());
  }
 
  decrement() {
    this.store.dispatch(decrement());
  }
 
  reset() {
    this.store.dispatch(reset());
  }

  // Dispatch sends to the reducer. The custom action creator receives an object of addon and returns a plain JavaScript object with a type property (defined as a string in song.actions.ts), with addon as additional property.
  custom(addon: string) {
    this.store.dispatch(custom({addon: addon}));
  }

  ngOnInit(): void {
  }

}
