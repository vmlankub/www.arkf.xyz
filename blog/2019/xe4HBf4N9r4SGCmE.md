## 通过 Flash 技术可获取的信息

属性 | 描述
--------- | ----------------------------------------------------------------------------------
cpuArchitecture | 当前 CPU 体系结构，返回：PowerPC、x86、SPARC 和 ARM。
hasPrinting | 是否支持打印。
language | 系统语言，返回：en、zh-CN、zh-TW 等。
languages | 用户设置的系统语言数组。
maxLevelIDC | 客户端硬件支持的最高 H.264 级 IDC。
pixelAspectRatio | 屏幕的像素高宽比。
playerType | Flash 的运行时环境。
screenDPI | 屏幕的每英寸点数 (dpi) 分辨率，以像素为单位。
supports32BitProcesses | 是否支持运行 32 位的进程。
supports64BitProcesses | 是否支持运行 64 位的进程。
touchscreenType | 触摸屏的类型（如果有）。

所有可获取的属性列表：
<http://help.adobe.com/zh_CN/FlashPlatform/reference/actionscript/3/flash/system/Capabilities.html>


## 通过 JavaScript 可获取的信息

属性 | 描述
--------- | ----------------------------------------------------------------------------------
device | 硬件设备，返回 pc、mac、ipad、iphone、nokia 等。
os | 操作系统，返回 windows、macosx、ios、yunos、linux 等，包含版本信息。
browser | 浏览器信息，返回 chrome、ie、firefox 等，包含版本信息。
engine | 浏览器渲染引擎，返回 trident、webkit 等，包含版本信息。
screenWidth | 屏幕宽度
screenHeight | 屏幕高度
colorDepth | 色深
plugins | 当前浏览器安装的插件信息
location | 高级浏览器，用户地理位置信息
timezone | 用户所在时区


更多信息可查看：
<http://aralejs.org/detector/examples/>
