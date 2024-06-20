# Express框架开发模版

> 适用于Express框架的后端开发模版
>
> 遵循RESTful API风格

[English Project Description](./README_EN.md)

## 项目功能

- [x] mongoDB集成
- [x] passportJS集成，用户登陆验证
- [x] bcryptJS集成，密码加密
- [x] 路由集成
- [x] 中间件模版
- [x] 本地简单Mock数据
- [x] response回应统一管道
- [x] express-validator集成，验证请求数据
- [x] session缓存
  
### 目录结构

```text
|-src
    |-db                                    # 数据库脚本
        |-mongoose                          # mongoose相关脚本
    |-mock                                  # 本地Mock数据脚本
    |-routes                                # 路由脚本目录
    |-strategies                            # passportJS的策略脚本目录
    |-utils                                 # 工具脚本目录
        |-middlewares                       # 中间件脚本目录
        |-helper.mjs                        # bcryptJS工具脚本
        |-response.mjs                      # 响应统一处理管道脚本
        |-validation-schemas.mjs            # express-validator处理模版脚本
    |-create-app.mjs                        # 处理express app管道脚本
    |-index.mjs                             # 入口脚本
|-.gitignore                                # git相关文件
|-package.json                              # 项目包配置文件
|-README_EN.md                              # 英文项目说明文件
|-README.md                                 # 中文项目说明文件

```
