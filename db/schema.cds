

namespace leave;
 
entity EmployeeLeave {
    key ID           : UUID;
    employeeId       : String(10);
    employeeName     : String(100);
    leaveType        : String(20);
    fromDate         : Date;
    toDate           : Date;
    status           : String(20);
    approver         :Composition of many Approvers on approver.employee=$self;
}
entity Approvers{
    key ID:UUID;
    approverName:String;
    approverRole:String;
    employee:Association to EmployeeLeave;
}