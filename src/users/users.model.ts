import { Column, DataType, Model, Table } from "sequelize-typescript";
import { ApiProperty } from "@nestjs/swagger";

interface UserCreationAttrs {
  email: string,
  password: string
}

@Table({ tableName: "users" })
export class User extends Model<User, UserCreationAttrs> {
  @ApiProperty({example:"1", description: "uniq identification"})
  @Column({ type: DataType.INTEGER, unique: true, autoIncrement: true, primaryKey: true })
  id: number;
  @ApiProperty({example:"user@gmail.com", description: "email"})
  @Column({ type: DataType.STRING, unique: true, allowNull: false })
  email: string;
  @ApiProperty({example:"3j24f0g342", description: "password"})
  @Column({ type: DataType.STRING, allowNull: false })
  password: string;
  @ApiProperty({example:"false", description: "is baned"})
  @Column({ type: DataType.BOOLEAN, defaultValue: false })
  banned: boolean;
  @ApiProperty({example:"wrote bad words", description: "ban reason"})
  @Column({ type: DataType.STRING, allowNull: true })
  banReason: string;
}
