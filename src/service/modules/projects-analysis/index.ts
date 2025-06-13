/*
 * Licensed to the Apache Software Foundation (ASF) under one or more
 * contributor license agreements.  See the NOTICE file distributed with
 * this work for additional information regarding copyright ownership.
 * The ASF licenses this file to You under the Apache License, Version 2.0
 * (the "License"); you may not use this file except in compliance with
 * the License.  You may obtain a copy of the License at
 *
 *    http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

import { axios } from '@/service/service'
import { ListReq, CodeReq, StateReq } from './types'
// 导入模拟数据
import * as mockProjectAnalysis from '../../mock/modules/projects-analysis'

export function countCommandState(): any {
  // 使用模拟数据
  return mockProjectAnalysis.countCommandState()
  
  // 原始API调用（已注释）
  // return axios({
  //   url: '/projects/analysis/command-state-count',
  //   method: 'get'
  // })
}

export function countDefinitionByUser(params: CodeReq): any {
  // 使用模拟数据
  return mockProjectAnalysis.countDefinitionByUser(params)
  
  // 原始API调用（已注释）
  // return axios({
  //   url: '/projects/analysis/define-user-count',
  //   method: 'get',
  //   params
  // })
}

export function countProcessInstanceState(params: StateReq): any {
  // 使用模拟数据
  return mockProjectAnalysis.countProcessInstanceState(params)
  
  // 原始API调用（已注释）
  // return axios({
  //   url: '/projects/analysis/process-state-count',
  //   method: 'get',
  //   params
  // })
}

export function countQueueState(): any {
  // 使用模拟数据
  return mockProjectAnalysis.countQueueState()
  
  // 原始API调用（已注释）
  // return axios({
  //   url: '/projects/analysis/queue-count',
  //   method: 'get'
  // })
}

export function countTaskState(params: StateReq): any {
  // 使用模拟数据
  return mockProjectAnalysis.countTaskState(params)
  
  // 原始API调用（已注释）
  // return axios({
  //   url: '/projects/analysis/task-state-count',
  //   method: 'get',
  //   params
  // })
}

export function queryListCommandPaging(params: ListReq): any {
  // 使用模拟数据
  return mockProjectAnalysis.queryListCommandPaging(params)
  
  // 原始API调用（已注释）
  // return axios({
  //   url: '/projects/analysis/listCommand',
  //   method: 'get',
  //   params
  // })
}

export function queryListErrorCommandPaging(params: ListReq): any {
  // 使用模拟数据
  return mockProjectAnalysis.queryListErrorCommandPaging(params)
  
  // 原始API调用（已注释）
  // return axios({
  //   url: '/projects/analysis/listErrorCommand',
  //   method: 'get',
  //   params
  // })
}
