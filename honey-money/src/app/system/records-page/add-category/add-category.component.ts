import { Component, OnInit, Output, EventEmitter, OnDestroy } from '@angular/core';
import { NgForm } from '@angular/forms';
import { CategoriesService } from '../../shared/services/categories.service';
import { Category } from '../../shared/models/category.model';
// tslint:disable-next-line:import-blacklist
import { Subscription } from 'rxjs';


@Component({
  selector: 'dsa-add-category',
  templateUrl: './add-category.component.html',
  styleUrls: ['./add-category.component.scss']
})
export class AddCategoryComponent implements OnDestroy {

  sub1: Subscription;

  // tslint:disable-next-line:no-output-on-prefix
  @Output() onCategoryAdd = new EventEmitter<Category>();

  constructor(
    private categoriesService: CategoriesService
  ) { }

  ngOnDestroy() {
    if (this.sub1) { this.sub1.unsubscribe(); }
  }

  onSubmit(form: NgForm) {
    // tslint:disable-next-line:prefer-const
    let { name, capacity } = form.value;
    if (capacity < 0) { capacity *= -1; }

    const category = new Category(name, capacity);

    this.sub1 = this.categoriesService.addCategory(category)
      // tslint:disable-next-line:no-shadowed-variable
      .subscribe((category: Category) => {
        form.reset();
        form.form.patchValue({capacity: 1});
        this.onCategoryAdd.emit(category);

      });
  }

}
