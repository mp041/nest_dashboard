export interface Task {
    uuid?: string;
    name: string;
    completed?: boolean;
    description?: string;
    owner?: string;
    duration?: number;
}
