package com.doccuty.epill.disease;

import org.springframework.data.jpa.repository.JpaRepository;

import com.doccuty.epill.model.Disease;

public interface DiseaseRepository extends JpaRepository<Disease, Long> {

}
