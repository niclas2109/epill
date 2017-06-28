package com.doccuty.epill.user;

import org.springframework.data.jpa.repository.JpaRepository;
import com.doccuty.epill.model.Gender;

public interface GenderRepository extends JpaRepository<Gender, Integer> {

}
