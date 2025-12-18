import { Component, input} from '@angular/core';

@Component({
  selector: 'app-loading-text',
  imports: [],
  templateUrl: './loading-text.html',
  styleUrl: './loading-text.scss',
})
export class LoadingText {
  //we use type in order to display one of the message (si)
  type = input<"singular" | "plural">("plural");
}
