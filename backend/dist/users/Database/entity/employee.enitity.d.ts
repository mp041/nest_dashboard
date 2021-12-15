import { Contact } from './contact.entity';
import { Task } from './task.entity';
import { Meeting } from './meeting.entity';
export declare class Employee {
    id: number;
    name: string;
    manager: Employee;
    directReports: Employee[];
    contactInfo: Contact;
    tasks: Task[];
    meetings: Meeting[];
}
