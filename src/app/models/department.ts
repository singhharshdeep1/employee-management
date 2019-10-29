import Employee from './employee';

export default class Department {
    constructor(
        private Id: string,
        private Name: string,
        private Members: string[]
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

    public get members(): string[] {
        return this.Members
    }

    public set members(Members: string[]) {
        this.Members = Members;
    }
}