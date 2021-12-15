import { Entity, Column, PrimaryGeneratedColumn, BeforeInsert } from 'typeorm';
import * as crypto from 'crypto';


@Entity()
export class User {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  firstName: string;

  @Column()
  lastName: string;

  @Column()
  phone: string;

  @Column({unique : true})
  email: string;

  // @BeforeInsert()
  // hashPassword() {
  //   this.password = crypto.createHmac('sha256', this.password).digest('hex');
  //   // console.log(this.password);
  //
  //
  // }


  @Column()
  password: string;

  @Column({default : () => 'CURRENT_TIMESTAMP' })
  date: Date;


  @Column({ default: true })
  isActive: boolean;


}
