import { NgModule } from "@angular/core";
import { MatToolbarModule } from "@angular/material/toolbar";
import { MatIconModule } from "@angular/material/icon";
import { MatButtonModule } from '@angular/material/button';
import { MatMenuModule } from '@angular/material/menu';
import { MatCardModule } from '@angular/material/card';
import { MatSelectModule } from '@angular/material/select';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatExpansionModule } from '@angular/material/expansion';

@NgModule({
    exports:[
        MatToolbarModule,
        MatIconModule,
        MatButtonModule,
        MatMenuModule,
        MatCardModule,
        MatSelectModule,
        MatCheckboxModule,
        MatExpansionModule
    ]
})

export class MaterialMudule {}