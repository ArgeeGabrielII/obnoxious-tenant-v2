import { ChangeDetectionStrategy, Component, Input, OnInit } from '@angular/core';

@Component({
    selector: 'sbpro-avatar',
    changeDetection: ChangeDetectionStrategy.OnPush,
    templateUrl: './avatar.component.html',
    styleUrls: ['avatar.component.scss'],
})
export class AvatarComponent implements OnInit {
    @Input() imageSrc!: string;
    @Input() classes!: string;

    constructor() {}
    ngOnInit() {}
}
