import {
  FlowNode,
  FlowNodeInstance,
  FlowNodeInstanceList,
  FlowNodeInstanceState,
  IFlowNodeInstanceRepository,
  IFlowNodeInstanceService,
  ProcessToken,
} from '@process-engine/flow_node_instance.contracts';

import {IIAMService} from '@essential-projects/iam_contracts';

export class FlowNodeInstanceService implements IFlowNodeInstanceService {

  private readonly flowNodeInstanceRepository: IFlowNodeInstanceRepository;
  private readonly iamService: IIAMService;

  constructor(flowNodeInstanceRepository: IFlowNodeInstanceRepository, iamService: IIAMService) {
    this.flowNodeInstanceRepository = flowNodeInstanceRepository;
    this.iamService = iamService;
  }

  public async querySpecificFlowNode(correlationId: string, processModelId: string, flowNodeId: string): Promise<FlowNodeInstance> {
    return this.flowNodeInstanceRepository.querySpecificFlowNode(correlationId, processModelId, flowNodeId);
  }

  public async queryByInstanceId(instanceId: string): Promise<FlowNodeInstance> {
    return this.flowNodeInstanceRepository.queryByInstanceId(instanceId);
  }

  public async queryFlowNodeInstancesByProcessInstanceId(
    processInstanceId: string,
    flowNodeId: string,
    offset: number = 0,
    limit: number = 0,
  ): Promise<FlowNodeInstanceList> {
    return this.flowNodeInstanceRepository.queryFlowNodeInstancesByProcessInstanceId(processInstanceId, flowNodeId, offset, limit);
  }

  public async queryByFlowNodeId(flowNodeId: string, offset: number = 0, limit: number = 0): Promise<FlowNodeInstanceList> {
    return this.flowNodeInstanceRepository.queryByFlowNodeId(flowNodeId, offset, limit);
  }

  public async queryByCorrelation(correlationId: string, offset: number = 0, limit: number = 0): Promise<FlowNodeInstanceList> {
    return this.flowNodeInstanceRepository.queryByCorrelation(correlationId, offset, limit);
  }

  public async queryByProcessModel(processModelId: string, offset: number = 0, limit: number = 0): Promise<FlowNodeInstanceList> {
    return this.flowNodeInstanceRepository.queryByProcessModel(processModelId, offset, limit);
  }

  public async queryByCorrelationAndProcessModel(
    correlationId: string,
    processModelId: string,
    offset: number = 0,
    limit: number = 0,
  ): Promise<FlowNodeInstanceList> {
    return this.flowNodeInstanceRepository.queryByCorrelationAndProcessModel(correlationId, processModelId, offset, limit);
  }

  public async queryByProcessInstance(processInstanceId: string, offset: number = 0, limit: number = 0): Promise<FlowNodeInstanceList> {
    return this.flowNodeInstanceRepository.queryByProcessInstance(processInstanceId, offset, limit);
  }

  public async queryByState(state: FlowNodeInstanceState, offset: number = 0, limit: number = 0): Promise<FlowNodeInstanceList> {
    return this.flowNodeInstanceRepository.queryByState(state, offset, limit);
  }

  public async queryActive(offset: number = 0, limit: number = 0): Promise<FlowNodeInstanceList> {
    return this.flowNodeInstanceRepository.queryActive(offset, limit);
  }

  public async queryActiveByProcessInstance(processInstanceId: string, offset: number = 0, limit: number = 0): Promise<FlowNodeInstanceList> {
    return this.flowNodeInstanceRepository.queryActiveByProcessInstance(processInstanceId, offset, limit);
  }

  public async queryActiveByCorrelationAndProcessModel(
    correlationId: string,
    processModelId: string,
    offset: number = 0,
    limit: number = 0,
  ): Promise<FlowNodeInstanceList> {
    return this.flowNodeInstanceRepository.queryActiveByCorrelationAndProcessModel(correlationId, processModelId, offset, limit);
  }

  public async querySuspendedByCorrelation(correlationId: string, offset: number = 0, limit: number = 0): Promise<FlowNodeInstanceList> {
    return this.flowNodeInstanceRepository.querySuspendedByCorrelation(correlationId, offset, limit);
  }

  public async querySuspendedByProcessModel(processModelId: string, offset: number = 0, limit: number = 0): Promise<FlowNodeInstanceList> {
    return this.flowNodeInstanceRepository.querySuspendedByProcessModel(processModelId, offset, limit);
  }

  public async querySuspendedByProcessInstance(processInstanceId: string, offset: number = 0, limit: number = 0): Promise<FlowNodeInstanceList> {
    return this.flowNodeInstanceRepository.querySuspendedByProcessInstance(processInstanceId, offset, limit);
  }

  public async queryProcessTokensByProcessInstanceId(processInstanceId: string, offset: number = 0, limit: number = 0): Promise<Array<ProcessToken>> {
    return this.flowNodeInstanceRepository.queryProcessTokensByProcessInstanceId(processInstanceId, offset, limit);
  }

  public async persistOnEnter(
    flowNode: FlowNode,
    flowNodeInstanceId: string,
    token: ProcessToken,
    previousFlowNodeInstanceId: string,
  ): Promise<FlowNodeInstance> {

    return this.flowNodeInstanceRepository.persistOnEnter(flowNode, flowNodeInstanceId, token, previousFlowNodeInstanceId);
  }

  public async persistOnExit(
    flowNode: FlowNode,
    flowNodeInstanceId: string,
    token: ProcessToken,
  ): Promise<FlowNodeInstance> {

    return this.flowNodeInstanceRepository.persistOnExit(flowNode, flowNodeInstanceId, token);
  }

  public async persistOnError(
    flowNode: FlowNode,
    flowNodeInstanceId: string,
    token: ProcessToken,
    error: Error,
  ): Promise<FlowNodeInstance> {

    return this.flowNodeInstanceRepository.persistOnError(flowNode, flowNodeInstanceId, token, error);
  }

  public async persistOnTerminate(
    flowNode: FlowNode,
    flowNodeInstanceId: string,
    token: ProcessToken,
  ): Promise<FlowNodeInstance> {

    return this.flowNodeInstanceRepository.persistOnTerminate(flowNode, flowNodeInstanceId, token);
  }

  public async suspend(flowNodeId: string, flowNodeInstanceId: string, token: ProcessToken): Promise<FlowNodeInstance> {
    return this.flowNodeInstanceRepository.suspend(flowNodeId, flowNodeInstanceId, token);
  }

  public async resume(flowNodeId: string, flowNodeInstanceId: string, token: ProcessToken): Promise<FlowNodeInstance> {
    return this.flowNodeInstanceRepository.resume(flowNodeId, flowNodeInstanceId, token);
  }

  public async deleteByProcessModelId(processModelId: string): Promise<void> {
    return this.flowNodeInstanceRepository.deleteByProcessModelId(processModelId);
  }

}
