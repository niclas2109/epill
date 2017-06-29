package com.doccuty.epill.user;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.stereotype.Service;

import com.doccuty.epill.authentication.AuthenticationService;
import com.doccuty.epill.country.CountryRepository;
import com.doccuty.epill.drug.DrugRepository;
import com.doccuty.epill.gender.GenderRepository;
import com.doccuty.epill.language.Language;
import com.doccuty.epill.language.LanguageRepository;
import com.doccuty.epill.model.Country;
import com.doccuty.epill.model.Drug;
import com.doccuty.epill.model.DrugFeature;
import com.doccuty.epill.model.Gender;
import com.doccuty.epill.model.PackagingTopic;
import com.doccuty.epill.model.ItemInvocation;

import java.util.List;

import java.security.SecureRandom;

/**
 * Handle all CRUD operations for posts.
 */
@Service
public class UserService {

    private static final Logger LOG = LoggerFactory.getLogger(UserService.class);

	@Autowired
	UserRepository repository;

	@Autowired
	DrugRepository drugRepository;
	
	@Autowired
	LanguageRepository languageRepository;
	
	@Autowired
	CountryRepository countryRepository;
	
	@Autowired
	GenderRepository genderRepository;
	
	
	
	@Autowired
	AuthenticationService authenticationService;

	public List<User> getAllUsers() {
		return (List<User>) repository.findAll();
	}

	public User findByUsername(String username) {
		return repository.findByUsername(username);
	}

	
	public User saveUser(User user) {

		SecureRandom random = new SecureRandom();
		byte[] randomByte = new byte[30];
		random.nextBytes(randomByte);

		String salt = randomByte.toString();
		String encryptedPassword = authenticationService.hashPassword(salt, user.getPassword());
		user.withPassword(encryptedPassword)
			.withSalt(salt);

		user = repository.save(user);
		
		return user;
	}

	public User updateUserSettings(User usr) {
		
		User user = repository.findOne(getCurrentUser().getId());
		
		if(user == null)
			return null;
		
		/*
		 * update preferred font size and level of detail 
		 */
		
		user.withPreferredFontSize(usr.getPreferredFontSize())
			.withLevelOfDetail(usr.getLevelOfDetail());
		
		
		/*
		 * update preferred packaging topics
		 */
		
		user.getPreferredPackagingTopic().clear();
		
		for(PackagingTopic value : usr.getPreferredPackagingTopic()) {
			user.withPreferredPackagingTopic(value);
		}

		/*
		 * update preferred drug features
		 */
		
		user.getPreferredDrugFeature().clear();

		for(DrugFeature value : usr.getPreferredDrugFeature()) {
			user.withPreferredDrugFeature(value);
		}
		
		user = repository.save(user);
		
		return user;
	}

	public User updateUserData(User usr) {
		
		User user = repository.findOne(getCurrentUser().getId());
		
		if(user == null)
			return null;

		user.withFirstname(usr.getFirstname())
			.withLastname(usr.getLastname())
			.withUsername(usr.getUsername())
			.withDateOfBirth(usr.getDateOfBirth());
		


		Language language = null;
		if(usr.getLanguage() != null)
			language = languageRepository.findOne(usr.getLanguage().getId());
		user.withLanguage(language);

		Country country = null;
		if(usr.getCountry() != null)
			country = countryRepository.findOne(usr.getCountry().getId());
		user.withCountry(country);
		
		Gender gender = null;
		if(usr.getGender() != null)
			gender = genderRepository.findOne(usr.getGender().getId());
		
		user.withGender(gender);
		
		user = repository.save(user);
		
		return user;
	}

	public User updateUserPassword(User usr) {
		
		User user = repository.findOne(getCurrentUser().getId());
		
		if(user == null)
			return null;

		SecureRandom random = new SecureRandom();
		byte[] salt = new byte[20];
		random.nextBytes(salt);

		String encryptedPassword = authenticationService.hashPassword(salt.toString(), user.getPassword());
		user.withPassword(encryptedPassword).withSalt(salt.toString());
		
		user = repository.save(user);
		
		return user;
	}

	public User getUserById(long id) {
		User user = repository.findOne(id);
		return user;
	}
	

	public SimpleUser getSimpleUserById(long id) {
		SimpleUser user = repository.findOneSimple(id);
		return user;
	}
	

	public boolean deleteUser(long id) {
		repository.delete(id);
		return true;
	}
	

	public boolean deleteCurrentUser() {
		User user = getCurrentUser();
		
		if(user == null)
			return false;
		
		repository.delete(user.getId());
		return true;
	}

    /**
     * Sets the current user to anonymous.
     */
    public void setAnonymous() {
        setCurrentUser(-1L, "<anonymous>");
    }


    /**
     * Check if the current user is not authenticated.
     *
     * @return true if the user is not authenticated.
     */
    public boolean isAnonymous() {
        return getCurrentUser().getId() == -1L;
    }


    /**
     * Retrieve the currently active user or null, if no user is logged in.
     *
     * @return the current user.
     */
    public User getCurrentUser() {
        return (User) SecurityContextHolder.getContext().getAuthentication().getPrincipal();
    }

    /**
     * Set a user for the current request.
     *
     * @param id    user id
     * @param email user email
     */
    public void setCurrentUser(Long id, String email) {
        User user = new User();
        user.setId(id);
        user.setEmail(email);
        UsernamePasswordAuthenticationToken secAuth = new UsernamePasswordAuthenticationToken(user, null);
        SecurityContextHolder.getContext().setAuthentication(secAuth);
    }

    
    
    /**
     * get a list of all gender in database
     * @return List<Gender>
     */
    
	public List<Gender> getAllGender() {
		return genderRepository.findAll();
	}

	
	
	/**
	 * add a drug to user favorites
	 * @param drug
	 * @param user
	 */
	
	public boolean addDrugToUserFavorites(Drug drug) {

		drug = drugRepository.findOne(drug.getId());

		if(drug == null)
			return false;
		
		User user = repository.findOne(getCurrentUser().getId());
		if(user == null)
			return false;
		
		user.withPreferredDrug(drug);

		repository.save(user);
		
		return true;
	}
	
	
	/**
	 * remove a drug from user favorites
	 * @param drug
	 * @param user
	 */
	
	public boolean removeDrugFromUserFavorites(Drug drug) {

		drug = drugRepository.findOne(drug.getId());

		
		if(drug == null)
			return false;
		
		User user = repository.findOne(getCurrentUser().getId());
		user.withoutPreferredDrug(drug);

		repository.save(user);
		
		return true;
	}

	
	public User saveItemInvocation(ItemInvocation click) {
		User user = repository.findOne(click.getUser().getId());
		
		if(user == null)
			return null;
		
		click.setUser(user);
		
		return repository.save(user);
	}
	
}
