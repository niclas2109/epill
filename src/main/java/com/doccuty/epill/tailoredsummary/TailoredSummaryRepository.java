package com.doccuty.epill.tailoredsummary;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import com.doccuty.epill.drug.Drug;
import com.doccuty.epill.model.PackagingTopic;

public interface TailoredSummaryRepository extends JpaRepository<TailoredSummary,Long> {
	
	List<TailoredSummary> findByDrugAndTopicIsNull(Drug drug);
	
	List<TailoredSummary> findByDrugAndTopic(Drug drug, PackagingTopic topic);
}
