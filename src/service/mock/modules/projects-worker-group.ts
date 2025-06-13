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

import type { ProjectWorkerGroup, UpdateProjectWorkerGroupsReq } from '../../modules/projects-worker-group/types'

// 模拟项目工作组数据
const mockProjectWorkerGroups: { [projectCode: number]: ProjectWorkerGroup[] } = {
  1001: [
    {
      id: 1,
      projectCode: 1001,
      workerGroup: 'default',
      createTime: '2024-01-01 10:00:00',
      updateTime: '2024-01-01 10:00:00'
    },
    {
      id: 2,
      projectCode: 1001,
      workerGroup: 'data-processing',
      createTime: '2024-01-02 11:00:00',
      updateTime: '2024-01-02 11:00:00'
    }
  ],
  1002: [
    {
      id: 3,
      projectCode: 1002,
      workerGroup: 'default',
      createTime: '2024-01-02 09:15:00',
      updateTime: '2024-01-02 09:15:00'
    },
    {
      id: 4,
      projectCode: 1002,
      workerGroup: 'etl-workers',
      createTime: '2024-01-03 14:30:00',
      updateTime: '2024-01-03 14:30:00'
    }
  ],
  1003: [
    {
      id: 5,
      projectCode: 1003,
      workerGroup: 'default',
      createTime: '2024-01-03 16:45:00',
      updateTime: '2024-01-03 16:45:00'
    },
    {
      id: 6,
      projectCode: 1003,
      workerGroup: 'ml-workers',
      createTime: '2024-01-04 10:20:00',
      updateTime: '2024-01-04 10:20:00'
    }
  ],
  1004: [
    {
      id: 7,
      projectCode: 1004,
      workerGroup: 'default',
      createTime: '2024-01-04 13:20:00',
      updateTime: '2024-01-04 13:20:00'
    },
    {
      id: 8,
      projectCode: 1004,
      workerGroup: 'report-workers',
      createTime: '2024-01-05 09:15:00',
      updateTime: '2024-01-05 09:15:00'
    }
  ],
  1005: [
    {
      id: 9,
      projectCode: 1005,
      workerGroup: 'default',
      createTime: '2024-01-05 08:30:00',
      updateTime: '2024-01-05 08:30:00'
    },
    {
      id: 10,
      projectCode: 1005,
      workerGroup: 'monitor-workers',
      createTime: '2024-01-06 16:45:00',
      updateTime: '2024-01-06 16:45:00'
    }
  ]
}

// 模拟查询项目工作组
export function queryWorkerGroupsByProjectCode(projectCode: number): Promise<{ data: ProjectWorkerGroup[] }> {
  return new Promise((resolve) => {
    setTimeout(() => {
      const workerGroups = mockProjectWorkerGroups[projectCode] || [
        {
          id: Date.now(),
          projectCode,
          workerGroup: 'default',
          createTime: new Date().toISOString().replace('T', ' ').substring(0, 19),
          updateTime: new Date().toISOString().replace('T', ' ').substring(0, 19)
        }
      ]
      resolve({ data: workerGroups })
    }, 200)
  })
}

// 模拟分配工作组
export function assignWorkerGroups(
  data: UpdateProjectWorkerGroupsReq,
  projectCode: number
): Promise<boolean> {
  return new Promise((resolve) => {
    setTimeout(() => {
      const workerGroups = data.workerGroups ? data.workerGroups.split(',') : ['default']
      
      // 清除现有的工作组分配
      mockProjectWorkerGroups[projectCode] = []
      
      // 添加新的工作组分配
      workerGroups.forEach((workerGroup, index) => {
        mockProjectWorkerGroups[projectCode].push({
          id: Date.now() + index,
          projectCode,
          workerGroup: workerGroup.trim(),
          createTime: new Date().toISOString().replace('T', ' ').substring(0, 19),
          updateTime: new Date().toISOString().replace('T', ' ').substring(0, 19)
        })
      })
      
      resolve(true)
    }, 300)
  })
} 