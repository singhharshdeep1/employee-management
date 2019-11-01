import Employee from './employee';

export default class Department {
    constructor(
        private Id: number,
        private Name: string
    ) {}

    public get id(): number {
        return this.Id;
    }

    public set id(Id: number) {
        this.Id = Id;
    }

    public get name(): string {
        return this.Name;
    }

    public set name(Name: string) {
        this.Name = Name;
    }
}