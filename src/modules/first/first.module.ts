import { NgModule } from "@angular/core";
import { FirstComponent } from "../first.components";
import {ChildComponent} from "../child.components";
import { SideComponent } from "../side.components";
// import { NgModel } from "@angular/forms";

@NgModule({
    declarations:[FirstComponent,
        ChildComponent,SideComponent
    ],
    exports:[FirstComponent,ChildComponent,SideComponent]
})
export class FirstModule{
    
}