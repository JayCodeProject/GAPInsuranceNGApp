export class SessionService {
    private key: string;
    private value: string;

    setSession(key: string, value: string) {
        this.key = key;
        this.value = value;
        sessionStorage.setItem(this.key, this.value);
    }

    getSession(key: string) {
        this.key = key;
        return sessionStorage.getItem(this.key);
    }

    clearSession(key: string) {
        sessionStorage.removeItem(this.key);
    }
}
