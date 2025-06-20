import { request } from '@umijs/max';
import { AgentType, MemoryType, MetricType, ModelType } from './type';

export function getAgentList() {
  return request<Result<AgentType[]>>('/chatsuperapi/chat/agent/getAgentList');
}

export function saveAgent(agent: AgentType) {
  return request<Result<any>>('/chatsuperapi/chat/agent', {
    method: agent?.id ? 'PUT' : 'POST',
    data: { ...agent, status: agent.status !== undefined ? agent.status : 1 },
  });
}

export function deleteAgent(id: number) {
  return request<Result<any>>(`/chatsuperapi/chat/agent/${id}`, {
    method: 'DELETE',
  });
}

export function getModelList() {
  return request<Result<ModelType[]>>('/chatsuperapi/chat/conf/getDomainDataSetTree', {
    method: 'GET',
  });
}

export function getMetricList(modelId: number) {
  return request<Result<{ list: MetricType[] }>>('/chatsuperapi/semantic/metric/queryMetric', {
    method: 'POST',
    data: {
      modelIds: [modelId],
      current: 1,
      pageSize: 2000,
    },
  });
}

export function getMemeoryList(data: {
  agentId: number;
  chatMemoryFilter: any;
  current: number;
  pageSize: number;
}) {
  const { agentId, chatMemoryFilter, current, pageSize } = data;
  return request<Result<{ list: MetricType[] }>>('/chatsuperapi/chat/memory/pageMemories', {
    method: 'POST',
    data: {
      ...data,
      chatMemoryFilter: { agentId, ...chatMemoryFilter },
      current,
      pageSize: pageSize || 10,
      sort: 'desc',
      // orderCondition: 'updatedAt',
    },
  });
}

export function saveMemory(data: MemoryType) {
  return request<Result<string>>('/chatsuperapi/chat/memory/updateMemory', {
    method: 'POST',
    data,
  });
}

export function batchDeleteMemory(ids: number[]) {
  return request<Result<string>>('/chatsuperapi/chat/memory/batchDelete', {
    method: 'POST',
    data: { ids },
  });
}

export function getToolTypes(): Promise<any> {
  return request(`${process.env.CHAT_API_BASE_URL}agent/getToolTypes`, {
    method: 'GET',
  });
}

export function createMemory(data: any) {
  return request<Result<string>>('/chatsuperapi/chat/memory/createMemory', {
    method: 'POST',
    data,
  });
}
