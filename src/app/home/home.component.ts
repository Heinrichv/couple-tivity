import { HttpClient } from "@angular/common/http";
import { Component, OnInit } from "@angular/core";
import { getCurrentLocation } from "nativescript-geolocation";
import { RadSideDrawer } from "nativescript-ui-sidedrawer";
import { of } from "rxjs";
import * as app from "tns-core-modules/application";
import { ActivityModel } from "~/services/api/adventurejar/models";
import { ActivityService } from "~/services/api/adventurejar/services";

@Component({
    selector: "Home",
    moduleId: module.id,
    templateUrl: "./home.component.html"
})
export class HomeComponent implements OnInit {

    activities = [];
    loading = false;
    activityCriteria: ActivityModel = {
        isBadWeatherFriendlyActivity: false,
        isPublicHolidayActivity: false,
        isWeekendActivity: false
    };

    constructor(readonly activityService: ActivityService, readonly http: HttpClient) { }

    // tslint:disable-next-line:no-empty
    ngOnInit(): void { }

    onDrawerButtonTap(): void {
        const sideDrawer = <RadSideDrawer>app.getRootView();
        sideDrawer.showDrawer();
    }

    draw() {
        this.loading = true;

        this.loading = false;
        this.activityService.GetRandomActivity().subscribe((activity) => {
            alert({
                title: "Activity Found: " + activity.activityName,
                message: activity.activityDescription,
                okButtonText: "Lets Go For It !"
            });

            of(this.getSuggestions(activity.activityName)).subscribe(() => this.loading = false);
        });
    }

    getSuggestions(activity) {
        getCurrentLocation({
            desiredAccuracy: 3,
            updateDistance: 10,
            maximumAge: 20000,
            timeout: 20000
        }).then((x) => {
            const appId = "NskoKMLL00jiD0oomDZ0";
            const appCode = "iunKVG82PuHhJLhdvV00rQ";
            // tslint:disable-next-line:max-line-length
            const url = `https://places.cit.api.here.com/places/v1/autosuggest/?at=${x.latitude},${x.longitude}&q=${activity}&app_id=${appId}&app_code=${appCode}`;

            this.http.get(url).subscribe((res: any) => {
                this.activities = res.results;
            });
        });
    }

    show(): boolean {
        return this.activities.length === 0;
    }

    activityTap(val) {
        setTimeout(() => this.activities = [], 1500);
    }
}
