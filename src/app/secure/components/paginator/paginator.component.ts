import { Component, EventEmitter, Input, OnChanges, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-paginator',
  templateUrl: './paginator.component.html',
  styleUrls: ['./paginator.component.scss']
})
export class PaginatorComponent implements OnInit, OnChanges {

  @Input() lastPage!: number;
  page: number = 1;
  @Output() pageChanged = new EventEmitter<number>();
  previousPage: boolean = true;
  nextPage: boolean = false;

  constructor() { }

  ngOnInit(): void {}

  ngOnChanges(): void {
    if (this.page === this.lastPage) {
      this.nextPage = true;
    }
  }

  next() {
    this.page++;
    this.pageChanged.emit(this.page);
    if (this.page === this.lastPage) {
      this.nextPage = true;
      this.previousPage = false;
    }
  }

  prev() {
    this.page--;
    this.pageChanged.emit(this.page);
    if (this.page === 1) {
      this.previousPage = true;
      this.nextPage = false;
    }
  }

}
