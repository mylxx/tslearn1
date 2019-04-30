// 布尔
let bool: boolean
bool = false
// 数值 2 8 16 进制
let num: number
num = 123

let arr1: number[]
let arr2: Array<number>
let arr3: (string|number)[]

// 元组类型 固定长度 固定顺序
let tuple: [string, number, boolean]
tuple = ['a', 2, false]

// 枚举值
enum Roles {
  SUPER_ADMIN,
  ADMIN,
  USER
}
console.log(Roles.SUPER_ADMIN)

// any类型
let value: any
value = '121'
value = 123
const arr4: any[] = [1, 'w']

// void类型 指定函数返回
const consoleText = (text: string): void => {
  console.log(text)
}
let v: void
v = undefined
v = null
console.log('text')

// null undefined  可以赋给其他类型的值
let u: undefined
u = undefined
let n: null
n = null

// never 类型 biaosh永远不存在的
const errorFunc = (message: string): never => {
  throw new Error(message)
}
const infiniteFunc = (): never => {
  while(true){

  }
}

// object
let obj = {
  
}
