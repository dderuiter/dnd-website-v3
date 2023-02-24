import { Component, OnInit, Renderer2 } from '@angular/core';

@Component({
    selector: 'app-navbar',
    templateUrl: './navbar.component.html',
    styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

    constructor(private renderer: Renderer2) {
    }

    ngOnInit() {
        this.renderer.listen(window, 'scroll', ($event) => {
            // console.log(window.scrollY);
        })
    }

}
