package com.hm.WordDictionary.controller;

import java.io.BufferedReader;
import java.io.FileInputStream;
import java.io.FileReader;
import java.io.IOException;
import java.io.InputStream;
import java.io.InputStreamReader;
import java.util.HashSet;
import java.util.LinkedHashSet;
import java.util.List;
import java.util.Set;
import java.util.stream.Collectors;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.multipart.MultipartFile;

import com.hm.WordDictionary.model.Dictionary;
import com.hm.WordDictionary.repository.DictionaryRepository;

@RestController
@RequestMapping("/api")
public class WordController {

	@Autowired
	DictionaryRepository dictionaryRepository;

	@PostMapping("/upload")
	public ResponseEntity<?> home(@RequestParam("file") MultipartFile file) throws IOException {
		if (file == null) {
			return new ResponseEntity<>(HttpStatus.CONFLICT);
		}
		
		LinkedHashSet<String> hset = new LinkedHashSet<String>();
		
		InputStream input = file.getInputStream();
		try (BufferedReader br = new BufferedReader(new InputStreamReader(input))) {
			String line;
			while ((line = br.readLine()) != null) {
				String[] ss = line.split("\\s");

				for (String s : ss) {
					s=s.replaceAll("[^a-zA-Z]", "");
					s=s.toLowerCase();
					if(!s.equalsIgnoreCase("")){
						hset.add(s);
					}
				}
			}
		}
		
		Set<String> oldWords = dictionaryRepository.findAll().stream().map(x->x.getWord()).collect(Collectors.toSet());
		
		HashSet<String> newWords = new HashSet<String>();
		
		for(String s: hset){
			if(!oldWords.contains(s)){
				Dictionary dict = new Dictionary(s);
				dictionaryRepository.save(dict);
				newWords.add(s);
			}
		}

		return ResponseEntity.ok().body(newWords);
	}
	
	@GetMapping("/search/{word}")
	public Dictionary search(@PathVariable(value="word")String word){
		String result = dictionaryRepository.findByWord(word);
		
		Dictionary dict = new Dictionary(result);
		if(result == null){
			return dict;
		}
		return dict;
	}
	
	@GetMapping("/dictionary")
	public List<Dictionary> dictionary(){
		return dictionaryRepository.findAll();
	}
	
}
