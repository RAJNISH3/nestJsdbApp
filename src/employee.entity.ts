import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Employee {
    
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    firstName: string;

    @Column()
    lastName: string;

}