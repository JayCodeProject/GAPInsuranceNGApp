export class CustomerInsurance {
    public Id: number;
    public Identification: string;
    public FullName: string;
    public Phone: string;
    public Insurance: string;
    public Coverage: string;
    public CreatedUser: string;

    constructor(id: number, createdUser: string) {
        this.Id = id;
        this.CreatedUser = createdUser;
    }
}