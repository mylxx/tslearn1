// //1,  布尔
// let bool: boolean
// bool = false

// // 2, 数值 2 8 16 进制
// let num: number
// num = 123 

// 3, 
// let arr1: number[]
// let arr2: Array<number>
// let arr3: (string|number)[]

// 4 y元祖
// // 元组类型 固定长度 固定顺序
// let tuple: [string, number, boolean]
// tuple = ['a', 2, false]

// 5， // 枚举值
// enum Roles {
//   SUPER_ADMIN,
//   ADMIN,
//   USER
// }
// console.log(Roles.SUPER_ADMIN)

// 6，// any类型
// let value: any
// value = '121'
// value = 123
// const arr4: any[] = [1, 'w']

// 7， // void类型 指定函数返回 没有返回值的函数
// const consoleText = (text: string): void => {
//   console.log(text)
// }
// let v: void
// v = undefined
// v = null
// console.log('text')

// 8， 
// // null undefined  可以赋给其他类型的值
// let u: undefined
// u = undefined
// let n: null
// n = null

// //9， never 类型 biaosh永远不存在的
// const errorFunc = (message: string): never => {
//   throw new Error(message)
// }
// const infiniteFunc = (): never => {
//   while(true){

//   }
// }

// // 10， object
// let obj = {
  
// }

// 11 类型断言
// let someValue: any = 'this is a string'
// let strLength: number = (someValue as string).length

// function test(person: String){
//   return `hello${person}`
// }
// console.log(test('12121212'))



// 接口--------------------------
// 接口类型 关键字 interface
// interface LabelledValue {
//   label: string
// }
// function printLabel(labelledObj: LabelledValue){
//   console.log(labelledObj.label)
// }
// let myObj = {
//   size: 10, 
//   label: 'size 10 object'
// }
// printLabel(myObj)

// -----可选属性----
// interface Square{
//   color: string,
//   area: number
// }
// interface SquareConfig{
//   color?: string,
//   width?: number
// }
// function createSquare(config: SquareConfig): Square{
//   let newSquare = {color: 'white', area: 100}
//    if(config.color){
//     newSquare.color = config.color
//   }
//   if(config.width){
//     newSquare.area = config.width * config.width
//   }
//   return newSquare
// }
// let mySquare = createSquare({color: 'black'})

// -----接口中定义只读属性----
// interface Point{
//   readonly x: number,
//   readonly y: number
// }
// let p1: Point = {
//   x: 10,
//   y: 20
// }
