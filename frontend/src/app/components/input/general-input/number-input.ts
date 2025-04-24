import { Component,Input,Output,EventEmitter } from '@angular/core';
import { InputNumber } from 'primeng/inputnumber';
import { FormsModule } from '@angular/forms';

@Component({
    selector: 'number-input',
    templateUrl: './number-input.html',
    standalone: true,
    imports: [FormsModule, InputNumber]
})
export class NumberInput {
    @Input() value!: number;

}