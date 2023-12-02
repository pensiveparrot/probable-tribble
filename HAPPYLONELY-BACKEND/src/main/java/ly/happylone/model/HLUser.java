package ly.happylone.model;

import java.sql.Date;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.OneToMany;
import jakarta.persistence.Table;
import lombok.Data;

@Data
@Entity
@Table(name = "hluser")
public class HLUser {

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	@Column(name = "id")
	private Long id;

	@Column(name = "email")
	private String email;

	@Column(nullable = false, unique = true, name = "username")
	private String username;

	@Column(name = "password")
	private String password;

	@Column(name = "registerdate")
	private Date registerdate;

	@Column(name = "lastlogindate")
	private Date lastlogindate;

	@Column(name = "unbandate")
	private Date unbandate;

	@Column(name = "statusmsg")
	private String statusmsg;

	@Column(name = "profileimg")
	private String profileimg;

	@Column(name = "userloggedin")
	private boolean userloggedin;

	@Column(name = "role")
	private HLRole role;

	@Column(name = "badges")
	@OneToMany(mappedBy = "user")
	private HLBadge badges;

	@Column(name = "credits")
	private int credits;

}
