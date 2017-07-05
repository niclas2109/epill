package com.doccuty.epill.tailoredsummary;

import javax.persistence.CascadeType;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.OneToOne;
import javax.persistence.Table;

import com.doccuty.epill.drug.Drug;
import com.doccuty.epill.model.Gender;
import com.doccuty.epill.model.PackagingTopic;
import com.doccuty.epill.user.User;


@Entity
@Table(name = "tailored_summary")
public class TailoredSummary {

	private String text;

	@OneToOne(cascade=CascadeType.ALL)
	@JoinColumn(name = "iddrug")
	private Drug drug;

	@OneToOne(cascade=CascadeType.ALL)
	@JoinColumn(name = "idpackaging_topic")
	private PackagingTopic topic;

	@OneToOne(cascade=CascadeType.ALL)
	@JoinColumn(name = "idgender")
	private Gender gender;
	
	private int minAge;
	private int maxAge;
	

	@Id
	@GeneratedValue(strategy = GenerationType.AUTO)
	private long id;

	public long getId() {
		return this.id;
	}

	public void setId(long value) {
		if (this.id != value) {
			this.id = value;
		}
	}

	public TailoredSummary withId(long value) {
		setId(value);
		return this;
	}
	
	/*
	 * text message
	 */
	
	public String getText() {
		return this.text;
	}
	
	public void setText(String value) {
		this.text = value;
	}
	
	public TailoredSummary with(String value) {
		this.setText(value);
		return this;
	}

	public void personalize(User user) {
		this.text = this.text.replace("%firstname%", user.getFirstname())
				.replace("%lastname%", user.getLastname())
				.replace("%age%", Integer.toString(user.getAge()));	
	}
	
	/*
	 * drug
	 */
	
	public Drug getDrug() {
		return this.drug;
	}
	
	public void setDrug(Drug value) {
		this.drug = value;
	}
	
	public TailoredSummary withDrug(Drug value) {
		this.setDrug(value);
		return this;
	}
	
	
	/*
	 * topic
	 */
	
	public PackagingTopic getTopic() {
		return this.topic;
	}
	
	public void setTopic(PackagingTopic value) {
		this.topic = value;
	}
	
	public TailoredSummary withTopic(PackagingTopic value) {
		this.setTopic(value);
		return this;
	}
	
	/*
	 * gender
	 */
	
	public Gender getGender() {
		return this.gender;
	}
	
	public void setGender(Gender value) {
		this.gender = value;
	}
	
	public TailoredSummary withGender(Gender value) {
		this.setGender(value);
		return this;
	}
	
	
	/*
	 * minimum Age
	 */
	
	public int getMinAge() {
		return this.minAge;
	}
	
	public void setMinAge(int value) {
		this.minAge = value;
	}
	
	public TailoredSummary withMinAge(int value) {
		this.setMinAge(value);
		return this;
	}	
	
	
	/*
	 * maximum Age
	 */
	
	public int getMaxAge() {
		return this.maxAge;
	}
	
	public void setMaxAge(int value) {
		this.maxAge = value;
	}
	
	public TailoredSummary withMaxAge(int value) {
		this.setMaxAge(value);
		return this;
	}
	
	@Override
	public String toString() {
		return this.id + " " + this.text + "";
	}
}
