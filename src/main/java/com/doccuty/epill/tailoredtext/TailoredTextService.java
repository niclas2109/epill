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
		
	public TailoredText getTailoredSummaryByDrugAndUser(Drug drug, User user) {

		List<TailoredText> list = repository.findByDrugAndTopicIsNull(drug);
		
		return findTailoredSummaryForUser(list, user);
	}

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
	

	public PackagingSection findTailoredPackagingSummary(Drug drug, PackagingSection section, User user) {
	
		List<TailoredText> list = repository.findByDrugAndTopic(drug, section.getTopic());
		
		TailoredText summary = findTailoredSummaryForUser(list, user);
		
		if(summary != null) {
			section.setText(summary.getText());
			section.setIsTailored(true);
		}
		
		return section;
	}
	
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
