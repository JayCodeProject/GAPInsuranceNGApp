export class Insurance {
    public Id: number;
    public Name: string;
    public Detail: string;
    public Price: number;
    public ValidDate: string;
    public RiskLevel: string;
    public Coverage: string;
    public RiskLevelId: number;
    public CoverageId: number;
    public CovPeriod: number;
    public CreatedUser: string;

    constructor(createdUser?: string, name?: string, detail?: string, price?: number, validDate?: string,
        riskLevelId?: number, coverageId?: number, covPeriod?: number, riskLevel?: string, coverage?: string) {
        this.CreatedUser = createdUser;
        this.Name = name;
        this.Detail = detail;
        this.Price = price;
        this.ValidDate = validDate;
        this.RiskLevelId = riskLevelId;
        this.CoverageId = coverageId;
        this.CovPeriod = covPeriod;
        this.RiskLevel = riskLevel;
        this.Coverage = coverage;
    }
}