export class MenuAction {
  static readonly type = '[Menu] Add item';
  constructor(readonly payload: string) { }
}
