export default class Department {
    constructor(
        private Id: string,
        private Name: string
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
}