'use strict';

const {FlowNodeInstanceService} = require('./dist/commonjs/index');

function registerInContainer(container) {

  container
    .register('FlowNodeInstanceService', FlowNodeInstanceService)
    .dependencies('FlowNodeInstanceRepository', 'IamService')
    .singleton();
}

module.exports.registerInContainer = registerInContainer;
