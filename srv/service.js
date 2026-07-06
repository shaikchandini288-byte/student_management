// const cds=require('@sap/cds');
// const LOG=cds.log('MyService');
// const { SELECT } = require('@sap/cds/lib/ql/cds-ql');
// module.exports=cds.service.impl(async function(){
//     const {EmployeeLeave}=this.entities;
//     this.before('CREATE',EmployeeLeave,async(req)=>{
//         LOG.info('employee leave requeste started');
        
//         if(!req.data.employeeId ){
//             LOG.error('Validation Failed');
//             req.reject(400,'EmployeeID is mandatory');
//         }
//         if(!req.data.employeeName){
//             req.reject(400, 'EmployeeName is mandatory');
//         }
//         LOG.info(req.data);
//     })
   


    
// })
//const cds = require('@sap/cds');

// module.exports = cds.service.impl(function () {

//     const { EmployeeLeave } = this.entities;

//     // Create a logger
//     const LOG = cds.log('MyService');

//     this.on('READ', EmployeeLeave, async (req) => {

//         LOG.info('READ request received');

//         const employees = await SELECT.from(EmployeeLeave);

//         LOG.info(`Fetched ${EmployeeLeave.length} employee(s)`);

//         return employees;
//     });

// });
const cds=require('@sap/cds');


const { SELECT } = require('@sap/cds/lib/ql/cds-ql');
module.exports=cds.service.impl(async function(){
    this.on('READ','EmployeeLeave',async (req)=>{
        const ID=await cds.context.locale;
        console.log(ID);
        return await SELECT.from('EmployeeLeave');
    })
})
