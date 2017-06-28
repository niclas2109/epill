package com.doccuty.epill.post;


import org.junit.Before;
import org.junit.Test;
import org.junit.runner.RunWith;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.test.context.junit4.SpringRunner;

import com.doccuty.epill.rest.drug.DrugService;
import com.doccuty.epill.rest.user.UserService;

import javax.transaction.Transactional;
import java.util.Iterator;
import java.util.UUID;

import static org.junit.Assert.*;

// Use Spring's testing support in JUnit
@RunWith(SpringRunner.class)
// Enable Spring features, e.g. loading of application-properties, etc.
@SpringBootTest
public class PostServiceTest {
    private static final Logger LOG = LoggerFactory.getLogger(PostServiceTest.class);

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
     * Test that adding a new post leads to an id (and the post is thus persisted).
     */
    @Test
    @Transactional
    public void testPostAdd() {


    }

}
