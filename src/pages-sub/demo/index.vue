<route lang="json5" type="page">
{
  style: { navigationBarTitleText: '物品摆放demo' },
}
</route>

<template>
  <view class="text-center _page-wrapper">
    <view class="_header">
      <view
        v-for="(item, index) in someThings"
        class="thing_item"
        draggable="true"
        :key="index"
        :style="{
          width: item.size.width + 'px',
          height: item.size.height + 'px',
        }"
        @click="addMovableArea(item.size)"
      >
        <view class="font-size-3 flex flex-col h-full justify-end">
          <!-- <text>{{ item.type }}</text> -->
          <text>{{ item.description }}</text>
        </view>
      </view>
    </view>

    <view class="_content">
      <!-- TODO: 实现一 -->
      <movable-area class="h-full w-full move-area">
        <movable-view
          class="move-item"
          v-for="(moveItem, index) in movableArea"
          :key="index"
          direction="all"
          :x="moveItem.x"
          :y="moveItem.y"
          :style="`--item-width: ${moveItem.width}px; --item-height: ${moveItem.height}px;`"
        >
          <view class="move-item_content" />
        </movable-view>
      </movable-area>

      <!-- TODO: 实现二 -->
      <!-- <view class="grid-box">
        <view
          class="grid-box_item"
          v-for="(moveItem, index) in movableArea"
          :key="index"
          :style="`--item-width: ${moveItem.width}px; --item-height: ${moveItem.height}px;`"
        >
          <view class="move-item_content" />
        </view>
      </view> -->

      <!-- TODO: 实现三 -->
      <!-- <view class="grid-box">
        <template v-for="row in gridOptions.rows" :key="row">
          <template v-for="col in gridOptions.cols" :key="col">
            <view
              class="grid-box_item"
              :style="`background-color: ${(row + col) % 2 === 0 ? '#fff' : 'lightgrey'}`"
            >
              <img
                src="data:image/png;base64,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"
                draggable="true"
                style="width: 100%"
              />
            </view>
          </template>
        </template>
      </view> -->
    </view>

    <view class="_footer">
      <wd-button :custom-style="clearWotButtonStyle" icon="setting" type="icon"></wd-button>
      <view class="flex flex-grow-1 gap-[10px] justify-between items-center m-l-[10px]">
        <wd-button :custom-style="`${clearWotButtonStyle} flex-grow: 1;`" type="info">
          取消
        </wd-button>
        <wd-button :custom-style="`${clearWotButtonStyle} flex-grow: 1;`">确认</wd-button>
      </view>
    </view>
  </view>
</template>

<script lang="ts" setup>
import { EnumHelper } from './utils/helper'
import { clearWotButtonStyle } from './utils/style'
import { ISomeThing, SomeThingType } from './types'

const someThings = ref<ISomeThing[]>()
const SomeThingTypeHelper = new EnumHelper(SomeThingType)

const gridOptions = {
  width: '100%',
  height: '100%',
  rows: 8,
  cols: 8,
}

onMounted(() => {
  ;(someThings.value ??= []).push(
    ...Array.from({ length: 2 }).map((_, index) => ({
      id: index + 1,
      type: SomeThingType.柜子,
      size: { width: 60, height: 120, depth: 60 },
      description: SomeThingTypeHelper.getKeyByValue(SomeThingType.柜子) + index,
    })),
    ...Array.from({ length: 5 }).map((_, index) => ({
      id: index + 1,
      type: SomeThingType.板凳,
      size: { width: 60, height: 80, depth: 60 },
      description: SomeThingTypeHelper.getKeyByValue(SomeThingType.板凳) + index,
    })),
  )
})

interface IMovableArea {
  x: number
  y: number
  width: number
  height: number
}
const movableArea = ref<IMovableArea[]>([])
// 检查新区域是否与现有区域重叠
function isOverlapping(newArea: IMovableArea, existingAreas: IMovableArea[]) {
  return existingAreas.some((area) => {
    return !(
      (
        newArea.x + newArea.width <= area.x || // 新区域在现有区域的左边
        newArea.x >= area.x + area.width || // 新区域在现有区域的右边
        newArea.y + newArea.height <= area.y || // 新区域在现有区域的上边
        newArea.y >= area.y + area.height
      ) // 新区域在现有区域的下边
    )
  })
}
// 加入移动区域
function addMovableArea(size: ISomeThing['size']) {
  const newArea = {
    x: 0,
    y: 0,
    width: size.width,
    height: size.height,
  }

  // 尝试找到一个不重叠的位置
  while (isOverlapping(newArea, movableArea.value)) {
    newArea.x += 10 // 可以根据需要调整步长
    newArea.y += 10 // 可以根据需要调整步长
  }

  movableArea.value.push(newArea)
  console.log(movableArea.value)
}

// const x = ref(0)
// const y = ref(0)
// const old = reactive({ x: 0, y: 0 })
// function onChange(e) {
//   old.x = e.detail.x
//   old.y = e.detail.y
// }
</script>

<style lang="scss" scoped>
._page-wrapper {
  --move-item-deviation: 2px;
  --grid-size: 25px;

  display: flex;
  flex-direction: column;
  height: calc(100vh - var(--window-top));

  ._header {
    display: flex;
    width: 100%;
    overflow: auto;
    background-color: #00000068;
  }

  ._content {
    display: flex;
    flex: 1;
    overflow: auto;
    font-size: 20px;

    // 绘制网格
    // background:
    //   linear-gradient(to right, #fff 4px, transparent 0) 0 -4px/8px 100%,
    //   /*垂直*/ linear-gradient(#666 1px, transparent 0) 0 -1px/100% 2em; /*水平*/
    // background: url("data:image/svg+xml,%3Csvg width='100%' height='100%' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath fill='none' d='M0 0h10v10H0z'/%3E%3Cpath fill='%23666' d='M0 0h5v1H0z'/%3E%3C/svg%3E")
    //   0px -0px/1px calc(var(--grid-size) + var(--move-item-deviation) * 2);
  }

  ._footer {
    display: flex;
    padding: 10px;
    border-top: 1px solid lightgrey;
  }
}

.thing_item {
  box-sizing: border-box;
  display: flex;
  flex-shrink: 0;
  align-items: center;
  justify-content: center;
  padding-bottom: 5px;
  margin: 10px;
  font-size: 20px;
  background-color: #fff;
  border-radius: 5px;
  box-shadow: 0 0 5px #000;
}

.move-area {
  --temp-size: calc(var(--grid-size) + var(--move-item-deviation) * 2);
  background-image: linear-gradient(to right, transparent calc(var(--temp-size) - 1px), #ccc 100%),
    linear-gradient(to bottom, transparent calc(var(--temp-size) - 1px), #ccc 100%);
  background-repeat: repeat;
  background-size: var(--temp-size) var(--temp-size);
  border-radius: 5px;

  .move-item {
    width: var(--item-width, 50px);
    height: var(--item-height, 50px);
    // padding: var(--move-item-deviation);
    text-align: center;

    &_content {
      width: 100%;
      height: 100%;
      background-color: #000;
      border-radius: 5px;
      // box-shadow: 0 0 5px #000;
    }
  }
}

.grid-box {
  box-sizing: border-box;
  display: grid;
  flex-shrink: 0;
  grid-template-rows: repeat(v-bind('gridOptions.rows'), 1fr);
  grid-template-columns: repeat(v-bind('gridOptions.cols'), 1fr);
  gap: 1px;
  width: v-bind('gridOptions.width');
  height: v-bind('gridOptions.height');
  // border: 3px solid lightgrey;

  &_item {
    display: flex;
    align-items: center;
    justify-content: center;
    width: var(--item-width, 100%);
    height: var(--item-height, 100%);
    -webkit-box-pack: center;
    -webkit-box-align: center;
    background-color: #000;
  }
}
</style>
