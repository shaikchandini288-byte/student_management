using {  leave as db} from '../db/schema';

service MyService {
    entity EmployeeLeave as projection on db.EmployeeLeave;
    entity Approvers as projection on db.Approvers;

    

}
