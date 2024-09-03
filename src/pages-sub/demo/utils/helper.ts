export class EnumHelper<T extends object> {
  public readonly enumType: T

  constructor(enumType: T) {
    this.enumType = enumType
  }

  getValueByKey(key: keyof T): T[keyof T] | undefined {
    return this.enumType[key]
  }

  getKeyByValue<V>(value: V): keyof T | undefined {
    return Object.keys(this.enumType).find((k) => this.enumType[k as keyof T] === value) as
      | keyof T
      | undefined
  }
}
