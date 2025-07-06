import type {
	ExpressiveCodeConfig,
	LicenseConfig,
	NavBarConfig,
	ProfileConfig,
	SiteConfig,
} from "./types/config";
import { LinkPreset } from "./types/config";

export const siteConfig: SiteConfig = {
	title: "sasovo",
	subtitle: "Demo Site",
	lang: "zh_CN", // 支持语言：'en', 'zh_CN', 'zh_TW', 'ja', 'ko', 'es', 'th'
	themeColor: {
		hue: 230, // 主题色默认色调，取值范围 0-360。例如红色:0, 蓝绿色:200, 青色:250, 粉色:345
		fixed: false, // 对访客隐藏主题色选择器
	},
	banner: {
		enable: true,
		src: "assets/images/banner.png", // 相对于/src目录。若以'/'开头则相对于/public目录
		position: "center", // 等同于object-position属性，仅支持'top'、'center'、'bottom'，默认为'center'
		credit: {
			enable: false, // 是否显示横幅图片的版权信息
			text: "", // 显示的版权文本
			url: "", // (可选) 原始作品或艺术家页面的URL链接
		},
	},
	toc: {
		enable: true, // 在文章右侧显示目录
		depth: 2, // 目录中显示的最大标题层级，取值范围1-3
	},
	favicon: [
		// 留空数组则使用默认favicon
		// {
		//   src: '/favicon/icon.png',    // favicon路径，相对于/public目录
		//   theme: 'light',              // (可选) 'light'或'dark'，仅在需要为深浅模式设置不同图标时使用
		//   sizes: '32x32',              // (可选) favicon尺寸，仅在需要不同尺寸图标时设置
		// }
	],
};

export const navBarConfig: NavBarConfig = {
	links: [
		LinkPreset.Home,
		LinkPreset.Archive,
		LinkPreset.About,
		{
			name: "GitHub",
			url: "https://github.com/saicaca/fuwari", // 内部链接不应包含基础路径，会自动添加
			external: true, // 显示外部链接图标并在新标签页打开
		},
	],
};

export const profileConfig: ProfileConfig = {
	avatar: "assets/images/demo-avatar.png", // 相对于/src目录。若以'/'开头则相对于/public目录
	name: "SaSOvO",
	bio: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
	links: [
		// 图标代码参考：https://icones.js.org/
		// 如果未包含相应图标集，需要手动安装：
		// `pnpm add @iconify-json/<图标集名称>`
		// {
		// 	name: "Steam",
		// 	icon: "fa6-brands:steam",
		// 	url: "https://store.steampowered.com",
		// },
		{
			name: "GitHub",
			icon: "fa6-brands:github",
			url: "https://github.com/pasovo",
		},
		{
			name: "Email",
			icon: "fa6-solid:envelope", 
			url: "http://mail.qq.com/cgi-bin/qm_share?t=qm_mailme&email=QjEjMS00LQIzM2whLS8",
		},
	],
};

export const licenseConfig: LicenseConfig = {
	enable: true,
	name: "CC BY-NC-SA 4.0",
	url: "https://creativecommons.org/licenses/by-nc-sa/4.0/",
};

export const expressiveCodeConfig: ExpressiveCodeConfig = {
	// 注意：部分样式（如背景色）会被覆盖，请查看astro.config.mjs文件
	// 请选择深色主题，当前博客主题仅支持深色背景
	theme: "github-dark",
};