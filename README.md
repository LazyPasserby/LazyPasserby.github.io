# 我的博客（GitHub Pages + Jekyll）

网址：<https://lazypasserby.github.io>

## 目录说明

| 文件 / 文件夹 | 作用 | 能不能改 |
|---|---|---|
| `_config.yml` | 站点设置（标题、作者、导航） | 能，改标题最方便 |
| `_posts/` | **所有文章都在这里** | 只往这里加文件 |
| `about.md` | "关于我"页面 | 能 |
| `index.md` | 首页，不用动 | 一般不用动 |
| `assets/main.scss` | 自定义样式（配色、宽度） | 想换外观再改 |
| `Gemfile` | 本地预览用的依赖 | 一般不用动 |

## 怎么发一篇新文章

1. 进入 `_posts` 文件夹，点 **Add file → Create new file**
2. 文件名必须长这样：`2026-11-01-wode-biaoti.md`
   - 前面是日期（年-月-日），中间一个短横线，后面是英文小标题（用短横线代替空格）
   - **例子**：`2026-11-01-first-snow.md`
3. 文件内容照这个格式写（最上面那三行不能少）：

   ```
   ---
   layout: post
   title: "我的文章标题"
   date: 2026-11-01 20:00:00 +0800
   categories: 随笔
   ---

   正文写在这里，空一行就是新的一段。
   ```

4. 点 **Commit changes** 保存，等 1～2 分钟刷新网站就能看到。

## 本地预览（可选）

    bundle install
    bundle exec jekyll serve

然后打开 <http://127.0.0.1:4000>。
