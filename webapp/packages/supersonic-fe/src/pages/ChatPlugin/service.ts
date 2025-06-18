import { request } from '@umijs/max';
import { DimensionType, ModelType, PluginType } from './type';

export function savePlugin(params: Partial<PluginType>) {
  return request<Result<any>>('/chatsuperapi/chat/plugin', {
    method: params.id ? 'PUT' : 'POST',
    data: params,
  });
}

export function getPluginList(filters?: any) {
  return request<Result<any[]>>('/chatsuperapi/chat/plugin/query', {
    method: 'POST',
    data: filters,
  });
}

export function deletePlugin(id: number) {
  return request<Result<any>>(`/chatsuperapi/chat/plugin/${id}`, {
    method: 'DELETE',
  });
}

export function getModelList() {
  return request<Result<ModelType[]>>('/chatsuperapi/chat/conf/getDomainDataSetTree', {
    method: 'GET',
  });
}

export function getDataSetSchema(dataSetId: number) {
  return request<Result<{ list: DimensionType[] }>>(
    `/chatsuperapi/chat/conf/getDataSetSchema/${dataSetId}`,
    {
      method: 'GET',
    },
  );
}


// # chatBI API
// location /chatsuperapi {
//    proxy_pass http://172.21.42.220:9080/api;
// }