import {Column, Entity, PrimaryGeneratedColumn, OneToOne, OneToMany, ManyToMany,JoinTable } from 'typeorm';
import { Contact } from './contact.entity';
import { Task } from './task.entity';
import { Meeting } from './meeting.entity';

@Entity()
export class Employee{
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  manager : Employee;

  directReports : Employee[]

  @OneToOne(() => Contact, contactInfo => contactInfo.employee )
  contactInfo: Contact;

  @OneToMany(() => Task, (task) => task.employee)
  tasks : Task[];

  @ManyToMany(() => Meeting, (meeting) => meeting.attendees)
  @JoinTable()
  meetings : Meeting[]
}
