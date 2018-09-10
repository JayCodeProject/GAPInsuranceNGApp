export class Menu {
    public Id: number;
    public MenuState: string;
    public Name: string;
    public Label: string;
    public ShortLabel: string;
    public MenuType: string;
    public Icon: string;
    public MenuTarget: boolean;

    constructor(menuState: string, name: string, label: string, shortLabel: string, menuType: string, icon: string, menuTarget: boolean) {
        this.MenuState = menuState;
        this.Name = name;
        this.Label = label;
        this.ShortLabel = shortLabel;
        this.MenuType = menuType;
        this.Icon = icon;
        this.MenuTarget = menuTarget;
    }
}