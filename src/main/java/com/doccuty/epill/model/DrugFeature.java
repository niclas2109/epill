/*
Copyright (c) 2017 mac

Permission is hereby granted, free of charge, to any person obtaining a copy of this software 
and associated documentation files (the "Software"), to deal in the Software without restriction, 
including without limitation the rights to use, copy, modify, merge, publish, distribute, 
sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is 
furnished to do so, subject to the following conditions: 

The above copyright notice and this permission notice shall be included in all copies or 
substantial portions of the Software. 

The Software shall be used for Good, not Evil. 

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING 
BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND 
NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, 
DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, 
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE. 
*/

package com.doccuty.epill.model;

import de.uniks.networkparser.interfaces.SendableEntity;
import java.beans.PropertyChangeSupport;
import java.util.Set;

import javax.persistence.CascadeType;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.ManyToMany;
import javax.persistence.Table;
import javax.persistence.Transient;

import com.doccuty.epill.model.util.DrugSet;
import com.doccuty.epill.model.util.UserSet;
import com.doccuty.epill.user.User;

import java.beans.PropertyChangeListener;
import de.uniks.networkparser.EntityUtil;

/**
 * 
 * @see <a href=
 *      '../../../../../../../src/test/java/com/doccuty/epill/model/SDMLib/ModelCreator.java'>ModelCreator.java</a>
 */
@Entity
@Table(name = "drug_feature")
public class DrugFeature implements SendableEntity {

	
	public DrugFeature() {
		
	}
	
	public DrugFeature(long id, String drugFeature){
		this.id = id;
		this.drugFeature = drugFeature;
	}
	
	
	// ==========================================================================

	protected PropertyChangeSupport listeners = null;

	public boolean firePropertyChange(String propertyName, Object oldValue, Object newValue) {
		if (listeners != null) {
			listeners.firePropertyChange(propertyName, oldValue, newValue);
			return true;
		}
		return false;
	}

	public boolean addPropertyChangeListener(PropertyChangeListener listener) {
		if (listeners == null) {
			listeners = new PropertyChangeSupport(this);
		}
		listeners.addPropertyChangeListener(listener);
		return true;
	}

	public boolean addPropertyChangeListener(String propertyName, PropertyChangeListener listener) {
		if (listeners == null) {
			listeners = new PropertyChangeSupport(this);
		}
		listeners.addPropertyChangeListener(propertyName, listener);
		return true;
	}

	public boolean removePropertyChangeListener(PropertyChangeListener listener) {
		if (listeners == null) {
			listeners.removePropertyChangeListener(listener);
		}
		listeners.removePropertyChangeListener(listener);
		return true;
	}

	public boolean removePropertyChangeListener(String propertyName, PropertyChangeListener listener) {
		if (listeners != null) {
			listeners.removePropertyChangeListener(propertyName, listener);
		}
		return true;
	}

	// ==========================================================================

	public void removeYou() {
		firePropertyChange("REMOVE_YOU", this, null);
	}

	// ==========================================================================

	public static final String PROPERTY_ID = "id";

	@Id
	@GeneratedValue(strategy = GenerationType.AUTO)
	private long id;

	public long getId() {
		return this.id;
	}

	public void setId(long value) {
		if (this.id != value) {

			long oldValue = this.id;
			this.id = value;
			this.firePropertyChange(PROPERTY_ID, oldValue, value);
		}
	}

	public DrugFeature withId(long value) {
		setId(value);
		return this;
	}

	@Override
	public String toString() {
		StringBuilder result = new StringBuilder();

		result.append(" ").append(this.getId());
		result.append(" ").append(this.getDrugFeature());
		return result.substring(1);
	}

	// ==========================================================================

	public static final String PROPERTY_DRUGFEATURE = "drugFeature";

	private String drugFeature;

	public String getDrugFeature() {
		return this.drugFeature;
	}

	public void setDrugFeature(String value) {
		if (!EntityUtil.stringEquals(this.drugFeature, value)) {

			String oldValue = this.drugFeature;
			this.drugFeature = value;
			this.firePropertyChange(PROPERTY_DRUGFEATURE, oldValue, value);
		}
	}

	public DrugFeature withDrugFeature(String value) {
		setDrugFeature(value);
		return this;
	}
	
	
	
	   /********************************************************************
	    * <pre>
	    *              one                       many
	    * DrugFeature ----------------------------------- Drug
	    *     preferredDrugFeature                user
	    * </pre>
	    */
	   
	   public static final String PROPERTY_DRUG = "drug_feature";

	   @ManyToMany(cascade=CascadeType.ALL, mappedBy="drugFeature")
	   private Set<Drug> drug = null;
	   
	   public Set<Drug> getDrug()
	   {
	      if (this.drug == null)
	      {
	         return DrugSet.EMPTY_SET;
	      }
	   
	      return this.drug;
	   }

	   public DrugFeature withDrug(Drug... value)
	   {
	      if(value==null){
	         return this;
	      }
	      for (Drug item : value)
	      {
	         if (item != null)
	         {
	            if (this.drug == null)
	            {
	               this.drug = new DrugSet();
	            }
	            
	            boolean changed = this.drug.add (item);

	            if (changed)
	            {
	               item.withDrugFeature(this);
	               firePropertyChange(PROPERTY_DRUGFEATURE, null, item);
	            }
	         }
	      }
	      return this;
	   } 

	   public DrugFeature withoutDrug(Drug... value)
	   {
	      for (Drug item : value)
	      {
	         if ((this.drug != null) && (item != null))
	         {
	            if (this.drug.remove(item))
	            {
	               item.withoutDrugFeaturee(this);
	               firePropertyChange(PROPERTY_DRUGFEATURE, item, null);
	            }
	         }
	      }
	      return this;
	   }

	   public Drug createDrug()
	   {
	      Drug value = new Drug();
	      withDrug(value);
	      return value;
	   }
		
		
		
	   /********************************************************************
	    * <pre>
	    *              one                       many
	    * DrugFeature ----------------------------------- User
	    *              country                   user
	    * </pre>
	    */
	   
	   public static final String PROPERTY_USER = "user";

	   @ManyToMany(cascade=CascadeType.ALL, mappedBy="preferredDrugFeature")
	   private Set<User> user = null;
	   
	   public Set<User> getUser()
	   {
	      if (this.user == null)
	      {
	         return UserSet.EMPTY_SET;
	      }
	   
	      return this.user;
	   }

	   public DrugFeature withUser(User... value)
	   {
	      if(value==null){
	         return this;
	      }
	      for (User item : value)
	      {
	         if (item != null)
	         {
	            if (this.user == null)
	            {
	               this.user = new UserSet();
	            }
	            
	            boolean changed = this.user.add (item);

	            if (changed)
	            {
	               item.withPreferredDrugFeature(this);
	               firePropertyChange(PROPERTY_USER, null, item);
	            }
	         }
	      }
	      return this;
	   } 

	   public DrugFeature withoutUser(User... value)
	   {
	      for (User item : value)
	      {
	         if ((this.drug != null) && (item != null))
	         {
	            if (this.drug.remove(item))
	            {
	               item.withoutPreferredDrugFeature(this);
	               firePropertyChange(PROPERTY_USER, item, null);
	            }
	         }
	      }
	      return this;
	   }

	   public User createUser()
	   {
	      User value = new User();
	      withUser(value);
	      return value;
	   } 
}
