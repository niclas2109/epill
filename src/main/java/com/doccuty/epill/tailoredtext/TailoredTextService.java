package com.doccuty.epill.tailoredtext;

import java.util.Iterator;
import java.util.List;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.doccuty.epill.disease.Disease;
import com.doccuty.epill.drug.Drug;
import com.doccuty.epill.model.DrugFeature;
import com.doccuty.epill.packagingsection.PackagingSection;
import com.doccuty.epill.user.User;

@Service
public class TailoredTextService {

	private static final Logger logger = LoggerFactory.getLogger(TailoredTextService.class);
	
	@Autowired
	TailoredTextRepository repository;
	

	public Drug tailorDrugToUser(Drug drug, User user) {
		
		drug = this.tailorDrugFeatures(drug, user);
		
		drug = this.tailorDiseases(drug, user);
		
		
		// load tailored summary
		TailoredText summary = this.getTailoredSummaryByDrugAndUser(drug, user);

		if(summary != null) {
			drug.setTailoredSummary(summary.getText());
		}
		
		this.replaceSections(drug, user);
		
		return drug;
	}
	
	
	
	/**
	 * Get the minimum version of drug summary. This one is thought be displayed in detail view
	 * @param drug
	 * @param user
	 * @return
	 */
	
	public TailoredText getTailoredSummaryByDrugAndUser(Drug drug, User user) {
	
		List<TailoredText> list = repository.findByDrugAndTopicIsNullAndIsMinimum(drug, false);
		
		return findTailoredSummaryForUser(list, user);
	}
	
	
	
	/**
	 * Get the minimum version of drug summary. This one is thought be displayed in listings.
	 * If no minimum summary is available, regular summary is used.
	 * @param drug
	 * @param user
	 * @return
	 */
	
	public TailoredText getTailoredMinimumSummaryByDrugAndUser(Drug drug, User user) {
	
		List<TailoredText> list = repository.findByDrugAndTopicIsNullAndIsMinimum(drug, true);
	
		if(list.size() == 0) {
			return getTailoredSummaryByDrugAndUser(drug, user);
		}
		
		return findTailoredSummaryForUser(list, user);
	}

	
	/**
	 * Replace original packaging sections of the drug with tailored ones if available
	 * @param drug
	 * @param user
	 * @return
	 */
	
	public Drug replaceSections(Drug drug, User user) {

		for(PackagingSection section : drug.getPackagingSection()) {
			List<TailoredText> list = repository.findByDrugAndTopic(drug, section.getTopic());
			
			TailoredText summary = findTailoredSummaryForUser(list, user);
			
			if(summary != null) {
				section.setText(summary.getText());
				section.setIsTailored(true);
			}
		}
		
		return drug;
	}
	
	
	/**
	 * Select all available tailored summaries for given drug, packaging section
	 * and select with repect to user characteristics
	 * @param drug
	 * @param section
	 * @param user
	 * @return
	 */
	
	public PackagingSection findTailoredPackagingSummary(Drug drug, PackagingSection section, User user) {
	
		List<TailoredText> list = repository.findByDrugAndTopic(drug, section.getTopic());
		
		TailoredText summary = findTailoredSummaryForUser(list, user);
		
		if(summary != null) {
			section.setText(summary.getText());
			section.setIsTailored(true);
		}
		
		return section;
	}
	
	
	/**
	 * Find and return first summary of a list that matches user characteristics
	 * A match is given if a text fits users' age and gender
	 * @param list
	 * @param user
	 * @return
	 */
	
	public TailoredText findTailoredSummaryForUser(List<TailoredText> list, User user) {
		
		if(user == null)
			return null;
		
		TailoredText summary = null;
		
		for(TailoredText s : list) {
			if(s.getGender() == null || user.getGender() != null && s.getGender().getId() == user.getGender().getId()) {
				if(s.getMinAge() == 0 && s.getMaxAge() == 0
						|| user.getAge() != 0 && s.getMinAge() <= user.getAge() && s.getMaxAge() >= user.getAge()) {
					summary = s;
					summary.personalize(user);
					break;
				}
			}
		}
		
		return summary;
	}
	
	/**
	 * Remove diseases that are irrelevant for current user
	 * @param drug
	 * @param user
	 * @return
	 */
	
	private Drug tailorDiseases(Drug drug, User user) {
		
		if(user == null) {
			return drug;
		}
		
		Iterator<Disease> diseases = drug.getDisease().iterator();
		while (diseases.hasNext()) {
			Disease disease = diseases.next();
	
			if(disease.getGender().size() > 0 && user.getGender() != null && !disease.getGender().contains(user.getGender())) {
	    				
	    			logger.info("Removed irrelevant disease. feature={} gender={}", disease.getName(), user.getGender());
	
	    			diseases.remove();
	    		}
		}
		
		return drug;
	}
	

	/**
	 * Remove drug features that are irrelevant for current user
	 * @param drug
	 * @param user
	 * @return
	 */
	
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
