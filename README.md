# 创建一个自己的react和ts项目，并且自己配置less
### 先用 npx create-react-app my_react --typescript 指令创建一个项目
### 在进入自己的项目git init git add . git commit -m "暴露配置项" 再输入指令npm run eject 
### 进入config文件模仿系统配置scss的配置对less进行配置。同时查找less官网对他的lessOption进行配置（不同于scss的配置）
### 在react-app-env.d.ts对ts进行配置，（仿照系统给的scss）这样将可以 import styles from “./home.module.less”

# 导入路由系统 在routes里面配置，在App.tsx挂载
### 使用BrowserRouter有效避免#值
#  修改配置成自己想要的类名
### less-loader的module配置和css的一样，再去node-module里面找react—nav-ntils里面的getCssModuleLocalldent里面修改自己想要的类名