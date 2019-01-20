import { HttpClientModule } from "@angular/common/http";
import { NgModule, NO_ERRORS_SCHEMA } from "@angular/core";
import { NativeScriptCommonModule } from "nativescript-angular/common";
import { NativeScriptFormsModule } from "nativescript-angular/forms";
import { NativeScriptUIAutoCompleteTextViewModule } from "nativescript-ui-autocomplete/angular";
import { NativeScriptUIDataFormModule } from "nativescript-ui-dataform/angular";
import { NativeScriptUIListViewModule } from "nativescript-ui-listview/angular";
import { NativeScriptUISideDrawerModule } from "nativescript-ui-sidedrawer/angular/side-drawer-directives";
import { ManageRoutingModule } from "./manage-routing.module";
import { ManageComponent } from "./manage.component";
import { TNSFrescoModule } from "nativescript-fresco/angular";

@NgModule({
    imports: [
        ManageRoutingModule,
        HttpClientModule,
        NativeScriptCommonModule,
        NativeScriptUISideDrawerModule,
        NativeScriptUIListViewModule,
        NativeScriptUIDataFormModule,
        NativeScriptUIAutoCompleteTextViewModule,
        NativeScriptCommonModule,
        NativeScriptFormsModule,
        TNSFrescoModule
    ],
    declarations: [
        ManageComponent
    ],
    schemas: [
        NO_ERRORS_SCHEMA
    ]
})
export class ManageModule { }
