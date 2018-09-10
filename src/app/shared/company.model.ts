export class Company {
    public Id: number;
    public SubProductId: number;
    public Name: string;
    public Detail: string;
    public Logo: string;
    public PhoneNumber: string;
    public Website: string;
    public Facebook: string;
    public Email: string;
    public CountryCode: number;
    public StateId: number;
    public CityId: number;
    public Address1: string;
    public Address2: string;
    public CreatedUser: string;

    constructor(id: number, createdUser: string, subProductId?: number,
        name?: string, detail?: string, phone?: string, website?: string,
        email?: string, stateId?: number, cityId?: number, address1?: string) {
        this.Id = id;
        this.CreatedUser = createdUser;
        this.SubProductId = subProductId;
        this.Name = name;
        this.Detail = detail;
        this.PhoneNumber = phone;
        this.Website = website;
        this.Email = email;
        this.StateId = stateId;
        this.CityId = cityId;
        this.Address1 = address1
    }
}