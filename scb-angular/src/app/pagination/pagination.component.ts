import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-scb-pagination',
  templateUrl: './pagination.component.html',
  styleUrls: ['./pagination.component.css']
})
export class SCBPaginationComponent {

  @Input() totalItems: number;
  @Input() pageSize: number;
  @Output() pageChange = new EventEmitter<number>();

  public page = 1;

  get startItem() {
    return ((this.page - 1) * this.pageSize) + 1;
  }

  get endItem() {
    const end = this.page * this.pageSize;
    return end < this.totalItems ? end : this.totalItems;
  }

  get isFirstPage() {
    return this.page === 1 ? true : false;
  }

  get isLastPage() {
    return this.endItem === this.totalItems ? true : false;
  }

  first() {
    this.page = 1;
    this.pageChange.emit(this.page);
  }

  last() {
    this.page = Math.floor(this.totalItems / this.pageSize) + 1;
    this.pageChange.emit(this.page);
  }

  next() {
    this.page += 1;
    this.pageChange.emit(this.page);
  }

  prev() {
    this.page -= 1;
    this.pageChange.emit(this.page);
  }

}
