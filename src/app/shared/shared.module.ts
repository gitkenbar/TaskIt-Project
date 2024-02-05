import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { RouterModule } from "@angular/router";
import { TaskItem } from "./taskItem.class";
import { TaskDBService } from "./task-db.service";

NgModule({
  declarations: [
    TaskDBService,
    TaskItem],
  imports: [
    CommonModule,
    RouterModule, 
    FormsModule],
  exports: [
    TaskItem,
    TaskDBService,
    CommonModule],
})

export class SharedModule{};
