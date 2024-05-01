export class CreateUserDto {
  uuid: string;
  firstname: string;
  lastname: string;
  picture: string;
  email: string;
  password: string;
  username: string;
  followers: number;
  following: number;
}
