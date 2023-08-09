module.exports = {
    title: 'upupgooo',
    description: 'Experience, summary, reflection',
    themeConfig: {
        navbar: false,
        search: false,
        nav: [
            { text: '首页', link: '/' },
            {
                text: '高可用设计',
                items: [
                    {
                        text: '一致性协议',
                        items: [
                            {
                                text: 'raft',
                                link: '/availability/protocol/raft'
                            },
                            {
                                text: 'zab',
                                link: '/availability/protocol/raft'
                            }
                        ]
                    },
                    {
                        text: '分布式中间件',
                        items: [
                            {
                                text: 'etcd',
                                link: '/availability/middleware/etcd'
                            }
                        ]
                    },
                    {
                        text: '高可用架构',
                        items: [
                            {
                                text: 'k8s',
                                link: '/availability/architecture/k8s'
                            }
                        ]
                    },
                    {
                        text: '业界案例',
                        items: [
                            {
                                text: '华为云运维体系架构',
                                link: '/availability/case/huawei'
                            }
                        ]
                    }
                ]
            },
            {
                text: '相关网站',
                items: [
                    { text: 'Github', link: 'https://github.com/qianps' },
                ]
            }
        ]
    }
}