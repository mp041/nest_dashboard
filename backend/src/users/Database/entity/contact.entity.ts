import {Column, Entity, PrimaryGeneratedColumn,OneToOne, JoinColumn } from 'typeorm';
import { Employee } from './employee.enitity';


@Entity()
export class Contact{
  @PrimaryGeneratedColumn()
  id: number;

  @Column({nullable: true})
  phone: string;

  @Column()
  email:string;

  @OneToOne(()=> Employee, employee => employee.contactInfo, {onDelete:'CASCADE'})
  @JoinColumn()
  employee : Employee;
}
