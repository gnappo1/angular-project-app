import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

//TypeScript wants us to import components in order for them to be used by Angular
import { ServerComponent } from './server/server.component'
import { AppComponent } from './app.component';
import { ServersComponent } from './servers/servers.component';

//angular decorator where you register new components, add new modules to make this module leaner (imports).
@NgModule({
  declarations: [
    AppComponent,
    ServerComponent,
    ServersComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
