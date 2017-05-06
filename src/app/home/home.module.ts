import { NgModule } from '@angular/core';
import { MdSidenavModule } from '@angular/material';
import { MdToolbarModule } from '@angular/material';
import { MdCardModule } from '@angular/material';
import { MdButtonModule } from '@angular/material';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MdMenuModule } from '@angular/material';
import { MdIconModule } from '@angular/material';

import { HomeComponent } from './home.component';
import { HomeRoutingModule } from './home-routing.module';
import { SharedModule } from '../shared/shared.module';
import { NameListService } from '../shared/name-list/name-list.service';

@NgModule({
  imports: [HomeRoutingModule, SharedModule,
  MdSidenavModule,
    MdToolbarModule,
    MdCardModule,
    MdButtonModule,
    BrowserAnimationsModule,
    MdMenuModule,
    MdIconModule],
  declarations: [HomeComponent],
  exports: [HomeComponent],
  providers: [NameListService]
})
export class HomeModule { }
