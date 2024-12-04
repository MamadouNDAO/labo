export class SetAppReady {
  static readonly type = '[LaboRoot] Set App Ready';
  constructor(public appReady: boolean) {
  }
}
