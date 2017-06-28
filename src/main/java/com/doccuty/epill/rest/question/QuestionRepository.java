package com.doccuty.epill.rest.question;

import org.springframework.data.jpa.repository.JpaRepository;
import com.doccuty.epill.model.Question;

public interface QuestionRepository extends JpaRepository<Question, Long> {

}
