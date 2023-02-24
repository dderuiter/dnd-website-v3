import { Component, OnInit } from '@angular/core';
import { SkillService } from 'src/app/services/skill.service';
import { Skill } from 'src/app/types/skill';

@Component({
    selector: 'app-skills',
    templateUrl: './skills.component.html',
    styleUrls: ['./skills.component.scss']
})
export class SkillsComponent implements OnInit {

    languages: Array<Skill> = [];
    frameworks: Array<Skill> = [];
    libraries: Array<Skill> = [];
    databases: Array<Skill> = [];
    ides: Array<Skill> = [];
    sourceControl: Array<Skill> = [];
    miscellaneous: Array<Skill> = [];

    constructor(private skillService : SkillService) { }

    ngOnInit() {
        this.skillService.getSkills().subscribe((data: any) => {
            this.languages = data["languages"];
            this.frameworks = data["frameworks"];
            this.databases = data["databases"];
            this.libraries = data["libraries"];
            this.sourceControl = data["sourceControl"];
            this.ides = data["ides"];
            this.miscellaneous = data["miscellaneous"];
        });
    }

}
