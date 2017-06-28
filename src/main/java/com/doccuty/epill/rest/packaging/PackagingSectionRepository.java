package com.doccuty.epill.rest.packaging;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.doccuty.epill.model.PackagingSection;

@Repository
public interface PackagingSectionRepository extends JpaRepository<PackagingSection, Long> {

}
