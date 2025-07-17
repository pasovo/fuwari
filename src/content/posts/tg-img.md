---
title: 使用cloudflare自建免费图床
published: 2025-07-10
description: ''
image: ''
tags: [教程，图床]
category: ''
draft: false 
lang: ''
---

# 完成 Cloudflare 配置与 Telegram图床准备

## 1. 获取 Telegram Bot Token 和 Chat ID

### 获取 Telegram Bot Token

1. 打开 [Telegram](https://telegram.org/) 并与 [BotFather](https://t.me/BotFather) 进行聊天。
2. 发送命令 `/newbot` 来创建一个新的 Telegram bot。
3. 按照提示设置 bot 的名称和用户名。
4. 创建成功后，BotFather 会给你一个 Bot Token，例如：

```123456789:ABCDEF_GHIJKL_MNOPQR_STUVWX
123456789:ABCDEF_GHIJKL_MNOPQR_STUVWX
```

将这个 Token 复制下来，我们稍后会用到。

### 获取 Telegram Chat ID

1. 通过搜索 `@userinfobot` 在 Telegram 中找到并启动该机器人。
2. 向其发送任意消息，它将返回你的 `chat_id`。例如：

```
Your chat_id is: 123456789
```

3. 记下这个 `chat_id`

## 2. 完成 Cloudflare 配置

根据 [Cloudflare 配置教程](https://cfbed.sanyue.de/deployment/cloudflare.html)，完成以下步骤：

1. **fork项目并部署：**
- 访问 [CloudFlare ImgBed 项目](https://github.com/MarSeventh/CloudFlare-ImgBed)
- 点击右上角的 "Fork" 按钮
- 登录 [Cloudflare Dashboard](https://dash.cloudflare.com/)
- 选择左侧菜单的 "Workers & Pages"
- 点击 "创建应用程序"
- 选择 "Pages" 选项卡
- 点击 "连接到 Git"
- 选择您 Fork 的 `CloudFlare-ImgBed` 仓库
- 点击 "开始设置"
- 根据官网配置

| 配置项    | 值                         | 说明                |
| ------ | ------------------------- | ----------------- |
| 项目名称   | `cloudflare-imgbed`（或自定义） | 项目标识符             |
| 生产分支   | `main`                    | 生产环境分支            |
| 构建命令   | `npm install`             | **重要：v2.0 新构建命令** |
| 构建输出目录 | `/`                       | 保持默认              |

点击 "保存并部署"

1. 等待首次部署完成（约 2-3 分钟）
2. #### 新建一个kv数据库并绑定 （重要！不然你访问域名会报错密码错误）
3. 再次部署，使用！
