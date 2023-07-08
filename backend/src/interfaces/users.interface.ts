interface User {
  id: number;
  firstname: string;
  lastname: string;
  mail: string;
  hashed_password: string;
  created_at?: Date;
}

export default User;
