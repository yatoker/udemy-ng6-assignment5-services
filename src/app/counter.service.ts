// import { Output, EventEmitter } from "@angular/core";

export class CounterService {
    inactive2ActiveCounter: number = 0;
    active2InactiveCounter: number = 0;

    // @Output() activeCountChanged = new EventEmitter<number>();
    // @Output() inactiveCountChanged = new EventEmitter<number>();

    incrementInactive2ActiveCount() {
        this.inactive2ActiveCounter++;
        console.log("Inactive -> Active count:" + this.inactive2ActiveCounter)
    }

    incrementActive2InactiveCount() {
        this.active2InactiveCounter++;
        console.log("Active -> Inactive count:" + this.active2InactiveCounter);
    }
}