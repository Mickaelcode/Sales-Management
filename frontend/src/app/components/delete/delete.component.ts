import { Component,EventEmitter,Input,Output } from '@angular/core';
import { ConfirmationService, MessageService } from 'primeng/api';
import { ConfirmDialog } from 'primeng/confirmdialog';
import { ToastModule } from 'primeng/toast';
import { ButtonModule } from 'primeng/button';
import {ProductService} from '../../../service/productservice';
import {TabsComponent} from '../tabs/tabs.component';

@Component({
    selector: 'delete',
    templateUrl: './delete.component.html',
    standalone: true,
    imports: [ConfirmDialog, ToastModule, ButtonModule],
    providers: [ConfirmationService, MessageService]
})
export class Delete {
    @Input() numProduit!:string;
    @Output() delete = new EventEmitter<void>
    constructor(private confirmationService: ConfirmationService, private messageService: MessageService, private productService: ProductService, private tabscomponent: TabsComponent ) {}

    confirm2(event: Event) {
        this.confirmationService.confirm({
            target: event.target as EventTarget,
            message: 'Voulez-vous supprimer cette ligne?',
            header: 'Suppression',
            icon: 'pi pi-info-circle',
            rejectLabel: 'Cancel',
            rejectButtonProps: {
                label: 'Annuler',
                severity: 'secondary',
                outlined: true,
            },
            acceptButtonProps: {
                label: 'Confirmer',
                severity: 'danger',
            },

            accept: async () => {
                await this.productService.deleteSale(this.numProduit).subscribe({
                    next: (data) =>{
                        console.log(data)
                        this.delete.emit()
                        this.messageService.add({ severity: 'info', summary: 'Confirmer', detail: 'Suppression terminée ' });
                    },
                    error: (err)=>{
                        this.delete.emit()
                        console.log("error delete",err)
                    }
                })
            },
            reject: () => {
                this.messageService.add({ severity: 'error', summary: 'Annuler', detail: 'Suppression rejetée' });
            },
        });
    }
}