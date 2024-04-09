export enum MINE_LIST_ENUM {
    profile = 0,
    test = 1,
    admin = 2,
}
export const MineListData = [
    {
        key: 0,
        icon: 'iconfont icon-wode',
        value: '我的资料',
        unique: MINE_LIST_ENUM.profile,
    },
    {
        key: 1,
        icon: 'iconfont icon-flow-determine',
        value: '测评记录',
        unique: MINE_LIST_ENUM.test,
    },
    {
        key: 2,
        icon: 'iconfont icon-guanliyuan',
        value: '管理员入口',
        unique: MINE_LIST_ENUM.admin,
    },
]
