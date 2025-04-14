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
    @Input() visible: boolean = false;
    @Output() action = new EventEmitter<boolean>();
    @Input() nature: string ="";
    @Input() response: string ="";
    //@Input() show:boolean = false;

    constructor() {}

    /*ngOnChanges(changes: SimpleChanges) {
        console.log('Changements détectés :', changes);
        console.log(this.show);
        
        if (changes['show'] && this.show) {
          console.log('Nouvelle show :', changes['show'].currentValue);
          console.log('Ancienne show :', changes['show'].previousValue);
        }
        this.show=false;
    }*/

    send() {
        this.action.emit(true);
    }

    showDialog() {
        this.visible = true;
    }
}