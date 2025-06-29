import { AfterViewInit, Component, ViewChild } from "@angular/core";
import { MatTable, MatTableModule } from "@angular/material/table";
import { MatPaginator, MatPaginatorModule } from "@angular/material/paginator";
import { MatSort, MatSortModule } from "@angular/material/sort";
import { JobListDataSource } from "./job-list-datasource";
import { Job } from "../../models/job.model";

@Component({
  selector: "app-job-list",
  templateUrl: "./job-list.component.html",
  styleUrl: "./job-list.component.css",
  imports: [MatTableModule, MatPaginatorModule, MatSortModule],
})
export class JobListComponent implements AfterViewInit {
  @ViewChild(MatPaginator)
  paginator!: MatPaginator;
  @ViewChild(MatSort)
  sort!: MatSort;
  @ViewChild(MatTable)
  table!: MatTable<Job>;
  dataSource = new JobListDataSource();

  /** Columns displayed in the table. Columns IDs can be added, removed, or reordered. */
  displayedColumns = ["id", "title", "company", "location", "payRange"];

  ngAfterViewInit(): void {
    this.dataSource.sort = this.sort;
    this.dataSource.paginator = this.paginator;
    this.table.dataSource = this.dataSource;
  }
}
