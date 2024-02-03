package ly.happylone.model;

public enum HLRole {
    Banned("ROLE_BANNED"),
    Guest("ROLE_GUEST"),
    Standard("ROLE_STANDARD"),
    VIP("ROLE_VIP"),
    Moderator("ROLE_MODERATOR"),
    Admin("ROLE_ADMIN"),
    Owner("ROLE_OWNER");

    private final String roleName;

    HLRole(String roleName) {
        this.roleName = roleName;
    }

    public String getRoleName() {
        return roleName;
    }
}