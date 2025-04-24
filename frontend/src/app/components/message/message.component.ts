import { Component,Input, Output, EventEmitter,OnChanges, SimpleChanges  } from '@angular/core';
import { Dialog } from 'primeng/dialog';
import { ButtonModule } from 'primeng/button';
import { InputTextModule } from 'primeng/inputtext';
import { FormsModule } from '@angular/forms';

@Component({
    selector: 'message',
    templateUrl: './message.component.html',
    standalone: true,
    imports: [Dialog, ButtonModule, InputTextModule,FormsModule]
})
export class Message{
    @Input() nature: string ="";
    @Input() response: string ="";
    @Input() show:boolean = false;
    @Output() closeEvent = new EventEmitter<void>;
    @Output() showChange = new EventEmitter<boolean>();
    @Output() getMessage = new EventEmitter<any>;

    constructor() {}

    open() {
        this.showChange.emit(false);
        this.getMessage.emit();
    }
    close() {
        this.show = false;
        this.showChange.emit(false);
        this.closeEvent.emit()
    }

}