package com.swetha.Capstone;

import java.time.LocalTime;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name="Checks")
public class Checks {
	
	@Id
	private long id;
	@Column
	private String websiteName;
	@Column
	private String websiteUrl;
	@Column
	private LocalTime frequency;
	@Column
	private String siteStatus;
	
	public String getSiteStatus() {
		return siteStatus;
	}
	public void setSiteStatus(String siteStatus) {
		this.siteStatus = siteStatus;
	}
	public long getId() {
		return id;
	}
	public void setId(long id) {
		this.id = id;
	}
	public String getWebsiteName() {
		return websiteName;
	}
	public void setWebsiteName(String websiteName) {
		this.websiteName = websiteName;
	}
	public String getWebsiteUrl() {
		return websiteUrl;
	}
	public void setWebsiteUrl(String websiteUrl) {
		this.websiteUrl = websiteUrl;
	}
	public LocalTime getFrequency() {
		return frequency;
	}
	public void setFrequency(LocalTime frequency) {
		this.frequency = frequency;
	}
	

}
