import { http } from '@/services/http'

enum BASEURL {
    CHU_FANG = 'https://u241567-91ae-dfbfcb8e.neimeng.seetacloud.com:6443/upload',
}

/**
 * 发送处方视频
 * @param data
 * @constructor
 */
export const PostChuFangFile = (data: any) => {
    return http({
        url: BASEURL.CHU_FANG,
        header: {
            'Content-Type': 'multipart/form-data',
        },
        method: 'POST',
        data,
    })
}
