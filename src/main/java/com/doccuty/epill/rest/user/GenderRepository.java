package com.doccuty.epill.rest.user;

import org.springframework.data.jpa.repository.JpaRepository;
import com.doccuty.epill.model.Gender;

public interface GenderRepository extends JpaRepository<Gender, Integer> {

}
