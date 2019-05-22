import {
  FlowNode,
  FlowNodeInstance,
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

  public async queryFlowNodeInstancesByProcessInstanceId(processInstanceId: string, flowNodeId: string): Promise<Array<FlowNodeInstance>> {
    return this.flowNodeInstanceRepository.queryFlowNodeInstancesByProcessInstanceId(processInstanceId, flowNodeId);
  }

  public async queryByFlowNodeId(flowNodeId: string): Promise<Array<FlowNodeInstance>> {
    return this.flowNodeInstanceRepository.queryByFlowNodeId(flowNodeId);
  }

  public async queryByInstanceId(instanceId: string): Promise<FlowNodeInstance> {
    return this.flowNodeInstanceRepository.queryByInstanceId(instanceId);
  }

  public async queryByCorrelation(correlationId: string): Promise<Array<FlowNodeInstance>> {
    return this.flowNodeInstanceRepository.queryByCorrelation(correlationId);
  }

  public async queryByProcessModel(processModelId: string): Promise<Array<FlowNodeInstance>> {
    return this.flowNodeInstanceRepository.queryByProcessModel(processModelId);
  }

  public async queryByCorrelationAndProcessModel(correlationId: string, processModelId: string): Promise<Array<FlowNodeInstance>> {
    return this.flowNodeInstanceRepository.queryByCorrelationAndProcessModel(correlationId, processModelId);
  }

  public async queryByProcessInstance(processInstanceId: string): Promise<Array<FlowNodeInstance>> {
    return this.flowNodeInstanceRepository.queryByProcessInstance(processInstanceId);
  }

  public async queryByState(state: FlowNodeInstanceState): Promise<Array<FlowNodeInstance>> {
    return this.flowNodeInstanceRepository.queryByState(state);
  }

  public async queryActive(): Promise<Array<FlowNodeInstance>> {
    return this.flowNodeInstanceRepository.queryActive();
  }

  public async queryActiveByProcessInstance(processInstanceId: string): Promise<Array<FlowNodeInstance>> {
    return this.flowNodeInstanceRepository.queryActiveByProcessInstance(processInstanceId);
  }

  public async queryActiveByCorrelationAndProcessModel(
    correlationId: string,
    processModelId: string,
  ): Promise<Array<FlowNodeInstance>> {
    return this.flowNodeInstanceRepository.queryActiveByCorrelationAndProcessModel(correlationId, processModelId);
  }

  public async querySuspendedByCorrelation(correlationId: string): Promise<Array<FlowNodeInstance>> {
    return this.flowNodeInstanceRepository.querySuspendedByCorrelation(correlationId);
  }

  public async querySuspendedByProcessModel(processModelId: string): Promise<Array<FlowNodeInstance>> {
    return this.flowNodeInstanceRepository.querySuspendedByProcessModel(processModelId);
  }

  public async querySuspendedByProcessInstance(processInstanceId: string): Promise<Array<FlowNodeInstance>> {
    return this.flowNodeInstanceRepository.querySuspendedByProcessInstance(processInstanceId);
  }

  public async queryProcessTokensByProcessInstanceId(processInstanceId: string): Promise<Array<ProcessToken>> {
    return this.flowNodeInstanceRepository.queryProcessTokensByProcessInstanceId(processInstanceId);
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

  public async persistOnInterrupt(
    flowNode: FlowNode,
    flowNodeInstanceId: string,
    token: ProcessToken,
    interruptorInstanceId: string,
  ): Promise<FlowNodeInstance> {

    return this.flowNodeInstanceRepository.persistOnInterrupt(flowNode, flowNodeInstanceId, token, interruptorInstanceId);
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
