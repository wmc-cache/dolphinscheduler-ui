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

import type { 
  ProjectPreferenceRes, 
  ProjectPreferenceReq,
  UpdateProjectPreferenceReq,
  UpdateProjectPreferenceStateReq 
} from '../../modules/projects-preference/types'

// 模拟项目偏好设置数据
const mockProjectPreferences: { [projectCode: number]: ProjectPreferenceRes } = {
  1001: {
    id: 1,
    code: 20001,
    projectCode: 1001,
    preferences: JSON.stringify({
      taskPriority: 'MEDIUM',
      workerGroup: 'default',
      environmentCode: null,
      failRetryTimes: 0,
      failRetryInterval: 1,
      cpuQuota: -1,
      memoryMax: -1,
      timeoutFlag: false,
      timeoutNotifyStrategy: ['WARN'],
      timeout: 30,
      warningType: 'NONE',
      tenant: 'default',
      alertGroups: null
    }),
    state: 1,
    createTime: '2024-01-01 10:00:00',
    updateTime: '2024-01-15 14:30:00'
  },
  1002: {
    id: 2,
    code: 20002,
    projectCode: 1002,
    preferences: JSON.stringify({
      taskPriority: 'HIGH',
      workerGroup: 'etl-workers',
      environmentCode: 'prod',
      failRetryTimes: 3,
      failRetryInterval: 5,
      cpuQuota: 4,
      memoryMax: 8,
      timeoutFlag: true,
      timeoutNotifyStrategy: ['WARN', 'FAILURE'],
      timeout: 60,
      warningType: 'EMAIL',
      tenant: 'etl_tenant',
      alertGroups: 1
    }),
    state: 1,
    createTime: '2024-01-02 09:15:00',
    updateTime: '2024-01-16 11:20:00'
  },
  1003: {
    id: 3,
    code: 20003,
    projectCode: 1003,
    preferences: JSON.stringify({
      taskPriority: 'HIGH',
      workerGroup: 'ml-workers',
      environmentCode: 'ml-env',
      failRetryTimes: 2,
      failRetryInterval: 3,
      cpuQuota: 8,
      memoryMax: 16,
      timeoutFlag: true,
      timeoutNotifyStrategy: ['WARN'],
      timeout: 120,
      warningType: 'EMAIL',
      tenant: 'ml_tenant',
      alertGroups: 2
    }),
    state: 1,
    createTime: '2024-01-03 16:45:00',
    updateTime: '2024-01-17 09:10:00'
  },
  1004: {
    id: 4,
    code: 20004,
    projectCode: 1004,
    preferences: JSON.stringify({
      taskPriority: 'MEDIUM',
      workerGroup: 'report-workers',
      environmentCode: null,
      failRetryTimes: 1,
      failRetryInterval: 2,
      cpuQuota: 2,
      memoryMax: 4,
      timeoutFlag: false,
      timeoutNotifyStrategy: ['WARN'],
      timeout: 45,
      warningType: 'NONE',
      tenant: 'default',
      alertGroups: null
    }),
    state: 0,
    createTime: '2024-01-04 13:20:00',
    updateTime: '2024-01-18 15:45:00'
  },
  1005: {
    id: 5,
    code: 20005,
    projectCode: 1005,
    preferences: JSON.stringify({
      taskPriority: 'LOW',
      workerGroup: 'monitor-workers',
      environmentCode: 'monitor-env',
      failRetryTimes: 5,
      failRetryInterval: 1,
      cpuQuota: 1,
      memoryMax: 2,
      timeoutFlag: true,
      timeoutNotifyStrategy: ['FAILURE'],
      timeout: 30,
      warningType: 'SMS',
      tenant: 'monitor_tenant',
      alertGroups: 3
    }),
    state: 1,
    createTime: '2024-01-05 08:30:00',
    updateTime: '2024-01-19 12:15:00'
  }
}

let nextPreferenceId = 6
let nextPreferenceCode = 20006

// 模拟查询项目偏好设置
export function queryProjectPreferenceByProjectCode(projectCode: number): Promise<ProjectPreferenceRes | null> {
  return new Promise((resolve) => {
    setTimeout(() => {
      const preference = mockProjectPreferences[projectCode]
      if (preference) {
        resolve(preference)
      } else {
        // 如果没有找到偏好设置，返回默认设置
        const defaultPreference: ProjectPreferenceRes = {
          id: nextPreferenceId++,
          code: nextPreferenceCode++,
          projectCode,
          preferences: JSON.stringify({
            taskPriority: 'MEDIUM',
            workerGroup: 'default',
            environmentCode: null,
            failRetryTimes: 0,
            failRetryInterval: 1,
            cpuQuota: -1,
            memoryMax: -1,
            timeoutFlag: false,
            timeoutNotifyStrategy: ['WARN'],
            timeout: 30,
            warningType: 'NONE',
            tenant: 'default',
            alertGroups: null
          }),
          state: 0,
          createTime: new Date().toISOString().replace('T', ' ').substring(0, 19),
          updateTime: new Date().toISOString().replace('T', ' ').substring(0, 19)
        }
        mockProjectPreferences[projectCode] = defaultPreference
        resolve(defaultPreference)
      }
    }, 200)
  })
}

// 模拟更新项目偏好设置
export function updateProjectPreference(
  data: UpdateProjectPreferenceReq,
  projectCode: number
): Promise<boolean> {
  return new Promise((resolve) => {
    setTimeout(() => {
      if (mockProjectPreferences[projectCode]) {
        mockProjectPreferences[projectCode] = {
          ...mockProjectPreferences[projectCode],
          preferences: data.projectPreferences,
          updateTime: new Date().toISOString().replace('T', ' ').substring(0, 19)
        }
        resolve(true)
      } else {
        // 如果不存在，创建新的偏好设置
        const newPreference: ProjectPreferenceRes = {
          id: nextPreferenceId++,
          code: nextPreferenceCode++,
          projectCode,
          preferences: data.projectPreferences,
          state: 1,
          createTime: new Date().toISOString().replace('T', ' ').substring(0, 19),
          updateTime: new Date().toISOString().replace('T', ' ').substring(0, 19)
        }
        mockProjectPreferences[projectCode] = newPreference
        resolve(true)
      }
    }, 300)
  })
}

// 模拟更新项目偏好设置状态
export function updateProjectPreferenceState(
  data: UpdateProjectPreferenceStateReq,
  projectCode: number
): Promise<boolean> {
  return new Promise((resolve) => {
    setTimeout(() => {
      if (mockProjectPreferences[projectCode]) {
        mockProjectPreferences[projectCode] = {
          ...mockProjectPreferences[projectCode],
          state: data.state,
          updateTime: new Date().toISOString().replace('T', ' ').substring(0, 19)
        }
        resolve(true)
      } else {
        // 如果不存在，创建新的偏好设置
        const newPreference: ProjectPreferenceRes = {
          id: nextPreferenceId++,
          code: nextPreferenceCode++,
          projectCode,
          preferences: JSON.stringify({
            taskPriority: 'MEDIUM',
            workerGroup: 'default',
            environmentCode: null,
            failRetryTimes: 0,
            failRetryInterval: 1,
            cpuQuota: -1,
            memoryMax: -1,
            timeoutFlag: false,
            timeoutNotifyStrategy: ['WARN'],
            timeout: 30,
            warningType: 'NONE',
            tenant: 'default',
            alertGroups: null
          }),
          state: data.state,
          createTime: new Date().toISOString().replace('T', ' ').substring(0, 19),
          updateTime: new Date().toISOString().replace('T', ' ').substring(0, 19)
        }
        mockProjectPreferences[projectCode] = newPreference
        resolve(true)
      }
    }, 300)
  })
} 