// objects I
export interface ICurrentUser {
  user_id: string | null;
}

export interface IUserState {
  currentUser: ICurrentUser;
  isAuth: boolean;
}
