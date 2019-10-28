import * as moment from 'moment';

export default class Employee {
    constructor(
        private Id: string,
        private Name: string,
        private Address: string,
        private Role: string,
        private DateOfBirth: Date,
        private DepartmentId: string
    ) {}

    public get id(): string {
        return this.Id;
    }

    public set id(Id: string) {
        this.Id = Id;
    }

    public get name(): string {
        return this.Name;
    }

    public set name(Name: string) {
        this.Name = Name;
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

    public get dateOfBirth(): string {
        return moment(this.DateOfBirth).format("MM/DD/YYYY");
    }

    public set dateOfBirth(DateOfBirth: string) {
        this.DateOfBirth = moment(DateOfBirth, "MM/DD/YYYY").toDate();;
    }

    public get departmentId(): string {
        return this.DepartmentId;
    }

    public set departmentId(DepartmentId: string) {
        this.DepartmentId = DepartmentId;
    }
}