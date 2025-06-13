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
import { ListReq, ListIdReq, ProjectsReq, UserIdReq } from './types'
// 导入模拟数据
import * as mockProjects from '../../mock/modules/projects'

export function queryProjectListPaging(params: ListReq): any {
  // 使用模拟数据
  return mockProjects.queryProjectListPaging(params)
  
  // 原始API调用（已注释）
  // return axios({
  //   url: '/projects',
  //   method: 'get',
  //   params
  // })
}

export function queryProjectWithAuthorizedLevelListPaging(
  params: ListIdReq
): any {
  // 使用模拟数据
  return mockProjects.queryProjectWithAuthorizedLevelListPaging(params)
  
  // 原始API调用（已注释）
  // return axios({
  //   url: '/projects/project-with-authorized-level-list-paging',
  //   method: 'get',
  //   params
  // })
}

export function createProject(data: ProjectsReq): any {
  // 使用模拟数据
  return mockProjects.createProject(data)
  
  // 原始API调用（已注释）
  // return axios({
  //   url: '/projects',
  //   method: 'post',
  //   data
  // })
}

export function queryAuthorizedProject(params: UserIdReq): any {
  // 使用模拟数据
  return mockProjects.queryAuthorizedProject(params)
  
  // 原始API调用（已注释）
  // return axios({
  //   url: '/projects/authed-project',
  //   method: 'get',
  //   params
  // })
}

export function queryProjectCreatedAndAuthorizedByUser(): any {
  // 使用模拟数据
  return mockProjects.queryProjectCreatedAndAuthorizedByUser()
  
  // 原始API调用（已注释）
  // return axios({
  //   url: '/projects/created-and-authed',
  //   method: 'get'
  // })
}

export function queryAllProjectList(): any {
  // 使用模拟数据
  return mockProjects.queryAllProjectList()
  
  // 原始API调用（已注释）
  // return axios({
  //   url: '/projects/list',
  //   method: 'get'
  // })
}

export function queryUnauthorizedProject(params: UserIdReq): any {
  // 使用模拟数据
  return mockProjects.queryUnauthorizedProject(params)
  
  // 原始API调用（已注释）
  // return axios({
  //   url: '/projects/unauth-project',
  //   method: 'get',
  //   params
  // })
}

export function queryProjectWithAuthorizedLevel(params: UserIdReq): any {
  // 使用模拟数据
  return mockProjects.queryProjectWithAuthorizedLevel(params)
  
  // 原始API调用（已注释）
  // return axios({
  //   url: '/projects/project-with-authorized-level',
  //   method: 'get',
  //   params
  // })
}

export function queryProjectByCode(code: number): any {
  // 使用模拟数据
  return mockProjects.queryProjectByCode(code)
  
  // 原始API调用（已注释）
  // return axios({
  //   url: `/projects/${code}`,
  //   method: 'get'
  // })
}

export function updateProject(data: ProjectsReq, code: number): any {
  // 使用模拟数据
  return mockProjects.updateProject(data, code)
  
  // 原始API调用（已注释）
  // return axios({
  //   url: `/projects/${code}`,
  //   method: 'put',
  //   data
  // })
}

export function deleteProject(code: number): any {
  // 使用模拟数据
  return mockProjects.deleteProject(code)
  
  // 原始API调用（已注释）
  // return axios({
  //   url: `/projects/${code}`,
  //   method: 'delete'
  // })
}

export function queryAllProjectListForDependent(): any {
  // 使用模拟数据
  return mockProjects.queryAllProjectListForDependent()
  
  // 原始API调用（已注释）
  // return axios({
  //   url: '/projects/list-dependent',
  //   method: 'get'
  // })
}
