package com.doccuty.epill.packagingsection;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.doccuty.epill.user.UserService;
import java.util.List;

/**
 * Handle all CRUD operations for posts.
 */
@Service
public class PackagingSectionService {

    private static final Logger LOG = LoggerFactory.getLogger(PackagingSectionService.class);

    @Autowired
    PackagingSectionRepository repository;

	@Autowired
	UserService userService;

	public List<PackagingSection> getAllPackagingSections() {
		return (List<PackagingSection>) repository.findAll();
	}

	
	public PackagingSection savePackagingSection(PackagingSection gender) {
		return repository.save(gender);
	}

	public PackagingSection getPackagingSectionById(long id) {
		return repository.findOne(id);
	}

	public PackagingSection getPackagingSectionByTopicAndDrug(long topicId, long drugId) {
		PackagingSection section = repository.findOne(3L);
		return section;
	}
	
	public TailoredPackagingSection getTailoredPackagingSection(long topicId, long drugId) {
		TailoredPackagingSection section = (TailoredPackagingSection) repository.findOne(1L);
		section.setIsTailored(true);
		return section;
	}
}
