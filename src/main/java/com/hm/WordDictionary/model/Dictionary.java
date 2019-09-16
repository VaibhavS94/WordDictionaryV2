package com.hm.WordDictionary.model;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name="dictionary")
public class Dictionary {
	@Id
	@GeneratedValue(strategy= GenerationType.AUTO)
	private Long id;
	
	private String word;
	
	public Dictionary(){}
	
	public Dictionary(String word) {
		super();
		this.word = word;
	}



	public Long getId() {
		return id;
	}

	public void setId(Long id) {
		this.id = id;
	}

	public String getWord() {
		return word;
	}

	public void setWord(String word) {
		this.word = word;
	}
	
	
}	
