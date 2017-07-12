package com.doccuty.epill.tailoredtext;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.doccuty.epill.drug.Drug;
import com.doccuty.epill.model.PackagingTopic;
import com.doccuty.epill.packagingsection.PackagingSection;
import com.doccuty.epill.user.User;

@Service
public class TailoredTextService {

	@Autowired
	TailoredTextRepository repository;
	
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
}
