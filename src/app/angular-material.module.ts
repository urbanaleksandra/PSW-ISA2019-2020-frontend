import { NgModule } from '@angular/core';
import { MatTableModule } from '@angular/material/table';
import { MatSortModule } from '@angular/material/sort';
import { MatPaginatorModule } from '@angular/material/paginator';

@NgModule({
    imports: [
       MatTableModule,
       MatPaginatorModule,
       MatSortModule
    ],
    exports: [
       MatTableModule,
       MatPaginatorModule,
       MatSortModule
    ]
 })

export class AngularMaterialModule {}