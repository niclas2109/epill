package com.doccuty.epill.packaging;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import com.doccuty.epill.model.PackagingSection;
import com.doccuty.epill.model.PackagingTopic;
import com.doccuty.epill.model.util.PackagingCreator;
import com.doccuty.epill.model.util.PackagingSectionCreator;
import com.doccuty.epill.model.util.PackagingTopicCreator;
import com.doccuty.epill.model.util.UserCreator;
import com.doccuty.epill.user.User;
import com.doccuty.epill.user.UserService;

import de.uniks.networkparser.Deep;
import de.uniks.networkparser.Filter;
import de.uniks.networkparser.IdMap;
import de.uniks.networkparser.json.JsonArray;
import de.uniks.networkparser.json.JsonObject;

@RestController
@RequestMapping("/packaging")
public class PackagingController {

    @Autowired
    private PackagingService service;

    @Autowired
    private UserService userService;

    @RequestMapping(value="/all/", method = RequestMethod.GET)
    public ResponseEntity<JsonObject> getAll() {
    	// A pragmatic approach to security which does not use much framework-specific magic. While other approaches
        // with annotations, etc. are possible they are much more complex while this is quite easy to understand and
        // extend.
        if (userService.isAnonymous()) {
            return new ResponseEntity<>(HttpStatus.UNAUTHORIZED);
        }
        
    	IdMap map = PackagingCreator.createIdMap("");
		map.withFilter(Filter.regard(Deep.create(2)));
    	
    	List<PackagingSection> set = service.getAllPackagingSections();
    	
    	JsonObject json = new JsonObject();
    	JsonArray packagingSections = new JsonArray();

    	for(PackagingSection user : set) {
    		packagingSections.add(map.toJsonObject(user));
    	}
    	
		json.add("value", packagingSections);
		
		return new ResponseEntity<>(json, HttpStatus.OK);
    }
    

    @RequestMapping(value="/topic/all/", method = RequestMethod.GET)
    public ResponseEntity<JsonObject> getAllTopics() {

    	IdMap map = PackagingTopicCreator.createIdMap("");
		map.withFilter(Filter.regard(Deep.create(2)));
    	
    	List<PackagingTopic> set = service.getAllPackagingTopics();
    	
    	JsonObject json = new JsonObject();
    	JsonArray packagingSections = new JsonArray();

    	for(PackagingTopic user : set) {
    		packagingSections.add(map.toJsonObject(user));
    	}
    	
		json.add("value", packagingSections);
		
		return new ResponseEntity<>(json, HttpStatus.OK);
    }
    
    @RequestMapping(value={"/{id}/{lang}/"}, method = RequestMethod.GET)
    public ResponseEntity<JsonObject> getPackagingById(@PathVariable(value = "id") long id, @PathVariable(value = "lang") String lang) {

    	IdMap map = PackagingSectionCreator.createIdMap("");
		map.withFilter(Filter.regard(Deep.create(3)));
    	
        PackagingSection section = service.getPackagingSectionById(id, lang);
    	
    	JsonObject json = new JsonObject();

		json.add("value", map.toJsonObject(section));

		return new ResponseEntity<>(json, HttpStatus.OK);
    }
    
    @RequestMapping(value="/save/", method = RequestMethod.POST)
    public ResponseEntity<Object> saveUser(@RequestBody PackagingSection packagingSection) {
    	// A pragmatic approach to security which does not use much framework-specific magic. While other approaches
        // with annotations, etc. are possible they are much more complex while this is quite easy to understand and
        // extend.
        if (userService.isAnonymous()) {
            return new ResponseEntity<>(HttpStatus.UNAUTHORIZED);
        }
        
    	service.savePackagingSection(packagingSection);

    	return new ResponseEntity<>(HttpStatus.OK);
    }
    
    @RequestMapping(value="/update/", method = RequestMethod.POST)
    public ResponseEntity<Object> updateUser(@RequestBody User user) {
    	// A pragmatic approach to security which does not use much framework-specific magic. While other approaches
        // with annotations, etc. are possible they are much more complex while this is quite easy to understand and
        // extend.
        if (userService.isAnonymous()) {
            return new ResponseEntity<>(HttpStatus.UNAUTHORIZED);
        }
        
    	return new ResponseEntity<>(HttpStatus.OK);
    }
        
    
    @RequestMapping(value={"/delete/{id}"}, method = RequestMethod.DELETE)
    public ResponseEntity<Object> deleteUser(@PathVariable(value = "id") long id) {
    	// A pragmatic approach to security which does not use much framework-specific magic. While other approaches
        // with annotations, etc. are possible they are much more complex while this is quite easy to understand and
        // extend.
        if (userService.isAnonymous()) {
            return new ResponseEntity<>(HttpStatus.UNAUTHORIZED);
        }
        
    	return new ResponseEntity<>(HttpStatus.OK);
    }
}
