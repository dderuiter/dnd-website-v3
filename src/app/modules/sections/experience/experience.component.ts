import { Component, OnInit } from '@angular/core';
import { ExperienceTagService } from '../../../services/experience-tag.service';

@Component({
    selector: 'app-experience',
    templateUrl: './experience.component.html',
    styleUrls: ['./experience.component.scss']
})
export class ExperienceComponent implements OnInit {

    activeTabNum: number = 0;
    tags: Array<string> = [];

    constructor(private experienceTagService: ExperienceTagService) { }

    ngOnInit() {
        this.showTab(0);
    }

    showTab(tabNum: number) {
        this.activeTabNum = tabNum;

        this.experienceTagService.getTags().subscribe((data: any) => {
            switch (tabNum) {
                case 0:
                    this.tags = data["PRES"]
                    break;
                case 1:
                    this.tags = data["2017"];
                    break;
                case 2:
                    this.tags  = data["2016"];
                    break;
                case 3:
                    this.tags  = data["2015"];
                    break;
                case 4:
                    this.tags  = data["2014"];
                    break;
                default:
                    this.tags  = [];
            }
        });
    }

}
