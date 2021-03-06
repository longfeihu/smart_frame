import request from '@/utils/request'

// 查询定时任务调度列表
export function listJob(query) {
  return request({
    url: '/monitor/job/list',
    method: 'get',
    params: query
  })
}

// 查询定时任务调度详细
export function getJob(jobId) {
  return request({
    url: '/monitor/job/' + jobId,
    method: 'get'
  })
}

// 新增定时任务调度
export function addJob(data) {
  return request({
    url: '/monitor/job/add',
    method: 'post',
    data: data
  })
}

// 修改定时任务调度
export function updateJob(data) {
  return request({
    url: '/monitor/job/edit',
    method: 'post',
    data: data
  })
}

// 批量删除定时任务调度
export function deleteJob(jobIds) {
  return request({
    url: '/monitor/job/remove/' + jobIds,
    method: 'delete'
  })
}

// 导出定时任务调度
export function exportJob(query) {
  return request({
    url: '/monitor/job/export',
    method: 'get',
    params: query
  })
}

// 修改定时任务调度状态
export function changeJobStatus(jobId, status) {
  const data = {
    jobId,
    status
  }
  return request({
    url: '/monitor/job/changeStatus',
    method: 'post',
    params: data
  })
}

// 任务执行一次
export function runJob(jobId, jobGroup) {
  const data = {
    jobId,
    jobGroup
  }
  return request({
    url: '/monitor/job/run',
    method: 'post',
    params: data
  })
}

// 校验cron表达式是否有效
export function checkCronExpression(cronExpression) {
  const data = {
    cronExpression
  }
  return request({
    url: '/monitor/job/checkCronExpressionIsValid',
    method: 'post',
    params: data
  })
}
