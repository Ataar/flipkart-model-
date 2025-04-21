import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';




@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  
})

export class AppComponent {
  isDialogOpen = false;
  
  isNavbarCollapsed = true;
  activeItem = 'home';  // Default active item

  // Method to set the active menu item
  setActive(item: string) {
    this.activeItem = item;
  }
  constructor(private dialog: MatDialog) {
    // Listen to dialog open/close changes
    this.dialog.afterOpened.subscribe(() => {
      this.isDialogOpen = true;
    });

    this.dialog.afterAllClosed.subscribe(() => {
      this.isDialogOpen = false;
    });
  }
}
