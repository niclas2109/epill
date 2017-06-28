package com.doccuty.epill.rest.disease;

import org.springframework.data.jpa.repository.JpaRepository;

import com.doccuty.epill.model.Disease;

public interface DiseaseRepository extends JpaRepository<Disease, Long> {

}
