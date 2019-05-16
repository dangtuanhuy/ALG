import { Component } from '@angular/core';

@Component({
  // Long Trong The Div va goi trong app.component.html
  selector: 'app-server',
  // selector : '.app-server.',
  templateUrl: './server.component.html'
})
export class ServerComponent {
ServerID = 10;
ServerStatus = 'offline';
getServerStatus() {
  return this.ServerStatus;
}
}
