import { Injectable } from "@angular/core";
import { CounterService } from "./counter.service";

@Injectable()
export class UsersService {
    activeUsers = ['Max', 'Anna'];
    inactiveUsers = ['Chris', 'Manu'];

    constructor(private counterService: CounterService) {
        // this.counterService.activeCountChanged.subscribe((activeUsersNumber: number) => { console.log('Number of Active users: ' + activeUsersNumber) });
        // this.counterService.inactiveCountChanged.subscribe((inactiveUsersNumber: number) => { console.log('Number of Inactive users: ' + inactiveUsersNumber) });
    }

    setToActive(id: number) {
        this.activeUsers.push(this.inactiveUsers[id]);
        this.inactiveUsers.splice(id, 1);
        this.counterService.incrementInactive2ActiveCount();
    }

    setToInactive(id: number) {
        this.inactiveUsers.push(this.activeUsers[id]);
        this.activeUsers.splice(id, 1);
        this.counterService.incrementActive2InactiveCount();
    }

}