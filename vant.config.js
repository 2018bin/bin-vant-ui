module.exports = {
    name: 'bin-vant-ui',
    build: {
        css: {
            preprocessor: 'less',
        },
        site: {
            publicPath: '/bin-vant-ui/',
        },
    },
    site: {
        title: 'bin-vant-ui',
        logo: 'https://img.yzcdn.cn/vant/logo.png',
        nav: [
            {
                title: '开发指南',
                items: [{
                    path: 'home',
                    title: '介绍',
                },
                {
                    path: 'quickstart',
                    title: '快速上手',
                },
                ],
            },

            {
                title: '基础组件',
                items: [
                    {
                        path: 'col',
                        title: 'Layout 布局',
                    },
                    {
                        path: 'cell',
                        title: 'cell 单元格',
                    },
                    {
                        path: 'loading',
                        title: 'loading 加载',
                    },
                    {
                        path: 'button',
                        title: 'DemoButton 按钮',
                    },
                    {
                        path: 'icon',
                        title: 'Icon 图标'
                    },
                    {
                        path: 'image',
                        title: 'image 图片',
                    },
                    {
                        path: 'popup',
                        title: 'popup 弹出层',
                    },
                    {
                        path: 'toast',
                        title: 'toast 提示',
                    },


                ],
            },
            {
                title: '表单组件',
                items: [
                    {
                        path: 'form-item',
                        title: 'form-item 输入框',
                    },
                   
                ],
            },
            {
                title: '反馈组件',
                items: [
                    {
                        path: 'action-bar',
                        title: 'action-bar 弹出层',
                    },
                    {
                        path: 'dialog',
                        title: 'dialog 弹出框',
                    },
                ],
            },
        ],
    },
};