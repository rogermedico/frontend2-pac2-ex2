import { routerReducer } from '@ngrx/router-store';
import { todoReducer } from './todo/todo.reducer';

export const reducers = {
  todoList: todoReducer,
  router: routerReducer
};
