package com.doccuty.epill.drug;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.doccuty.epill.model.DrugFeature;
import com.doccuty.epill.model.Interaction;
import com.doccuty.epill.model.ItemInvocation;
import com.doccuty.epill.user.SimpleUser;
import com.doccuty.epill.user.User;
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
    		List<Drug> drugs = repository.findAllOrderByName();
    		
    		if(!userService.isAnonymous()) {
    			User user = userService.getCurrentUser();

    			List<Drug> taking	= repository.findUserDrugsTaking(user.getId());
    	    		List<Drug> remember	= repository.findUserDrugsRemembered(user.getId());
    			
    	    		for(Drug drug : drugs) {
    	    			if(taking.contains(drug))
    	    				drug.setIsTaken(true);

    	    			if(remember.contains(drug))
    	    				drug.setIsRemembered(true);
    	    		}
    	    		
    		}
    		
    		return drugs;
    }

    public void saveDrug(Drug Drug) {
    	repository.save(Drug);
    }

	public Drug findDrugById(long id) {
		
		Drug drug = repository.findOne(id);

		if(drug != null && !userService.isAnonymous()) {
			User user = userService.getCurrentUser();
			
			ItemInvocation invocation = new ItemInvocation();
			invocation.withDrug(drug).withUser(user);
			
			user = userService.saveItemInvocation(invocation);
			
			//TODO: make dynamically
			
	    		drug.setPersonalizedInformation("Lieber %User.firstname% %User.lastname%, das ist deine personalisierte Information.");
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

	public String checkUserDrugsInteractions() {

		StringBuilder interactionText = new StringBuilder();
		
		List<Drug> list = this.findUserDrugsTaking();
		
		for(Drug drug : list) {
			for(Interaction interaction : drug.getInteraction()) {
				for(Drug drugCompare : list) {
					if(interaction.getInteractionDrug().contains(drugCompare)) {
						interactionText.append("<p>"+drug.getName()+"</p> - "+drugCompare.getName()+": "+interaction.getInteraction()+"</p>");
					}
				}
			}
		}
		
		return interactionText.toString();
	}

	public List<Drug> findUserDrugsTaking() {
		SimpleUser user = userService.getCurrentUser();
		List<Drug> drugs = repository.findUserDrugsTaking(user.getId());
		
		for(Drug drug : drugs) {
			drug.setIsTaken(true);
		}
		
		return drugs;
	}
	
	public List<Drug> findUserDrugsRemembered(SimpleUser user) {
		List<Drug> drugs = repository.findUserDrugsRemembered(user.getId());
		
		for(Drug drug : drugs) {
			drug.setIsRemembered(true);
		}
		
		return drugs;
	}
}
