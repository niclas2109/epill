package com.doccuty.epill.util;


import org.springframework.context.annotation.Profile;
import org.springframework.stereotype.Service;

import com.doccuty.epill.util.AddressService;

/**
 * Note that this is a CONSTRUCTED example since in this particular case we would simple change the definition
 * in application.properties.
 */
@Service
@Profile("test")
public class AddressServiceTestImpl implements AddressService {
    @Override
    public String getServerURL() {
        return "foo";
    }
}
