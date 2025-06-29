import { Routes } from "@angular/router";
import { JobListComponent } from "./job-list/job-list.component";
import { CreateJobComponent } from "./create-job/create-job.component";

export const routes: Routes = [
    {
        "path": "",
        "component": JobListComponent,
        "title": "Job List",
    },
    {
        "path": "job",
        "component": CreateJobComponent,
        "title": "Create Job",
    },
];
