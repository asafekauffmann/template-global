import { Component, OnInit, TemplateRef } from '@angular/core';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';

@Component({
   selector: 'app-modal',
   templateUrl: './modal.component.html',
   styleUrls: ['./modal.component.scss']
})
export class ModalComponent implements OnInit {

   bsInlineValue = new Date();

   modalRef?: BsModalRef;

   constructor(private modalService: BsModalService) { }

   ngOnInit(): void {
   }

   openModalWithClass(template: TemplateRef<any>) {
      this.modalRef = this.modalService.show(
        template,
        Object.assign({}, { class: 'gray modal-lg' })
      );
    }

}
