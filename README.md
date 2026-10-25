# 我的博客（GitHub Pages + Jekyll）

网址：<https://lazypasserby.github.io>

## 目录说明

| 文件 / 文件夹 | 作用 | 能不能改 |
|---|---|---|
| `_config.yml` | 站点设置（标题、作者、导航） | 能，改标题最方便 |
| `_posts/` | **所有文章都在这里** | 只往这里加文件 |
| `about.md` | "关于我"页面 | 能 |
| `index.md` | 首页，不用动 | 一般不用动 |
| `assets/main.css` | 真正生效的样式（配色、宽度、字体） | 想换外观改这个 |
| `assets/main.scss` | 上面那份的备份，两处内容一致 | 改上面那个时顺手同步 |
| `_layouts/` | 页面骨架：base 是外壳，home 是首页，post 是文章页，page 是普通页 | 别乱动，改坏了整站变形 |
| `archive.md` | “全部文章”列表页 | 能 |
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

## 想换配色 / 字体

改 `assets/main.css` 开头那一段（`:root { ... }`）：

- `--paper` 是页面底色（现在是米白 `#EFE7E4`）
- `--ink` 是文字颜色（近黑 `#252525`）
- `--sand` 是强调色（沙褐 `#C3B7A7`）
- `--shell` 是最宽多少像素（现在 1240px）

**注意**：改完 CSS 后，把同一行也改到 `assets/main.scss` 里，两边保持一致，以后想接着用 scss 才不乱。

## 本地预览（可选）

    bundle install
    bundle exec jekyll serve

然后打开 <http://127.0.0.1:4000>。