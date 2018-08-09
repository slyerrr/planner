import {Component, EventEmitter, Input, Output} from '@angular/core';

@Component({
  selector: 'app-pagination',
  template: `
    <!--<mat-divider></mat-divider>-->
    <!--<mat-paginator [length]="length"-->
                  <!--[pageSize]="10"-->
                  <!--[pageSizeOptions]="[5, 10, 25, 50]"-->
                  <!--(page)="pagination.emit($event)">-->
    <!--</mat-paginator>-->
    <!--<mat-divider></mat-divider>-->
    `
})

export class PaginationComponent {

  @Output() pagination = new EventEmitter<Object>();

  @Input() length: number = 50;

}
