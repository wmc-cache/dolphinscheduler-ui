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

import type { ProjectList, ProjectRes } from '../../modules/projects/types'

// 模拟项目数据
const mockProjects: ProjectList[] = [
  {
    id: 1,
    userId: 1,
    userName: 'admin',
    code: 1001,
    name: '示例项目1',
    description: '这是一个示例项目，用于演示DolphinScheduler的功能',
    createTime: '2024-01-01 10:00:00',
    updateTime: '2024-01-15 14:30:00',
    perm: 7,
    defCount: 5,
    instRunningCount: 2
  },
  {
    id: 2,
    userId: 1,
    userName: 'admin',
    code: 1002,
    name: '数据处理项目',
    description: '用于数据ETL处理的项目',
    createTime: '2024-01-02 09:15:00',
    updateTime: '2024-01-16 11:20:00',
    perm: 7,
    defCount: 8,
    instRunningCount: 1
  },
  {
    id: 3,
    userId: 2,
    userName: 'user1',
    code: 1003,
    name: '机器学习项目',
    description: '机器学习模型训练和预测项目',
    createTime: '2024-01-03 16:45:00',
    updateTime: '2024-01-17 09:10:00',
    perm: 3,
    defCount: 12,
    instRunningCount: 0
  },
  {
    id: 4,
    userId: 1,
    userName: 'admin',
    code: 1004,
    name: '报表生成项目',
    description: '自动化报表生成和分发项目',
    createTime: '2024-01-04 13:20:00',
    updateTime: '2024-01-18 15:45:00',
    perm: 7,
    defCount: 6,
    instRunningCount: 3
  },
  {
    id: 5,
    userId: 3,
    userName: 'user2',
    code: 1005,
    name: '监控告警项目',
    description: '系统监控和告警处理项目',
    createTime: '2024-01-05 08:30:00',
    updateTime: '2024-01-19 12:15:00',
    perm: 3,
    defCount: 4,
    instRunningCount: 1
  }
]

// 模拟项目列表分页查询
export function queryProjectListPaging(params: any): Promise<ProjectRes> {
  return new Promise((resolve) => {
    setTimeout(() => {
      const { pageNo = 1, pageSize = 10, searchVal = '' } = params
      
      // 根据搜索条件过滤
      let filteredProjects = mockProjects
      if (searchVal) {
        filteredProjects = mockProjects.filter(project => 
          project.name.includes(searchVal) || 
          project.description.includes(searchVal)
        )
      }
      
      // 分页处理
      const start = (pageNo - 1) * pageSize
      const end = start + pageSize
      const totalList = filteredProjects.slice(start, end)
      
      resolve({
        totalList,
        total: filteredProjects.length,
        totalPage: Math.ceil(filteredProjects.length / pageSize),
        pageSize,
        currentPage: pageNo,
        start
      })
    }, 300)
  })
}

// 模拟获取所有项目列表
export function queryAllProjectList(): Promise<ProjectList[]> {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(mockProjects)
    }, 200)
  })
}

// 模拟根据code查询项目
export function queryProjectByCode(code: number): Promise<ProjectList | null> {
  return new Promise((resolve) => {
    setTimeout(() => {
      const project = mockProjects.find(p => p.code === code)
      resolve(project || null)
    }, 200)
  })
}

// 模拟创建项目
export function createProject(data: any): Promise<{ id: number; code: number }> {
  return new Promise((resolve) => {
    setTimeout(() => {
      const newId = Math.max(...mockProjects.map(p => p.id)) + 1
      const newCode = Math.max(...mockProjects.map(p => p.code)) + 1
      
      const newProject: ProjectList = {
        id: newId,
        userId: 1, // 假设当前用户ID为1
        userName: 'admin',
        code: newCode,
        name: data.projectName,
        description: data.description || '',
        createTime: new Date().toISOString().replace('T', ' ').substring(0, 19),
        updateTime: new Date().toISOString().replace('T', ' ').substring(0, 19),
        perm: 7,
        defCount: 0,
        instRunningCount: 0
      }
      
      mockProjects.push(newProject)
      resolve({ id: newId, code: newCode })
    }, 300)
  })
}

// 模拟更新项目
export function updateProject(data: any, code: number): Promise<boolean> {
  return new Promise((resolve) => {
    setTimeout(() => {
      const projectIndex = mockProjects.findIndex(p => p.code === code)
      if (projectIndex !== -1) {
        mockProjects[projectIndex] = {
          ...mockProjects[projectIndex],
          name: data.projectName,
          description: data.description || '',
          updateTime: new Date().toISOString().replace('T', ' ').substring(0, 19)
        }
        resolve(true)
      } else {
        resolve(false)
      }
    }, 300)
  })
}

// 模拟删除项目
export function deleteProject(code: number): Promise<boolean> {
  return new Promise((resolve) => {
    setTimeout(() => {
      const projectIndex = mockProjects.findIndex(p => p.code === code)
      if (projectIndex !== -1) {
        mockProjects.splice(projectIndex, 1)
        resolve(true)
      } else {
        resolve(false)
      }
    }, 300)
  })
}

// 模拟获取用户授权的项目
export function queryAuthorizedProject(params: any): Promise<ProjectList[]> {
  return new Promise((resolve) => {
    setTimeout(() => {
      // 根据用户ID过滤项目（简化处理，实际应该根据权限系统）
      const userProjects = mockProjects.filter(p => p.userId === params.userId || p.perm >= 3)
      resolve(userProjects)
    }, 200)
  })
}

// 模拟获取用户创建和授权的项目
export function queryProjectCreatedAndAuthorizedByUser(): Promise<ProjectList[]> {
  return new Promise((resolve) => {
    setTimeout(() => {
      // 返回当前用户相关的项目
      resolve(mockProjects)
    }, 200)
  })
}

// 模拟获取未授权的项目
export function queryUnauthorizedProject(params: any): Promise<ProjectList[]> {
  return new Promise((resolve) => {
    setTimeout(() => {
      // 返回用户没有权限的项目
      const unauthorizedProjects = mockProjects.filter(p => p.userId !== params.userId && p.perm < 3)
      resolve(unauthorizedProjects)
    }, 200)
  })
}

// 模拟获取带权限级别的项目
export function queryProjectWithAuthorizedLevel(params: any): Promise<ProjectList[]> {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(mockProjects)
    }, 200)
  })
}

// 模拟获取带权限级别的项目分页列表
export function queryProjectWithAuthorizedLevelListPaging(params: any): Promise<ProjectRes> {
  return new Promise((resolve) => {
    setTimeout(() => {
      const { pageNo = 1, pageSize = 10, searchVal = '' } = params
      
      let filteredProjects = mockProjects
      if (searchVal) {
        filteredProjects = mockProjects.filter(project => 
          project.name.includes(searchVal) || 
          project.description.includes(searchVal)
        )
      }
      
      const start = (pageNo - 1) * pageSize
      const end = start + pageSize
      const totalList = filteredProjects.slice(start, end)
      
      resolve({
        totalList,
        total: filteredProjects.length,
        totalPage: Math.ceil(filteredProjects.length / pageSize),
        pageSize,
        currentPage: pageNo,
        start
      })
    }, 300)
  })
}

// 模拟获取依赖项目列表
export function queryAllProjectListForDependent(): Promise<ProjectList[]> {
  return new Promise((resolve) => {
    setTimeout(() => {
      // 返回可以作为依赖的项目列表
      resolve(mockProjects.map(p => ({
        ...p,
        // 只返回必要的字段用于依赖选择
        id: p.id,
        code: p.code,
        name: p.name,
        description: p.description
      } as any)))
    }, 200)
  })
} 