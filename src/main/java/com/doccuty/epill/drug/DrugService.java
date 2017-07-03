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
    	return repository.findAllOrderByName();
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
						interactionText.append("<p>"+drug.getName()+" - "+drugCompare.getName()+":<br />"+interaction.getInteraction()+"</p>");
					}
				}
			}
		}
		
		return interactionText.toString();
	}

	public List<Drug> findUserDrugsTaking() {
		SimpleUser user = userService.getCurrentUser();
		return repository.findUserDrugsTaking(user.getId());
	}
	
	public List<Drug> findUserDrugsRemembered(SimpleUser user) {
		return repository.findUserDrugsRemembered(user.getId());
	}
}
