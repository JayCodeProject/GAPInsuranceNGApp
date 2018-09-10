export class Password {
    public Id: number;
    public Password: string;
    public NewPassword: string;
    public CreatedUser: string;
    public CompanyId: Number;
    public Option: number;


    constructor(userId: number, password: string, newPassword: string, createdUser: string, companyId: Number, option: number) {
        this.Id = userId;
        this.Password = password;
        this.NewPassword = newPassword;
        this.CreatedUser = createdUser;
        this.CompanyId = companyId;
        this.Option = option;
    }
}