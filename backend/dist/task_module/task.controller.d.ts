import { ParseBoolPipe } from '@nestjs/common';
import { TaskService } from './task.service';
import { Response } from 'express';
import { idBodyDto, TaskDto } from './dto/task';
export declare class TaskController {
    private readonly taskService;
    constructor(taskService: TaskService);
    getAllTask(res: Response): Promise<Response<any, Record<string, any>>>;
    getTaskById(reqParams: idBodyDto, res: Response): Promise<Response<any, Record<string, any>>>;
    getDeleteById(reqParams: idBodyDto, res: Response): Promise<Response<any, Record<string, any>>>;
    FilterById(filter: ParseBoolPipe, res: Response): Promise<Response<any, Record<string, any>>>;
    createTask(task: TaskDto, res: Response): Promise<Response<any, Record<string, any>>>;
}
