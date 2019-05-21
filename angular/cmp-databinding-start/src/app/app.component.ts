import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  serverElements = [{type: 'server', name: 'testserver', content: 'just a test'}];

  onServerAdded(serverData: {serverName: string, serverCotent: string}) {
    this.serverElements.push({
      type: 'server',
      name: serverData.serverName,
      content: serverData.serverCotent
    });
  }

  onBlueprintAdded(bluepringData: {serverName: string, serverCotent: string}) {
    this.serverElements.push({
      type: 'blueprint',
      name: bluepringData.serverName,
      content: bluepringData.serverCotent
    });
  }
}
