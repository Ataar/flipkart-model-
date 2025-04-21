import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatSnackBarModule} from '@angular/material/snack-bar';
import {MatButtonModule} from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';
import {MatCardModule} from '@angular/material/card';
import {MatDividerModule} from '@angular/material/divider';

const matModArr = [
  MatButtonModule,
  MatSnackBarModule,
  MatIconModule,
  MatCardModule,
  MatDividerModule,
]

@NgModule({
  declarations: [],
  imports: [
    CommonModule,    
   ...matModArr

  ],

  exports :[
   ...matModArr
   
  ]
})
export class MaterialModule { }
