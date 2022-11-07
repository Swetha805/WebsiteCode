package com.swetha.Capstone;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;


@CrossOrigin
@RestController
public class ChecksController {
	
	@Autowired
	ChecksRepository checksRepository;
	
	@PostMapping("/addCheck")
	public Checks addCheck(@RequestBody Checks check) {
		return checksRepository.save(check);
	}
	
	@GetMapping("/getAllChecks")
	public List<Checks> getAllChecks(){
		return checksRepository.findAll();
	}
	
	@GetMapping("/getCheckById/{id}")
	public Optional<Checks> getChecksById(@PathVariable(value="id") Long id){
		return checksRepository.findById(id);
	}
	
	@PutMapping("/updateCheck/{id}")
	public Checks updateBook(@PathVariable(value="id") Long id, @RequestBody Checks checkDetails) {
		Optional<Checks> book = checksRepository.findById(id);
		Checks checkNew=book.get();
		checkNew.setWebsiteName(checkDetails.getWebsiteName());
		checkNew.setWebsiteUrl(checkDetails.getWebsiteUrl());
		return checksRepository.save(checkNew);
	}
	
	@DeleteMapping("/deleteCheck/{id}")
	public void deleteCheck(@PathVariable(value="id") Long id){
		checksRepository.deleteById(id);
	}
	
	

}
