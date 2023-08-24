import request from '@/utils/request'

export const articleListAPI = ({ current, sorter }) => {
  return request.get('/h5/interview/query', {
    params: {
      current: current,
      pageSize: 10,
      sorter: sorter //weight_dosc表示获取推荐数据 || null表示获取最新数据
    }
  })
}
// 获取单个面试题详情
export const getArticleDetail = id => {
  return request.get('/h5/interview/show', {
    params: {
      id
    }
  })
}

// 点赞、收藏、取消点赞、取消收藏
export const updateLikeAndCollect = data => {
  return request.post('/h5/interview/opt', data)
}
