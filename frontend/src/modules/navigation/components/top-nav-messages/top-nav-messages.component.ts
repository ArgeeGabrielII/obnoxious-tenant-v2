import { ChangeDetectionStrategy, Component, Input, OnInit } from '@angular/core';
import { MessagesService } from '@modules/messages/services';

@Component({
    selector: 'sbpro-top-nav-messages',
    changeDetection: ChangeDetectionStrategy.OnPush,
    templateUrl: './top-nav-messages.component.html',
    styleUrls: ['top-nav-messages.component.scss'],
})
export class TopNavMessagesComponent implements OnInit {
    @Input() placement = 'bottom-end';
    dropdownClasses: string[] = [];
    constructor(public messagesService: MessagesService) {}
    ngOnInit() {}
}
