# 陈天元个人简历网站

这是一个纯静态个人简历网站，包含以下页面：

- 首页：index.html
- 职业档案：career.html
- 项目与案例：projects.html
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

如果你准备把这个仓库发布到 GitHub Pages，建议按下面步骤做：

1. 把当前目录初始化并推送到 GitHub 仓库
2. 确保默认分支为 main
3. 进入 GitHub 仓库 Settings → Pages
4. Source 选择 Deploy from a branch
5. Branch 选择 main，Folder 选择 /(root)
6. 保存后等待 GitHub Pages 完成部署

部署后站点通常会出现在：

```text
https://<你的用户名>.github.io/<仓库名>/index.html
```

如果你后续绑定自定义域名，可以再补：

- CNAME
- 404.html
- robots.txt
- sitemap.xml

## 后续可继续增强

1. 增加头像或正式职业照
2. 增加 GitHub / LinkedIn / 微信二维码
3. 把 Projects 页补成更完整的案例集
4. 继续压缩文案，做成更偏招聘阅读风格的版本