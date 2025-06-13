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

// 模拟数据 - 在开发模式下使用
const mockDagMenuData = [
  // Universal 通用任务
  { taskType: 'SHELL', taskCategory: 'Universal', collection: true },
  { taskType: 'SQL', taskCategory: 'Universal', collection: true },
  { taskType: 'PYTHON', taskCategory: 'Universal', collection: true },
  { taskType: 'JAVA', taskCategory: 'Universal', collection: false },
  { taskType: 'HTTP', taskCategory: 'Universal', collection: false },
  { taskType: 'PROCEDURE', taskCategory: 'Universal', collection: false },
  { taskType: 'SUB_PROCESS', taskCategory: 'Universal', collection: false },
  
  // Logic 逻辑任务
  { taskType: 'CONDITIONS', taskCategory: 'Logic', collection: false },
  { taskType: 'SWITCH', taskCategory: 'Logic', collection: false },
  { taskType: 'DEPENDENT', taskCategory: 'Logic', collection: false },
  
  // DataIntegration 数据集成
  { taskType: 'DATAX', taskCategory: 'DataIntegration', collection: false },
  { taskType: 'SQOOP', taskCategory: 'DataIntegration', collection: false },
  { taskType: 'SEATUNNEL', taskCategory: 'DataIntegration', collection: false },
  { taskType: 'CHUNJUN', taskCategory: 'DataIntegration', collection: false },
  
  // DataQuality 数据质量
  { taskType: 'DATA_QUALITY', taskCategory: 'DataQuality', collection: false },
  
  // MachineLearning 机器学习
  { taskType: 'MLFLOW', taskCategory: 'MachineLearning', collection: false },
  { taskType: 'JUPYTER', taskCategory: 'MachineLearning', collection: false },
  { taskType: 'PYTORCH', taskCategory: 'MachineLearning', collection: false },
  { taskType: 'DVC', taskCategory: 'MachineLearning', collection: false },
  { taskType: 'KUBEFLOW', taskCategory: 'MachineLearning', collection: false },
  
  // Cloud 云服务
  { taskType: 'EMR', taskCategory: 'Cloud', collection: false },
  { taskType: 'SAGEMAKER', taskCategory: 'Cloud', collection: false },
  { taskType: 'DMS', taskCategory: 'Cloud', collection: false },
  { taskType: 'DATASYNC', taskCategory: 'Cloud', collection: false },
  { taskType: 'DATA_FACTORY', taskCategory: 'Cloud', collection: false },
  
  // Other 其他
  { taskType: 'SPARK', taskCategory: 'Other', collection: false },
  { taskType: 'FLINK', taskCategory: 'Other', collection: false },
  { taskType: 'FLINK_STREAM', taskCategory: 'Other', collection: false },
  { taskType: 'MR', taskCategory: 'Other', collection: false },
  { taskType: 'ZEPPELIN', taskCategory: 'Other', collection: false },
  { taskType: 'HIVECLI', taskCategory: 'Other', collection: false },
  { taskType: 'K8S', taskCategory: 'Other', collection: false },
  { taskType: 'DINKY', taskCategory: 'Other', collection: false },
  { taskType: 'LINKIS', taskCategory: 'Other', collection: false },
  { taskType: 'OPENMLDB', taskCategory: 'Other', collection: false },
  { taskType: 'PIGEON', taskCategory: 'Other', collection: false },
  { taskType: 'REMOTESHELL', taskCategory: 'Other', collection: false },
  { taskType: 'DYNAMIC', taskCategory: 'Other', collection: false }
]

export function getDagMenu(): any {
  // 在开发模式下使用模拟数据
  if (import.meta.env.MODE === 'development') {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve(mockDagMenuData)
      }, 200)
    })
  }
  
  // 生产模式下使用真实API
  return axios({
    url: '/favourite/taskTypes',
    method: 'get'
  })
}

export function Collection(taskType: string): any {
  // 在开发模式下使用模拟数据
  if (import.meta.env.MODE === 'development') {
    return new Promise((resolve) => {
      setTimeout(() => {
        // 更新模拟数据中的收藏状态
        const item = mockDagMenuData.find(item => item.taskType === taskType)
        if (item) {
          item.collection = true
        }
        resolve(true)
      }, 100)
    })
  }
  
  // 生产模式下使用真实API
  return axios({
    url: `/favourite/${taskType}`,
    method: 'post'
  })
}

export function CancelCollection(taskType: string): any {
  // 在开发模式下使用模拟数据
  if (import.meta.env.MODE === 'development') {
    return new Promise((resolve) => {
      setTimeout(() => {
        // 更新模拟数据中的收藏状态
        const item = mockDagMenuData.find(item => item.taskType === taskType)
        if (item) {
          item.collection = false
        }
        resolve(true)
      }, 100)
    })
  }
  
  // 生产模式下使用真实API
  return axios({
    url: `/favourite/${taskType}`,
    method: 'delete'
  })
}
