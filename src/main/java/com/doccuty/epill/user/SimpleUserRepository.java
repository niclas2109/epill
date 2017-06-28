package com.doccuty.epill.user;

import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import com.doccuty.epill.model.SimpleUser;

@Repository
public interface SimpleUserRepository<T extends SimpleUser> extends CrudRepository<T, Long> {
	
	@Query("SELECT u FROM SimpleUser u WHERE u.username LIKE :username")
	T findByUsername(@Param(value = "username") String username);

    @Query("SELECT u FROM SimpleUser u WHERE u.email = :email")
    T findByEmail(@Param("email") String email);
    
    @Query("SELECT new SimpleUser(u.id, u.firstname, u.lastname) FROM SimpleUser u WHERE u.id = :id")
	T findOneSimple(@Param("id") long id);
}
