import {animate, style, transition, trigger} from "@angular/animations";

export const fadeStateTrigger = trigger('fade',[
    transition(':enter', [
        style({
            opacity: 0
        }),
        animate(500)
    ]),
    transition(':leave', animate(300, style({
            opacity: 0
        }))
    )
]);
