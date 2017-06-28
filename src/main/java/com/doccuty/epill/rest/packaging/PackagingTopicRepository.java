package com.doccuty.epill.rest.packaging;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import com.doccuty.epill.model.PackagingTopic;

@Repository
public interface PackagingTopicRepository extends JpaRepository<PackagingTopic, Integer> {

	@Query("SELECT topic FROM PackagingTopic topic WHERE topic.title LIKE :value")
	PackagingTopic findByName(@Param(value = "value") String value);
}
