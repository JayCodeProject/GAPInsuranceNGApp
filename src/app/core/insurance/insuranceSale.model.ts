export class InsuranceSale {
    public CustomerId: number;
    public InsuranceId: number;
    public Coverage: number;
    public CreatedUser: string;

    constructor(customerId: number, insuranceId: number, coverage: number, createdUser: string) {
        this.CustomerId = customerId;
        this.InsuranceId = insuranceId;
        this.Coverage = coverage;
        this.CreatedUser = createdUser;
    }
}