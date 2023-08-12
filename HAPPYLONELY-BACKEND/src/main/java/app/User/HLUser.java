package app.User;

import java.util.Date;

import app.Role.HLRole;
import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.Id;
import jakarta.persistence.Table;
import lombok.Getter;
import lombok.Setter;

@Setter
@Entity
@Table(name = "HLUser")
public class HLUser {
	@Id
	@GeneratedValue
	@Column(name = "id")
	private Long id;

	@Getter
	@Column(name = "username")
	private String username;

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

}
