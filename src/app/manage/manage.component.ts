import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { RouterExtensions } from "nativescript-angular/router";
import { RadSideDrawer } from "nativescript-ui-sidedrawer";
import * as app from "tns-core-modules/application";
import { ActivityModel } from "~/services/api/adventurejar/models";
import { ActivityService } from "~/services/api/adventurejar/services";

@Component({
    selector: "Manage",
    moduleId: module.id,
    templateUrl: "./manage.component.html"
})
export class ManageComponent implements OnInit {
    activities: Array<ActivityModel> = [];
    activity: ActivityModel = this.activity = {
        activityName: "",
        activityDescription: "",
        isBadWeatherFriendlyActivity: false,
        isPublicHolidayActivity: false,
        isWeekendActivity: false
    };

    constructor(
        readonly activityService: ActivityService,
        readonly router: Router,
        readonly routerExtensions: RouterExtensions
    ) { }

    ngOnInit(): void {
        this.getAllActivities();
    }

    onDrawerButtonTap(): void {
        const sideDrawer = <RadSideDrawer>app.getRootView();
        sideDrawer.showDrawer();
    }

    getAllActivities() {
        this.activityService.GetAllActivities().subscribe((x) => {
            this.activities = x;
        });
    }

    submit(): void {
        this.activityService.AddActivity(this.activity).subscribe(() => {
            alert({
                title: "Success",
                message: "Activity has been added.",
                okButtonText: "Okay"
            });

            this.routerExtensions.navigate(["/home"], {
                transition: {
                    name: "fade"
                }
            });
        }, (err) => {
            alert({
                title: "Oops !",
                message: "Something unexpected happened",
                okButtonText: "Okay"
            });
        });

    }
}
