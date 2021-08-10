import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
    selector: 'sbpro-org-create',
    changeDetection: ChangeDetectionStrategy.OnPush,
    templateUrl: './org-create.component.html',
    styleUrls: ['org-create.component.scss'],
})
export class OrgCreateComponent implements OnInit {
    organizationNewForm = this.fb.group({
        name: ['', [Validators.required]],
    });

    constructor(private fb: FormBuilder, private router: Router) {}
    ngOnInit() {}

    onSubmit() {
        if (this.organizationNewForm.status === 'VALID') {
            this.router.navigate(['/auth/multi-tenant-add-users']);
        }

        for (const key in this.organizationNewForm.controls) {
            const control = this.organizationNewForm.controls[key];
            control.markAllAsTouched();
        }
    }

    /* Accessor Methods */

    get nameControl() {
        return this.organizationNewForm.get('name') as FormControl;
    }

    get nameControlValid() {
        return this.nameControl.touched && !this.nameControlInvalid;
    }

    get nameControlInvalid() {
        return this.nameControl.touched && this.nameControl.hasError('required');
    }
}
