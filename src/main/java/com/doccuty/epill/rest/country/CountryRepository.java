package com.doccuty.epill.rest.country;

import org.springframework.data.jpa.repository.JpaRepository;
import com.doccuty.epill.model.Country;

public interface CountryRepository extends JpaRepository<Country, Integer> {

}
