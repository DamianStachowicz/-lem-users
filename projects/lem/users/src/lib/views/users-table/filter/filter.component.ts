import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';

@Component({
    selector: 'lem-users-filter',
    templateUrl: './filter.component.html',
    styleUrls: ['./filter.component.scss']
})
export class FilterComponent implements OnInit {

    /**
     * form
     */
    form: FormGroup;

    @Output() filter = new EventEmitter<any>();

    constructor(
        private _formBuilder: FormBuilder
    ) {
        this._createForm();
        this._watchForm();
    }

    ngOnInit() {
    }

    /**
     * Create form
     */
    private _createForm() {
        this.form = this._formBuilder.group({
            username: '',
            permissions: ''
        });
    }

    /**
     * Watch for changes on form
     */
    private _watchForm() {
        this.form.valueChanges.subscribe(
            _ => this.filter.emit(this.form.getRawValue())
        );
    }
}
