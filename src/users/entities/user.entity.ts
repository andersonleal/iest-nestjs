import { BaseEntity, Column, Entity, PrimaryGeneratedColumn } from 'typeorm';
import { Exclude, Expose } from 'class-transformer';

@Entity()
export class User extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  email: string;

  @Column()
  @Exclude()
  password: string;

  @Column({ nullable: true })
  role?: string;

  @Expose()
  get nameAndRole() {
    return `${this.email} - ${this.role}`;
  }
}
