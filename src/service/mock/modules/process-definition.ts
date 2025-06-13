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
  ProcessDefinitionReq,
  SimpleListRes,
  ReleaseStateReq,
  NameReq
} from '../../modules/process-definition/types'

// 模拟工作流定义数据
const mockProcessDefinitions: { [projectCode: number]: any[] } = {
  1001: [
    {
      id: 1,
      code: 2001,
      name: '数据同步工作流',
      version: 1,
      releaseState: 'ONLINE',
      projectCode: 1001,
      description: '每日数据同步处理工作流',
      globalParams: '[]',
      globalParamList: [],
      globalParamMap: {},
      createTime: '2024-01-01 10:00:00',
      updateTime: '2024-01-15 14:30:00',
      flag: 'YES',
      userId: 1,
      userName: 'admin',
      projectName: '示例项目1',
      locations: '[{"taskCode":3001,"x":100,"y":100},{"taskCode":3002,"x":300,"y":100}]',
      scheduleReleaseState: 'ONLINE',
      timeout: 0,
      tenantId: 1,
      tenantCode: 'default',
      executionType: 'PARALLEL',
      modifyBy: 'admin',
      warningGroupId: 0,
      taskDefinitionList: [
        {
          id: 3001,
          code: 3001,
          name: 'extract_data',
          version: 1,
          description: '提取数据任务',
          projectCode: 1001,
          userId: 1,
          taskType: 'SHELL',
          taskParams: {
            rawScript: '#!/bin/bash\necho "Extracting data..."'
          },
          taskParamList: [],
          taskParamMap: {},
          flag: 'YES',
          taskPriority: 'MEDIUM',
          userName: 'admin',
          projectName: '示例项目1',
          workerGroup: 'default',
          environmentCode: 0,
          failRetryTimes: 0,
          failRetryInterval: 1,
          timeoutFlag: 'CLOSE',
          timeoutNotifyStrategy: null,
          timeout: 0,
          delayTime: 0,
          resourceIds: '',
          createTime: '2024-01-01 10:00:00',
          updateTime: '2024-01-01 10:00:00',
          modifyBy: 'admin',
          dependence: ''
        },
        {
          id: 3002,
          code: 3002,
          name: 'transform_data',
          version: 1,
          description: '转换数据任务',
          projectCode: 1001,
          userId: 1,
          taskType: 'SHELL',
          taskParams: {
            rawScript: '#!/bin/bash\necho "Transforming data..."'
          },
          taskParamList: [],
          taskParamMap: {},
          flag: 'YES',
          taskPriority: 'MEDIUM',
          userName: 'admin',
          projectName: '示例项目1',
          workerGroup: 'default',
          environmentCode: 0,
          failRetryTimes: 0,
          failRetryInterval: 1,
          timeoutFlag: 'CLOSE',
          timeoutNotifyStrategy: null,
          timeout: 0,
          delayTime: 0,
          resourceIds: '',
          createTime: '2024-01-01 10:05:00',
          updateTime: '2024-01-01 10:05:00',
          modifyBy: 'admin',
          dependence: ''
        }
      ],
      processTaskRelationList: [
        {
          name: '',
          preTaskCode: 3001,
          preTaskVersion: 1,
          postTaskCode: 3002,
          postTaskVersion: 1,
          conditionType: 'NONE',
          conditionParams: {},
          createTime: '2024-01-01 10:00:00',
          updateTime: '2024-01-01 10:00:00'
        }
      ]
    },
    {
      id: 2,
      code: 2002,
      name: '报表生成工作流',
      version: 1,
      releaseState: 'ONLINE',
      projectCode: 1001,
      description: '生成日报、周报、月报',
      globalParams: '[{"prop":"report_date","value":"${system.biz.date}","direct":"IN","type":"VARCHAR"}]',
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
      userId: 1,
      userName: 'admin',
      projectName: '示例项目1',
      locations: '[{"taskCode":3003,"x":150,"y":150}]',
      scheduleReleaseState: 'ONLINE',
      timeout: 3600,
      tenantId: 1,
      tenantCode: 'default',
      executionType: 'PARALLEL',
      modifyBy: 'admin',
      warningGroupId: 1,
      taskDefinitionList: [
        {
          id: 3003,
          code: 3003,
          name: 'generate_report',
          version: 1,
          description: '生成报表数据',
          projectCode: 1001,
          userId: 1,
          taskType: 'SQL',
          taskParams: {
            type: 'MYSQL',
            datasource: 1,
            sql: 'SELECT * FROM sales_data WHERE date = \'${report_date}\'',
            sqlType: '0',
            displayRows: 10,
            localParams: [
              {
                prop: 'report_date',
                direct: 'IN',
                type: 'VARCHAR',
                value: '${system.biz.date}'
              }
            ]
          },
          taskParamList: [],
          taskParamMap: {},
          flag: 'YES',
          taskPriority: 'HIGH',
          userName: 'admin',
          projectName: '示例项目1',
          workerGroup: 'default',
          environmentCode: 0,
          failRetryTimes: 3,
          failRetryInterval: 1,
          timeoutFlag: 'OPEN',
          timeoutNotifyStrategy: 'WARN',
          timeout: 1800,
          delayTime: 0,
          resourceIds: '',
          createTime: '2024-01-02 09:15:00',
          updateTime: '2024-01-02 09:15:00',
          modifyBy: 'admin',
          dependence: ''
        }
      ],
      processTaskRelationList: []
    }
  ],
  1002: [
    {
      id: 3,
      code: 2003,
      name: 'ETL数据处理流程',
      version: 1,
      releaseState: 'ONLINE',
      projectCode: 1002,
      description: 'Extract-Transform-Load数据处理流程',
      globalParams: '[]',
      globalParamList: [],
      globalParamMap: {},
      createTime: '2024-01-03 16:45:00',
      updateTime: '2024-01-17 09:10:00',
      flag: 'YES',
      userId: 1,
      userName: 'admin',
      projectName: '数据处理项目',
      locations: '[{"taskCode":3004,"x":100,"y":100},{"taskCode":3005,"x":300,"y":100},{"taskCode":3006,"x":500,"y":100}]',
      scheduleReleaseState: 'ONLINE',
      timeout: 7200,
      tenantId: 2,
      tenantCode: 'etl_tenant',
      executionType: 'PARALLEL',
      modifyBy: 'admin',
      warningGroupId: 1,
      taskDefinitionList: [
        {
          id: 3004,
          code: 3004,
          name: 'extract_source_data',
          version: 1,
          description: '从源系统提取数据',
          projectCode: 1002,
          userId: 1,
          taskType: 'DATAX',
          taskParams: {
            customConfig: false,
            dsType: 'MYSQL',
            dtType: 'HDFS'
          },
          taskParamList: [],
          taskParamMap: {},
          flag: 'YES',
          taskPriority: 'HIGH',
          userName: 'admin',
          projectName: '数据处理项目',
          workerGroup: 'etl-workers',
          environmentCode: 0,
          failRetryTimes: 2,
          failRetryInterval: 5,
          timeoutFlag: 'OPEN',
          timeoutNotifyStrategy: 'WARN',
          timeout: 3600,
          delayTime: 0,
          resourceIds: '',
          createTime: '2024-01-03 16:45:00',
          updateTime: '2024-01-03 16:45:00',
          modifyBy: 'admin',
          dependence: ''
        },
        {
          id: 3005,
          code: 3005,
          name: 'transform_data',
          version: 1,
          description: '数据清洗和转换',
          projectCode: 1002,
          userId: 1,
          taskType: 'SPARK',
          taskParams: {
            programType: 'SCALA',
            mainClass: 'com.example.DataTransform',
            mainJar: { id: 1 },
            deployMode: 'cluster',
            driverCores: 1,
            driverMemory: '512M',
            numExecutors: 2,
            executorMemory: '2G',
            executorCores: 2
          },
          taskParamList: [],
          taskParamMap: {},
          flag: 'YES',
          taskPriority: 'HIGH',
          userName: 'admin',
          projectName: '数据处理项目',
          workerGroup: 'etl-workers',
          environmentCode: 0,
          failRetryTimes: 2,
          failRetryInterval: 5,
          timeoutFlag: 'OPEN',
          timeoutNotifyStrategy: 'WARN',
          timeout: 3600,
          delayTime: 0,
          resourceIds: '',
          createTime: '2024-01-03 17:00:00',
          updateTime: '2024-01-03 17:00:00',
          modifyBy: 'admin',
          dependence: ''
        },
        {
          id: 3006,
          code: 3006,
          name: 'load_to_warehouse',
          version: 1,
          description: '加载数据到数据仓库',
          projectCode: 1002,
          userId: 1,
          taskType: 'SQL',
          taskParams: {
            type: 'HIVE',
            datasource: 2,
            sql: 'INSERT INTO warehouse.fact_table SELECT * FROM staging.temp_table',
            sqlType: '0',
            displayRows: 10
          },
          taskParamList: [],
          taskParamMap: {},
          flag: 'YES',
          taskPriority: 'HIGH',
          userName: 'admin',
          projectName: '数据处理项目',
          workerGroup: 'etl-workers',
          environmentCode: 0,
          failRetryTimes: 1,
          failRetryInterval: 3,
          timeoutFlag: 'OPEN',
          timeoutNotifyStrategy: 'WARN',
          timeout: 1800,
          delayTime: 0,
          resourceIds: '',
          createTime: '2024-01-03 17:15:00',
          updateTime: '2024-01-03 17:15:00',
          modifyBy: 'admin',
          dependence: ''
        }
      ],
      processTaskRelationList: [
        {
          name: '',
          preTaskCode: 3004,
          preTaskVersion: 1,
          postTaskCode: 3005,
          postTaskVersion: 1,
          conditionType: 'NONE',
          conditionParams: {},
          createTime: '2024-01-03 16:45:00',
          updateTime: '2024-01-03 16:45:00'
        },
        {
          name: '',
          preTaskCode: 3005,
          preTaskVersion: 1,
          postTaskCode: 3006,
          postTaskVersion: 1,
          conditionType: 'NONE',
          conditionParams: {},
          createTime: '2024-01-03 16:45:00',
          updateTime: '2024-01-03 16:45:00'
        }
      ]
    }
  ],
  1003: [
    {
      id: 4,
      code: 2004,
      name: '机器学习训练流程',
      version: 1,
      releaseState: 'OFFLINE',
      projectCode: 1003,
      description: '机器学习模型训练和评估流程',
      globalParams: '[{"prop":"model_version","value":"v1.0","direct":"IN","type":"VARCHAR"}]',
      globalParamList: [
        {
          prop: 'model_version',
          value: 'v1.0',
          direct: 'IN',
          type: 'VARCHAR'
        }
      ],
      globalParamMap: {
        model_version: 'v1.0'
      },
      createTime: '2024-01-04 13:20:00',
      updateTime: '2024-01-18 15:45:00',
      flag: 'YES',
      userId: 2,
      userName: 'user1',
      projectName: '机器学习项目',
      locations: '[{"taskCode":3007,"x":100,"y":100},{"taskCode":3008,"x":300,"y":100},{"taskCode":3009,"x":500,"y":100}]',
      scheduleReleaseState: 'OFFLINE',
      timeout: 14400,
      tenantId: 3,
      tenantCode: 'ml_tenant',
      executionType: 'PARALLEL',
      modifyBy: 'user1',
      warningGroupId: 2,
      taskDefinitionList: [
        {
          id: 3007,
          code: 3007,
          name: 'prepare_training_data',
          version: 1,
          description: '准备训练数据',
          projectCode: 1003,
          userId: 2,
          taskType: 'PYTHON',
          taskParams: {
            rawScript: 'import pandas as pd\nprint("Preparing training data...")'
          },
          taskParamList: [],
          taskParamMap: {},
          flag: 'YES',
          taskPriority: 'HIGH',
          userName: 'user1',
          projectName: '机器学习项目',
          workerGroup: 'ml-workers',
          environmentCode: 0,
          failRetryTimes: 1,
          failRetryInterval: 2,
          timeoutFlag: 'OPEN',
          timeoutNotifyStrategy: 'WARN',
          timeout: 3600,
          delayTime: 0,
          resourceIds: '',
          createTime: '2024-01-04 13:20:00',
          updateTime: '2024-01-04 13:20:00',
          modifyBy: 'user1',
          dependence: ''
        },
        {
          id: 3008,
          code: 3008,
          name: 'train_model',
          version: 1,
          description: '训练机器学习模型',
          projectCode: 1003,
          userId: 2,
          taskType: 'PYTHON',
          taskParams: {
            rawScript: 'from sklearn.ensemble import RandomForestClassifier\nprint("Training model...")'
          },
          taskParamList: [],
          taskParamMap: {},
          flag: 'YES',
          taskPriority: 'HIGH',
          userName: 'user1',
          projectName: '机器学习项目',
          workerGroup: 'ml-workers',
          environmentCode: 0,
          failRetryTimes: 2,
          failRetryInterval: 5,
          timeoutFlag: 'OPEN',
          timeoutNotifyStrategy: 'WARN',
          timeout: 7200,
          delayTime: 0,
          resourceIds: '',
          createTime: '2024-01-04 13:30:00',
          updateTime: '2024-01-04 13:30:00',
          modifyBy: 'user1',
          dependence: ''
        },
        {
          id: 3009,
          code: 3009,
          name: 'evaluate_model',
          version: 1,
          description: '评估模型性能',
          projectCode: 1003,
          userId: 2,
          taskType: 'PYTHON',
          taskParams: {
            rawScript: 'from sklearn.metrics import accuracy_score\nprint("Evaluating model...")'
          },
          taskParamList: [],
          taskParamMap: {},
          flag: 'YES',
          taskPriority: 'MEDIUM',
          userName: 'user1',
          projectName: '机器学习项目',
          workerGroup: 'ml-workers',
          environmentCode: 0,
          failRetryTimes: 1,
          failRetryInterval: 2,
          timeoutFlag: 'OPEN',
          timeoutNotifyStrategy: 'WARN',
          timeout: 1800,
          delayTime: 0,
          resourceIds: '',
          createTime: '2024-01-04 13:45:00',
          updateTime: '2024-01-04 13:45:00',
          modifyBy: 'user1',
          dependence: ''
        }
      ],
      processTaskRelationList: [
        {
          name: '',
          preTaskCode: 3007,
          preTaskVersion: 1,
          postTaskCode: 3008,
          postTaskVersion: 1,
          conditionType: 'NONE',
          conditionParams: {},
          createTime: '2024-01-04 13:20:00',
          updateTime: '2024-01-04 13:20:00'
        },
        {
          name: '',
          preTaskCode: 3008,
          preTaskVersion: 1,
          postTaskCode: 3009,
          postTaskVersion: 1,
          conditionType: 'NONE',
          conditionParams: {},
          createTime: '2024-01-04 13:20:00',
          updateTime: '2024-01-04 13:20:00'
        }
      ]
    }
  ]
}

let nextDefinitionId = 5
let nextDefinitionCode = 2005
let nextTaskCode = 3010

// 模拟工作流定义列表分页查询
export function queryListPaging(params: any, projectCode: number): Promise<any> {
  return new Promise((resolve) => {
    setTimeout(() => {
      const { pageNo = 1, pageSize = 10, searchVal = '' } = params
      
      let definitions = mockProcessDefinitions[projectCode] || []
      
      // 根据搜索条件过滤
      if (searchVal) {
        definitions = definitions.filter(def => 
          def.name.includes(searchVal) || 
          def.description.includes(searchVal)
        )
      }
      
      // 分页处理
      const start = (pageNo - 1) * pageSize
      const end = start + pageSize
      const totalList = definitions.slice(start, end)
      
      resolve({
        totalList,
        total: definitions.length,
        totalPage: Math.ceil(definitions.length / pageSize),
        pageSize,
        currentPage: pageNo,
        start
      })
    }, 300)
  })
}

// 模拟创建工作流定义
export function createProcessDefinition(
  data: ProcessDefinitionReq,
  projectCode: number
): Promise<{ id: number; code: number }> {
  return new Promise((resolve) => {
    setTimeout(() => {
      const newDefinition = {
        id: nextDefinitionId++,
        code: nextDefinitionCode++,
        name: data.name,
        version: 1,
        releaseState: 'OFFLINE',
        projectCode,
        description: data.description || '',
        globalParams: data.globalParams || '[]',
        globalParamList: data.globalParams ? JSON.parse(data.globalParams) : [],
        globalParamMap: {},
        createTime: new Date().toISOString().replace('T', ' ').substring(0, 19),
        updateTime: new Date().toISOString().replace('T', ' ').substring(0, 19),
        flag: 'YES',
        userId: 1,
        userName: 'admin',
        projectName: `项目${projectCode}`,
        locations: data.locations || '{}',
        scheduleReleaseState: 'OFFLINE',
        timeout: data.timeout || 0,
        tenantId: 1,
        tenantCode: 'default',
        executionType: data.executionType || 'PARALLEL',
        modifyBy: 'admin',
        warningGroupId: 0,
        taskDefinitionList: data.taskDefinitionJson ? JSON.parse(data.taskDefinitionJson) : [],
        processTaskRelationList: data.taskRelationJson ? JSON.parse(data.taskRelationJson) : []
      }
      
      if (!mockProcessDefinitions[projectCode]) {
        mockProcessDefinitions[projectCode] = []
      }
      
      mockProcessDefinitions[projectCode].push(newDefinition)
      resolve({ id: newDefinition.id, code: newDefinition.code })
    }, 300)
  })
}

// 模拟查询工作流定义列表
export function queryProcessDefinitionList(projectCode: number): Promise<any[]> {
  return new Promise((resolve) => {
    setTimeout(() => {
      const definitions = mockProcessDefinitions[projectCode] || []
      const simpleList = definitions.map(def => ({
        id: def.id,
        code: def.code,
        name: def.name,
        projectCode: def.projectCode,
        description: def.description,
        releaseState: def.releaseState,
        createTime: def.createTime,
        updateTime: def.updateTime
      }))
      resolve(simpleList)
    }, 200)
  })
}

// 模拟查询简单列表
export function querySimpleList(projectCode: number): Promise<SimpleListRes[]> {
  return new Promise((resolve) => {
    setTimeout(() => {
      const definitions = mockProcessDefinitions[projectCode] || []
      const simpleList = definitions.map(def => ({
        id: def.id,
        code: def.code,
        name: def.name,
        projectCode: def.projectCode
      }))
      resolve(simpleList)
    }, 200)
  })
}

// 模拟根据code查询工作流定义
export function queryProcessDefinitionByCode(
  code: number,
  projectCode: number
): Promise<any> {
  return new Promise((resolve) => {
    setTimeout(() => {
      const definitions = mockProcessDefinitions[projectCode] || []
      const definition = definitions.find(def => def.code === code)
      
      if (definition) {
        resolve({
          processDefinition: definition,
          processTaskRelationList: definition.processTaskRelationList,
          taskDefinitionList: definition.taskDefinitionList
        })
      } else {
        resolve(null)
      }
    }, 200)
  })
}

// 模拟更新工作流定义
export function updateProcessDefinition(
  data: ProcessDefinitionReq & ReleaseStateReq,
  code: number,
  projectCode: number
): Promise<boolean> {
  return new Promise((resolve) => {
    setTimeout(() => {
      const definitions = mockProcessDefinitions[projectCode] || []
      const defIndex = definitions.findIndex(def => def.code === code)
      
      if (defIndex !== -1) {
        definitions[defIndex] = {
          ...definitions[defIndex],
          name: data.name,
          description: data.description || '',
          globalParams: data.globalParams || '[]',
          globalParamList: data.globalParams ? JSON.parse(data.globalParams) : [],
          locations: data.locations || '{}',
          timeout: data.timeout || 0,
          executionType: data.executionType || 'PARALLEL',
          releaseState: data.releaseState || definitions[defIndex].releaseState,
          updateTime: new Date().toISOString().replace('T', ' ').substring(0, 19),
          taskDefinitionList: data.taskDefinitionJson ? JSON.parse(data.taskDefinitionJson) : [],
          processTaskRelationList: data.taskRelationJson ? JSON.parse(data.taskRelationJson) : []
        }
        resolve(true)
      } else {
        resolve(false)
      }
    }, 300)
  })
}

// 模拟删除工作流定义
export function deleteByCode(projectCode: number, processCode: number): Promise<boolean> {
  return new Promise((resolve) => {
    setTimeout(() => {
      const definitions = mockProcessDefinitions[projectCode] || []
      const defIndex = definitions.findIndex(def => def.code === processCode)
      
      if (defIndex !== -1) {
        definitions.splice(defIndex, 1)
        resolve(true)
      } else {
        resolve(false)
      }
    }, 300)
  })
}

// 模拟发布/下线工作流定义
export function release(
  data: NameReq & ReleaseStateReq,
  projectCode: number,
  processCode: number
): Promise<boolean> {
  return new Promise((resolve) => {
    setTimeout(() => {
      const definitions = mockProcessDefinitions[projectCode] || []
      const defIndex = definitions.findIndex(def => def.code === processCode)
      
      if (defIndex !== -1) {
        definitions[defIndex].releaseState = data.releaseState
        definitions[defIndex].updateTime = new Date().toISOString().replace('T', ' ').substring(0, 19)
        resolve(true)
      } else {
        resolve(false)
      }
    }, 300)
  })
}

// 模拟验证工作流名称
export function verifyName(
  params: { name: string; workflowCode?: number },
  projectCode: number
): Promise<boolean> {
  return new Promise((resolve) => {
    setTimeout(() => {
      const definitions = mockProcessDefinitions[projectCode] || []
      const existingDef = definitions.find(def => 
        def.name === params.name && 
        (!params.workflowCode || def.code !== params.workflowCode)
      )
      
      // 如果找到同名的工作流，返回false（名称已存在）
      resolve(!existingDef)
    }, 200)
  })
}

// 模拟批量复制工作流定义
export function batchCopyByCodes(
  data: any,
  projectCode: number
): Promise<boolean> {
  return new Promise((resolve) => {
    setTimeout(() => {
      const codes = data.codes.split(',').map((code: string) => parseInt(code))
      const targetProjectCode = data.targetProjectCode
      const sourceDefinitions = mockProcessDefinitions[projectCode] || []
      
      if (!mockProcessDefinitions[targetProjectCode]) {
        mockProcessDefinitions[targetProjectCode] = []
      }
      
      codes.forEach((code: number) => {
        const sourceDef = sourceDefinitions.find(def => def.code === code)
        if (sourceDef) {
          const newDefinition = {
            ...sourceDef,
            id: nextDefinitionId++,
            code: nextDefinitionCode++,
            projectCode: targetProjectCode,
            name: `${sourceDef.name}_copy`,
            releaseState: 'OFFLINE',
            createTime: new Date().toISOString().replace('T', ' ').substring(0, 19),
            updateTime: new Date().toISOString().replace('T', ' ').substring(0, 19)
          }
          mockProcessDefinitions[targetProjectCode].push(newDefinition)
        }
      })
      
      resolve(true)
    }, 500)
  })
}

// 模拟批量删除工作流定义
export function batchDeleteByCodes(data: any, projectCode: number): Promise<boolean> {
  return new Promise((resolve) => {
    setTimeout(() => {
      const codes = data.codes.split(',').map((code: string) => parseInt(code))
      const definitions = mockProcessDefinitions[projectCode] || []
      
      codes.forEach((code: number) => {
        const defIndex = definitions.findIndex(def => def.code === code)
        if (defIndex !== -1) {
          definitions.splice(defIndex, 1)
        }
      })
      
      resolve(true)
    }, 500)
  })
}

// 模拟批量导出工作流定义
export function batchExportByCodes(data: any, projectCode: number): Promise<Blob> {
  return new Promise((resolve) => {
    setTimeout(() => {
      const codes = data.codes.split(',').map((code: string) => parseInt(code))
      const definitions = mockProcessDefinitions[projectCode] || []
      const exportData = definitions.filter(def => codes.includes(def.code))
      
      const blob = new Blob([JSON.stringify(exportData, null, 2)], {
        type: 'application/json'
      })
      resolve(blob)
    }, 500)
  })
}

// 模拟查询工作流版本
export function queryVersions(
  params: any,
  projectCode: number,
  processCode: number
): Promise<any> {
  return new Promise((resolve) => {
    setTimeout(() => {
      const { pageNo = 1, pageSize = 10 } = params
      
      // 模拟版本数据
      const versions = [
        {
          id: 1,
          processDefinitionCode: processCode,
          version: 1,
          description: '初始版本',
          createTime: '2024-01-01 10:00:00',
          userId: 1,
          userName: 'admin'
        }
      ]
      
      const start = (pageNo - 1) * pageSize
      const end = start + pageSize
      const totalList = versions.slice(start, end)
      
      resolve({
        totalList,
        total: versions.length,
        totalPage: Math.ceil(versions.length / pageSize),
        pageSize,
        currentPage: pageNo,
        start
      })
    }, 300)
  })
}

// 模拟查看工作流树
export function viewTree(
  projectCode: number,
  processCode: number,
  params: any
): Promise<any> {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve({
        id: processCode,
        name: '工作流树',
        children: []
      })
    }, 200)
  })
}

// 模拟查看工作流变量
export function viewProcessDefinitionVariables(
  projectCode: number,
  processCode: number
): Promise<any[]> {
  return new Promise((resolve) => {
    setTimeout(() => {
      const definitions = mockProcessDefinitions[projectCode] || []
      const definition = definitions.find(def => def.code === processCode)
      
      if (definition && definition.globalParamList) {
        resolve(definition.globalParamList)
      } else {
        resolve([])
      }
    }, 200)
  })
}

// 其他接口的模拟实现
export function batchMoveByCodes(data: any, projectCode: number): Promise<boolean> {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(true)
    }, 300)
  })
}

export function getTaskListByDefinitionCodes(params: any, projectCode: number): Promise<any[]> {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve([])
    }, 200)
  })
}

export function importProcessDefinition(data: FormData, projectCode: number): Promise<any> {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve({ message: 'Import successful' })
    }, 500)
  })
}

export function queryList(code: number | { projectCode: number }): Promise<any[]> {
  return new Promise((resolve) => {
    setTimeout(() => {
      const projectCode = typeof code === 'number' ? code : code.projectCode
      const definitions = mockProcessDefinitions[projectCode] || []
      resolve(definitions)
    }, 200)
  })
}

export function queryProcessDefinitionByName(params: { name: string }, code: number | { projectCode: number }): Promise<any> {
  return new Promise((resolve) => {
    setTimeout(() => {
      const projectCode = typeof code === 'number' ? code : code.projectCode
      const definitions = mockProcessDefinitions[projectCode] || []
      const definition = definitions.find(def => def.name === params.name)
      resolve(definition || null)
    }, 200)
  })
}

export function switchVersion(projectCode: number, processCode: number, version: number): Promise<boolean> {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(true)
    }, 300)
  })
}

export function deleteVersion(projectCode: number, processCode: number, version: number): Promise<boolean> {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(true)
    }, 300)
  })
}

export function getTasksByDefinitionList(projectCode: number, processCode: number): Promise<any[]> {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve([])
    }, 200)
  })
} 