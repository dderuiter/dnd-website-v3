import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-education',
    templateUrl: './education.component.html',
    styleUrls: ['./education.component.scss']
})
export class EducationComponent implements OnInit {

    activeTabNum: number = 0;

    constructor() { }

    ngOnInit() {
        this.activeTabNum = 0;
    }

    showTab(tabNum: number) {
        this.activeTabNum = tabNum;
    }

}
