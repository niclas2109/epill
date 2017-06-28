package com.doccuty.epill.drug;

import java.util.List;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.doccuty.epill.model.Drug;
import com.doccuty.epill.model.DrugFeature;
import com.doccuty.epill.model.util.DrugCreator;
import com.doccuty.epill.user.UserService;

import de.uniks.networkparser.Deep;
import de.uniks.networkparser.Filter;
import de.uniks.networkparser.IdMap;
import de.uniks.networkparser.json.JsonArray;
import de.uniks.networkparser.json.JsonObject;


@RestController
public class DrugController {
	
	private static final Logger logger = LoggerFactory.getLogger(DrugController.class);

    @Autowired
    private DrugService service;
    
    @Autowired
    private UserService userService;
    
    @RequestMapping(value = "/drug/all", method = RequestMethod.GET)
    public ResponseEntity<JsonObject> getAllDrugs() {

    	IdMap map = DrugCreator.createIdMap("");
		map.withFilter(Filter.regard(Deep.create(2)));
		
        List<Drug> set = service.findAllDrugs();
    	
    	JsonObject json = new JsonObject();
    	JsonArray drugArray = new JsonArray();
    	
    	for(Drug drug : set) {
    		drugArray.add(map.toJsonObject(drug));
    	}
    	
		json.add("value", drugArray);

		return new ResponseEntity<>(json, HttpStatus.OK);
    }
    
    @RequestMapping(value={"/drug/{id}/{lang}"}, method = RequestMethod.GET)
    public ResponseEntity<JsonObject> getDrugById(@PathVariable(value = "id") long id, @PathVariable(value = "lang") String lang) {

		IdMap map = DrugCreator.createIdMap("");
		map.withFilter(Filter.regard(Deep.create(5)));

    	Drug drug = service.findDrugById(id);

    	drug.setPersonalizedInformation("This is where the magic happens. Tailored information...");
    	
    	JsonObject json = new JsonObject();
		json.add("value", map.toJsonObject(drug));

		return new ResponseEntity<>(json, HttpStatus.OK);
    }

    
    @RequestMapping(value={"/drug/{id}/image"}, method = RequestMethod.GET)
    public ResponseEntity<byte[]> getDrugById(@PathVariable(value = "id") long id) {

    	Drug drug = service.findDrugById(id);

    	byte[] img = null;
    	
    	if(drug.getImage() != null) {
    		img = drug.getImage().getImage();
    		return ResponseEntity.ok().contentLength(img.length).contentType(MediaType.IMAGE_PNG).body(img);
    	} else 
    		img = ("").getBytes();

    	return new ResponseEntity<>(HttpStatus.NO_CONTENT);
    } 

    @RequestMapping(value = "/drug/save", method = RequestMethod.POST)
    public ResponseEntity<Object> addDrug(@RequestBody Drug drug) {
		// A pragmatic approach to security which does not use much
		// framework-specific magic. While other approaches
		// with annotations, etc. are possible they are much more complex while
		// this is quite easy to understand and
		// extend.
		if (userService.isAnonymous()) {
			return new ResponseEntity<>(HttpStatus.UNAUTHORIZED);
		}
		
    	service.saveDrug(drug);

		return new ResponseEntity<>(HttpStatus.OK);
    }

    @RequestMapping(value = "/drug/search", method = RequestMethod.GET)
    public ResponseEntity<JsonObject> searchDrug(@RequestParam("exp") String exp) {
		
		IdMap map = DrugCreator.createIdMap("");
		map.withFilter(Filter.regard(Deep.create(2)));

    	List<Drug> list = service.findDrugByName(exp);
    	
    	JsonObject json = new JsonObject();
    	JsonArray drugArray = new JsonArray();
    	
    	for(Drug drug : list) {
    		drugArray.add(map.toJsonObject(drug));
    	}
    	
		json.add("value", drugArray);
		
		return new ResponseEntity<>(json, HttpStatus.OK);
    }
    

    @RequestMapping(value = "/drug/feature/all", method = RequestMethod.GET)
    public ResponseEntity<JsonObject> searchDrug() {
		
		IdMap map = DrugCreator.createIdMap("");
		map.withFilter(Filter.regard(Deep.create(1)));

    	List<DrugFeature> list = service.findAllDrugFeaturesSimple();
    	
    	JsonObject json = new JsonObject();
    	JsonArray drugArray = new JsonArray();
    	
    	for(DrugFeature feature : list) {
    		drugArray.add(map.toJsonObject(feature));
    	}
    	
		json.add("value", drugArray);

		return new ResponseEntity<>(json, HttpStatus.OK);
    }
    
    
    
    /**
     * check a collection of drugs for adverse effects
     * @return
     */

    @RequestMapping(value = "/drug/adverseEffects", method = RequestMethod.GET)
    public ResponseEntity<JsonObject> checkForAdverseEffects() {
		
		IdMap map = DrugCreator.createIdMap("");
		map.withFilter(Filter.regard(Deep.create(1)));

    	JsonObject json = new JsonObject();
		json.add("value", service.checkUserDrugsForAdverseEffects());

		return new ResponseEntity<>(json, HttpStatus.OK);
    }
    
    
    
    /**
     * retrieve user favorites
     * @return
     */

    @RequestMapping(value = "/drug/fav", method = RequestMethod.GET)
    public ResponseEntity<JsonObject> getUserFavorites() {
    	
		// A pragmatic approach to security which does not use much
		// framework-specific magic. While other approaches
		// with annotations, etc. are possible they are much more complex while
		// this is quite easy to understand and
		// extend.

		if (userService.isAnonymous()) {
			return new ResponseEntity<>(HttpStatus.UNAUTHORIZED);
		}  
		
    	IdMap map = DrugCreator.createIdMap("");
		map.withFilter(Filter.regard(Deep.create(2)));
		
        List<Drug> set = service.getAllUserFavorites(userService.getCurrentUser());
    	
    	JsonObject json = new JsonObject();
    	JsonArray drugArray = new JsonArray();
    	
    	for(Drug drug : set) {
    		drugArray.add(map.toJsonObject(drug));
    	}
    	
		json.add("value", drugArray);

		return new ResponseEntity<>(json, HttpStatus.OK);
    }
}
