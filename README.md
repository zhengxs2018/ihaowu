# ihaowu

[![TypeScript](https://img.shields.io/badge/lang-typescript-informational?style=flat)](https://www.typescriptlang.org)
[![code style: prettier](https://img.shields.io/badge/code_style-prettier-ff69b4.svg?style=flat-square)](https://github.com/prettier/prettier)
[![vue3](https://img.shields.io/badge/vue-3-342b983?style=flat)][vue3]
[![vitejs](https://img.shields.io/badge/hybrid-capacitor-119eff?style=flat)][capacitorjs]
[![vitejs](https://img.shields.io/badge/build-vite-d6cff?style=flat)][vitejs]
![License](https://img.shields.io/badge/license-MIT-brightgreen.svg)

基于 [vue3][vue3] & [vite][vitejs] & [Capacitor][capacitorjs] 开发的移动端混合应用。

## 本地开发

你需要安装 [Node.js][nodejs] 的版本为 >= 10+.

克隆此仓库后运行:

```bash
# 安装依赖
$ yarn install

# 启动 web 服务
$ npm start
```

在 package.json 文件的 scripts 部分还有一些其他脚本可用.

## 启动 ios/android

[Capacitor][capacitorjs] 官方计划在 2022 年支持 [vite][vitejs]，目前只支持 `@vue/cli`，所以启动会比较麻烦。

```bash
# 编译资源
$ yarn build

# 启动程序
$ npm run android/ios
```

## License

MIT

[nodejs]: https://nodejs.org
[vitejs]: https://vitejs.dev/
[vue3]: https://v3.cn.vuejs.org/
[capacitorjs]: https://capacitorjs.com/
