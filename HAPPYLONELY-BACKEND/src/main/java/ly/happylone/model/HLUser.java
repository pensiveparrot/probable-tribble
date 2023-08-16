package ly.happylone.model;

import java.util.Date;
import java.util.Set;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.Id;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;


@Setter
@Entity
public class HLUser {
	@Id
	@GeneratedValue
	@Column(name = "id")
	private Long id;
	
	@Getter
	@Column(name = "email")
	private String email;

	@Getter
	@Column(name = "username", unique = true)
	private String username;
	@Getter
	@Column(name = "password")
	private String password;

	@Getter
	@Column(name = "role")
	private HLRole role;

	@Getter
	@Column(name = "registerdate")
	private Date registerdate;

	@Getter
	@Column(name = "lastlogindate")
	private Date lastlogindate;

	@Getter
	@Column(name = "unbandate")
	private Date unbandate;

	@Getter
	@Column(name = "statusmsg")
	private String statusmsg;

	@Getter
	@Column(name = "profileimg")
	private String profileimg;

	@Getter
	@Column(name = "userloggedin")
	private boolean userloggedin;

	private Set<HLRole> HLroles;

	public Set<HLRole> getRoles() {
        return HLroles;
    }

}
