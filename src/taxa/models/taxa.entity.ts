import {
  Column,
  CreateDateColumn,
  Entity,
  Generated,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';

@Entity({ name: 'taxa' })
export class Taxa {
  @Generated()
  @PrimaryGeneratedColumn({ type: 'bigint' })
  id: number;

  @Column({
    nullable: true,
    type: 'varchar',
    length: 255,
  })
  categoria: string;

  @Column({
    nullable: true,
    type: 'decimal',
  })
  precoBase: number;

  @Column({
    nullable: true,
    type: 'decimal',
  })
  precoProQuilometro: number;

  @Column({
    nullable: true,
    type: 'decimal',
  })
  precoPorCancelamento: number;

  @CreateDateColumn({ name: 'created_at', type: 'timestamp' })
  createdAt: Date;

  @UpdateDateColumn({
    name: 'updated_at',
    type: 'timestamp',
    onUpdate: 'CURRENT_TIMESTAMP',
  })
  updatedAt: Date;
}
