import * as moment from 'moment';
import Department from './department';

export default class Employee {

    private employee_id: number;
    private department: Department;

    constructor(
        private firstName: string,
        private lastName: string,
        private address: string,
        private birthDate: Date,
        private role: string,
    ) {}

    public get Employee_Id(): number {
        return this.employee_id;
    }

    public set Employee_Id(Id: number) {
        this.employee_id = Id;
    }

    public get FirstName(): string {
        return this.firstName;
    }

    public set FirstName(FirstName: string) {
        this.firstName = FirstName;
    }

    public get LastName(): string {
        return this.lastName;
    }

    public set LastName(LastName: string) {
        this.lastName = LastName;
    }

    public get Address(): string {
        return this.address;
    }

    public set Address(Address: string) {
        this.address = Address;
    }

    public get Role(): string {
        return this.role;
    }

    public set Role(Role: string) {
        this.role = Role;
    }

    public get BirtDate(): string {
        return moment(this.birthDate).format("DD/MM/YYYY");
    }

    public set BirthDate(DateOfBirth: string) {
        this.birthDate = moment(DateOfBirth, "DD/MM/YYYY").toDate();;
    }

    public get Department(): Department {
        return this.department;
    }

    public set Department(Department: Department) {
        this.department = Department;
    }
}