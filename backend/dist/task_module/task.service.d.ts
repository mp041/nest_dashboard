import { Task } from './interface/task';
import { TaskStoreService } from './task.store.service';
export declare class TaskService {
    private readonly taskStoreService;
    constructor(taskStoreService: TaskStoreService);
    addTask(task: Task): Promise<Task>;
    getTask(id: string): Promise<Task>;
    getAllTask(): Promise<Task[]>;
    getDelete(id: string): Promise<Task[]>;
    filterTask(filter: any): Promise<Task[]>;
}
