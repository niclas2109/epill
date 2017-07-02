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
   
package com.doccuty.epill.drug;

import de.uniks.networkparser.interfaces.SendableEntity;
import java.beans.PropertyChangeSupport;
import java.util.Date;
import javax.persistence.CascadeType;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Inheritance;
import javax.persistence.InheritanceType;
import javax.persistence.OneToOne;
import javax.persistence.Table;
import javax.persistence.Temporal;
import javax.persistence.TemporalType;
import javax.persistence.Transient;

import java.beans.PropertyChangeListener;
import de.uniks.networkparser.EntityUtil;

import com.doccuty.epill.model.Image;
import com.doccuty.epill.model.ProductGroup;
   /**
    * 
    * @see <a href='../../../../../../../src/test/java/com/doccuty/epill/model/SDMLib/ModelCreator.java'>ModelCreator.java</a>
 */


@Entity  
@Table(name = "drug_simple")  
@Inheritance(strategy=InheritanceType.JOINED) 
   public  class SimpleDrug implements SendableEntity
{

	public SimpleDrug() {
	}
	
	public SimpleDrug(long id, String name, ProductGroup productGroup) {
		this.setId(id);
		this.setName(name);		
	}
	
   
   //==========================================================================
   
   protected PropertyChangeSupport listeners = null;
   
   public boolean firePropertyChange(String propertyName, Object oldValue, Object newValue)
   {
      if (listeners != null) {
   		listeners.firePropertyChange(propertyName, oldValue, newValue);
   		return true;
   	}
   	return false;
   }
   
   public boolean addPropertyChangeListener(PropertyChangeListener listener) 
   {
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

   public boolean removePropertyChangeListener(String propertyName,PropertyChangeListener listener) {
   	if (listeners != null) {
   		listeners.removePropertyChangeListener(propertyName, listener);
   	}
   	return true;
   }

   
   //==========================================================================
   
   
   public void removeYou()
   {
      firePropertyChange("REMOVE_YOU", this, null);
   }

   
   //==========================================================================
   
   public static final String PROPERTY_ID = "id";
   
   @Id
   @GeneratedValue(strategy=GenerationType.AUTO)
   private long id;

   public long getId()
   {
      return this.id;
   }
   
   public void setId(long value)
   {
      if (this.id != value) {
      
    	  long oldValue = this.id;
         this.id = value;
         this.firePropertyChange(PROPERTY_ID, oldValue, value);
      }
   }
   
   public SimpleDrug withId(long value)
   {
      setId(value);
      return this;
   } 


   @Override
   public String toString()
   {
      StringBuilder result = new StringBuilder();
      
      result.append(" ").append(this.getId());
      result.append(" ").append(this.getName());
      result.append(" ").append(this.getVersion());
      result.append(" ").append(this.getStatus());
      result.append(" ").append(this.getYear());
      return result.substring(1);
   }


   
   //==========================================================================
   
   public static final String PROPERTY_NAME = "name";
   
   @Column(unique = true)
   private String name;

   public String getName()
   {
      return this.name;
   }
   
   public void setName(String value)
   {
      if ( ! EntityUtil.stringEquals(this.name, value)) {
      
         String oldValue = this.name;
         this.name = value;
         this.firePropertyChange(PROPERTY_NAME, oldValue, value);
      }
   }
   
   public SimpleDrug withName(String value)
   {
      setName(value);
      return this;
   } 
   
   //==========================================================================
   
   public static final String PROPERTY_VERSION = "version";
   
   private String version;

   public String getVersion()
   {
      return this.version;
   }
   
   public void setVersion(String value)
   {
      if ( ! EntityUtil.stringEquals(this.version, value)) {
      
         String oldValue = this.version;
         this.version = value;
         this.firePropertyChange(PROPERTY_VERSION, oldValue, value);
      }
   }
   
   public SimpleDrug withVersion(String value)
   {
      setVersion(value);
      return this;
   }
   
   //==========================================================================
   
   public static final String PROPERTY_NUMBER = "number";
   
   private int number;

   public int getNumber()
   {
      return this.number;
   }
   
   public void setNumber(int value)
   {
      if (this.number != value) {
      
         int oldValue = this.number;
         this.number = value;
         this.firePropertyChange(PROPERTY_NUMBER, oldValue, value);
      }
   }
   
   public SimpleDrug withNumber(int value)
   {
      setNumber(value);
      return this;
   }


	// ==========================================================================

	public static final String PROPERTY_STATUS = "status";

	@Temporal(TemporalType.DATE)
	private Date status;
	
	public Date getStatus()
	{
	   return this.status;
	}
	
	public void setStatus(Date value)
	{
	   if (this.status != value) {
	   
		   Date oldValue = this.status;
	      this.status = value;
	      this.firePropertyChange(PROPERTY_STATUS, oldValue, value);
	   }
	}
	
	public SimpleDrug withStatus(Date value)
	{
	   setStatus(value);
	   return this;
	}


	// ==========================================================================

	public static final String PROPERTY_YEAR = "year";

	@Temporal(TemporalType.DATE)
	private Date year;
	
	public Date getYear()
	{
	   return this.year;
	}
	
	public void setYear(Date value)
	{
	   if (this.year != value) {
	   
	      Date oldValue = this.year;
	      this.year = value;
	      this.firePropertyChange(PROPERTY_YEAR, oldValue, value);
	   }
	}
	
	public SimpleDrug withYear(Date value)
	{
	   setYear(value);
	   return this;
	}

   //==========================================================================
   
   public static final String PROPERTY_IMAGE = "drug_image";
   
   @OneToOne(cascade = CascadeType.ALL)
   private Image image;

   public Image getImage()
   {
      return this.image;
   }
   
   public void setImage(Image value)
   {
      if (this.image != value) {
      
    	 Image oldValue = this.image;
         this.image = value;
         this.firePropertyChange(PROPERTY_IMAGE, oldValue, value);
      }
   }

   public SimpleDrug withImage(Image value)
   {
      setImage(value);
      return this;
   }
   
   
   //==========================================================================
   
   public static final String PROPERTY_PERSONALIZEDINFORMATION = "personalizedInformation";
   
   @Transient
   private String personalizedInformation;

   public String getPersonalizedInformation()
   {
      return this.personalizedInformation;
   }
   
   public void setPersonalizedInformation(String value)
   {
      if ( ! EntityUtil.stringEquals(this.personalizedInformation, value)) {
      
         String oldValue = this.personalizedInformation;
         this.personalizedInformation = value;
         this.firePropertyChange(PROPERTY_PERSONALIZEDINFORMATION, oldValue, value);
      }
   }
   
   public SimpleDrug withPersonalizedInformation(String value)
   {
      setName(value);
      return this;
   } 
}
