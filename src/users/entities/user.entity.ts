import { BaseEntity, Column, Entity, PrimaryGeneratedColumn } from 'typeorm';
import { Exclude, Expose } from 'class-transformer';

@Entity()
export class User extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  userName: string;

  @Column()
  @Exclude()
  password: string;

  @Column()
  role?: string;

  @Expose()
  get nameAndRole() {
    return `${this.userName} - ${this.role}`;
  }
}
