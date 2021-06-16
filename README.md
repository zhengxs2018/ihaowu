# ihaowu

[![TypeScript](https://img.shields.io/badge/lang-typescript-informational?style=flat)](https://www.typescriptlang.org)
[![code style: prettier](https://img.shields.io/badge/code_style-prettier-ff69b4.svg?style=flat-square)](https://github.com/prettier/prettier)
[![vue3](https://img.shields.io/badge/vue-3-342b983?style=flat)][vue3]
[![capacitor.js](https://img.shields.io/badge/hybrid-capacitor-119eff?style=flat)][capacitorjs]
![License](https://img.shields.io/badge/license-MIT-brightgreen.svg)

基于 [vue3][vue3] & [Capacitor][capacitorjs] 开发的移动端混合应用。

## 本地开发

你需要安装 [Node.js][nodejs] 的版本为 >= 10+.

克隆此仓库后运行:

```bash
# 安装项目依赖
$ yarn install

# 启动 web 开发
$ yarn serve
```

在 `package.json` 文件的 `scripts` 部分还有一些其他脚本可用.

## 运行 ios 程序

启动 ios 应用，需要安装 xcode 

```bash
# 编译 web 资源
$ yarn build

# 启动 ios 虚拟机（需要 mac 系统）
$ yarn ios
```

运行后会出现设备id，保存这个 id ，后续需要使用

![run-ios](./screenshots/run-ios.png)

目前 ionic 还不支持 vue，所以需要手动更新代码

```bash
# 重新编译 web 资源
$ yarn build

# 使用 target 参数，更新 app 代码，id 是上面运行的那个
$ yarn ios --target D45605FD-CAEB-4568-AA86-7F5EDA071420
```

## License

MIT

[nodejs]: https://nodejs.org
[vue3]: https://v3.cn.vuejs.org/
[capacitorjs]: https://capacitorjs.com/
