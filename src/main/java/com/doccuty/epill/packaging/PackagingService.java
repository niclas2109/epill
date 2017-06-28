package com.doccuty.epill.packaging;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.doccuty.epill.model.PackagingSection;
import com.doccuty.epill.model.PackagingTopic;

import java.util.List;

/**
 * Handle all CRUD operations for posts.
 */
@Service
public class PackagingService {

	@Autowired
	PackagingSectionRepository sectionRepository;

	@Autowired
	PackagingTopicRepository topicRepository;

	public List<PackagingSection> getAllPackagingSections() {
		return sectionRepository.findAll();
	}

	public PackagingSection savePackagingSection(PackagingSection packagingSection) {

		return sectionRepository.save(packagingSection);
	}

	public boolean updatePackagingSection(PackagingSection user) {
		//repository.update(packagingSection);

		return true;
	}

	public PackagingSection getPackagingSectionById(long id, String lang) {
		PackagingSection user = sectionRepository.findOne(id);
		return user;
	}

	public List<PackagingTopic> getAllPackagingTopics() {
		return topicRepository.findAll();
	}

}
