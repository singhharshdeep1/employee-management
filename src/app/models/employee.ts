import * as moment from 'moment';
import Department from './department';

export default class Employee {
    constructor(
        private Employee_Id: number,
        private FirstName: string,
        private LastName: string,
        private Address: string,
        private Role: string,
        private BirthDate: Date,
        private Department: Department
    ) {}

    public get employee_id(): number {
        return this.Employee_Id;
    }

    public set employee_id(Id: number) {
        this.Employee_Id = Id;
    }

    public get firstName(): string {
        return this.FirstName;
    }

    public set firstName(FirstName: string) {
        this.FirstName = FirstName;
    }

    public get lastName(): string {
        return this.LastName;
    }

    public set lastName(LastName: string) {
        this.LastName = LastName;
    }

    public get address(): string {
        return this.Address;
    }

    public set address(Address: string) {
        this.Address = Address;
    }

    public get role(): string {
        return this.Role;
    }

    public set role(Role: string) {
        this.Role = Role;
    }

    public get birtDate(): string {
        return moment(this.BirthDate).format("DD/MM/YYYY");
    }

    public set birthDate(DateOfBirth: string) {
        this.BirthDate = moment(DateOfBirth, "DD/MM/YYYY").toDate();;
    }

    public get department(): Department {
        return this.Department;
    }

    public set department(Department: Department) {
        this.Department = Department;
    }
}