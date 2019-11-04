import Employee from './employee';

export default class Department {
    private id: number;

    constructor(
        private name: string
    ) {}

    public get Id(): number {
        return this.id;
    }

    public set Id(Id: number) {
        this.id = Id;
    }

    public get Name(): string {
        return this.name;
    }

    public set Name(Name: string) {
        this.name = Name;
    }
}