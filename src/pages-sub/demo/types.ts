/**
 * `物品` 接口定义
 */
export interface ISomeThing {
  id: number
  type: SomeThingType
  /** 物品尺寸 | 以俯视的角度定义的“宽”、“高”、“深” */
  size: ISomeThingSize
  description?: string
}

/**
 * `物品` 类型定义
 */
export enum SomeThingType {
  柜子 = 'Cabinet',
  板凳 = 'Bench',
}

/**
 * `物品` 尺寸
 */
export interface ISomeThingSize {
  width: number
  height: number
  /** 暂时没做“深度”的考虑 */
  depth?: number
}
