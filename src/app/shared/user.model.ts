export class User {
    public Id: number;
    public Role: string;
    public RoleId: number;
    public GenderId: number;
    public Gender: string;
    public ProfessionId: number;
    public profession: string;
    public FirstName: string;
    public LastName: string;
    public SecondLastName: string;
    public FullName: string;
    public DateOfBirth: string;
    public DateOfBirthLabel: string;
    public Username: string;
    public Email: string;
    public Identification: string;
    public Password: string;
    public NewPassword: string;
    public CellPhoneNumber: string;
    public FullCellPhoneNumber: string;
    public Ext: string;
    public CountryCode: number;
    public Country: string;
    public StateId: number;
    public State: string;
    public CityId: number;
    public City: string;
    public Address1: string;
    public Address2: string;
    public FullAddress: string;
    public CreatedUser: string;
    public CompanyId: number;
    public LoginMethod: number;
    public AgentBrowser: string;
    public Longitude: number;
    public Latitude: number;


    constructor(username?: string, password?: string, createdUser?: string, loginMethod?: number,
        longitude?: number, latitude?: number, email?: string, cellPhone?: string, Id?: number) {
        this.Username = username;
        this.Email = email;
        this.CellPhoneNumber = cellPhone;
        this.Password = password;
        this.CreatedUser = createdUser;
        this.LoginMethod = loginMethod;
        this.Longitude = longitude;
        this.Latitude = latitude;
        this.Id = Id;
    }
}