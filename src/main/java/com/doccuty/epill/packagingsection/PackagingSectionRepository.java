package com.doccuty.epill.packagingsection;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface PackagingSectionRepository extends JpaRepository<PackagingSection, Long> {

}
