import {
  Component,
  OnInit,
  Input,
  ViewChild,
  ElementRef,
  AfterViewInit,
  OnDestroy
} from "@angular/core";
import { PositionsService } from "../../../shared/services/positions.service";

import { Position } from "../../../shared/interfaces";
import {
  MaterialService,
  MaterialInstance
} from "../../../shared/classes/material.service";
import { FormGroup, FormControl, Validators } from "@angular/forms";

@Component({
  selector: "app-positions-form",
  templateUrl: "./positions-form.component.html",
  styleUrls: ["./positions-form.component.css"]
})
export class PositionsFormComponent
  implements OnInit, AfterViewInit, OnDestroy {
  @Input("categoryId")
  categoryId: string;
  @ViewChild("modal")
  modalRef: ElementRef;

  positions: Position[] = [];
  loading: boolean = false;
  positionId = null;
  modal: MaterialInstance;
  form: FormGroup;

  constructor(private positionService: PositionsService) {}

  ngOnInit() {
    this.form = new FormGroup({
      name: new FormControl(null, Validators.required),
      cost: new FormControl(1, [Validators.required, Validators.min(1)])
    });
    this.loading = true;
    this.positionService.fetch(this.categoryId).subscribe(positions => {
      this.positions = positions;
      this.loading = false;
    });
  }

  ngAfterViewInit(): void {
    //Called after ngAfterContentInit when the component's view has been initialized. Applies to components only.
    //Add 'implements AfterViewInit' to the class.
    this.modal = MaterialService.initModal(this.modalRef);
  }

  onSelectPosition(position: Position) {
    this.positionId = position._id;
    this.form.patchValue({
      name: position.name,
      cost: position.cost
    });
    this.modal.open();
    MaterialService.updateTextInputs()
  }

  onAddPosition() {
    this.positionId = null;
    this.form.reset({ name: null, cost: 1 });
    this.modal.open();
    MaterialService.updateTextInputs();
  }

  onDeletePosition(e: Event, position: Position) {
    event.stopPropagation();
    const decision = window.confirm(`Delete position "${position.name}"?`);
    if (decision) {
      this.positionService.delete(position)
        .subscribe(
          response => {
            const idx = this.positions.findIndex(p => p._id === position._id)
            this.positions.splice(idx, 1);
            MaterialService.toast(response.message);
          },
          error => MaterialService.toast(error.error.message)
        )
    }
  }

  onCancle() {
    this.modal.close();
  }

  onSubmit() {
    this.form.disable();

    const newPosition: Position = {
      name: this.form.value.name,
      cost: this.form.value.cost,
      category: this.categoryId
    };

    const complited= () => {
      this.modal.close();
      this.form.reset({ name: '', cost: 1 })
      this.form.enable();
    }

    if (this.positionId) {
      newPosition._id = this.positionId;
      this.positionService.update(newPosition)
        .subscribe(
          position => {
            const idx = this.positions.findIndex(p => p._id === position._id);
            this.positions[idx] = position;
            MaterialService.toast('Changes saved.');
          },
          error => {
            MaterialService.toast(error.error.message);
          },
            complited
        );
    } else {
      this.positionService.create(newPosition)
        .subscribe(
          position => {
            MaterialService.toast('Position created.');
            this.positions.push(position);
          },
          error => {
            MaterialService.toast(error.error.message);
          },
          complited
        );
    }


  }

  ngOnDestroy(): void {
    //Called once, before the instance is destroyed.
    //Add 'implements OnDestroy' to the class.
    this.modal.destroy();
  }
}
