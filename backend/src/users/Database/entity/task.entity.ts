import {Column, Entity, PrimaryGeneratedColumn, ManyToOne} from 'typeorm';
import { Employee } from './employee.enitity';


@Entity()
export class Task{
  @PrimaryGeneratedColumn()
  id: number;


  @Column()
  tname: string;

  @ManyToOne(()=> Employee, employee => employee.tasks, {onDelete: 'SET NULL'})
  employee : Employee;
}
