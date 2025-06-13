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

import {
  UpdateProjectPreferenceReq,
  UpdateProjectPreferenceStateReq
} from './types'
// 导入模拟数据
import * as mockProjectPreference from '../../mock/modules/projects-preference'

export function queryProjectPreferenceByProjectCode(projectCode: number): any {
  // 使用模拟数据
  return mockProjectPreference.queryProjectPreferenceByProjectCode(projectCode)
  
  // 原始API调用（已注释）
  // return axios({
  //   url: `/projects/${projectCode}/project-preference`,
  //   method: 'get'
  // })
}

export function updateProjectPreference(
  data: UpdateProjectPreferenceReq,
  projectCode: number
): any {
  // 使用模拟数据
  return mockProjectPreference.updateProjectPreference(data, projectCode)
  
  // 原始API调用（已注释）
  // return axios({
  //   url: `/projects/${projectCode}/project-preference`,
  //   method: 'put',
  //   data
  // })
}

export function updateProjectPreferenceState(
  data: UpdateProjectPreferenceStateReq,
  projectCode: number
): any {
  // 使用模拟数据
  return mockProjectPreference.updateProjectPreferenceState(data, projectCode)
  
  // 原始API调用（已注释）
  // return axios({
  //   url: `/projects/${projectCode}/project-preference`,
  //   method: 'post',
  //   data
  // })
}
