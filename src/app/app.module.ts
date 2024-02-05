import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { TaskListComponent } from './task-list/task-list.component';
import { TaskNewComponent } from './task-new/task-new.component';
import { HttpClientModule } from '@angular/common/http';
import { LandingComponent } from './landing/landing.component';
import { AuthComponent } from './auth/auth.component';
import { KanbanComponent } from './kanban/kanban.component'
import { TaskDBService } from './shared/task-db.service';
import { RouterModule, Routes } from '@angular/router';
import { TaskEditComponent } from './task-edit/task-edit.component';
import { TaskDeleteComponent } from './task-delete/task-delete.component';

const appRoutes: Routes = [
  { path: 'landing',
  component: LandingComponent
  },
  { path: 'auth',
  component: AuthComponent
  },
  { path: '',
  component: TaskListComponent
  },
  { path: 'kanban',
  component: KanbanComponent
  },
  { path: 'newtask',
  component: TaskNewComponent
  },
  { path: 'edit/:index',
  component: TaskEditComponent
  },
  { path: 'delete/:index',
  component: TaskDeleteComponent
  },
]

@NgModule({
  declarations: [
    AppComponent,
    SidebarComponent,
    TaskListComponent,
    TaskNewComponent,
    LandingComponent,
    AuthComponent,
    KanbanComponent,
    TaskEditComponent,
    TaskDeleteComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [TaskDBService],
  bootstrap: [AppComponent]
})
export class AppModule {

}
