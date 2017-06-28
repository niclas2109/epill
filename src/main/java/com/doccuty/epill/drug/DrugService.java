package com.doccuty.epill.drug;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.doccuty.epill.model.Drug;
import com.doccuty.epill.model.DrugFeature;
import com.doccuty.epill.model.ItemInvocation;
import com.doccuty.epill.model.SimpleUser;
import com.doccuty.epill.model.User;
import com.doccuty.epill.user.UserRepository;
import com.doccuty.epill.user.UserService;

@Service
public class DrugService {

	@Autowired
	DrugRepository repository;

	@Autowired
	UserService userService;
	
	@Autowired
	DrugFeatureRepository featureRepository;
	
	
    public List<Drug> findAllDrugs() {
    	return repository.findAllOrderByName();
    }

    public void saveDrug(Drug Drug) {
    	repository.save(Drug);
    }

	public Drug findDrugById(long id) {
		
		Drug drug = repository.findOne(id);
		User user = null;
		
		if(drug != null && !userService.isAnonymous()) {
			ItemInvocation invocation = new ItemInvocation();
			invocation.withDrug(drug).withUser(userService.getCurrentUser());
			
			user = userService.saveItemInvocation(invocation);
		}
		
		if(user != null) {
			
		}
		
		return drug;
	}
	
	public List<Drug> findDrugByName(String name) {
		return repository.findByName(name);
	}
	
	public List<Drug> getDrugMinimized(String value) {
		return repository.findByNameMinimized(value);
	}
	
	public List<DrugFeature> findAllDrugFeaturesSimple() {
		return featureRepository.findAllSimple();
	}

	public String checkUserDrugsForAdverseEffects() {
		User user = userService.getCurrentUser();
		
		String adverseEffects = "adverse effects";
		
		return adverseEffects;
	}

	public List<Drug> getAllUserFavorites(SimpleUser user) {
		return repository.findUserFavorites();
	}
}
