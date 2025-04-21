import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';
import { MatDialogModule } from '@angular/material/dialog';
import { MaterialModule } from './shared/material/material.module';
import { MobileDashbordComponent } from './shared/components/mobile-dashbord/mobile-dashbord.component';
import { MainTaskComponent } from './shared/components/main-task/main-task.component';
import {MatChipsModule} from '@angular/material/chips';
@NgModule({
  declarations: [
    AppComponent,
    MobileDashbordComponent,
    MainTaskComponent,

    
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    MatDialogModule,
    MaterialModule,
    MatChipsModule
  ],
  providers: [
  
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }


// Notes:-

// the root module of your project is app module so run that BrowserModule is used to handle.

