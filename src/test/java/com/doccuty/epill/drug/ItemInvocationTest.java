package com.doccuty.epill.drug;


import org.junit.Before;
import org.junit.Test;
import org.junit.runner.RunWith;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.test.context.junit4.SpringRunner;

import com.doccuty.epill.drug.DrugService;
import com.doccuty.epill.iteminvocation.ItemInvocation;
import com.doccuty.epill.model.util.DrugCreator;
import com.doccuty.epill.user.UserService;

import de.uniks.networkparser.Deep;
import de.uniks.networkparser.Filter;
import de.uniks.networkparser.IdMap;
import de.uniks.networkparser.json.JsonObject;

import javax.transaction.Transactional;
import java.util.List;
import static org.junit.Assert.*;

// Use Spring's testing support in JUnit
@RunWith(SpringRunner.class)
// Enable Spring features, e.g. loading of application-properties, etc.
@SpringBootTest
public class ItemInvocationTest {
    private static final Logger LOG = LoggerFactory.getLogger(ItemInvocationTest.class);

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
    public void testUserDrugTaking() {

    		List<ItemInvocation> invocations = drugService.getClicksByUserId();
    		
    		LOG.info("Current size of invocations is {}", invocations.size());
    		
	    	assertEquals("1 different medications invoced by current user", 0, invocations.size());
	    	
	}
    
    /**
     * Test that adding a new user leads to an id (and the post is thus persisted).
     */
    @Test
    @Transactional
    public void testGetDrugById() {

    		Drug drug = drugService.findDrugById(1);
    		
	    	assertNotNull("No drug found.", drug);
	    	
		IdMap map = DrugCreator.createIdMap("");
		
		/*
		 *  only works with deep filter of <= 2
		 *  4 is needed
		 */
		map.withFilter(Filter.regard(Deep.create(4)));
		
		JsonObject json = map.toJsonObject(drug);

		if(drug.getProductGroup() != null) {
			LOG.info("\nproduct group = {}\njson={}", drug.getProductGroup(), json.get("productGroup").toString());
		}

		if(drug.getIndicationGroup() != null) {
			LOG.info("\nindication group = {}\njson={}", drug.getIndicationGroup(), json.get("indicationGroup").toString());
		}
		
		assertNotNull("No product group found.", json.get("productGroup"));
		assertNotNull("No indication group found.", json.get("indicationGroup"));
	}

}
