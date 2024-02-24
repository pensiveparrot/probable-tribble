package ly.happylone.model;

import org.hibernate.annotations.GenericGenerator;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.Id;
import jakarta.persistence.Table;
import lombok.Data;

@Entity
@Data
@Table(name = "hlplayer")
public class HLPlayer {
    @Id
    @GeneratedValue(generator = "uuid")
    @GenericGenerator(name = "uuid", strategy = "uuid2")
    @Column(name = "id", columnDefinition = "VARCHAR(36)")
    private String id;

    @Column(name = "level", nullable = false)
    private int level;

    @Column(name = "experience", nullable = false)
    private int experience;

    @Column(name = "strength", nullable = false)
    private int strength;

    @Column(name = "dexterity", nullable = false)
    private int dexterity;

    @Column(name = "constitution", nullable = false)
    private int constitution;

    @Column(name = "intelligence", nullable = false)
    private int intelligence;

    @Column(name = "wisdom", nullable = false)
    private int wisdom;

    @Column(name = "charisma", nullable = false)
    private int charisma;

    @Column(name = "gold", nullable = false)
    private int gold;

    @Column(name = "silver", nullable = false)
    private int silver;

    @Column(name = "copper", nullable = false)
    private int copper;

    @Column(name = "platinum", nullable = false)
    private int platinum;

    @Column(name = "hitpoints", nullable = false)
    private int hitpoints;

    @Column(name = "max_hitpoints", nullable = false)
    private int maxHitpoints;

    @Column(name = "mana", nullable = false)
    private int mana;

    @Column(name = "max_mana", nullable = false)
    private int maxMana;

    @Column(name = "stamina", nullable = false)
    private int stamina;

    @Column(name = "max_stamina", nullable = false)
    private int maxStamina;

    @Column(name = "house_id")
    private String houseId;

    @Column(name = "inventory_id")
    private String inventoryId;

    @Column(name = "equipment_id")
    private String equipmentId;

    @Column(name = "backpack_id")
    private String backpackId;

    @Column(name = "bank_id")
    private String bankId;

    @Column(name = "guild_id")
    private String guildId;

    @Column(name = "quests_id")
    private String questsId;

    @Column(name = "spells_id")
    private String spellsId;

    @Column(name = "skills_id")
    private String skillsId;

    @Column(name = "title")
    private String title;

    @Column(name = "status")
    private String status;

    @Column(name = "profileimg")
    private String profileimg;

    @Column(name = "name")
    private String name;

}
