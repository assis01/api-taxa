import {MigrationInterface, QueryRunner} from "typeorm";

export class InitMigrations1637897703289 implements MigrationInterface {
    name = 'InitMigrations1637897703289'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "taxa" ("id" BIGSERIAL NOT NULL, "categoria" character varying(255), "precoBase" numeric, "precoProQuilometro" numeric, "precoPorCancelamento" numeric, "created_at" TIMESTAMP NOT NULL DEFAULT now(), "updated_at" TIMESTAMP NOT NULL DEFAULT now(), CONSTRAINT "PK_83113b42edaace5600aecf36292" PRIMARY KEY ("id"))`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`DROP TABLE "taxa"`);
    }

}
