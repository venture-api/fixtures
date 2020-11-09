import w from './words';


export default {
    resourceProduced: `${w.resource}.${w.produced}`,
    signToken: `${w.token}.sign`,
    verifyToken: `${w.token}.verify`,
    identify: w.identify,
    getRegion: `${w.region}.get`,
    checkACE: 'ace.check',
    generateId: `id.${w.generate}`,
    playerRegistered: `${w.player}.registered`,
    generateFacilityId: `${w.facility}.id.${w.generate}`,
    generateWorkerId: `${w.worker}.id.${w.generate}`,
    generateTransportOrderId: `${w.transport}.id.${w.generate}`,
    generateFacilityCode: `${w.facility}.code.${w.generate}`,
    requestResourceData: `${w.resource}.data.${w.request}`,
    facilityCreated: `${w.facility}.created`,
    transportOrdered: `${w.transport}.ordered`,
    workerSpawned: `${w.worker}.${w.spawned}`,
    UOW: w.UOW
};
