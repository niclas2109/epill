package com.doccuty.epill.iteminvocation;

import java.util.List;

import javax.transaction.Transactional;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import com.doccuty.epill.user.User;

@Repository
@Transactional
public interface ItemInvocationRepository extends JpaRepository<ItemInvocation, Long> {

	List<ItemInvocation> findDistinctTop5ByUserOrderByTimestampDesc(User user);
	
	@Query("SELECT i FROM ItemInvocation i JOIN i.drug d WHERE i.user = :user GROUP BY i.drug, i.id ORDER BY i.id DESC")
	List<ItemInvocation> findLastInvocedDrugs(@Param("user") User user);
}
