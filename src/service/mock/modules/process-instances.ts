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

// 模拟工作流实例数据
const mockProcessInstances: { [projectCode: number]: any[] } = {
  1001: [
    {
      id: 1001,
      name: '数据同步工作流_20240120_001',
      state: 'SUCCESS',
      commandType: 'START_PROCESS',
      scheduleTime: '2024-01-20 10:00:00',
      processDefinitionCode: 2001,
      processDefinitionName: '数据同步工作流',
      processDefinitionVersion: 1,
      startTime: '2024-01-20 10:00:05',
      endTime: '2024-01-20 10:15:30',
      duration: '15m 25s',
      runTimes: 1,
      recovery: 'NO',
      dryRun: 0,
      executorName: 'admin',
      executorId: 1,
      host: '192.168.1.100:5678',
      processInstancePriority: 'MEDIUM',
      workerGroup: 'default',
      tenantCode: 'default',
      tenantId: 1,
      warningType: 'NONE',
      warningGroupId: 0,
      failureStrategy: 'END',
      testFlag: 0,
      flag: 'YES',
      commandParam: '{}',
      taskDependType: 'TASK_POST',
      maxTryTimes: 0,
      globalParams: '[]',
      locations: '{"task_1":{"x":100,"y":100},"task_2":{"x":300,"y":100}}',
      historyCmd: '',
      dependenceScheduleTimes: '',
      processDefinition: {
        id: 1,
        code: 2001,
        name: '数据同步工作流',
        version: 1,
        releaseState: 'ONLINE',
        projectCode: 1001,
        description: '每日数据同步处理工作流'
      },
      dagData: {
        processDefinition: {
          id: 1,
          code: 2001,
          name: '数据同步工作流',
          version: 1,
          releaseState: 'ONLINE',
          projectCode: 1001,
          description: '每日数据同步处理工作流',
          globalParams: '[]',
          locations: '{"task_1":{"x":100,"y":100},"task_2":{"x":300,"y":100}}',
          timeout: 0,
          tenantId: 1,
          executionType: 'PARALLEL'
        },
        processTaskRelationList: [],
        taskDefinitionList: []
      }
    },
    {
      id: 1002,
      name: '数据同步工作流_20240120_002',
      state: 'RUNNING_EXECUTION',
      commandType: 'START_PROCESS',
      scheduleTime: '2024-01-20 14:00:00',
      processDefinitionCode: 2001,
      processDefinitionName: '数据同步工作流',
      processDefinitionVersion: 1,
      startTime: '2024-01-20 14:00:05',
      endTime: '',
      duration: '',
      runTimes: 1,
      recovery: 'NO',
      dryRun: 0,
      executorName: 'admin',
      executorId: 1,
      host: '192.168.1.101:5678',
      processInstancePriority: 'HIGH',
      workerGroup: 'default',
      tenantCode: 'default',
      tenantId: 1,
      warningType: 'FAILURE',
      warningGroupId: 1,
      failureStrategy: 'CONTINUE',
      testFlag: 0,
      flag: 'YES',
      commandParam: '{}',
      taskDependType: 'TASK_POST',
      maxTryTimes: 3,
      globalParams: '[]',
      locations: '{"task_1":{"x":100,"y":100},"task_2":{"x":300,"y":100}}',
      historyCmd: '',
      dependenceScheduleTimes: '',
      processDefinition: {
        id: 1,
        code: 2001,
        name: '数据同步工作流',
        version: 1,
        releaseState: 'ONLINE',
        projectCode: 1001,
        description: '每日数据同步处理工作流'
      },
      dagData: {
        processDefinition: {
          id: 1,
          code: 2001,
          name: '数据同步工作流',
          version: 1,
          releaseState: 'ONLINE',
          projectCode: 1001,
          description: '每日数据同步处理工作流',
          globalParams: '[]',
          locations: '{"task_1":{"x":100,"y":100},"task_2":{"x":300,"y":100}}',
          timeout: 0,
          tenantId: 1,
          executionType: 'PARALLEL'
        },
        processTaskRelationList: [],
        taskDefinitionList: []
      }
    },
    {
      id: 1003,
      name: '报表生成工作流_20240119_001',
      state: 'FAILURE',
      commandType: 'START_PROCESS',
      scheduleTime: '2024-01-19 09:00:00',
      processDefinitionCode: 2002,
      processDefinitionName: '报表生成工作流',
      processDefinitionVersion: 1,
      startTime: '2024-01-19 09:00:05',
      endTime: '2024-01-19 09:05:20',
      duration: '5m 15s',
      runTimes: 2,
      recovery: 'FAILURE_RECOVERY',
      dryRun: 0,
      executorName: 'user1',
      executorId: 2,
      host: '192.168.1.102:5678',
      processInstancePriority: 'LOW',
      workerGroup: 'report-workers',
      tenantCode: 'default',
      tenantId: 1,
      warningType: 'ALL',
      warningGroupId: 1,
      failureStrategy: 'END',
      testFlag: 0,
      flag: 'YES',
      commandParam: '{"report_date":"2024-01-19"}',
      taskDependType: 'TASK_POST',
      maxTryTimes: 3,
      globalParams: '[{"prop":"report_date","value":"2024-01-19","direct":"IN","type":"VARCHAR"}]',
      locations: '{"task_3":{"x":150,"y":150}}',
      historyCmd: 'RECOVER_TOLERANCE_FAULT_PROCESS',
      dependenceScheduleTimes: '',
      processDefinition: {
        id: 2,
        code: 2002,
        name: '报表生成工作流',
        version: 1,
        releaseState: 'OFFLINE',
        projectCode: 1001,
        description: '生成日报、周报、月报'
      },
      dagData: {
        processDefinition: {
          id: 2,
          code: 2002,
          name: '报表生成工作流',
          version: 1,
          releaseState: 'OFFLINE',
          projectCode: 1001,
          description: '生成日报、周报、月报',
          globalParams: '[{"prop":"report_date","value":"${system.biz.date}","direct":"IN","type":"VARCHAR"}]',
          locations: '{"task_3":{"x":150,"y":150}}',
          timeout: 3600,
          tenantId: 1,
          executionType: 'PARALLEL'
        },
        processTaskRelationList: [],
        taskDefinitionList: []
      }
    }
  ],
  1002: [
    {
      id: 1004,
      name: 'ETL数据处理流程_20240120_001',
      state: 'SUCCESS',
      commandType: 'SCHEDULER',
      scheduleTime: '2024-01-20 02:00:00',
      processDefinitionCode: 2003,
      processDefinitionName: 'ETL数据处理流程',
      processDefinitionVersion: 1,
      startTime: '2024-01-20 02:00:10',
      endTime: '2024-01-20 04:30:45',
      duration: '2h 30m 35s',
      runTimes: 1,
      recovery: 'NO',
      dryRun: 0,
      executorName: 'etl_user',
      executorId: 3,
      host: '192.168.1.103:5678',
      processInstancePriority: 'HIGH',
      workerGroup: 'etl-workers',
      tenantCode: 'etl_tenant',
      tenantId: 2,
      warningType: 'FAILURE',
      warningGroupId: 1,
      failureStrategy: 'END',
      testFlag: 0,
      flag: 'YES',
      commandParam: '{}',
      taskDependType: 'TASK_POST',
      maxTryTimes: 2,
      globalParams: '[]',
      locations: '{"task_4":{"x":100,"y":100},"task_5":{"x":300,"y":100},"task_6":{"x":500,"y":100}}',
      historyCmd: '',
      dependenceScheduleTimes: '',
      processDefinition: {
        id: 3,
        code: 2003,
        name: 'ETL数据处理流程',
        version: 1,
        releaseState: 'ONLINE',
        projectCode: 1002,
        description: 'Extract-Transform-Load数据处理流程'
      },
      dagData: {
        processDefinition: {
          id: 3,
          code: 2003,
          name: 'ETL数据处理流程',
          version: 1,
          releaseState: 'ONLINE',
          projectCode: 1002,
          description: 'Extract-Transform-Load数据处理流程',
          globalParams: '[]',
          locations: '{"task_4":{"x":100,"y":100},"task_5":{"x":300,"y":100},"task_6":{"x":500,"y":100}}',
          timeout: 7200,
          tenantId: 2,
          executionType: 'PARALLEL'
        },
        processTaskRelationList: [],
        taskDefinitionList: []
      }
    },
    {
      id: 1005,
      name: 'ETL数据处理流程_20240119_001',
      state: 'STOP',
      commandType: 'START_PROCESS',
      scheduleTime: '2024-01-19 02:00:00',
      processDefinitionCode: 2003,
      processDefinitionName: 'ETL数据处理流程',
      processDefinitionVersion: 1,
      startTime: '2024-01-19 02:00:10',
      endTime: '2024-01-19 02:45:30',
      duration: '45m 20s',
      runTimes: 1,
      recovery: 'STOP',
      dryRun: 0,
      executorName: 'admin',
      executorId: 1,
      host: '192.168.1.103:5678',
      processInstancePriority: 'MEDIUM',
      workerGroup: 'etl-workers',
      tenantCode: 'etl_tenant',
      tenantId: 2,
      warningType: 'NONE',
      warningGroupId: 0,
      failureStrategy: 'END',
      testFlag: 0,
      flag: 'YES',
      commandParam: '{}',
      taskDependType: 'TASK_POST',
      maxTryTimes: 2,
      globalParams: '[]',
      locations: '{"task_4":{"x":100,"y":100},"task_5":{"x":300,"y":100},"task_6":{"x":500,"y":100}}',
      historyCmd: 'STOP',
      dependenceScheduleTimes: '',
      processDefinition: {
        id: 3,
        code: 2003,
        name: 'ETL数据处理流程',
        version: 1,
        releaseState: 'ONLINE',
        projectCode: 1002,
        description: 'Extract-Transform-Load数据处理流程'
      },
      dagData: {
        processDefinition: {
          id: 3,
          code: 2003,
          name: 'ETL数据处理流程',
          version: 1,
          releaseState: 'ONLINE',
          projectCode: 1002,
          description: 'Extract-Transform-Load数据处理流程',
          globalParams: '[]',
          locations: '{"task_4":{"x":100,"y":100},"task_5":{"x":300,"y":100},"task_6":{"x":500,"y":100}}',
          timeout: 7200,
          tenantId: 2,
          executionType: 'PARALLEL'
        },
        processTaskRelationList: [],
        taskDefinitionList: []
      }
    }
  ],
  1003: [
    {
      id: 1006,
      name: '机器学习训练流程_20240118_001',
      state: 'PAUSE',
      commandType: 'START_PROCESS',
      scheduleTime: '2024-01-18 20:00:00',
      processDefinitionCode: 2004,
      processDefinitionName: '机器学习训练流程',
      processDefinitionVersion: 1,
      startTime: '2024-01-18 20:00:15',
      endTime: '',
      duration: '',
      runTimes: 1,
      recovery: 'PAUSE',
      dryRun: 0,
      executorName: 'ml_user',
      executorId: 4,
      host: '192.168.1.104:5678',
      processInstancePriority: 'HIGH',
      workerGroup: 'ml-workers',
      tenantCode: 'ml_tenant',
      tenantId: 3,
      warningType: 'ALL',
      warningGroupId: 2,
      failureStrategy: 'CONTINUE',
      testFlag: 0,
      flag: 'YES',
      commandParam: '{"model_version":"v1.0"}',
      taskDependType: 'TASK_POST',
      maxTryTimes: 2,
      globalParams: '[{"prop":"model_version","value":"v1.0","direct":"IN","type":"VARCHAR"}]',
      locations: '{"task_7":{"x":100,"y":100},"task_8":{"x":300,"y":100},"task_9":{"x":500,"y":100}}',
      historyCmd: 'PAUSE',
      dependenceScheduleTimes: '',
      processDefinition: {
        id: 4,
        code: 2004,
        name: '机器学习训练流程',
        version: 1,
        releaseState: 'OFFLINE',
        projectCode: 1003,
        description: '机器学习模型训练和评估流程'
      },
      dagData: {
        processDefinition: {
          id: 4,
          code: 2004,
          name: '机器学习训练流程',
          version: 1,
          releaseState: 'OFFLINE',
          projectCode: 1003,
          description: '机器学习模型训练和评估流程',
          globalParams: '[{"prop":"model_version","value":"v1.0","direct":"IN","type":"VARCHAR"}]',
          locations: '{"task_7":{"x":100,"y":100},"task_8":{"x":300,"y":100},"task_9":{"x":500,"y":100}}',
          timeout: 14400,
          tenantId: 3,
          executionType: 'PARALLEL'
        },
        processTaskRelationList: [],
        taskDefinitionList: []
      }
    }
  ]
}

let nextInstanceId = 1007

// 模拟工作流实例列表分页查询
export function queryProcessInstanceListPaging(params: any, projectCode: number): Promise<any> {
  return new Promise((resolve) => {
    setTimeout(() => {
      const { 
        pageNo = 1, 
        pageSize = 10, 
        searchVal = '', 
        stateType = '',
        executorName = '',
        host = '',
        processDefineCode,
        startDate = '',
        endDate = ''
      } = params
      
      let instances = mockProcessInstances[projectCode] || []
      
      // 根据搜索条件过滤
      if (searchVal) {
        instances = instances.filter(instance => 
          instance.name.includes(searchVal) || 
          instance.processDefinitionName.includes(searchVal)
        )
      }
      
      if (stateType) {
        instances = instances.filter(instance => instance.state === stateType)
      }
      
      if (executorName) {
        instances = instances.filter(instance => instance.executorName.includes(executorName))
      }
      
      if (host) {
        instances = instances.filter(instance => instance.host.includes(host))
      }
      
      if (processDefineCode) {
        instances = instances.filter(instance => instance.processDefinitionCode === processDefineCode)
      }
      
      if (startDate && endDate) {
        instances = instances.filter(instance => {
          const instanceDate = instance.startTime.split(' ')[0]
          return instanceDate >= startDate && instanceDate <= endDate
        })
      }
      
      // 分页处理
      const start = (pageNo - 1) * pageSize
      const end = start + pageSize
      const totalList = instances.slice(start, end)
      
      resolve({
        totalList,
        total: instances.length,
        totalPage: Math.ceil(instances.length / pageSize),
        pageSize,
        currentPage: pageNo,
        start
      })
    }, 300)
  })
}

// 模拟根据ID查询工作流实例
export function queryProcessInstanceById(instanceId: number, projectCode: number): Promise<any> {
  return new Promise((resolve) => {
    setTimeout(() => {
      const instances = mockProcessInstances[projectCode] || []
      const instance = instances.find(inst => inst.id === instanceId)
      
      if (instance) {
        resolve({
          ...instance,
          dagData: {
            processDefinition: {
              id: instance.id,
              code: instance.processDefinitionCode,
              name: instance.processDefinitionName,
              version: instance.processDefinitionVersion,
              releaseState: 'ONLINE',
              projectCode: projectCode,
              description: '工作流描述',
              globalParams: '[]',
              locations: '{}',
              timeout: 0,
              tenantId: 1,
              executionType: 'PARALLEL'
            },
            processTaskRelationList: [],
            taskDefinitionList: []
          }
        })
      } else {
        // 查找其他项目中的实例
        for (const code in mockProcessInstances) {
          const projectInstances = mockProcessInstances[parseInt(code)]
          const foundInstance = projectInstances.find(inst => inst.id === instanceId)
          if (foundInstance) {
            resolve(foundInstance)
            return
          }
        }
        resolve(null)
      }
    }, 200)
  })
}

// 模拟更新工作流实例
export function updateProcessInstance(data: any, instanceId: number, projectCode: number): Promise<boolean> {
  return new Promise((resolve) => {
    setTimeout(() => {
      const instances = mockProcessInstances[projectCode] || []
      const instanceIndex = instances.findIndex(inst => inst.id === instanceId)
      
      if (instanceIndex !== -1) {
        instances[instanceIndex] = {
          ...instances[instanceIndex],
          ...data,
          updateTime: new Date().toISOString().replace('T', ' ').substring(0, 19)
        }
        resolve(true)
      } else {
        resolve(false)
      }
    }, 300)
  })
}

// 模拟删除工作流实例
export function deleteProcessInstanceById(instanceId: number, projectCode: number): Promise<boolean> {
  return new Promise((resolve) => {
    setTimeout(() => {
      const instances = mockProcessInstances[projectCode] || []
      const instanceIndex = instances.findIndex(inst => inst.id === instanceId)
      
      if (instanceIndex !== -1) {
        instances.splice(instanceIndex, 1)
        resolve(true)
      } else {
        resolve(false)
      }
    }, 300)
  })
}

// 模拟批量删除工作流实例
export function batchDeleteProcessInstanceByIds(data: any, projectCode: number): Promise<boolean> {
  return new Promise((resolve) => {
    setTimeout(() => {
      const instanceIds = data.processInstanceIds.split(',').map((id: string) => parseInt(id))
      const instances = mockProcessInstances[projectCode] || []
      
      instanceIds.forEach(id => {
        const instanceIndex = instances.findIndex(inst => inst.id === id)
        if (instanceIndex !== -1) {
          instances.splice(instanceIndex, 1)
        }
      })
      
      resolve(true)
    }, 500)
  })
}

// 模拟查询子工作流实例
export function querySubProcessInstanceByTaskCode(params: any, code: any): Promise<any[]> {
  return new Promise((resolve) => {
    setTimeout(() => {
      // 模拟返回空的子工作流实例列表
      resolve([])
    }, 200)
  })
}

// 模拟查询工作流实例的任务列表
export function queryTaskListByProcessId(instanceId: number, projectCode: number): Promise<any[]> {
  return new Promise((resolve) => {
    setTimeout(() => {
      // 模拟任务列表数据
      const mockTasks = [
        {
          id: 10001,
          name: 'extract_data',
          taskCode: 3001,
          taskType: 'SHELL',
          processInstanceId: instanceId,
          state: 'SUCCESS',
          submitTime: '2024-01-20 10:00:05',
          startTime: '2024-01-20 10:00:10',
          endTime: '2024-01-20 10:05:30',
          duration: '5m 20s',
          host: '192.168.1.100:5678',
          executePath: '/tmp/dolphinscheduler/exec/process/1001/10001',
          logPath: '/opt/dolphinscheduler/logs/10001.log',
          alertFlag: 'NO',
          retryTimes: 0,
          pid: 12345,
          appLink: '',
          flag: 'YES',
          runFlag: 'NORMAL',
          dependentResult: '',
          maxRetryTimes: 0,
          retryInterval: 1,
          taskInstancePriority: 'MEDIUM',
          workerGroup: 'default',
          executorId: 1,
          executorName: 'admin',
          environmentCode: -1,
          environmentConfig: '',
          taskParams: '{"rawScript":"#!/bin/bash\\necho \\"Extracting data...\\""}',
          taskGroupId: 0,
          taskGroupPriority: 0,
          cpuQuota: -1,
          memoryMax: -1,
          taskExecuteType: 'BATCH'
        },
        {
          id: 10002,
          name: 'transform_data',
          taskCode: 3002,
          taskType: 'SHELL',
          processInstanceId: instanceId,
          state: 'SUCCESS',
          submitTime: '2024-01-20 10:05:35',
          startTime: '2024-01-20 10:05:40',
          endTime: '2024-01-20 10:15:30',
          duration: '9m 50s',
          host: '192.168.1.100:5678',
          executePath: '/tmp/dolphinscheduler/exec/process/1001/10002',
          logPath: '/opt/dolphinscheduler/logs/10002.log',
          alertFlag: 'NO',
          retryTimes: 0,
          pid: 12346,
          appLink: '',
          flag: 'YES',
          runFlag: 'NORMAL',
          dependentResult: '',
          maxRetryTimes: 0,
          retryInterval: 1,
          taskInstancePriority: 'MEDIUM',
          workerGroup: 'default',
          executorId: 1,
          executorName: 'admin',
          environmentCode: -1,
          environmentConfig: '',
          taskParams: '{"rawScript":"#!/bin/bash\\necho \\"Transforming data...\\""}',
          taskGroupId: 0,
          taskGroupPriority: 0,
          cpuQuota: -1,
          memoryMax: -1,
          taskExecuteType: 'BATCH'
        }
      ]
      
      resolve(mockTasks)
    }, 200)
  })
}

// 模拟查询父工作流实例
export function queryParentInstanceBySubId(subId: number, projectCode: number): Promise<any> {
  return new Promise((resolve) => {
    setTimeout(() => {
      // 模拟返回父工作流实例信息
      resolve({
        id: 1001,
        name: '数据同步工作流_20240120_001',
        processDefinitionCode: 2001,
        processDefinitionName: '数据同步工作流'
      })
    }, 200)
  })
}

// 模拟查询最长运行时间的工作流实例
export function queryTopNLongestRunningProcessInstance(params: any, projectCode: number): Promise<any[]> {
  return new Promise((resolve) => {
    setTimeout(() => {
      const { size = 10, startDate, endDate } = params
      
      // 模拟返回运行时间最长的工作流实例
      const longRunningInstances = [
        {
          processInstanceId: 1004,
          processInstanceName: 'ETL数据处理流程_20240120_001',
          processDefinitionName: 'ETL数据处理流程',
          duration: '2h 30m 35s',
          startTime: '2024-01-20 02:00:10',
          endTime: '2024-01-20 04:30:45',
          state: 'SUCCESS'
        },
        {
          processInstanceId: 1005,
          processInstanceName: 'ETL数据处理流程_20240119_001',
          processDefinitionName: 'ETL数据处理流程',
          duration: '45m 20s',
          startTime: '2024-01-19 02:00:10',
          endTime: '2024-01-19 02:45:30',
          state: 'STOP'
        }
      ]
      
      resolve(longRunningInstances.slice(0, size))
    }, 200)
  })
}

export function viewGanttTree(instanceId: number, projectCode: number): Promise<any> {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve({
        id: instanceId,
        name: '甘特图数据',
        children: []
      })
    }, 200)
  })
}

export function viewVariables(instanceId: number, projectCode: number): Promise<any[]> {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve([
        {
          prop: 'report_date',
          value: '2024-01-20',
          direct: 'IN',
          type: 'VARCHAR'
        }
      ])
    }, 200)
  })
} 