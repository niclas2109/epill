package com.doccuty.epill.interfaces;

import com.doccuty.epill.model.User;

public interface Personalize {

	public static String SIMPLE_FIRSTNAME	= "%firstname%";
	public static String SIMPLE_LASTNAME	= "%lastname%";
	public static String SIMPLE_EMAIL		= "%email%";
	
	public void replaceTokens(User user);
}
