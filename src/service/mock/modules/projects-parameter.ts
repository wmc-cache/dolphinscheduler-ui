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
  ProjectParameterList, 
  ProjectParameterRes, 
  ProjectParameterReq,
  UpdateProjectParameterReq 
} from '../../modules/projects-parameter/types'

// 模拟项目参数数据
const mockProjectParameters: { [projectCode: number]: ProjectParameterList[] } = {
  1001: [
    {
      id: 1,
      code: 10001,
      name: 'database_host',
      value: 'localhost',
      createTime: '2024-01-01 10:00:00',
      updateTime: '2024-01-01 10:00:00'
    },
    {
      id: 2,
      code: 10002,
      name: 'database_port',
      value: '3306',
      createTime: '2024-01-01 10:05:00',
      updateTime: '2024-01-01 10:05:00'
    },
    {
      id: 3,
      code: 10003,
      name: 'batch_size',
      value: '1000',
      createTime: '2024-01-01 10:10:00',
      updateTime: '2024-01-15 14:30:00'
    }
  ],
  1002: [
    {
      id: 4,
      code: 10004,
      name: 'etl_source_path',
      value: '/data/source',
      createTime: '2024-01-02 09:15:00',
      updateTime: '2024-01-02 09:15:00'
    },
    {
      id: 5,
      code: 10005,
      name: 'etl_target_path',
      value: '/data/target',
      createTime: '2024-01-02 09:20:00',
      updateTime: '2024-01-16 11:20:00'
    }
  ],
  1003: [
    {
      id: 6,
      code: 10006,
      name: 'model_version',
      value: 'v1.2.0',
      createTime: '2024-01-03 16:45:00',
      updateTime: '2024-01-17 09:10:00'
    },
    {
      id: 7,
      code: 10007,
      name: 'training_epochs',
      value: '100',
      createTime: '2024-01-03 17:00:00',
      updateTime: '2024-01-03 17:00:00'
    }
  ]
}

let nextParameterId = 8
let nextParameterCode = 10008

// 模拟项目参数列表分页查询
export function queryProjectParameterListPaging(
  params: any,
  projectCode: number
): Promise<ProjectParameterRes> {
  return new Promise((resolve) => {
    setTimeout(() => {
      const { pageNo = 1, pageSize = 10, searchVal = '' } = params
      
      // 获取项目参数
      let projectParams = mockProjectParameters[projectCode] || []
      
      // 根据搜索条件过滤
      if (searchVal) {
        projectParams = projectParams.filter(param => 
          param.name.includes(searchVal) || 
          param.value.includes(searchVal)
        )
      }
      
      // 分页处理
      const start = (pageNo - 1) * pageSize
      const end = start + pageSize
      const totalList = projectParams.slice(start, end)
      
      resolve({
        totalList,
        total: projectParams.length,
        totalPage: Math.ceil(projectParams.length / pageSize),
        pageSize,
        currentPage: pageNo,
        start
      })
    }, 300)
  })
}

// 模拟创建项目参数
export function createProjectParameter(
  data: ProjectParameterReq,
  projectCode: number
): Promise<{ id: number; code: number }> {
  return new Promise((resolve) => {
    setTimeout(() => {
      const newParameter: ProjectParameterList = {
        id: nextParameterId++,
        code: nextParameterCode++,
        name: data.projectParameterName,
        value: data.projectParameterValue,
        createTime: new Date().toISOString().replace('T', ' ').substring(0, 19),
        updateTime: new Date().toISOString().replace('T', ' ').substring(0, 19)
      }
      
      if (!mockProjectParameters[projectCode]) {
        mockProjectParameters[projectCode] = []
      }
      
      mockProjectParameters[projectCode].push(newParameter)
      resolve({ id: newParameter.id, code: newParameter.code })
    }, 300)
  })
}

// 模拟更新项目参数
export function updateProjectParameter(
  data: UpdateProjectParameterReq,
  projectCode: number,
  code: number
): Promise<boolean> {
  return new Promise((resolve) => {
    setTimeout(() => {
      const projectParams = mockProjectParameters[projectCode] || []
      const paramIndex = projectParams.findIndex(p => p.code === code)
      
      if (paramIndex !== -1) {
        projectParams[paramIndex] = {
          ...projectParams[paramIndex],
          name: data.projectParameterName,
          value: data.projectParameterValue,
          updateTime: new Date().toISOString().replace('T', ' ').substring(0, 19)
        }
        resolve(true)
      } else {
        resolve(false)
      }
    }, 300)
  })
}

// 模拟删除项目参数
export function deleteProjectParameter(
  projectCode: number,
  code: number
): Promise<boolean> {
  return new Promise((resolve) => {
    setTimeout(() => {
      const projectParams = mockProjectParameters[projectCode] || []
      const paramIndex = projectParams.findIndex(p => p.code === code)
      
      if (paramIndex !== -1) {
        projectParams.splice(paramIndex, 1)
        resolve(true)
      } else {
        resolve(false)
      }
    }, 300)
  })
}

// 模拟根据code查询项目参数
export function queryProjectParameterByCode(
  projectCode: number,
  code: number
): Promise<ProjectParameterList | null> {
  return new Promise((resolve) => {
    setTimeout(() => {
      const projectParams = mockProjectParameters[projectCode] || []
      const parameter = projectParams.find(p => p.code === code)
      resolve(parameter || null)
    }, 200)
  })
} 