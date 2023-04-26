import { Report } from 'src/reports/report.entity';
import {
  AfterInsert,
  AfterRemove,
  AfterUpdate,
  Entity,
  Column,
  PrimaryGeneratedColumn,
  OneToMany,
} from 'typeorm';

@Entity()
export class User {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  email: string;

  @Column()
  password: string;

  @Column({ default: false })
  admin: boolean;

  @OneToMany(() => Report, (report) => report.user) // Report - Report Class, report - Report Class instance
  reports: Report[];

  @AfterInsert()
  logInsert() {
    console.log('Inserted User With Id', this.id);
  }

  @AfterUpdate()
  logUpdate() {
    console.log('Updated User With Id', this.id);
  }

  @AfterRemove()
  logRemove() {
    console.log('Removed User With Id', this.id);
  }
}
