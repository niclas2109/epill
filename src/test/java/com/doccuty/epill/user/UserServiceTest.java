package com.doccuty.epill.user;


import org.junit.Before;
import org.junit.Test;
import org.junit.runner.RunWith;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.test.context.junit4.SpringRunner;

import com.doccuty.epill.drug.Drug;
import com.doccuty.epill.drug.DrugService;
import com.doccuty.epill.user.UserService;

import javax.transaction.Transactional;
import java.util.Iterator;
import java.util.UUID;

import static org.junit.Assert.*;

// Use Spring's testing support in JUnit
@RunWith(SpringRunner.class)
// Enable Spring features, e.g. loading of application-properties, etc.
@SpringBootTest
public class UserServiceTest {
    private static final Logger LOG = LoggerFactory.getLogger(UserServiceTest.class);

    @Autowired
    private DrugService drugService;

    @Autowired
    private UserService userService;

    @Before
    public void setup() {
        userService.setCurrentUser(1L, "Niclas");
    }

    /**
     * Test that dependency injection works.
     */
    @Test
    public void notNull() {
        assertNotNull("We should have an instance of drugService", drugService);
        assertNotNull("We should have an instance of userService", userService);
    }


    /**
     * Test that adding a new user leads to an id (and the post is thus persisted).
     */
    @Test
    @Transactional
    public void testUserSave() {
	    	
	    	String username = "peterle";
	    	
	    	User user = new User();
	    	user.withFirstname("Peter")
	    		.withLastname("Mustermann")
	    		.withUsername("peterle")
	    		.withPassword("password")
	    		.withEmail("test@test.de");
	
	    	assertEquals("User has no id", user.getId(), 0);
	    	
	    	user = userService.saveUser(user);
	    	
	    	assertNotNull("User has id", user.getId());
	
	    	user = userService.getUserById(user.getId());
	
	    	assertNotNull("User found by id", user);
	
	    	user = userService.findByUsername(username);
	
	    	assertNotNull("User found by username", user);
	    	
	}
    
    /**
     * Test that adding a new user leads to an id (and the post is thus persisted).
     */
    @Test
    @Transactional
    public void testUserDrugTaking() {
	    	
	    	String username = "peterle";
	    	
	    	User user = new User();
	    	user.withFirstname("Peter")
	    		.withLastname("Mustermann")
	    		.withUsername("peterle121")
	    		.withPassword("password")
	    		.withEmail("test@test.de");
	

	    	Drug drug = new Drug();
	    	drug.withName("example");

	    	
	    	assertEquals("User takes drugs", user.getTakingDrug().size(), 0);
	    	
	    	user.withTakingDrug(drug);
	    	user = userService.saveUser(user);

	    	user = userService.getUserById(user.getId());
	    	
	    	assertEquals("User takes drugs", user.getTakingDrug().size(), 1);
	    	
	}

}
