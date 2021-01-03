import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
import { ToastrModule } from 'ngx-toastr';
import { TabsModule } from 'ngx-bootstrap/tabs';
import { NgxGalleryModule } from '@kolkov/ngx-gallery';
//import {NgxGalleryModule} from '@kolkov/ngx-gallery';



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    BsDropdownModule.forRoot(),
    ToastrModule.forRoot({
      positionClass:'toast-bottom-right'

    }),
    TabsModule.forRoot(),
    NgxGalleryModule
  ],
  exports:
  [
    ToastrModule,
    BsDropdownModule,
    TabsModule,
    NgxGalleryModule
  ],
})
export class SharedModule { }
