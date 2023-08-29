import {Column, Entity, ManyToOne, PrimaryGeneratedColumn} from "typeorm";
import {User} from "./user";

@Entity()
export class Blog {
    @PrimaryGeneratedColumn()
    id: number;
    @Column({type: 'varchar', length: 255})
    category: string;
    @Column({type: 'varchar', length: 255})
    title: number;
    @Column({type: 'text'})
    status: string;
    @Column({type: 'int'})
    image: number
    @Column({type: 'varchar', length: 255})
    des: string;
    @Column({type: 'varchar', length: 255})
    detail: string;
    @Column({type: 'date'})
    startTime: Date;
    @ManyToOne(() => User, (user) => user.id)
    user: User
}
