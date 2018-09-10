export class TokenModel {
    public access_token: string;
    public token_type: string;
    public expires_in: number;
    public fullName: string;
    public userId: number;
    public roleId: number;
    public status: string;
    public tmpPassword: string;
    public companyId: number;
    public companyQty: number;
    public companyName: string;
    public companyHeadquarter: number;
    public selectedStation:number;

    constructor(access_token: string, token_type: string, expires_in: number) {
        this.access_token = access_token;
        this.token_type = token_type;
        this.expires_in = expires_in;
    }
}