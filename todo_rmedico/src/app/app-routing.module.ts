import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { StoreRouterConnectingModule } from '@ngrx/router-store';
import { TodoListComponent } from '../app/components/todo/todo-list/todo-list.component';

const routes: Routes = [
  { path: '', component: TodoListComponent, pathMatch: 'full' },
  { path: '**', redirectTo: '' }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes),
    StoreRouterConnectingModule.forRoot({ stateKey: 'router' }),
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
