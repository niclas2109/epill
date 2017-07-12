package com.doccuty.epill.drug;

import java.util.Iterator;
import java.util.List;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.doccuty.epill.model.DrugFeature;
import com.doccuty.epill.model.Interaction;
import com.doccuty.epill.model.ItemInvocation;
import com.doccuty.epill.tailoredsummary.TailoredSummary;
import com.doccuty.epill.tailoredsummary.TailoredSummaryService;
import com.doccuty.epill.user.SimpleUser;
import com.doccuty.epill.user.User;
import com.doccuty.epill.user.UserService;

@Service
public class DrugService {

	private static final Logger logger = LoggerFactory.getLogger(DrugService.class);
	
	@Autowired
	DrugRepository repository;

	@Autowired
	UserService userService;
	
	@Autowired
	DrugFeatureRepository featureRepository;
	
	@Autowired
	TailoredSummaryService tailoredSummaryService;
	
	
	
    public List<Drug> findAllDrugs() {
    		List<Drug> drugs = repository.findAllOrderByName();
    		
    		if(!userService.isAnonymous()) {
    			User user = userService.getUserById(userService.getCurrentUser().getId());

    			if(user == null)
    				return drugs;
    			
    			List<Drug> taking	= repository.findUserDrugsTaking(user.getId());
    	    		List<Drug> remember	= repository.findUserDrugsRemembered(user.getId());
    			
    	    		for(Drug drug : drugs) {
    	    			if(taking.contains(drug))
    	    				drug.setIsTaken(true);

    	    			if(remember.contains(drug))
    	    				drug.setIsRemembered(true);

    	    			drug = this.tailorDrugFeatures(drug, user);
    	    			
    	    			// load tailored summary
    	    			TailoredSummary summary = tailoredSummaryService.getTailoredSummaryByDrugAndUser(drug, user);

    	    			if(summary != null) {
    	    				drug.setTailoredSummary(summary.getText());
    	    			}
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

			for(User usr : drug.getUserRemembering()) {
				if(usr.getId() == user.getId()) {
					drug.setIsRemembered(true);
					break;
				}
			}
			
			for(User usr : drug.getUser()) {
				if(usr.getId() == user.getId()) {
					drug.setIsTaken(true);
					break;
				}
			}
			

			drug = this.tailorDrugFeatures(drug, user);
			drug = tailoredSummaryService.replaceSections(drug, user);
			
			
			// load tailored summary
			TailoredSummary summary = tailoredSummaryService.getTailoredSummaryByDrugAndUser(drug, user);

			if(summary != null) {
				drug.setTailoredSummary(summary.getText());
			}
		}

		return drug;
	}
	
	public List<Drug> findDrugByName(String exp) {
		List<Drug> list = repository.findByNameContainingIgnoreCase(exp);
		return list;
	}
	
	public List<Drug> getDrugMinimized(String value) {
		return repository.findByNameMinimized(value);
	}
	
	public List<DrugFeature> findAllDrugFeaturesSimple() {
		return featureRepository.findAllSimple();
	}

	public String checkUserDrugsInteractions() {

		StringBuilder interactionText = new StringBuilder();
		
		List<Drug> list = this.findUserDrugsTaking(userService.getCurrentUser());
		
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

	public List<Drug> findUserDrugsTaking(User user) {
		
		user = userService.getUserById(user.getId());
		
		List<Drug> drugs = repository.findUserDrugsTaking(user.getId());		
		List<Drug> remembered = repository.findUserDrugsRemembered(user.getId());
		
		for(Drug drug : drugs) {
			drug.setIsTaken(true);
			
			if(remembered.contains(drug)) {
				drug.setIsRemembered(true);
			}

			drug = this.tailorDrugFeatures(drug, user);
			
			
			// load tailored summary
			TailoredSummary summary = tailoredSummaryService.getTailoredSummaryByDrugAndUser(drug, user);

			if(summary != null) {
				drug.setTailoredSummary(summary.getText());
			}
		}
		
		return drugs;
	}
	
	public List<Drug> findUserDrugsRemembered(User user) {

		user = userService.getUserById(user.getId());
		
		List<Drug> drugs = repository.findUserDrugsTaking(user.getId());		
		List<Drug> taking = repository.findUserDrugsRemembered(user.getId());
		
		for(Drug drug : drugs) {
			drug.setIsRemembered(true);
			
			if(taking.contains(drug)) {
				drug.setIsTaken(true);
			}

			drug = this.tailorDrugFeatures(drug, user);
			
			// load tailored summary
			TailoredSummary summary = tailoredSummaryService.getTailoredSummaryByDrugAndUser(drug, user);

			if(summary != null) {
				drug.setTailoredSummary(summary.getText());
			}
		}
		
		return drugs;
	}
	
	

    private Drug tailorDrugFeatures(Drug drug, User user) {
		// tailor drug features
		
    		if(user == null) {
    			return drug;
    		}
    	
		Iterator<DrugFeature> features = drug.getDrugFeature().iterator();
		while (features.hasNext()) {
			DrugFeature feature = features.next();

			if(user.getAge() != 0 && (user.getAge() < feature.getMinAge()
				|| feature.getMaxAge() != 0 && user.getAge() > feature.getMaxAge())
	    			|| (feature.getGender().size() > 0 && user.getGender() != null && !feature.getGender().contains(user.getGender()))) {
	    				
	    			logger.info("Removed irrelevant drug feature. feature={} gender={}", feature.getDrugFeature(), user.getGender());
	
	    			features.remove();
	    		}
		}
		return drug;
	}

}
