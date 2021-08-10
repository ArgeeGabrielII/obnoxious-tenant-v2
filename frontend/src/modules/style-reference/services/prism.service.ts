import { Injectable } from '@angular/core';
import Prism from 'prismjs';
import 'prismjs/components/prism-bash';
import 'prismjs/components/prism-css';
import 'prismjs/components/prism-javascript';
import 'prismjs/components/prism-json';
import 'prismjs/components/prism-markup';
import 'prismjs/components/prism-pug';
import 'prismjs/components/prism-scss';
import 'prismjs/components/prism-typescript';

@Injectable()
export class PrismService {
    Prism: typeof Prism;

    constructor() {
        this.Prism = Prism;
    }

    highlightAll() {
        Prism.highlightAll();
    }
}
