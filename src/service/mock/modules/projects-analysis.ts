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
  ProcessDefinitionRes,
  WorkflowInstanceCountVo,
  TaskInstanceCountVo,
  TaskQueueRes,
  CommandStateRes
} from '../../modules/projects-analysis/types'

// 模拟命令状态统计
export function countCommandState(): Promise<CommandStateRes[]> {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve([
        {
          errorCount: 5,
          normalCount: 95,
          commandState: 'NORMAL'
        },
        {
          errorCount: 3,
          normalCount: 12,
          commandState: 'ERROR'
        }
      ])
    }, 200)
  })
}

// 模拟按用户统计工作流定义数量
export function countDefinitionByUser(params: any): Promise<ProcessDefinitionRes> {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve({
        count: 25,
        userList: [
          {
            userName: 'admin',
            userId: 1,
            count: 15
          },
          {
            userName: 'user1',
            userId: 2,
            count: 6
          },
          {
            userName: 'user2',
            userId: 3,
            count: 4
          }
        ]
      })
    }, 200)
  })
}

// 模拟工作流实例状态统计
export function countProcessInstanceState(params: any): Promise<WorkflowInstanceCountVo> {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve({
        totalCount: 150,
        workflowInstanceStatusCounts: [
          {
            count: 85,
            state: 'SUCCESS'
          },
          {
            count: 25,
            state: 'RUNNING_EXECUTION'
          },
          {
            count: 15,
            state: 'FAILURE'
          },
          {
            count: 10,
            state: 'STOP'
          },
          {
            count: 8,
            state: 'PAUSE'
          },
          {
            count: 7,
            state: 'WAIT_TO_RUN'
          }
        ]
      })
    }, 200)
  })
}

// 模拟队列状态统计
export function countQueueState(): Promise<TaskQueueRes> {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve({
        taskKill: 3,
        taskQueue: 12
      })
    }, 200)
  })
}

// 模拟任务状态统计
export function countTaskState(params: any): Promise<TaskInstanceCountVo> {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve({
        totalCount: 320,
        taskInstanceStatusCounts: [
          {
            count: 220,
            state: 'SUCCESS'
          },
          {
            count: 45,
            state: 'RUNNING_EXECUTION'
          },
          {
            count: 25,
            state: 'FAILURE'
          },
          {
            count: 15,
            state: 'KILL'
          },
          {
            count: 10,
            state: 'PAUSE'
          },
          {
            count: 5,
            state: 'WAIT_TO_RUN'
          }
        ]
      })
    }, 200)
  })
}

// 模拟命令列表分页查询
export function queryListCommandPaging(params: any): Promise<any> {
  return new Promise((resolve) => {
    setTimeout(() => {
      const { pageNo = 1, pageSize = 10 } = params
      
      const mockCommands = [
        {
          id: 1,
          commandType: 'START_PROCESS',
          processDefinitionCode: 1001,
          processDefinitionVersion: 1,
          processInstanceId: 1001,
          commandParam: '{"startNodeList":"","taskDependType":"TASK_POST","warningType":"NONE"}',
          taskDependType: 'TASK_POST',
          failureStrategy: 'CONTINUE',
          warningType: 'NONE',
          warningGroupId: null,
          scheduleTime: '2024-01-20 10:00:00',
          startTime: '2024-01-20 10:00:05',
          executorId: 1,
          updateTime: '2024-01-20 10:00:05',
          processInstancePriority: 'MEDIUM',
          workerGroup: 'default',
          tenantCode: 'default',
          environmentCode: null,
          dryRun: 0
        },
        {
          id: 2,
          commandType: 'REPEAT_RUNNING',
          processDefinitionCode: 1002,
          processDefinitionVersion: 1,
          processInstanceId: 1002,
          commandParam: '{"startNodeList":"","taskDependType":"TASK_POST","warningType":"EMAIL"}',
          taskDependType: 'TASK_POST',
          failureStrategy: 'END',
          warningType: 'EMAIL',
          warningGroupId: 1,
          scheduleTime: '2024-01-20 11:00:00',
          startTime: '2024-01-20 11:00:03',
          executorId: 1,
          updateTime: '2024-01-20 11:00:03',
          processInstancePriority: 'HIGH',
          workerGroup: 'etl-workers',
          tenantCode: 'etl_tenant',
          environmentCode: 'prod',
          dryRun: 0
        }
      ]
      
      const start = (pageNo - 1) * pageSize
      const end = start + pageSize
      const totalList = mockCommands.slice(start, end)
      
      resolve({
        totalList,
        total: mockCommands.length,
        totalPage: Math.ceil(mockCommands.length / pageSize),
        pageSize,
        currentPage: pageNo,
        start
      })
    }, 300)
  })
}

// 模拟错误命令列表分页查询
export function queryListErrorCommandPaging(params: any): Promise<any> {
  return new Promise((resolve) => {
    setTimeout(() => {
      const { pageNo = 1, pageSize = 10 } = params
      
      const mockErrorCommands = [
        {
          id: 3,
          commandType: 'START_PROCESS',
          processDefinitionCode: 1003,
          processDefinitionVersion: 1,
          processInstanceId: 1003,
          commandParam: '{"startNodeList":"","taskDependType":"TASK_POST","warningType":"NONE"}',
          taskDependType: 'TASK_POST',
          failureStrategy: 'CONTINUE',
          warningType: 'NONE',
          warningGroupId: null,
          scheduleTime: '2024-01-20 12:00:00',
          startTime: null,
          executorId: 1,
          updateTime: '2024-01-20 12:00:00',
          processInstancePriority: 'MEDIUM',
          workerGroup: 'default',
          tenantCode: 'default',
          environmentCode: null,
          dryRun: 0,
          message: 'Worker group not found'
        }
      ]
      
      const start = (pageNo - 1) * pageSize
      const end = start + pageSize
      const totalList = mockErrorCommands.slice(start, end)
      
      resolve({
        totalList,
        total: mockErrorCommands.length,
        totalPage: Math.ceil(mockErrorCommands.length / pageSize),
        pageSize,
        currentPage: pageNo,
        start
      })
    }, 300)
  })
} 