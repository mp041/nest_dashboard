import { Task } from './interface/task';
export declare class TaskStoreService {
    tasks: Task[];
    addTask(task: Task): Promise<Task>;
    getTask(id: string): Promise<Task>;
    getAllTask(): Promise<Task[]>;
    getDelete(id: string): Promise<Task[]>;
    filterTask(filter: any): Promise<Task[]>;
}
