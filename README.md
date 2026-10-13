# 陈天元个人简历网站

这是一个纯静态个人简历网站，包含以下页面：

- 首页：index.html
- 职业档案：career.html
- 项目与案例：projects.html
- FDE 名片：fde.html
- 论文研究：research.html
- 关于我：about.html

## 本地预览

在项目根目录运行：

```bash
python3 -m http.server 4173 -d .
```

然后打开：

```text
http://127.0.0.1:4173/index.html
```

## 文件结构

- html 页面：站点主体
- css/site.css：全站样式
- js/site.js：导航高亮与滚动 reveal 动效
- assets/research：论文研究图表
- 陈天元pm.pdf：简历 PDF

## 发布到 GitHub Pages

本仓库的 Pages **构建方式为 GitHub Actions**（Settings → Pages → Source = GitHub Actions），
由 `.github/workflows/pages.yml` 负责：推送到 `main` 即自动把仓库根目录发布上线，也可在
Actions 页手动 `workflow_dispatch` 触发。

> 注意：仓库如果缺 `.github/workflows/pages.yml`，在 Source = GitHub Actions 的设置下
> **推送不会触发任何部署**，线上会一直停留在上一次成功部署的版本。

当前仓库已经补齐这些 Pages 配套文件：

- 404.html
- robots.txt
- sitemap.xml

部署后站点通常会出现在：

```text
https://<你的用户名>.github.io/<仓库名>/index.html
```

对当前仓库来说，对应地址是：

```text
https://arthaschan.github.io/cv/index.html
```

如果你后续绑定自定义域名，可以再补：

- CNAME
- 更新 robots.txt 和 sitemap.xml 中的域名

## 后续可继续增强

1. 增加头像或正式职业照
2. 增加 GitHub / LinkedIn / 微信二维码
3. 把 Projects 页补成更完整的案例集
4. 继续压缩文案，做成更偏招聘阅读风格的版本