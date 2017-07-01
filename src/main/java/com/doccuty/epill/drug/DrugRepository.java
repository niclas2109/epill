package com.doccuty.epill.drug;

import java.util.List;

import javax.transaction.Transactional;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import com.doccuty.epill.model.Drug;

@Repository
@Transactional
public interface DrugRepository extends JpaRepository<Drug, Long> {

	@Query("SELECT drug FROM Drug drug ORDER BY drug.name")
	List<Drug> findAllOrderByName();
	
	@Query("SELECT drug FROM Drug drug WHERE drug.name LIKE %:value%")
	List<Drug> findByName(@Param(value = "value") String value);
	
	@Query("SELECT NEW SimpleDrug(drug.id, drug.name, drug.productGroup) "
			+ "FROM Drug drug WHERE drug.name LIKE %:value%")
	List<Drug> findByNameMinimized(@Param(value = "value") String value);

	@Query("SELECT drug FROM Drug drug WHERE drug.id = :id")
	List<Drug> findUserDrugsTaking(@Param(value = "id") long id);

	@Query("SELECT drug FROM Drug drug WHERE drug.id = :id")
	List<Drug> findUserDrugsRemembered(@Param(value = "id") long id);
}
