import { NgModule } from '@angular/core';
import {TabMenuModule} from 'primeng/tabmenu';
import {TabViewModule} from 'primeng/tabview';
import {DropdownModule} from 'primeng/dropdown';
import {InputTextModule} from 'primeng/inputtext';
import {RadioButtonModule} from 'primeng/radiobutton';
import {CardModule} from 'primeng/card';
import {DialogModule} from 'primeng/dialog';
import {StepsModule} from 'primeng/steps';
import {CheckboxModule} from 'primeng/checkbox';

import {SelectButtonModule} from 'primeng/selectbutton';
import {SidebarModule} from 'primeng/sidebar';
import {GMapModule} from 'primeng/gmap';
import {CarouselModule} from 'primeng/carousel';
import {ToastModule} from 'primeng/toast';
import {CalendarModule} from 'primeng/calendar';
import {GalleriaModule} from 'primeng/galleria';

import {PanelModule} from 'primeng/panel';
import {MessageModule} from 'primeng/message';
import {ProgressBarModule} from 'primeng/progressbar';
import {ProgressSpinnerModule} from 'primeng/progressspinner';
import {InputMaskModule} from 'primeng/inputmask';


@NgModule({
    imports: [
        TabMenuModule,
        TabViewModule,
        DropdownModule,
        InputTextModule,
        RadioButtonModule,
        CardModule,
        DialogModule,
        StepsModule,
        SelectButtonModule,
        CheckboxModule,
        SidebarModule,
        GMapModule,
        CarouselModule,
        ToastModule,
        CalendarModule,
        GalleriaModule,
        PanelModule,
        MessageModule,
        ProgressBarModule,
        ProgressSpinnerModule,
        InputMaskModule

    ],
    exports: [
        TabMenuModule,
        TabViewModule,
        DropdownModule,
        InputTextModule,
        RadioButtonModule,
        CardModule,
        DialogModule,
        StepsModule,
        SelectButtonModule,
        CheckboxModule,
        SidebarModule,
        GMapModule,
        CarouselModule,
        ToastModule,
        CalendarModule,
        GalleriaModule,
        PanelModule,
        MessageModule,
        ProgressBarModule,
        ProgressSpinnerModule,
        InputMaskModule

    ]
})

export class PrimeNgModule {}
