import request from '@/utils/request'

// 压缩图片
export function compresImages(query) {
	return request({
	    url: '/api/compresImages',
	    method: 'POST',
		data: query,
		headers: {
			'Content-Type': 'multipart/form-data'
		}
	})
}