# 🔥 老炮拉格 · 京鲜精酿 官网视觉改版方案

> 站点：https://2buy.biz | 源码：~/Desktop/程序/laopao-lager-site/
> 定位：SEO流量阵地（非直接转化站） | 调性：军旅硬朗 · 老兵情怀 · 不掺假不将就

---

## 一、当前网站视觉分析

### 1.1 结构概览

当前为**单页网站架构**（index.html），辅以 /products/、/story/、/blog/ 子页。CSS 集中在单文件 `css/style.css`（722行）。

| 区域 | 当前实现 | 评价 |
|------|---------|------|
| **导航栏** | `position:fixed`，半透明暗色背景+毛玻璃效果 | 基础扎实，但缺乏军旅硬朗质感 |
| **英雄区** | 深色渐变+放射性光晕+网格纹理，居中Logo+H1+场景图 | 视觉冲击力中等，Logo为核心记忆点 |
| **品牌三柱** | 3列卡片，白底，SVG图标+渐变顶线hover效果 | 布局合理但偏"柔和"，缺乏军事张力 |
| **场景分割线** | 全宽图片+叠加暗色渐变+居中文字 | 有氛围但图片利用率低 |
| **产品展示** | 深色背景+4列网格，hover上浮+金色边框 | 已初具格调，缺少罐身视觉特写 |
| **精酿科普** | 3列白底卡片，hover阴影 | 过于常规，与品牌调性有割裂感 |
| **FAQ** | 2列网格，左侧金色竖线装饰 | 结构清晰，缺乏辨识度 |
| **页脚** | 深色背景，4列布局 | 功能齐全但视觉收束力度不足 |

### 1.2 当前配色系统

```css
/* === 当前 CSS 变量 === */
--mil-green:      #2d5016;   /* 军绿——偏暗偏暖 */
--mil-green-dark: #1a3a0a;   /* 深军绿 */
--gold:           #c8a44e;   /* 金色——偏黄，金属感不足 */
--gold-light:     #d4b45a;
--gold-dark:      #a8852e;
--dark:           #1a1a1a;   /* ≈青铜黑，保持不变 */
--dark-soft:      #2a2a2a;
--cream:          #f5f0e8;   /* 浅米色背景 */
--cream-light:    #faf7f0;
--white:          #ffffff;
```

### 1.3 现有问题诊断

| 问题 | 影响 | 优先级 |
|------|------|--------|
| 军绿色偏暖偏暗（#2d5016），缺乏冷峻军旅感 | 品牌识别度不足 | 🔴 高 |
| 金色偏黄（#c8a44e），缺少青铜/麦芽金属质感 | "便宜金"既视感 | 🔴 高 |
| 缺乏"赤铜"红色调（强调/热情/部队血脉） | 视觉层次单一 | 🟡 中 |
| 卡片底色纯白与军旅硬朗调性冲突 | 风格割裂 | 🟡 中 |
| 场景分割线图片 `opacity:0.4` 太暗 | 图片资产浪费 | 🟢 低 |
| 无品牌专属纹理/装饰元素（弹道线、战壕线、铆钉等） | 品牌差异化弱 | 🟡 中 |
| 子页面（/story/、/products/）风格与首页一致但排版单调 | 深度不足 | 🟢 低 |

---

## 二、军旅风改版方案

### 2.1 全新配色系统

```css
/* ===== 老炮拉格 v3 · 军旅硬朗配色 ===== */
:root {
  /* === 核心品牌色 === */
  --bronze-black:   #1a1a1a;   /* 青铜黑——主背景/文字，炮管般的深沉 */
  --malt-gold:      #d4a853;   /* 麦芽金——高亮/按钮/标题点缀，精酿的琥珀光泽 */
  --army-green:     #3d5a3c;   /* 军旅绿——品牌识别主色，军装/战地质感 */
  --copper-red:     #b8432e;   /* 赤铜——行动号召/强调/热血，部队血脉色 */

  /* === 衍生色 === */
  --bronze-black-soft:  #242424;   /* 青铜黑·浅（卡片/区块底） */
  --bronze-black-light: #2e2e2e;   /* 青铜黑·更浅（输入框/边框） */
  --malt-gold-dark:     #b8923a;   /* 麦芽金·深（hover态） */
  --malt-gold-light:    #e6c56a;   /* 麦芽金·浅（渐变/高光） */
  --army-green-dark:    #2d4a2c;   /* 军旅绿·深（渐变底/阴影） */
  --army-green-light:   #4d6e4c;   /* 军旅绿·浅（hover态） */
  --copper-red-dark:    #9a3020;   /* 赤铜·深（hover态） */
  --copper-red-light:   #d4553a;   /* 赤铜·浅（渐变） */

  /* === 中性色 === */
  --canvas-dark:    #f5f2ec;   /* 暖灰米底（替代纯白，降低对比度） */
  --canvas-light:   #faf8f4;   /* 极浅米底 */
  --text-on-dark:   #e8e4dc;   /* 深底上文字 */
  --text-muted:     #9a948a;   /* 次要文字 */

  /* === 功能不变 === */
  --radius:         8px;       /* 减小圆角→更硬朗 */
  --radius-sm:      4px;       /* 更尖锐 */
  --shadow:         0 4px 24px rgba(0,0,0,0.25);
  --shadow-lg:      0 12px 48px rgba(0,0,0,0.35);
  --transition:     0.25s cubic-bezier(0.4, 0, 0.2, 1);
}
```

### 2.2 配色使用规范

| 色值 | 用途 | 占比 |
|------|------|------|
| `--bronze-black #1a1a1a` | 主背景（Hero、Footer、Nav、产品区） | 40% |
| `--army-green #3d5a3c` | 品牌主色（标题、图标、分割条、标签、链接） | 25% |
| `--malt-gold #d4a853` | 高亮点缀（CTA按钮、Logo勾边、hover边框、tag底） | 20% |
| `--copper-red #b8432e` | 强调（"够劲够真"标语、限时标记、重要数字、行动号召hover） | 10% |
| `--canvas-dark #f5f2ec` | 浅色区背景（科普区、FAQ区） | 5% |

---

## 三、Logo 替换方案

### 3.1 方案对比

| 维度 | 方案A：炮盾徽章 🏆 推荐 | 方案B：古法铜釜 | 方案C：战壕铭牌 |
|------|----------------------|-----------------|-----------------|
| **形态** | 盾形轮廓 + 交叉炮管 + 麦穗环绕 + 五角星 + 飘带 | 传统铜釜（酿酒釜）剪影 + 军绿环纹 + 麦芽滴落 | 战壕木板纹理底板 + 金属铭牌铆钉四角 + 凸版文字 |
| **记忆点** | ⭐⭐⭐⭐⭐ 极高 | ⭐⭐⭐ 中等 | ⭐⭐⭐ 中等 |
| **行业辨识度** | 军旅+酿酒双语义 | 偏酿酒，军旅弱 | 偏军旅，酿酒感弱 |
| **与品牌名关联** | "炮"→炮管，"盾"→守护/品质 | "釜"→酿造工艺 | "战壕"→战场记忆 |
| **可缩放性** | ✅ SVG天然支持，favicon独立提取 | ⚠️ 圆形构图缩放有利 | ⚠️ 横长方形，nav bar兼容需裁剪 |
| **与现有Logo衔接** | 最平滑——现有`logo-military-hd.png`已含炮盾元素 | 需要完全重做 | 需要完全重做 |
| **情感传达** | 守护、荣誉、力量、正统 | 传统、匠心、厚重 | 坚毅、粗粝、不修边幅 |

### 3.2 推荐方案A：炮盾徽章 详细设计

```
┌───────────────────────────────────┐
│          ★ 五角星（顶）           │
│    ╔═══════════════════════╗      │
│    ║  🔫  ╳ 交叉炮管  🔫  ║      │
│    ║     盾形主体           ║      │
│    ║  🌾 麦穗左  麦穗右 🌾 ║      │
│    ║  ─── 飘带 ───         ║      │
│    ║   老 炮 拉 格          ║      │
│    ╚═══════════════════════╝      │
│        波斯特 PROST               │
└───────────────────────────────────┘
```

**配色方案：**
- 盾牌主体：`青铜黑 #1a1a1a` 底，`麦芽金 #d4a853` 勾边（2px）
- 交叉炮管：`赤铜 #b8432e` 金属质感渐变
- 麦穗：`麦芽金 #d4a853` → `军旅绿 #3d5a3c` 双色交替
- 五角星：`赤铜 #b8432e` 填充
- 飘带/"老炮拉格"文字：`麦芽金 #d4a853`
- 可选：盾牌左侧打光 → 右侧渐变阴影，增强立体感

**子标识系统：**
- **Favicon（16×16 / 32×32）**：仅保留五角星+交叉炮管 + 盾形轮廓
- **Nav Logo（40px高）**：完整徽章 SVG 缩放
- **Hero Logo（160px高）**：带浮雕阴影效果的 PNG（当前已有 `logo-military-hd.png`，风格接近，仅需调整配色至新色板）
- **OG Image（1200×630）**：炮盾徽章居中 + 品牌标语"够劲·够真" + 背景炮管剪影暗纹

### 3.3 现有Logo衔接方案

当前使用的 `logo-military-hd.png` 和 `logo-military.svg` 已具备盾形+炮管+麦穗+五星元素，改版**不是替换而是色板迁移**：

| 当前Logo元素 | 当前颜色 | 改为 |
|-------------|---------|------|
| 盾牌底色 | 深军绿 | **青铜黑 #1a1a1a** |
| 盾牌边框 | 金色 | **麦芽金 #d4a853** |
| 炮管 | 金色 | **赤铜 #b8432e**（带金属渐变） |
| 麦穗 | 金色 | **麦芽金** + **军旅绿** 双色 |
| 五角星 | 金色 | **赤铜 #b8432e** |
| 飘带文字 | 金色 | **麦芽金 #d4a853** |

> **执行方式**：用 Figma/AI 对现有 SVG 进行色板替换即可，无需重新绘制。

---

## 四、图片排版方案

### 4.1 图片资产清单

| 资产 | 路径 | 用途 | 当前使用 |
|------|------|------|---------|
| 品牌海报 | `/images/brand-poster.jpg` | Hero底部/产品页 | ✅ 已用 |
| 罐身场景 | `/images/can-scene.jpg` | 场景分割线 | ✅ 已用 |
| 罐身设计 | `/images/can-design.jpg` | 第二分割线 | ✅ 已用 |
| 双花拉格 | `/images/products/shuanghua-lager.jpg` | 产品展示 | ✅ 已用 |
| 夜岗哨原浆 | `/images/products/yegangshao.jpg` | 产品展示 | ✅ 已用 |
| 荣归白啤 | `/images/products/can_330.jpg` | 产品展示 | ✅ 已用 |
| 果啤系列 | `/images/products/beer1.jpg` | 产品展示 | ✅ 已用 |
| 电商场景 | `/images/ecommerce-scene.jpg` | 品牌故事页 | ✅ 已用 |
| 京鲜资产 | `/images/jingxian-assets.png` | 未使用 | ❌ 待开发 |
| 桶装线 | `/images/products/barrel.jpg` | 未使用 | ❌ 待开发 |
| 产品白底 | `/images/product-white.jpg` | 未使用 | ❌ 待开发 |
| 包装特写 | `/images/packaging.jpg` | 未使用 | ❌ 待开发 |
| 标贴正面 | `/images/label-front.jpg` | 未使用 | ❌ 待开发 |
| 500ml瓶 | `/images/products/bottle_500.jpg` | 未使用 | ❌ 待开发 |
| 1L罐 | `/images/products/can_1000.jpg` | 未使用 | ❌ 待开发 |
| 透明底双花 | `/images/products/shuanghua-trans.png` | 罐身合成 | ❌ 待开发 |
| 透明底夜岗 | `/images/products/yegangshao-trans.png` | 罐身合成 | ❌ 待开发 |

### 4.2 新增图片排版区块

#### 区块A：罐身设计特写轮播（新增）

```html
<!-- 替代当前产品区的静态网格，改为横向滚动/轮播 -->
<section class="can-showcase">
  <!-- 每一罐：透明底PNG叠加军旅背景纹理 -->
  <div class="can-card">
    <img src="/images/products/shuanghua-trans.png" alt="老炮拉格·双花拉格">
    <div class="can-specs">
      <span class="spec-badge">13°P</span>
      <span class="spec-badge">Cascade+Saaz</span>
      <span class="spec-badge">≥4.5% vol</span>
    </div>
    <h3>老炮拉格 <span>双花拉格</span></h3>
  </div>
  <!-- ... 夜岗哨、荣归、果啤同理 ... -->
</section>
```

**排版参数：**
- 桌面：4罐横排，每罐 `min-width: 240px`，`gap: 32px`
- 平板：2×2 网格
- 手机：纵向堆叠
- 罐身高度：`320px`（`object-fit: contain`，保留完整罐身）
- 背景：`青铜黑 #1a1a1a` + 弹道线纹理 SVG pattern

#### 区块B：桶装线视觉区（新增）

```html
<section class="keg-section">
  <div class="keg-hero">
    <img src="/images/products/barrel.jpg" alt="桶装线">
    <div class="keg-overlay">
      <div class="military-badge">B端合作</div>
      <h2>桶装直供 · 战备级供应链</h2>
      <p>20L不锈钢桶 · 青岛直发 · 买4送1</p>
      <a href="#contact" class="btn btn-copper">联系集合号</a>
    </div>
  </div>
  <!-- 下方3列：桶装规格卡片 -->
</section>
```

**排版参数：**
- 左图右文布局（桌面），图占 55%宽度
- 图片加 `赤铜` 色边框 + 阴影（模拟铭牌）
- overlay 左侧切入动画

#### 区块C：包装/标贴特写（现有分割线增强）

当前分割线图片 `opacity: 0.4` 太暗 → 改为：

```css
.scene-divider img {
  opacity: 0.55;           /* 从0.4提升 */
  filter: saturate(1.1);    /* 增强色彩 */
}
.scene-divider-overlay {
  background: linear-gradient(
    135deg,
    rgba(26,26,26,0.75) 0%,     /* 青铜黑 */
    rgba(61,90,60,0.55) 50%,    /* 军旅绿 */
    rgba(26,26,26,0.65) 100%
  );
}
```

#### 区块D：电商场景信任区（新增，SEO关键）

```html
<section class="trust-section">
  <img src="/images/ecommerce-scene.jpg" alt="京鲜精酿·精品包装">
  <div class="trust-content">
    <h2>京鲜精酿 · 品质可鉴</h2>
    <div class="trust-grid">
      <div class="trust-item">
        <span class="trust-number" data-count="21">21</span>
        <span class="trust-label">天低温慢酿</span>
      </div>
      <div class="trust-item">
        <span class="trust-number">13</span>
        <span class="trust-label">°P 原麦汁浓度</span>
      </div>
      <div class="trust-item">
        <span class="trust-number">0</span>
        <span class="trust-label">大米玉米添加</span>
      </div>
      <div class="trust-item">
        <span class="trust-number">54635</span>
        <span class="trust-label">部队番号传承</span>
      </div>
    </div>
  </div>
</section>
```

### 4.3 图片SEO优化

- 所有 `<img>` 保留 `alt` 属性（关键词自然嵌入）
- 产品图添加 `srcset` 多分辨率
- 透明底PNG文件使用 `loading="lazy"` 不阻塞首屏
- 罐身图添加 `itemprop="image"` schema 标记
- 场景图上方叠加文字做 `h2`（搜索引擎可读，视觉上不失美观）

---

## 五、完整CSS改版代码

### 5.1 CSS变量区（替换 `:root{}` 块）

```css
/* =============================================
   老炮拉格 v3 · 军旅硬朗视觉系统
   Brand: 京鲜啤酒 · 老炮拉格
   Colors: 青铜黑/麦芽金/军旅绿/赤铜
   ============================================= */

* { margin: 0; padding: 0; box-sizing: border-box; }

:root {
  /* ── 核心品牌色 ── */
  --bronze-black:   #1a1a1a;
  --malt-gold:      #d4a853;
  --army-green:     #3d5a3c;
  --copper-red:     #b8432e;

  /* ── 衍生色 ── */
  --bronze-soft:    #242424;
  --bronze-light:   #2e2e2e;
  --bronze-border:  #383838;
  --malt-dark:      #b8923a;
  --malt-light:     #e6c56a;
  --army-dark:      #2d4a2c;
  --army-light:     #4d6e4c;
  --copper-dark:    #9a3020;
  --copper-light:   #d4553a;

  /* ── 中性色 ── */
  --canvas:         #f5f2ec;
  --canvas-light:   #faf8f4;
  --white:          #ffffff;
  --text-primary:   #1a1a1a;
  --text-secondary: #5c5852;
  --text-muted:     #9a948a;
  --text-on-dark:   #e8e4dc;
  --text-on-dark-dim: rgba(232,228,220,0.55);

  /* ── 结构 ── */
  --radius:         8px;
  --radius-sm:      4px;
  --radius-lg:      16px;
  --shadow:         0 4px 24px rgba(0,0,0,0.25);
  --shadow-lg:      0 12px 48px rgba(0,0,0,0.35);
  --shadow-gold:    0 8px 32px rgba(212,168,83,0.2);
  --shadow-copper:  0 6px 24px rgba(184,67,46,0.25);
  --transition:     0.25s cubic-bezier(0.4, 0, 0.2, 1);
  --transition-slow: 0.4s cubic-bezier(0.25, 0, 0.15, 1);

  /* ── 排版 ── */
  --font-stack: -apple-system, BlinkMacSystemFont, "Segoe UI",
    "PingFang SC", "Hiragino Sans GB", "Microsoft YaHei",
    "Noto Sans SC", sans-serif;
  --font-mono: "SF Mono", "Cascadia Code", "Consolas", monospace;
}
```

### 5.2 全局基础样式

```css
body {
  font-family: var(--font-stack);
  color: var(--text-primary);
  line-height: 1.75;
  background: var(--canvas-light);
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

/* ── 全局链接 ── */
a {
  color: var(--army-green);
  text-decoration: none;
  transition: color var(--transition);
}
a:hover { color: var(--malt-gold); }

/* ── 全局标题 ── */
h1, h2, h3, h4, h5, h6 {
  font-weight: 800;
  letter-spacing: 0.5px;
  line-height: 1.3;
}
```

### 5.3 导航栏

```css
/* ===== Navigation ===== */
.nav {
  position: fixed;
  top: 0; left: 0; right: 0;
  z-index: 100;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 14px 40px;
  background: rgba(26,26,26,0.94);
  backdrop-filter: blur(20px);
  -webkit-backdrop-filter: blur(20px);
  border-bottom: 2px solid rgba(212,168,83,0.12); /* 麦芽金底线 */
  transition: background var(--transition), border-color var(--transition);
}
.nav.scrolled {
  background: rgba(26,26,26,0.98);
  border-bottom-color: rgba(212,168,83,0.25);
}

.logo {
  display: flex;
  align-items: center;
  text-decoration: none;
  gap: 12px;
}
.logo-img {
  height: 40px;
  width: auto;
  filter: drop-shadow(0 2px 6px rgba(0,0,0,0.4));
  transition: filter var(--transition);
}
.logo:hover .logo-img {
  filter: drop-shadow(0 2px 12px rgba(212,168,83,0.6));
}
.logo-fallback {
  font-size: 20px;
  font-weight: 900;
  color: var(--white);
  letter-spacing: 4px;
  text-transform: uppercase;
}

.nav-links {
  display: flex;
  align-items: center;
  gap: 4px;
}
.nav-links a {
  color: rgba(232,228,220,0.7);
  text-decoration: none;
  padding: 8px 18px;
  font-size: 14px;
  font-weight: 600;
  letter-spacing: 0.8px;
  border-radius: var(--radius-sm);
  transition: all var(--transition);
  position: relative;
}
.nav-links a:hover {
  color: var(--malt-gold);
  background: rgba(212,168,83,0.08);
}
.nav-links a.active {
  color: var(--malt-gold);
}
/* 激活态下划线 */
.nav-links a.active::after {
  content: '';
  position: absolute;
  bottom: 2px;
  left: 50%;
  transform: translateX(-50%);
  width: 20px;
  height: 3px;
  background: var(--copper-red);
  border-radius: 2px;
}

.nav-cta {
  background: var(--malt-gold) !important;
  color: var(--bronze-black) !important;
  font-weight: 800 !important;
  padding: 8px 24px !important;
  letter-spacing: 1px !important;
  box-shadow: 0 2px 12px rgba(212,168,83,0.25);
}
.nav-cta:hover {
  background: var(--malt-light) !important;
  color: var(--bronze-black) !important;
  transform: translateY(-1px);
  box-shadow: 0 4px 20px rgba(212,168,83,0.4);
}
```

### 5.4 Hero英雄区

```css
/* ===== Hero ===== */
.hero {
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  position: relative;
  overflow: hidden;
}
/* 深度渐变背景 —— 青铜黑→军旅绿→青铜黑 */
.hero::before {
  content: '';
  position: absolute;
  inset: 0;
  background:
    radial-gradient(ellipse at 30% 40%, rgba(212,168,83,0.06) 0%, transparent 55%),
    radial-gradient(ellipse at 70% 60%, rgba(61,90,60,0.35) 0%, transparent 55%),
    radial-gradient(ellipse at 50% 100%, rgba(184,67,46,0.08) 0%, transparent 40%),
    linear-gradient(165deg, #0a0a0a 0%, #1a2a1a 35%, #1a1a1a 70%, #0d0d0d 100%);
  z-index: 0;
}

/* 军旅纹理叠加层 */
.hero-pattern {
  position: absolute;
  inset: 0;
  opacity: 0.05;
  background-image:
    /* 弹道虚线（水平） */
    repeating-linear-gradient(
      0deg,
      transparent,
      transparent 120px,
      rgba(212,168,83,0.3) 120px,
      rgba(212,168,83,0.3) 122px
    ),
    /* 弹道虚线（垂直） */
    repeating-linear-gradient(
      90deg,
      transparent,
      transparent 120px,
      rgba(212,168,83,0.3) 120px,
      rgba(212,168,83,0.3) 122px
    );
  z-index: 0;
}

.hero-content {
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  padding: 120px 20px 40px;
  position: relative;
  z-index: 1;
}

.hero-logo {
  margin-bottom: 36px;
  animation: fadeInDown 0.8s ease-out;
  position: relative;
}
/* Logo光晕 */
.hero-logo::after {
  content: '';
  position: absolute;
  inset: -20px;
  border-radius: 50%;
  background: radial-gradient(circle, rgba(212,168,83,0.1) 0%, transparent 70%);
  z-index: -1;
}
.hero-logo-img {
  height: 160px;
  width: auto;
  filter: drop-shadow(0 10px 30px rgba(0,0,0,0.6))
          drop-shadow(0 0 20px rgba(212,168,83,0.15));
  transition: filter 0.5s ease;
}
.hero:hover .hero-logo-img {
  filter: drop-shadow(0 10px 30px rgba(0,0,0,0.6))
          drop-shadow(0 0 30px rgba(212,168,83,0.25));
}

.hero-content h1 {
  font-size: clamp(42px, 8vw, 84px);
  color: var(--white);
  letter-spacing: 8px;
  line-height: 1.15;
  margin-bottom: 16px;
  font-weight: 900;
  animation: fadeInUp 0.8s ease-out 0.2s both;
  text-shadow: 0 4px 20px rgba(0,0,0,0.5);
}
.hero-content h1 span {
  color: var(--malt-gold);
  font-size: 0.45em;
  display: block;
  letter-spacing: 12px;
  margin-top: 14px;
  font-weight: 400;
  text-transform: uppercase;
}

.hero-sub {
  color: rgba(232,228,220,0.55);
  font-size: clamp(14px, 2vw, 18px);
  margin-bottom: 44px;
  max-width: 560px;
  letter-spacing: 1.5px;
  animation: fadeInUp 0.8s ease-out 0.4s both;
}

.hero-actions {
  display: flex;
  gap: 16px;
  flex-wrap: wrap;
  justify-content: center;
  animation: fadeInUp 0.8s ease-out 0.6s both;
}
```

### 5.5 按钮系统

```css
/* ===== Buttons ===== */
.btn {
  display: inline-flex;
  align-items: center;
  gap: 8px;
  padding: 14px 40px;
  background: var(--malt-gold);
  color: var(--bronze-black);
  text-decoration: none;
  border-radius: var(--radius-sm);
  font-weight: 800;
  font-size: 15px;
  letter-spacing: 1px;
  transition: all var(--transition);
  border: none;
  cursor: pointer;
  position: relative;
  overflow: hidden;
}
.btn:hover {
  background: var(--malt-light);
  transform: translateY(-2px);
  box-shadow: var(--shadow-gold);
}
/* 赤铜按钮——用于重要CTA */
.btn-copper {
  background: var(--copper-red);
  color: var(--white);
}
.btn-copper:hover {
  background: var(--copper-light);
  box-shadow: var(--shadow-copper);
  color: var(--white);
}
/* 军旅绿按钮 */
.btn-army {
  background: var(--army-green);
  color: var(--white);
}
.btn-army:hover {
  background: var(--army-light);
  color: var(--white);
  box-shadow: 0 6px 24px rgba(61,90,60,0.3);
}
/* 描边按钮 */
.btn-outline {
  background: transparent;
  color: var(--malt-gold);
  border: 2px solid var(--malt-gold);
}
.btn-outline:hover {
  background: var(--malt-gold);
  color: var(--bronze-black);
  box-shadow: var(--shadow-gold);
}
.btn-white {
  background: var(--white);
  color: var(--bronze-black);
}
.btn-white:hover {
  background: var(--canvas);
}

/* 按钮左箭头微交互 */
.btn-arrow::after {
  content: '→';
  margin-left: 4px;
  transition: transform var(--transition);
}
.btn-arrow:hover::after {
  transform: translateX(4px);
}
```

### 5.6 品牌三柱（Pillars）

```css
/* ===== 品牌三柱 ===== */
.pillars-section {
  max-width: 1240px;
  margin: 100px auto;
  padding: 0 40px;
}

.section-title {
  text-align: center;
  font-size: clamp(26px, 4vw, 38px);
  color: var(--bronze-black);
  margin-bottom: 12px;
  font-weight: 900;
  letter-spacing: 2px;
  position: relative;
  display: inline-block;
  width: 100%;
}
/* 标题装饰线 */
.section-title::after {
  content: '';
  display: block;
  width: 60px;
  height: 4px;
  background: var(--copper-red);
  margin: 16px auto 0;
  border-radius: 2px;
}

.section-subtitle {
  text-align: center;
  color: var(--text-secondary);
  font-size: 16px;
  margin-bottom: 56px;
  max-width: 600px;
  margin-left: auto;
  margin-right: auto;
  line-height: 1.6;
}

.pillars-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 28px;
}

.pillar {
  text-align: center;
  padding: 52px 32px;
  border-radius: var(--radius-lg);
  background: var(--bronze-soft);
  border: 1px solid var(--bronze-border);
  transition: all var(--transition-slow);
  position: relative;
  overflow: hidden;
  cursor: default;
}
/* 顶部军衔横条 */
.pillar::before {
  content: '';
  position: absolute;
  top: 0; left: 0; right: 0;
  height: 4px;
  background: linear-gradient(90deg, var(--army-green), var(--malt-gold), var(--copper-red));
  opacity: 0;
  transition: opacity var(--transition-slow);
}
.pillar:hover::before { opacity: 1; }
.pillar:hover {
  transform: translateY(-8px);
  box-shadow: var(--shadow-lg);
  border-color: var(--malt-gold);
}

/* 图标容器——军旅风格 */
.pillar-icon {
  width: 72px;
  height: 72px;
  margin: 0 auto 24px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: linear-gradient(135deg, var(--army-green), var(--army-dark));
  border-radius: 4px; /* 方形棱角→更硬朗 */
  border: 2px solid rgba(212,168,83,0.3);
  position: relative;
}
.pillar-icon::after {
  content: '';
  position: absolute;
  inset: -4px;
  border: 1px solid rgba(212,168,83,0.15);
  border-radius: 6px;
}
.pillar-icon svg {
  width: 34px;
  height: 34px;
  fill: var(--malt-gold);
}

.pillar h3 {
  font-size: 22px;
  color: var(--malt-gold);
  margin-bottom: 14px;
  font-weight: 800;
  letter-spacing: 1.5px;
  text-transform: uppercase;
}
.pillar p {
  color: var(--text-on-dark-dim);
  font-size: 15px;
  line-height: 1.85;
  margin-bottom: 22px;
}
.pillar a {
  color: var(--army-green);
  text-decoration: none;
  font-weight: 700;
  font-size: 14px;
  display: inline-flex;
  align-items: center;
  gap: 6px;
  transition: all var(--transition);
  padding: 6px 18px;
  border: 1px solid transparent;
  border-radius: var(--radius-sm);
}
.pillar a:hover {
  color: var(--malt-gold);
  border-color: var(--malt-gold);
  gap: 10px;
}
```

### 5.7 场景分割线（增强版）

```css
/* ===== Scene Divider ===== */
.scene-divider {
  position: relative;
  height: 460px;
  overflow: hidden;
  background: var(--bronze-black);
}
.scene-divider img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  opacity: 0.55;
  filter: saturate(1.1) contrast(1.05);
  transition: opacity 0.6s ease;
}
.scene-divider:hover img {
  opacity: 0.6;
}
.scene-divider-overlay {
  position: absolute;
  inset: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  text-align: center;
  padding: 40px;
  background: linear-gradient(
    135deg,
    rgba(26,26,26,0.78) 0%,
    rgba(61,90,60,0.55) 45%,
    rgba(26,26,26,0.65) 100%
  );
}
.scene-divider-overlay h2 {
  color: var(--white);
  font-size: clamp(24px, 4vw, 36px);
  font-weight: 900;
  margin-bottom: 10px;
  letter-spacing: 3px;
  text-shadow: 0 4px 16px rgba(0,0,0,0.4);
}
.scene-divider-overlay p {
  color: var(--text-on-dark-dim);
  font-size: 17px;
  max-width: 520px;
}
```

### 5.8 产品展示区

```css
/* ===== Product Showcase ===== */
.products-section {
  padding: 120px 40px;
  background: var(--bronze-black);
  position: relative;
  overflow: hidden;
}
/* 军绿微光背景 */
.products-section::before {
  content: '';
  position: absolute;
  inset: 0;
  background:
    radial-gradient(ellipse at 50% 0%, rgba(61,90,60,0.15) 0%, transparent 60%),
    radial-gradient(ellipse at 50% 100%, rgba(212,168,83,0.05) 0%, transparent 50%);
  pointer-events: none;
}

.products-section .section-title {
  color: var(--white);
}
.products-section .section-subtitle {
  color: var(--text-on-dark-dim);
}

.showcase-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 24px;
  max-width: 1200px;
  margin: 0 auto 48px;
}

.showcase-item {
  background: var(--bronze-soft);
  border: 1px solid var(--bronze-border);
  border-radius: var(--radius-lg);
  overflow: hidden;
  text-align: center;
  transition: all var(--transition-slow);
  cursor: pointer;
  position: relative;
}
/* 底部军旅绿渐变条 */
.showcase-item::after {
  content: '';
  position: absolute;
  bottom: 0; left: 0; right: 0;
  height: 3px;
  background: linear-gradient(90deg, var(--army-green), var(--malt-gold));
  transform: scaleX(0);
  transition: transform var(--transition-slow);
  transform-origin: center;
}
.showcase-item:hover::after {
  transform: scaleX(1);
}
.showcase-item:hover {
  transform: translateY(-8px);
  border-color: var(--malt-gold);
  box-shadow: 0 16px 48px rgba(0,0,0,0.4);
}

.showcase-item img {
  width: 100%;
  height: 280px;
  object-fit: cover;
  display: block;
  transition: transform 0.5s ease;
  border-bottom: 1px solid var(--bronze-border);
}
.showcase-item:hover img {
  transform: scale(1.06);
}

.showcase-info {
  padding: 28px 20px 32px;
}
.showcase-info h3 {
  color: var(--white);
  font-size: 21px;
  margin-bottom: 6px;
  font-weight: 800;
  letter-spacing: 1px;
}
.showcase-info p {
  color: var(--text-on-dark-dim);
  font-size: 13px;
  margin-bottom: 14px;
}

.tag {
  display: inline-block;
  background: rgba(212,168,83,0.12);
  color: var(--malt-gold);
  padding: 5px 16px;
  border-radius: 3px; /* 锐角标签 */
  font-size: 12px;
  font-weight: 700;
  letter-spacing: 0.5px;
  border: 1px solid rgba(212,168,83,0.2);
}
.tag-army {
  background: rgba(61,90,60,0.2);
  color: var(--army-light);
  border-color: rgba(61,90,60,0.3);
}
.tag-copper {
  background: rgba(184,67,46,0.15);
  color: var(--copper-light);
  border-color: rgba(184,67,46,0.25);
}
```

### 5.9 精酿科普区

```css
/* ===== 精酿科普（替代原 .knowledge-section） ===== */
.knowledge-section {
  max-width: 1240px;
  margin: 100px auto;
  padding: 0 40px;
}

.knowledge-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(340px, 1fr));
  gap: 24px;
}

.knowledge-card {
  background: var(--canvas);
  border: 1px solid rgba(0,0,0,0.06);
  border-radius: var(--radius-lg);
  padding: 40px 36px;
  transition: all var(--transition-slow);
  position: relative;
  overflow: hidden;
}
/* 左侧军旅绿色块 */
.knowledge-card::before {
  content: '';
  position: absolute;
  left: 0; top: 0; bottom: 0;
  width: 4px;
  background: linear-gradient(180deg, var(--army-green), var(--malt-gold));
  opacity: 0;
  transition: opacity var(--transition-slow);
}
.knowledge-card:hover::before { opacity: 1; }
.knowledge-card:hover {
  box-shadow: var(--shadow);
  border-color: var(--malt-gold);
  transform: translateY(-4px);
}

.knowledge-card h4 {
  color: var(--army-green);
  font-size: 19px;
  margin-bottom: 12px;
  font-weight: 800;
  letter-spacing: 0.5px;
}
.knowledge-card p {
  color: var(--text-secondary);
  font-size: 14px;
  line-height: 1.85;
  margin-bottom: 18px;
}
.knowledge-card a {
  color: var(--copper-red);
  text-decoration: none;
  font-weight: 700;
  font-size: 14px;
  display: inline-flex;
  align-items: center;
  gap: 6px;
  transition: all var(--transition);
}
.knowledge-card a:hover {
  color: var(--copper-dark);
  gap: 10px;
}
```

### 5.10 FAQ区

```css
/* ===== FAQ ===== */
.faq-section {
  max-width: 1000px;
  margin: 100px auto;
  padding: 0 40px;
}

.faq-grid {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 20px;
}

.faq-item {
  padding: 28px 32px;
  background: var(--canvas);
  border-radius: var(--radius);
  border: 1px solid rgba(0,0,0,0.05);
  border-left: 4px solid var(--army-green);
  transition: all var(--transition-slow);
  position: relative;
}
.faq-item:hover {
  box-shadow: var(--shadow);
  transform: translateX(6px);
  border-left-color: var(--copper-red);
}
.faq-item h4 {
  color: var(--bronze-black);
  margin-bottom: 10px;
  font-size: 16px;
  font-weight: 800;
  letter-spacing: 0.3px;
  display: flex;
  align-items: center;
  gap: 10px;
}
/* FAQ编号装饰 */
.faq-item h4::before {
  content: 'Q';
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 26px;
  height: 26px;
  background: var(--copper-red);
  color: var(--white);
  font-size: 12px;
  font-weight: 900;
  border-radius: 3px;
  flex-shrink: 0;
}
.faq-item p {
  color: var(--text-secondary);
  font-size: 14px;
  line-height: 1.75;
}
```

### 5.11 Footer

```css
/* ===== Footer ===== */
footer {
  background: var(--bronze-black);
  color: var(--text-on-dark-dim);
  padding: 80px 40px 30px;
  border-top: 3px solid var(--malt-gold);
  position: relative;
}
footer::before {
  content: '';
  position: absolute;
  top: 0; left: 0; right: 0;
  height: 1px;
  background: linear-gradient(90deg,
    transparent,
    var(--copper-red) 20%,
    var(--malt-gold) 50%,
    var(--copper-red) 80%,
    transparent
  );
}
.footer-content {
  max-width: 1100px;
  margin: 0 auto;
  display: grid;
  grid-template-columns: 2fr 1fr 1fr 1fr;
  gap: 48px;
}
.footer-brand h4 {
  color: var(--white);
  font-size: 18px;
  margin-bottom: 12px;
  font-weight: 800;
  letter-spacing: 1px;
}
.footer-brand p {
  font-size: 14px;
  line-height: 1.85;
  color: var(--text-muted);
}
.footer-brand .logo-img {
  height: 38px;
  margin-bottom: 14px;
  filter: drop-shadow(0 2px 6px rgba(0,0,0,0.4));
}
.footer-col h4 {
  color: var(--malt-gold);
  margin-bottom: 18px;
  font-size: 13px;
  font-weight: 800;
  letter-spacing: 2px;
  text-transform: uppercase;
}
.footer-col a {
  display: block;
  color: var(--text-muted);
  text-decoration: none;
  font-size: 14px;
  padding: 5px 0;
  transition: all var(--transition);
}
.footer-col a:hover {
  color: var(--malt-gold);
  padding-left: 6px;
}
.footer-col p {
  font-size: 14px;
  color: var(--text-muted);
  line-height: 1.85;
}
.copyright {
  max-width: 1100px;
  margin: 48px auto 0;
  padding-top: 24px;
  border-top: 1px solid var(--bronze-border);
  text-align: center;
  font-size: 13px;
  color: var(--text-muted);
}
```

### 5.12 新增：罐身特写轮播（.can-showcase）

```css
/* ===== 罐身特写轮播 ===== */
.can-showcase {
  padding: 80px 40px;
  background: var(--bronze-black);
  overflow-x: auto;
  overflow-y: hidden;
  -webkit-overflow-scrolling: touch;
  scroll-snap-type: x mandatory;
  display: flex;
  gap: 32px;
  max-width: 1400px;
  margin: 0 auto;
  /* 隐藏滚动条但可滚动 */
  scrollbar-width: none;
}
.can-showcase::-webkit-scrollbar { display: none; }

.can-card {
  scroll-snap-align: center;
  min-width: 240px;
  max-width: 280px;
  flex-shrink: 0;
  text-align: center;
  transition: transform var(--transition-slow);
  cursor: pointer;
}
.can-card:hover { transform: translateY(-10px); }
.can-card img {
  width: 100%;
  height: 340px;
  object-fit: contain;
  filter: drop-shadow(0 16px 40px rgba(0,0,0,0.5));
  transition: filter var(--transition-slow);
}
.can-card:hover img {
  filter: drop-shadow(0 20px 50px rgba(212,168,83,0.25));
}

.can-specs {
  display: flex;
  justify-content: center;
  gap: 8px;
  margin: 16px 0 10px;
}
.spec-badge {
  padding: 4px 12px;
  background: rgba(61,90,60,0.25);
  color: var(--army-light);
  font-size: 12px;
  font-weight: 700;
  border-radius: 3px;
  letter-spacing: 0.5px;
  border: 1px solid rgba(61,90,60,0.3);
}
.can-card h3 {
  color: var(--white);
  font-size: 20px;
  font-weight: 800;
  letter-spacing: 1px;
}
.can-card h3 span {
  display: block;
  color: var(--malt-gold);
  font-size: 13px;
  font-weight: 500;
  letter-spacing: 2px;
  margin-top: 4px;
}
```

### 5.13 新增：桶装线视觉区（.keg-section）

```css
/* ===== 桶装线 ===== */
.keg-section {
  padding: 80px 40px;
  background: var(--canvas);
}

.keg-hero {
  max-width: 1200px;
  margin: 0 auto;
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 48px;
  align-items: center;
}
.keg-hero img {
  width: 100%;
  height: 380px;
  object-fit: cover;
  border-radius: var(--radius-lg);
  border: 3px solid var(--bronze-border);
  box-shadow: var(--shadow-lg);
}

.military-badge {
  display: inline-block;
  background: var(--copper-red);
  color: var(--white);
  padding: 6px 20px;
  font-size: 12px;
  font-weight: 800;
  letter-spacing: 3px;
  text-transform: uppercase;
  border-radius: 3px;
  margin-bottom: 16px;
}
.keg-overlay h2 {
  font-size: clamp(24px, 3vw, 32px);
  color: var(--bronze-black);
  font-weight: 900;
  margin-bottom: 12px;
  letter-spacing: 1px;
}
.keg-overlay p {
  color: var(--text-secondary);
  font-size: 16px;
  margin-bottom: 28px;
  line-height: 1.6;
}
```

### 5.14 新增：信任数据区

```css
/* ===== 信任数据 ===== */
.trust-section {
  padding: 80px 40px;
  background: var(--bronze-black);
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 48px;
  max-width: 1200px;
  margin: 0 auto;
  align-items: center;
}
.trust-section img {
  width: 100%;
  height: 380px;
  object-fit: cover;
  border-radius: var(--radius-lg);
  opacity: 0.85;
  border: 2px solid var(--bronze-border);
}
.trust-content h2 {
  color: var(--white);
  font-size: clamp(24px, 3vw, 32px);
  font-weight: 900;
  margin-bottom: 32px;
  letter-spacing: 1px;
}
.trust-grid {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 20px;
}
.trust-item {
  text-align: center;
  padding: 24px 20px;
  background: var(--bronze-soft);
  border: 1px solid var(--bronze-border);
  border-radius: var(--radius);
  transition: all var(--transition-slow);
}
.trust-item:hover {
  border-color: var(--malt-gold);
  box-shadow: var(--shadow-gold);
}
.trust-number {
  display: block;
  font-size: 36px;
  font-weight: 900;
  color: var(--malt-gold);
  letter-spacing: 1px;
  margin-bottom: 6px;
  font-family: var(--font-mono);
}
.trust-label {
  color: var(--text-on-dark-dim);
  font-size: 13px;
  font-weight: 600;
  letter-spacing: 0.5px;
}
```

### 5.15 动画

```css
/* ===== Animations ===== */
@keyframes fadeInUp {
  from { opacity: 0; transform: translateY(36px); }
  to   { opacity: 1; transform: translateY(0); }
}
@keyframes fadeInDown {
  from { opacity: 0; transform: translateY(-36px); }
  to   { opacity: 1; transform: translateY(0); }
}
@keyframes slideInLeft {
  from { opacity: 0; transform: translateX(-40px); }
  to   { opacity: 1; transform: translateX(0); }
}
@keyframes pulse-gold {
  0%, 100% { box-shadow: 0 0 0 0 rgba(212,168,83,0.4); }
  50%      { box-shadow: 0 0 0 12px rgba(212,168,83,0); }
}

/* Scroll reveal */
.reveal {
  opacity: 0;
  transform: translateY(32px);
  transition: opacity 0.7s cubic-bezier(0.25, 0, 0.15, 1),
              transform 0.7s cubic-bezier(0.25, 0, 0.15, 1);
}
.reveal.visible {
  opacity: 1;
  transform: translateY(0);
}

/* CTA脉冲 */
.pulse-cta {
  animation: pulse-gold 2s infinite;
}
```

### 5.16 响应式

```css
/* ===== Responsive ===== */
@media (max-width: 1024px) {
  .keg-hero,
  .trust-section {
    grid-template-columns: 1fr;
    gap: 32px;
  }
  .keg-hero img,
  .trust-section img {
    height: 300px;
  }
}

@media (max-width: 900px) {
  .pillars-grid { grid-template-columns: 1fr; }
  .faq-grid { grid-template-columns: 1fr; }
  .footer-content { grid-template-columns: 1fr 1fr; gap: 32px; }
}

@media (max-width: 768px) {
  .nav { padding: 12px 20px; }
  .nav-links { gap: 2px; }
  .nav-links a { padding: 6px 12px; font-size: 13px; }
  .nav-cta { padding: 6px 16px !important; }
  .hero-logo-img { height: 110px; }
  .hero-content { padding: 100px 20px 40px; }
  .hero-scene { margin-top: -40px; padding-bottom: 40px; }
  .pillars-section { margin: 60px auto; padding: 0 20px; }
  .products-section { padding: 60px 20px; }
  .showcase-item img { height: 220px; }
  .knowledge-section { margin: 60px auto; padding: 0 20px; }
  .knowledge-grid { grid-template-columns: 1fr; }
  .faq-section { margin: 60px auto; padding: 0 20px; }
  footer { padding: 60px 20px 24px; }
  .footer-content { grid-template-columns: 1fr; gap: 24px; }
  .scene-divider { height: 280px; }
  .scene-divider-overlay h2 { font-size: 24px; }
  .can-showcase { padding: 60px 20px; gap: 20px; }
  .can-card { min-width: 200px; }
  .can-card img { height: 260px; }
  .trust-section { padding: 60px 20px; }
  .trust-grid { grid-template-columns: 1fr 1fr; gap: 12px; }
  .trust-number { font-size: 28px; }
}
```

### 5.17 打印样式（SEO友好）

```css
/* ===== Print ===== */
@media print {
  .nav, .hero-scene, .scene-divider, footer { display: none; }
  body { background: white; color: black; }
  .hero-content h1 { color: black; }
  .hero::before { background: none; }
}
```

---

## 六、实施清单

### 第一优先级（核心视觉迁移）

| # | 任务 | 涉及文件 | 预估工时 |
|---|------|---------|---------|
| 1 | 替换 CSS `:root` 变量为 v3 配色 | `css/style.css` | 10min |
| 2 | 重写 Hero 区样式（渐变、纹理、动画） | `css/style.css` | 30min |
| 3 | 重写按钮系统（含 .btn-copper / .btn-army） | `css/style.css` | 15min |
| 4 | 重写品牌三柱卡片样式 | `css/style.css` | 20min |
| 5 | 替换所有硬编码颜色值为CSS变量引用 | `css/style.css` + 所有HTML | 25min |

### 第二优先级（用户体验提升）

| # | 任务 | 涉及文件 | 预估工时 |
|---|------|---------|---------|
| 6 | 场景分割线增强（opacity/saturate/filter） | `css/style.css` | 10min |
| 7 | 产品展示区升级（底部渐变条、标签） | `css/style.css` | 15min |
| 8 | FAQ编号装饰 | `css/style.css` | 10min |
| 9 | Footer顶端装饰条 | `css/style.css` | 5min |
| 10 | Nav激活态下划线 | `css/style.css` | 5min |

### 第三优先级（新增区块 + Logo色板迁移）

| # | 任务 | 涉及文件 | 预估工时 |
|---|------|---------|---------|
| 11 | 罐身轮播区 HTML + CSS | `index.html` + `css/style.css` | 45min |
| 12 | 桶装线视觉区 HTML + CSS | `index.html` + `css/style.css` | 30min |
| 13 | 信任数据区 HTML + CSS | `index.html` + `css/style.css` | 30min |
| 14 | Logo色板迁移（SVG重着色） | `images/logo-military.svg` | 20min（Figma/AI） |
| 15 | Favicon提取 | `favicon.ico` | 10min |
| 16 | OG Image更新 | `images/og-image.jpg` | 15min |

### 第四优先级（SEO增强）

| # | 任务 | 涉及文件 | 预估工时 |
|---|------|---------|---------|
| 17 | 产品图 `srcset` 多分辨率 | `index.html` | 20min |
| 18 | h1/h2层级优化（分割线overlay中的h2提升为section标题级） | `index.html` | 15min |
| 19 | 面包屑结构化数据 | `index.html`（JSON-LD） | 10min |
| 20 | 性能优化（图片懒加载、CSS压缩） | 全局 | 20min |

---

## 七、配色速查卡

```
┌──────────────────────────────────────────────────────┐
│                 老炮拉格 v3 COLOR CARD                │
├───────────────┬──────────┬───────────────────────────┤
│ 青铜黑        │ #1a1a1a  │ ████████████████████████  │
│ Bronz Black   │          │ 主背景·深沉·炮管质感       │
├───────────────┼──────────┼───────────────────────────┤
│ 麦芽金        │ #d4a853  │ ████████████████████████  │
│ Malt Gold     │          │ 高亮·CTA·精酿琥珀光泽      │
├───────────────┼──────────┼───────────────────────────┤
│ 军旅绿        │ #3d5a3c  │ ████████████████████████  │
│ Army Green    │          │ 品牌主色·军装·战场         │
├───────────────┼──────────┼───────────────────────────┤
│ 赤铜          │ #b8432e  │ ████████████████████████  │
│ Copper Red    │          │ 强调·热血·部队血脉         │
├───────────────┴──────────┴───────────────────────────┤
│  品牌标语：够劲·够真                                  │
│  品牌调性：54635部队高射炮兵旅·不掺假不将就              │
│  Logo方案：A.炮盾徽章（推荐）                          │
└──────────────────────────────────────────────────────┘
```

---

> **改版负责人**：Hermes Agent
> **创建日期**：2026-05-31
> **版本**：v3.0
> **适用范围**：https://2buy.biz 全站
