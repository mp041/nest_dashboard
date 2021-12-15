import {Column, Entity, PrimaryGeneratedColumn,ManyToMany, JoinColumn } from 'typeorm';
import { Employee } from './employee.enitity';


@Entity()
export class Meeting{
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  zoomUrl :string;

  @ManyToMany(() => Employee, employee => employee.meetings)
  attendees : Employee[];

}
