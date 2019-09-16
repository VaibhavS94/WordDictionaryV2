package com.hm.WordDictionary.repository;

import javax.transaction.Transactional;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import com.hm.WordDictionary.model.Dictionary;

@Repository
public interface DictionaryRepository extends JpaRepository<Dictionary, Long>{
	
	@Query("Select word from Dictionary where word= :word")
	String findByWord(@Param("word")String word);
	
	/********************** Use when the id is not auto generated **********
	@Transactional
	@Modifying
	@Query(value="Insert into Dictionary(word) values( :word )",nativeQuery=true)
	void save(@Param("word")String s);
	***********************************************************************/

}
