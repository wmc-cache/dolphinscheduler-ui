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
    },
    {
      id: 1007,
      name: '测试sql脚本_20240120_001',
      state: 'SUCCESS',
      commandType: 'START_PROCESS',
      scheduleTime: '2024-01-20 16:47:00',
      processDefinitionCode: 143212523355072,
      processDefinitionName: '测试sql脚本',
      processDefinitionVersion: 58,
      startTime: '2024-01-20 16:47:31',
      endTime: '2024-01-20 16:47:45',
      duration: '14s',
      runTimes: 1,
      recovery: 'NO',
      dryRun: 0,
      executorName: 'admin',
      executorId: 1,
      host: '192.168.1.105:5678',
      processInstancePriority: 'MEDIUM',
      workerGroup: '162',
      tenantCode: 'default',
      tenantId: 1,
      warningType: 'NONE',
      warningGroupId: 0,
      failureStrategy: 'END',
      testFlag: 0,
      flag: 'YES',
      commandParam: '{}',
      taskDependType: 'TASK_POST',
      maxTryTimes: 1,
      globalParams: '[]',
      locations: '[{"taskCode":143212429472704,"x":390,"y":90}]',
      historyCmd: '',
      dependenceScheduleTimes: '',
      processDefinition: {
        id: 779,
        code: 143212523355072,
        name: '测试sql脚本',
        version: 58,
        releaseState: 'OFFLINE',
        projectCode: 1001,
        description: '测试sql脚本'
      },
      dagData: {
        processDefinition: {
          id: 779,
          code: 143212523355072,
          name: '测试sql脚本',
          version: 58,
          releaseState: 'OFFLINE',
          projectCode: 1001,
          description: '测试sql脚本',
          globalParams: '[]',
          locations: '[{"taskCode":143212429472704,"x":390,"y":90}]',
          timeout: 0,
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
        // 根据不同的工作流实例返回不同的详细数据
        let enhancedDagData = { ...instance.dagData }
        
        if (instance.processDefinitionCode === 2001) {
          // 数据同步工作流的详细任务定义
          enhancedDagData = {
            processDefinition: {
              ...instance.dagData.processDefinition,
              locations: '[{"taskCode":3001,"x":100,"y":100},{"taskCode":3002,"x":300,"y":100},{"taskCode":3003,"x":500,"y":100}]',
              globalParamList: [],
              globalParamMap: {},
              createTime: '2024-01-01 10:00:00',
              updateTime: '2024-01-15 14:30:00',
              flag: 'YES',
              userName: null,
              projectName: null,
              scheduleReleaseState: null,
              schedule: null,
              modifyBy: null,
              warningGroupId: null
            },
            processTaskRelationList: [
              {
                id: 1001,
                name: '',
                processDefinitionVersion: 1,
                projectCode: projectCode,
                processDefinitionCode: 2001,
                preTaskCode: 0,
                preTaskVersion: 0,
                postTaskCode: 3001,
                postTaskVersion: 1,
                conditionType: 'NONE',
                conditionParams: {},
                createTime: '2024-01-01 10:00:00',
                updateTime: '2024-01-15 14:30:00',
                operator: 1,
                operateTime: '2024-01-15 14:30:00'
              },
              {
                id: 1002,
                name: '',
                processDefinitionVersion: 1,
                projectCode: projectCode,
                processDefinitionCode: 2001,
                preTaskCode: 3001,
                preTaskVersion: 1,
                postTaskCode: 3002,
                postTaskVersion: 1,
                conditionType: 'NONE',
                conditionParams: {},
                createTime: '2024-01-01 10:00:00',
                updateTime: '2024-01-15 14:30:00',
                operator: 1,
                operateTime: '2024-01-15 14:30:00'
              },
              {
                id: 1003,
                name: '',
                processDefinitionVersion: 1,
                projectCode: projectCode,
                processDefinitionCode: 2001,
                preTaskCode: 3002,
                preTaskVersion: 1,
                postTaskCode: 3003,
                postTaskVersion: 1,
                conditionType: 'NONE',
                conditionParams: {},
                createTime: '2024-01-01 10:00:00',
                updateTime: '2024-01-15 14:30:00',
                operator: 1,
                operateTime: '2024-01-15 14:30:00'
              }
            ],
            taskDefinitionList: [
              {
                id: 1001,
                code: 3001,
                name: 'extract_data',
                version: 1,
                description: '数据提取任务',
                projectCode: projectCode,
                userId: 1,
                taskType: 'SHELL',
                taskParams: {
                  localParams: [],
                  resourceList: [],
                  rawScript: '#!/bin/bash\necho "开始提取数据..."\n# 模拟数据提取过程\nsleep 5\necho "数据提取完成"'
                },
                taskParamList: [],
                taskParamMap: {},
                flag: 'YES',
                isCache: 'NO',
                taskPriority: 'MEDIUM',
                userName: null,
                projectName: null,
                workerGroup: 'default',
                environmentCode: -1,
                failRetryTimes: 3,
                failRetryInterval: 1,
                timeoutFlag: 'CLOSE',
                timeoutNotifyStrategy: '',
                timeout: 0,
                delayTime: 0,
                resourceIds: null,
                createTime: '2024-01-01 10:00:00',
                updateTime: '2024-01-15 14:30:00',
                modifyBy: null,
                taskGroupId: 0,
                taskGroupPriority: 0,
                cpuQuota: -1,
                memoryMax: -1,
                taskExecuteType: 'BATCH',
                operator: 1,
                operateTime: '2024-01-15 14:30:00',
                dependence: '',
                isSystem: 0,
                integrationDataId: null
              },
              {
                id: 1002,
                code: 3002,
                name: 'transform_data',
                version: 1,
                description: '数据转换任务',
                projectCode: projectCode,
                userId: 1,
                taskType: 'SHELL',
                taskParams: {
                  localParams: [],
                  resourceList: [],
                  rawScript: '#!/bin/bash\necho "开始转换数据..."\n# 模拟数据转换过程\nsleep 8\necho "数据转换完成"'
                },
                taskParamList: [],
                taskParamMap: {},
                flag: 'YES',
                isCache: 'NO',
                taskPriority: 'MEDIUM',
                userName: null,
                projectName: null,
                workerGroup: 'default',
                environmentCode: -1,
                failRetryTimes: 3,
                failRetryInterval: 1,
                timeoutFlag: 'CLOSE',
                timeoutNotifyStrategy: '',
                timeout: 0,
                delayTime: 0,
                resourceIds: null,
                createTime: '2024-01-01 10:00:00',
                updateTime: '2024-01-15 14:30:00',
                modifyBy: null,
                taskGroupId: 0,
                taskGroupPriority: 0,
                cpuQuota: -1,
                memoryMax: -1,
                taskExecuteType: 'BATCH',
                operator: 1,
                operateTime: '2024-01-15 14:30:00',
                dependence: '',
                isSystem: 0,
                integrationDataId: null
              },
              {
                id: 1003,
                code: 3003,
                name: 'load_data',
                version: 1,
                description: '数据加载任务',
                projectCode: projectCode,
                userId: 1,
                taskType: 'SHELL',
                taskParams: {
                  localParams: [],
                  resourceList: [],
                  rawScript: '#!/bin/bash\necho "开始加载数据..."\n# 模拟数据加载过程\nsleep 3\necho "数据加载完成"'
                },
                taskParamList: [],
                taskParamMap: {},
                flag: 'YES',
                isCache: 'NO',
                taskPriority: 'MEDIUM',
                userName: null,
                projectName: null,
                workerGroup: 'default',
                environmentCode: -1,
                failRetryTimes: 3,
                failRetryInterval: 1,
                timeoutFlag: 'CLOSE',
                timeoutNotifyStrategy: '',
                timeout: 0,
                delayTime: 0,
                resourceIds: null,
                createTime: '2024-01-01 10:00:00',
                updateTime: '2024-01-15 14:30:00',
                modifyBy: null,
                taskGroupId: 0,
                taskGroupPriority: 0,
                cpuQuota: -1,
                memoryMax: -1,
                taskExecuteType: 'BATCH',
                operator: 1,
                operateTime: '2024-01-15 14:30:00',
                dependence: '',
                isSystem: 0,
                integrationDataId: null
              }
            ]
          }
        } else if (instance.processDefinitionCode === 2002) {
          // 报表生成工作流的详细任务定义
          enhancedDagData = {
            processDefinition: {
              ...instance.dagData.processDefinition,
              locations: '[{"taskCode":3004,"x":200,"y":150}]',
              globalParamList: [
                {
                  prop: 'report_date',
                  value: '${system.biz.date}',
                  direct: 'IN',
                  type: 'VARCHAR'
                }
              ],
              globalParamMap: {
                report_date: '${system.biz.date}'
              },
              createTime: '2024-01-02 09:15:00',
              updateTime: '2024-01-16 11:20:00',
              flag: 'YES',
              userName: null,
              projectName: null,
              scheduleReleaseState: null,
              schedule: null,
              modifyBy: null,
              warningGroupId: null
            },
            processTaskRelationList: [
              {
                id: 1004,
                name: '',
                processDefinitionVersion: 1,
                projectCode: projectCode,
                processDefinitionCode: 2002,
                preTaskCode: 0,
                preTaskVersion: 0,
                postTaskCode: 3004,
                postTaskVersion: 1,
                conditionType: 'NONE',
                conditionParams: {},
                createTime: '2024-01-02 09:15:00',
                updateTime: '2024-01-16 11:20:00',
                operator: 1,
                operateTime: '2024-01-16 11:20:00'
              }
            ],
            taskDefinitionList: [
              {
                id: 1004,
                code: 3004,
                name: 'generate_report',
                version: 1,
                description: '生成报表任务',
                projectCode: projectCode,
                userId: 1,
                taskType: 'SQL',
                taskParams: {
                  localParams: [
                    {
                      prop: 'report_date',
                      direct: 'IN',
                      type: 'VARCHAR',
                      value: '${report_date}',
                      customize: 'Y'
                    },
                    {
                      prop: 'report_type',
                      direct: 'IN',
                      type: 'VARCHAR',
                      value: 'daily',
                      customize: 'Y'
                    }
                  ],
                  resourceList: [],
                  type: 'MYSQL',
                  datasource: 1,
                  sql: "SELECT * FROM sales_data WHERE date = '${report_date}' AND type = '${report_type}'",
                  sqlType: '0',
                  preStatements: [],
                  postStatements: [],
                  displayRows: 10
                },
                taskParamList: [
                  {
                    prop: 'report_date',
                    direct: 'IN',
                    type: 'VARCHAR',
                    value: '${report_date}'
                  },
                  {
                    prop: 'report_type',
                    direct: 'IN',
                    type: 'VARCHAR',
                    value: 'daily'
                  }
                ],
                taskParamMap: {
                  report_date: '${report_date}',
                  report_type: 'daily'
                },
                flag: 'YES',
                isCache: 'NO',
                taskPriority: 'HIGH',
                userName: null,
                projectName: null,
                workerGroup: 'report-workers',
                environmentCode: -1,
                failRetryTimes: 3,
                failRetryInterval: 1,
                timeoutFlag: 'OPEN',
                timeoutNotifyStrategy: 'WARN',
                timeout: 1800,
                delayTime: 0,
                resourceIds: null,
                createTime: '2024-01-02 09:15:00',
                updateTime: '2024-01-16 11:20:00',
                modifyBy: null,
                taskGroupId: 1,
                taskGroupPriority: 0,
                cpuQuota: -1,
                memoryMax: -1,
                taskExecuteType: 'BATCH',
                operator: 1,
                operateTime: '2024-01-16 11:20:00',
                dependence: '',
                isSystem: 0,
                integrationDataId: '1'
              }
                         ]
           }
         } else if (instance.processDefinitionCode === 143212523355072) {
           // 测试SQL脚本工作流的详细任务定义（基于真实数据结构）
           enhancedDagData = {
             processDefinition: {
               id: 779,
               code: 143212523355072,
               name: '测试sql脚本',
               version: 58,
               releaseState: 'OFFLINE',
               projectCode: projectCode,
               description: '测试sql脚本',
               globalParams: '[]',
               globalParamList: [],
               globalParamMap: {},
               createTime: '2025-06-07 16:53:00',
               updateTime: '2025-06-12 16:47:31',
               flag: 'YES',
               userId: 1,
               userName: null,
               projectName: null,
               locations: '[{"taskCode":143212429472704,"x":390,"y":90}]',
               scheduleReleaseState: null,
               schedule: null,
               timeout: 0,
               modifyBy: null,
               warningGroupId: null,
               executionType: 'PARALLEL'
             },
             processTaskRelationList: [
               {
                 id: 11438,
                 name: '',
                 processDefinitionVersion: 58,
                 projectCode: projectCode,
                 processDefinitionCode: 143212523355072,
                 preTaskCode: 0,
                 preTaskVersion: 0,
                 postTaskCode: 143212429472704,
                 postTaskVersion: 38,
                 conditionType: 'NONE',
                 conditionParams: {},
                 createTime: '2025-06-12 16:47:31',
                 updateTime: '2025-06-12 16:47:31',
                 operator: 1,
                 operateTime: '2025-06-12 16:47:31'
               }
             ],
             taskDefinitionList: [
               {
                 id: 1046,
                 code: 143212429472704,
                 name: '测试sql脚本',
                 version: 38,
                 description: '测试sql脚本',
                 projectCode: projectCode,
                 userId: 1,
                 taskType: 'SQL',
                 taskParams: {
                   localParams: [
                     {
                       prop: 'sex',
                       direct: 'IN',
                       type: 'VARCHAR',
                       value: '男',
                       customize: 'Y'
                     },
                     {
                       prop: 'name',
                       direct: 'IN',
                       type: 'VARCHAR',
                       value: '小明',
                       customize: 'Y'
                     },
                     {
                       prop: 'yesterday1',
                       direct: 'IN',
                       type: 'VARCHAR',
                       value: '${system.biz.date}',
                       customize: 'Y'
                     },
                     {
                       prop: 'yesterday2',
                       direct: 'IN',
                       type: 'VARCHAR',
                       value: '${system.biz.curdate}',
                       customize: 'Y'
                     },
                     {
                       prop: 'yesterday3',
                       direct: 'IN',
                       type: 'VARCHAR',
                       value: '${system.datetime}',
                       customize: 'Y'
                     },
                     {
                       prop: 'system.datetime',
                       direct: 'IN',
                       type: 'VARCHAR',
                       value: '20180606132833',
                       customize: 'N'
                     }
                   ],
                   resourceList: [],
                   type: 'MYSQL',
                   datasource: 58,
                   sql: "select * from people where name = '${name}' and sex = '${sex}' \r\nand birthday < '$[add_months(yyyyMMdd,3)]' \r\nand birthday > '${system.biz.date}'\r\nand birthday > '${system.biz.curdate}'\r\nand birthday > '${system.datetime}'\r\nand birthday > '${yesterday1}'\r\nand birthday > '${yesterday2}'\r\nand birthday > '${yesterday3}'",
                   sqlType: '0',
                   preStatements: [],
                   postStatements: [],
                   displayRows: 10
                 },
                 taskParamList: [
                   {
                     prop: 'sex',
                     direct: 'IN',
                     type: 'VARCHAR',
                     value: '男'
                   },
                   {
                     prop: 'name',
                     direct: 'IN',
                     type: 'VARCHAR',
                     value: '小明'
                   },
                   {
                     prop: 'yesterday1',
                     direct: 'IN',
                     type: 'VARCHAR',
                     value: '${system.biz.date}'
                   },
                   {
                     prop: 'yesterday2',
                     direct: 'IN',
                     type: 'VARCHAR',
                     value: '${system.biz.curdate}'
                   },
                   {
                     prop: 'yesterday3',
                     direct: 'IN',
                     type: 'VARCHAR',
                     value: '${system.datetime}'
                   },
                   {
                     prop: 'system.datetime',
                     direct: 'IN',
                     type: 'VARCHAR',
                     value: '20180606132833'
                   }
                 ],
                 taskParamMap: {
                   yesterday1: '${system.biz.date}',
                   sex: '男',
                   name: '小明',
                   yesterday3: '${system.datetime}',
                   yesterday2: '${system.biz.curdate}',
                   'system.datetime': '20180606132833'
                 },
                 flag: 'YES',
                 isCache: 'NO',
                 taskPriority: 'MEDIUM',
                 userName: null,
                 projectName: null,
                 workerGroup: '162',
                 environmentCode: 136134679047648,
                 failRetryTimes: 1,
                 failRetryInterval: 1,
                 timeoutFlag: 'OPEN',
                 timeoutNotifyStrategy: 'WARN',
                 timeout: 1,
                 delayTime: 0,
                 resourceIds: null,
                 createTime: '2025-06-07 16:53:00',
                 updateTime: '2025-06-09 14:26:19',
                 modifyBy: null,
                 taskGroupId: 1,
                 taskGroupPriority: 0,
                 cpuQuota: -1,
                 memoryMax: -1,
                 taskExecuteType: 'BATCH',
                 operator: 1,
                 operateTime: '2025-06-09 14:26:19',
                 dependence: '',
                 isSystem: 1,
                 integrationDataId: '56'
               }
             ]
           }
         }
         
         resolve({
          ...instance,
          dagData: enhancedDagData
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
      
      instanceIds.forEach((id: number) => {
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
      // 根据不同的工作流实例ID返回对应的任务实例数据
      let mockTasks: any[] = []
      
      if (instanceId === 1001) {
        // 数据同步工作流_20240120_001 的任务实例
        mockTasks = [
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
            maxRetryTimes: 3,
            retryInterval: 1,
            taskInstancePriority: 'MEDIUM',
            workerGroup: 'default',
            executorId: 1,
            executorName: 'admin',
            environmentCode: -1,
            environmentConfig: '',
            taskParams: '{"rawScript":"#!/bin/bash\\necho \\"开始提取数据...\\"\\n# 模拟数据提取过程\\nsleep 5\\necho \\"数据提取完成\\""}',
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
            maxRetryTimes: 3,
            retryInterval: 1,
            taskInstancePriority: 'MEDIUM',
            workerGroup: 'default',
            executorId: 1,
            executorName: 'admin',
            environmentCode: -1,
            environmentConfig: '',
            taskParams: '{"rawScript":"#!/bin/bash\\necho \\"开始转换数据...\\"\\n# 模拟数据转换过程\\nsleep 8\\necho \\"数据转换完成\\""}',
            taskGroupId: 0,
            taskGroupPriority: 0,
            cpuQuota: -1,
            memoryMax: -1,
            taskExecuteType: 'BATCH'
          },
          {
            id: 10003,
            name: 'load_data',
            taskCode: 3003,
            taskType: 'SHELL',
            processInstanceId: instanceId,
            state: 'SUCCESS',
            submitTime: '2024-01-20 10:15:35',
            startTime: '2024-01-20 10:15:40',
            endTime: '2024-01-20 10:18:30',
            duration: '2m 50s',
            host: '192.168.1.100:5678',
            executePath: '/tmp/dolphinscheduler/exec/process/1001/10003',
            logPath: '/opt/dolphinscheduler/logs/10003.log',
            alertFlag: 'NO',
            retryTimes: 0,
            pid: 12347,
            appLink: '',
            flag: 'YES',
            runFlag: 'NORMAL',
            dependentResult: '',
            maxRetryTimes: 3,
            retryInterval: 1,
            taskInstancePriority: 'MEDIUM',
            workerGroup: 'default',
            executorId: 1,
            executorName: 'admin',
            environmentCode: -1,
            environmentConfig: '',
            taskParams: '{"rawScript":"#!/bin/bash\\necho \\"开始加载数据...\\"\\n# 模拟数据加载过程\\nsleep 3\\necho \\"数据加载完成\\""}',
            taskGroupId: 0,
            taskGroupPriority: 0,
            cpuQuota: -1,
            memoryMax: -1,
            taskExecuteType: 'BATCH'
          }
        ]
      } else if (instanceId === 1002) {
        // 数据同步工作流_20240120_002 的任务实例（运行中）
        mockTasks = [
          {
            id: 10004,
            name: 'extract_data',
            taskCode: 3001,
            taskType: 'SHELL',
            processInstanceId: instanceId,
            state: 'SUCCESS',
            submitTime: '2024-01-20 14:00:05',
            startTime: '2024-01-20 14:00:10',
            endTime: '2024-01-20 14:05:30',
            duration: '5m 20s',
            host: '192.168.1.101:5678',
            executePath: '/tmp/dolphinscheduler/exec/process/1002/10004',
            logPath: '/opt/dolphinscheduler/logs/10004.log',
            alertFlag: 'NO',
            retryTimes: 0,
            pid: 12348,
            appLink: '',
            flag: 'YES',
            runFlag: 'NORMAL',
            dependentResult: '',
            maxRetryTimes: 3,
            retryInterval: 1,
            taskInstancePriority: 'HIGH',
            workerGroup: 'default',
            executorId: 1,
            executorName: 'admin',
            environmentCode: -1,
            environmentConfig: '',
            taskParams: '{"rawScript":"#!/bin/bash\\necho \\"开始提取数据...\\"\\n# 模拟数据提取过程\\nsleep 5\\necho \\"数据提取完成\\""}',
            taskGroupId: 0,
            taskGroupPriority: 0,
            cpuQuota: -1,
            memoryMax: -1,
            taskExecuteType: 'BATCH'
          },
          {
            id: 10005,
            name: 'transform_data',
            taskCode: 3002,
            taskType: 'SHELL',
            processInstanceId: instanceId,
            state: 'RUNNING_EXECUTION',
            submitTime: '2024-01-20 14:05:35',
            startTime: '2024-01-20 14:05:40',
            endTime: '',
            duration: '',
            host: '192.168.1.101:5678',
            executePath: '/tmp/dolphinscheduler/exec/process/1002/10005',
            logPath: '/opt/dolphinscheduler/logs/10005.log',
            alertFlag: 'NO',
            retryTimes: 0,
            pid: 12349,
            appLink: '',
            flag: 'YES',
            runFlag: 'NORMAL',
            dependentResult: '',
            maxRetryTimes: 3,
            retryInterval: 1,
            taskInstancePriority: 'HIGH',
            workerGroup: 'default',
            executorId: 1,
            executorName: 'admin',
            environmentCode: -1,
            environmentConfig: '',
            taskParams: '{"rawScript":"#!/bin/bash\\necho \\"开始转换数据...\\"\\n# 模拟数据转换过程\\nsleep 8\\necho \\"数据转换完成\\""}',
            taskGroupId: 0,
            taskGroupPriority: 0,
            cpuQuota: -1,
            memoryMax: -1,
            taskExecuteType: 'BATCH'
          },
          {
            id: 10006,
            name: 'load_data',
            taskCode: 3003,
            taskType: 'SHELL',
            processInstanceId: instanceId,
            state: 'WAIT_TO_RUN',
            submitTime: '',
            startTime: '',
            endTime: '',
            duration: '',
            host: '',
            executePath: '/tmp/dolphinscheduler/exec/process/1002/10006',
            logPath: '/opt/dolphinscheduler/logs/10006.log',
            alertFlag: 'NO',
            retryTimes: 0,
            pid: 0,
            appLink: '',
            flag: 'YES',
            runFlag: 'NORMAL',
            dependentResult: '',
            maxRetryTimes: 3,
            retryInterval: 1,
            taskInstancePriority: 'HIGH',
            workerGroup: 'default',
            executorId: 1,
            executorName: 'admin',
            environmentCode: -1,
            environmentConfig: '',
            taskParams: '{"rawScript":"#!/bin/bash\\necho \\"开始加载数据...\\"\\n# 模拟数据加载过程\\nsleep 3\\necho \\"数据加载完成\\""}',
            taskGroupId: 0,
            taskGroupPriority: 0,
            cpuQuota: -1,
            memoryMax: -1,
            taskExecuteType: 'BATCH'
          }
        ]
      } else if (instanceId === 1003) {
        // 报表生成工作流_20240119_001 的任务实例（失败）
        mockTasks = [
          {
            id: 10007,
            name: 'generate_report',
            taskCode: 3004,
            taskType: 'SQL',
            processInstanceId: instanceId,
            state: 'FAILURE',
            submitTime: '2024-01-19 09:00:05',
            startTime: '2024-01-19 09:00:10',
            endTime: '2024-01-19 09:05:20',
            duration: '5m 10s',
            host: '192.168.1.102:5678',
            executePath: '/tmp/dolphinscheduler/exec/process/1003/10007',
            logPath: '/opt/dolphinscheduler/logs/10007.log',
            alertFlag: 'YES',
            retryTimes: 2,
            pid: 12350,
            appLink: '',
            flag: 'YES',
            runFlag: 'NORMAL',
            dependentResult: '',
            maxRetryTimes: 3,
            retryInterval: 1,
            taskInstancePriority: 'LOW',
            workerGroup: 'report-workers',
            executorId: 2,
            executorName: 'user1',
            environmentCode: -1,
            environmentConfig: '',
            taskParams: '{"type":"MYSQL","datasource":1,"sql":"SELECT * FROM sales_data WHERE date = \'2024-01-19\'","sqlType":"0","displayRows":10}',
            taskGroupId: 0,
            taskGroupPriority: 0,
            cpuQuota: -1,
            memoryMax: -1,
            taskExecuteType: 'BATCH'
          }
        ]
              } else if (instanceId === 1004) {
          // ETL数据处理流程_20240120_001 的任务实例
          mockTasks = [
            {
              id: 10008,
              name: 'etl_extract',
              taskCode: 3005,
              taskType: 'SHELL',
              processInstanceId: instanceId,
              state: 'SUCCESS',
              submitTime: '2024-01-20 02:00:10',
              startTime: '2024-01-20 02:00:15',
              endTime: '2024-01-20 02:30:45',
              duration: '30m 30s',
              host: '192.168.1.103:5678',
              executePath: '/tmp/dolphinscheduler/exec/process/1004/10008',
              logPath: '/opt/dolphinscheduler/logs/10008.log',
              alertFlag: 'NO',
              retryTimes: 0,
              pid: 12351,
              appLink: '',
              flag: 'YES',
              runFlag: 'NORMAL',
              dependentResult: '',
              maxRetryTimes: 2,
              retryInterval: 1,
              taskInstancePriority: 'HIGH',
              workerGroup: 'etl-workers',
              executorId: 3,
              executorName: 'etl_user',
              environmentCode: -1,
              environmentConfig: '',
              taskParams: '{"rawScript":"#!/bin/bash\\necho \\"开始ETL数据提取...\\"\\n# 模拟ETL提取过程\\nsleep 30\\necho \\"ETL数据提取完成\\""}',
              taskGroupId: 0,
              taskGroupPriority: 0,
              cpuQuota: -1,
              memoryMax: -1,
              taskExecuteType: 'BATCH'
            },
            {
              id: 10009,
              name: 'etl_transform',
              taskCode: 3006,
              taskType: 'SQL',
              processInstanceId: instanceId,
              state: 'SUCCESS',
              submitTime: '2024-01-20 02:30:50',
              startTime: '2024-01-20 02:30:55',
              endTime: '2024-01-20 04:00:30',
              duration: '1h 29m 35s',
              host: '192.168.1.103:5678',
              executePath: '/tmp/dolphinscheduler/exec/process/1004/10009',
              logPath: '/opt/dolphinscheduler/logs/10009.log',
              alertFlag: 'NO',
              retryTimes: 0,
              pid: 12352,
              appLink: '',
              flag: 'YES',
              runFlag: 'NORMAL',
              dependentResult: '',
              maxRetryTimes: 2,
              retryInterval: 1,
              taskInstancePriority: 'HIGH',
              workerGroup: 'etl-workers',
              executorId: 3,
              executorName: 'etl_user',
              environmentCode: -1,
              environmentConfig: '',
              taskParams: '{"type":"MYSQL","datasource":1,"sql":"INSERT INTO target_table SELECT * FROM source_table WHERE date = \'${etl_date}\'","sqlType":"0","displayRows":10}',
              taskGroupId: 0,
              taskGroupPriority: 0,
              cpuQuota: -1,
              memoryMax: -1,
              taskExecuteType: 'BATCH'
            },
            {
              id: 10010,
              name: 'etl_load',
              taskCode: 3007,
              taskType: 'SHELL',
              processInstanceId: instanceId,
              state: 'SUCCESS',
              submitTime: '2024-01-20 04:00:35',
              startTime: '2024-01-20 04:00:40',
              endTime: '2024-01-20 04:30:45',
              duration: '30m 5s',
              host: '192.168.1.103:5678',
              executePath: '/tmp/dolphinscheduler/exec/process/1004/10010',
              logPath: '/opt/dolphinscheduler/logs/10010.log',
              alertFlag: 'NO',
              retryTimes: 0,
              pid: 12353,
              appLink: '',
              flag: 'YES',
              runFlag: 'NORMAL',
              dependentResult: '',
              maxRetryTimes: 2,
              retryInterval: 1,
              taskInstancePriority: 'HIGH',
              workerGroup: 'etl-workers',
              executorId: 3,
              executorName: 'etl_user',
              environmentCode: -1,
              environmentConfig: '',
              taskParams: '{"rawScript":"#!/bin/bash\\necho \\"开始ETL数据加载...\\"\\n# 模拟ETL加载过程\\nsleep 30\\necho \\"ETL数据加载完成\\""}',
              taskGroupId: 0,
              taskGroupPriority: 0,
              cpuQuota: -1,
              memoryMax: -1,
              taskExecuteType: 'BATCH'
            }
          ]
        } else if (instanceId === 1007) {
          // 新增：测试SQL脚本工作流实例（基于真实数据结构）
          mockTasks = [
            {
              id: 10011,
              name: '测试sql脚本',
              taskCode: 143212429472704,
              taskType: 'SQL',
              processInstanceId: instanceId,
              state: 'SUCCESS',
              submitTime: '2024-01-20 16:47:31',
              startTime: '2024-01-20 16:47:35',
              endTime: '2024-01-20 16:47:45',
              duration: '10s',
              host: '192.168.1.105:5678',
              executePath: '/tmp/dolphinscheduler/exec/process/1007/10011',
              logPath: '/opt/dolphinscheduler/logs/10011.log',
              alertFlag: 'NO',
              retryTimes: 0,
              pid: 12354,
              appLink: '',
              flag: 'YES',
              runFlag: 'NORMAL',
              dependentResult: '',
              maxRetryTimes: 1,
              retryInterval: 1,
              taskInstancePriority: 'MEDIUM',
              workerGroup: '162',
              executorId: 1,
              executorName: 'admin',
              environmentCode: 136134679047648,
              environmentConfig: '',
              taskParams: '{"type":"MYSQL","datasource":58,"sql":"select * from people where name = \'小明\' and sex = \'男\' \\r\\nand birthday < \'$[add_months(yyyyMMdd,3)]\' \\r\\nand birthday > \'${system.biz.date}\'\\r\\nand birthday > \'${system.biz.curdate}\'\\r\\nand birthday > \'${system.datetime}\'\\r\\nand birthday > \'${yesterday1}\'\\r\\nand birthday > \'${yesterday2}\'\\r\\nand birthday > \'${yesterday3}\'","sqlType":"0","displayRows":10}',
              taskGroupId: 1,
              taskGroupPriority: 0,
              cpuQuota: -1,
              memoryMax: -1,
              taskExecuteType: 'BATCH'
            }
          ]
        } else {
          // 默认返回空任务列表
          mockTasks = []
        }
      
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
      // 根据不同的工作流实例返回对应的甘特图数据
      let ganttData: any = {}
      
      if (instanceId === 1001) {
        ganttData = {
          id: instanceId,
          name: '数据同步工作流_20240120_001',
          startDate: '2024-01-20 10:00:05',
          endDate: '2024-01-20 10:18:30',
          duration: '18m 25s',
          state: 'SUCCESS',
          children: [
            {
              id: 10001,
              name: 'extract_data',
              startDate: '2024-01-20 10:00:10',
              endDate: '2024-01-20 10:05:30',
              duration: '5m 20s',
              state: 'SUCCESS',
              taskType: 'SHELL'
            },
            {
              id: 10002,
              name: 'transform_data',
              startDate: '2024-01-20 10:05:40',
              endDate: '2024-01-20 10:15:30',
              duration: '9m 50s',
              state: 'SUCCESS',
              taskType: 'SHELL'
            },
            {
              id: 10003,
              name: 'load_data',
              startDate: '2024-01-20 10:15:40',
              endDate: '2024-01-20 10:18:30',
              duration: '2m 50s',
              state: 'SUCCESS',
              taskType: 'SHELL'
            }
          ]
        }
      } else if (instanceId === 1002) {
        ganttData = {
          id: instanceId,
          name: '数据同步工作流_20240120_002',
          startDate: '2024-01-20 14:00:05',
          endDate: '',
          duration: '',
          state: 'RUNNING_EXECUTION',
          children: [
            {
              id: 10004,
              name: 'extract_data',
              startDate: '2024-01-20 14:00:10',
              endDate: '2024-01-20 14:05:30',
              duration: '5m 20s',
              state: 'SUCCESS',
              taskType: 'SHELL'
            },
            {
              id: 10005,
              name: 'transform_data',
              startDate: '2024-01-20 14:05:40',
              endDate: '',
              duration: '',
              state: 'RUNNING_EXECUTION',
              taskType: 'SHELL'
            },
            {
              id: 10006,
              name: 'load_data',
              startDate: '',
              endDate: '',
              duration: '',
              state: 'WAIT_TO_RUN',
              taskType: 'SHELL'
            }
          ]
        }
      } else if (instanceId === 1003) {
        ganttData = {
          id: instanceId,
          name: '报表生成工作流_20240119_001',
          startDate: '2024-01-19 09:00:05',
          endDate: '2024-01-19 09:05:20',
          duration: '5m 15s',
          state: 'FAILURE',
          children: [
            {
              id: 10007,
              name: 'generate_report',
              startDate: '2024-01-19 09:00:10',
              endDate: '2024-01-19 09:05:20',
              duration: '5m 10s',
              state: 'FAILURE',
              taskType: 'SQL'
            }
                     ]
         }
       } else if (instanceId === 1007) {
         ganttData = {
           id: instanceId,
           name: '测试sql脚本_20240120_001',
           startDate: '2024-01-20 16:47:31',
           endDate: '2024-01-20 16:47:45',
           duration: '14s',
           state: 'SUCCESS',
           children: [
             {
               id: 10011,
               name: '测试sql脚本',
               startDate: '2024-01-20 16:47:35',
               endDate: '2024-01-20 16:47:45',
               duration: '10s',
               state: 'SUCCESS',
               taskType: 'SQL'
             }
           ]
         }
       } else {
        ganttData = {
          id: instanceId,
          name: '工作流甘特图',
          children: []
        }
      }
      
      resolve(ganttData)
    }, 200)
  })
}

export function viewVariables(instanceId: number, projectCode: number): Promise<any[]> {
  return new Promise((resolve) => {
    setTimeout(() => {
      // 根据不同的工作流实例返回对应的变量数据
      let variables: any[] = []
      
      if (instanceId === 1001 || instanceId === 1002) {
        // 数据同步工作流的变量
        variables = [
          {
            prop: 'data_source',
            value: 'mysql_prod',
            direct: 'IN',
            type: 'VARCHAR'
          },
          {
            prop: 'target_table',
            value: 'sync_data_table',
            direct: 'IN',
            type: 'VARCHAR'
          },
          {
            prop: 'batch_size',
            value: '1000',
            direct: 'IN',
            type: 'INTEGER'
          }
        ]
      } else if (instanceId === 1003) {
        // 报表生成工作流的变量
        variables = [
          {
            prop: 'report_date',
            value: '2024-01-19',
            direct: 'IN',
            type: 'VARCHAR'
          },
          {
            prop: 'report_type',
            value: 'daily',
            direct: 'IN',
            type: 'VARCHAR'
          },
          {
            prop: 'output_format',
            value: 'excel',
            direct: 'IN',
            type: 'VARCHAR'
          }
        ]
      } else if (instanceId === 1004 || instanceId === 1005) {
        // ETL数据处理流程的变量
        variables = [
          {
            prop: 'etl_date',
            value: '2024-01-20',
            direct: 'IN',
            type: 'VARCHAR'
          },
          {
            prop: 'source_system',
            value: 'crm',
            direct: 'IN',
            type: 'VARCHAR'
          },
          {
            prop: 'parallel_degree',
            value: '4',
            direct: 'IN',
            type: 'INTEGER'
          }
        ]
      } else if (instanceId === 1006) {
        // 机器学习训练流程的变量
        variables = [
          {
            prop: 'model_version',
            value: 'v1.0',
            direct: 'IN',
            type: 'VARCHAR'
          },
          {
            prop: 'training_data_path',
            value: '/data/ml/training/2024-01-18',
            direct: 'IN',
            type: 'VARCHAR'
          },
          {
            prop: 'epochs',
            value: '100',
            direct: 'IN',
            type: 'INTEGER'
          },
          {
            prop: 'learning_rate',
            value: '0.001',
            direct: 'IN',
                         type: 'DOUBLE'
           }
         ]
       } else if (instanceId === 1007) {
         // 测试SQL脚本工作流的变量
         variables = [
           {
             prop: 'sex',
             value: '男',
             direct: 'IN',
             type: 'VARCHAR'
           },
           {
             prop: 'name',
             value: '小明',
             direct: 'IN',
             type: 'VARCHAR'
           },
           {
             prop: 'yesterday1',
             value: '${system.biz.date}',
             direct: 'IN',
             type: 'VARCHAR'
           },
           {
             prop: 'yesterday2',
             value: '${system.biz.curdate}',
             direct: 'IN',
             type: 'VARCHAR'
           },
           {
             prop: 'yesterday3',
             value: '${system.datetime}',
             direct: 'IN',
             type: 'VARCHAR'
           },
           {
             prop: 'system.datetime',
             value: '20180606132833',
             direct: 'IN',
             type: 'VARCHAR'
           }
         ]
       } else {
         // 默认返回空变量列表
         variables = []
       }
      
      resolve(variables)
    }, 200)
  })
} 