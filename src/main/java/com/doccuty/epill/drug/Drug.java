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

import java.util.Set;

import javax.persistence.CascadeType;
import javax.persistence.Entity;
import javax.persistence.JoinColumn;
import javax.persistence.JoinTable;
import javax.persistence.ManyToMany;
import javax.persistence.ManyToOne;
import javax.persistence.OneToMany;
import javax.persistence.Table;
import javax.persistence.Transient;

import com.doccuty.epill.model.util.PackagingSectionSet;
import com.doccuty.epill.model.util.PackagingSet;
import com.doccuty.epill.model.PackagingSection;
import com.doccuty.epill.model.util.ActiveSubstanceSet;
import com.doccuty.epill.model.ActiveSubstance;
import com.doccuty.epill.model.ProductGroup;
import com.doccuty.epill.model.IndicationGroup;
import com.doccuty.epill.model.util.PharmaceuticalFormSet;
import com.doccuty.epill.model.PharmaceuticalForm;
import com.doccuty.epill.model.util.AdverseEffectSet;
import com.doccuty.epill.model.AdverseEffect;
import com.doccuty.epill.model.util.InteractionSet;
import com.doccuty.epill.model.Interaction;
import com.doccuty.epill.model.util.ItemInvocationSet;
import com.doccuty.epill.model.util.UserSet;
import com.doccuty.epill.user.User;
import com.doccuty.epill.model.ItemInvocation;
import com.doccuty.epill.model.Packaging;
import com.doccuty.epill.model.util.DiseaseSet;
import com.doccuty.epill.model.util.DrugFeatureSet;
import com.doccuty.epill.model.util.DrugSet;
import com.doccuty.epill.model.Disease;
import com.doccuty.epill.model.DrugFeature;

@Entity  
@Table(name = "drug")  
   public class Drug extends SimpleDrug
{

	@Override
	public void removeYou() {
		withoutPackagingSection(
				this.getPackagingSection().toArray(new PackagingSection[this.getPackagingSection().size()]));
		withoutActiveSubstance(
				this.getActiveSubstance().toArray(new ActiveSubstance[this.getActiveSubstance().size()]));
		setProductGroup(null);
		setIndicationGroup(null);
		withoutPharmaceuticalForm(
				this.getPharmaceuticalForm().toArray(new PharmaceuticalForm[this.getPharmaceuticalForm().size()]));
		withoutAdverseEffects(this.getAdverseEffects().toArray(new AdverseEffect[this.getAdverseEffects().size()]));
		withoutInteraction(this.getInteraction().toArray(new Interaction[this.getInteraction().size()]));
		withoutClicks(this.getClicks().toArray(new ItemInvocation[this.getClicks().size()]));
		withoutDisease(this.getDisease().toArray(new Disease[this.getDisease().size()]));
		firePropertyChange("REMOVE_YOU", this, null);
	}


	public Drug() {
		super();
	}
	

   /********************************************************************
    * <pre>
    *              one                       many
    * Drug ----------------------------------- Packaging
    *              drug                   	packaging
    * </pre>
    */
   
   public static final String PROPERTY_PACKAGING = "packaging";

   @OneToMany(cascade=CascadeType.ALL, mappedBy="drug")
   private Set<Packaging> packaging = null;

   public Set<Packaging> getPackaging()
   {
      if (this.packaging == null)
      {
         return PackagingSet.EMPTY_SET;
      }
   
      return this.packaging;
   }

   public Drug withPackaging(Packaging... value)
   {
      if(value==null){
         return this;
      }
      for (Packaging item : value)
      {
         if (item != null)
         {
            if (this.packaging == null)
            {
               this.packaging = new PackagingSet();
            }
            
            boolean changed = this.packaging.add(item);

            if (changed)
            {
               item.withDrug(this);
               firePropertyChange(PROPERTY_PACKAGING, null, item);
            }
         }
      }
      return this;
   } 

   public Drug withoutPackaging(Packaging... value)
   {
      for (Packaging item : value)
      {
         if ((this.packaging != null) && (item != null))
         {
            if (this.packaging.remove(item))
            {
               item.setDrug(null);
               firePropertyChange(PROPERTY_PACKAGING, item, null);
            }
         }
      }
      return this;
   }

   public Packaging createPackage()
   {
	   Packaging value = new Packaging();
	   withPackaging(value);
	   return value;
   } 

   
   /********************************************************************
    * <pre>
    *              one                       many
    * Drug ----------------------------------- PackagingSection
    *              drug                   packagingSection
    * </pre>
    */
   
   public static final String PROPERTY_PACKAGINGSECTION = "packagingSection";

   @OneToMany(cascade=CascadeType.ALL, mappedBy="drug")
   private Set<PackagingSection> packagingSection = null;

   public Set<PackagingSection> getPackagingSection()
   {
      if (this.packagingSection == null)
      {
         return PackagingSectionSet.EMPTY_SET;
      }
   
      return this.packagingSection;
   }

   public Drug withPackagingSection(PackagingSection... value)
   {
      if(value==null){
         return this;
      }
      for (PackagingSection item : value)
      {
         if (item != null)
         {
            if (this.packagingSection == null)
            {
               this.packagingSection = new PackagingSectionSet();
            }
            
            boolean changed = this.packagingSection.add (item);

            if (changed)
            {
               item.withDrug(this);
               firePropertyChange(PROPERTY_PACKAGINGSECTION, null, item);
            }
         }
      }
      return this;
   } 

   public Drug withoutPackagingSection(PackagingSection... value)
   {
      for (PackagingSection item : value)
      {
         if ((this.packagingSection != null) && (item != null))
         {
            if (this.packagingSection.remove(item))
            {
               item.setDrug(null);
               firePropertyChange(PROPERTY_PACKAGINGSECTION, item, null);
            }
         }
      }
      return this;
   }

   public PackagingSection createPackagingSection()
   {
      PackagingSection value = new PackagingSection();
      withPackagingSection(value);
      return value;
   } 

   
   /********************************************************************
    * <pre>
    *              many                       many
    * Drug ----------------------------------- Drug
    *              drug                   	drugFeature
    * </pre>
    */
   
   public static final String PROPERTY_DRUGFEATURE = "drugFeature";

   @ManyToMany(cascade=CascadeType.MERGE)
   @JoinTable(name="drug_drug_feature", joinColumns=@JoinColumn(name="iddrug"), inverseJoinColumns=@JoinColumn(name="iddrug_feature"))
   private Set<DrugFeature> drugFeature = null;

   public Set<DrugFeature> getDrugFeature()
   {
      if (this.drugFeature == null)
      {
         return DrugFeatureSet.EMPTY_SET;
      }
   
      return this.drugFeature;
   }

   public Drug withDrugFeature(DrugFeature... value)
   {
      if(value==null){
         return this;
      }
      for (DrugFeature item : value)
      {
         if (item != null)
         {
            if (this.drugFeature == null)
            {
               this.drugFeature = new DrugFeatureSet();
            }
            
            boolean changed = this.drugFeature.add(item);

            if (changed)
            {
               item.withDrug(this);
               firePropertyChange(PROPERTY_ACTIVESUBSTANCE, null, item);
            }
         }
      }
      return this;
   } 

   public Drug withoutDrugFeaturee(DrugFeature... value)
   {
      for (DrugFeature item : value)
      {
         if ((this.drugFeature != null) && (item != null))
         {
            if (this.drugFeature.remove(item))
            {
               item.withoutDrug(this);
               firePropertyChange(PROPERTY_ACTIVESUBSTANCE, item, null);
            }
         }
      }
      return this;
   }

   public DrugFeature createDrugFeature()
   {
	  DrugFeature value = new DrugFeature();
      withDrugFeature(value);
      return value;
   } 
   
   /********************************************************************
    * <pre>
    *              many                       many
    * Drug ----------------------------------- ActiveSubstance
    *              drug                   activeSubstance
    * </pre>
    */
   
   public static final String PROPERTY_ACTIVESUBSTANCE = "activeSubstance";

   @ManyToMany(cascade=CascadeType.ALL)
   @JoinTable(name="drug_active_substance", joinColumns=@JoinColumn(name="iddrug"), inverseJoinColumns=@JoinColumn(name="idactive_substance"))
   private Set<ActiveSubstance> activeSubstance = null;

   public Set<ActiveSubstance> getActiveSubstance()
   {
      if (this.activeSubstance == null)
      {
         return ActiveSubstanceSet.EMPTY_SET;
      }
   
      return this.activeSubstance;
   }

   public Drug withActiveSubstance(ActiveSubstance... value)
   {
      if(value==null){
         return this;
      }
      for (ActiveSubstance item : value)
      {
         if (item != null)
         {
            if (this.activeSubstance == null)
            {
               this.activeSubstance = new ActiveSubstanceSet();
            }
            
            boolean changed = this.activeSubstance.add (item);

            if (changed)
            {
               item.withDrug(this);
               firePropertyChange(PROPERTY_ACTIVESUBSTANCE, null, item);
            }
         }
      }
      return this;
   } 

   public Drug withoutActiveSubstance(ActiveSubstance... value)
   {
      for (ActiveSubstance item : value)
      {
         if ((this.activeSubstance != null) && (item != null))
         {
            if (this.activeSubstance.remove(item))
            {
               item.withoutDrug(this);
               firePropertyChange(PROPERTY_ACTIVESUBSTANCE, item, null);
            }
         }
      }
      return this;
   }

   public ActiveSubstance createActiveSubstance()
   {
      ActiveSubstance value = new ActiveSubstance();
      withActiveSubstance(value);
      return value;
   } 

   
   /********************************************************************
    * <pre>
    *              many                       one
    * Drug ----------------------------------- ProductGroup
    *              drug                   productGroup
    * </pre>
    */
   
   public static final String PROPERTY_PRODUCTGROUP = "productGroup";

   @ManyToOne(cascade=CascadeType.ALL)
   @JoinColumn(name="idproduct_group")
   private ProductGroup productGroup = null;

   public ProductGroup getProductGroup()
   {
      return this.productGroup;
   }

   public boolean setProductGroup(ProductGroup value)
   {
      boolean changed = false;
      
      if (this.productGroup != value)
      {
         ProductGroup oldValue = this.productGroup;
         
         if (this.productGroup != null)
         {
            this.productGroup = null;
            oldValue.withoutDrug(this);
         }
         
         this.productGroup = value;
         
         if (value != null)
         {
            value.withDrug(this);
         }
         
         firePropertyChange(PROPERTY_PRODUCTGROUP, oldValue, value);
         changed = true;
      }
      
      return changed;
   }

   public Drug withProductGroup(ProductGroup value)
   {
      setProductGroup(value);
      return this;
   } 

   public ProductGroup createProductGroup()
   {
      ProductGroup value = new ProductGroup();
      withProductGroup(value);
      return value;
   } 

   
   /********************************************************************
    * <pre>
    *              many                       one
    * Drug ----------------------------------- IndicationGroup
    *              drug                   indicationGroup
    * </pre>
    */
   
   public static final String PROPERTY_INDICATIONGROUP = "indicationGroup";

   @ManyToOne(cascade=CascadeType.ALL)
   @JoinColumn(name="idindication_group")
   private IndicationGroup indicationGroup = null;

   public IndicationGroup getIndicationGroup()
   {
      return this.indicationGroup;
   }

   public boolean setIndicationGroup(IndicationGroup value)
   {
      boolean changed = false;
      
      if (this.indicationGroup != value)
      {
         IndicationGroup oldValue = this.indicationGroup;
         
         if (this.indicationGroup != null)
         {
            this.indicationGroup = null;
            oldValue.withoutDrug(this);
         }
         
         this.indicationGroup = value;
         
         if (value != null)
         {
            value.withDrug(this);
         }
         
         firePropertyChange(PROPERTY_INDICATIONGROUP, oldValue, value);
         changed = true;
      }
      
      return changed;
   }

   public Drug withIndicationGroup(IndicationGroup value)
   {
      setIndicationGroup(value);
      return this;
   } 

   public IndicationGroup createIndicationGroup()
   {
      IndicationGroup value = new IndicationGroup();
      withIndicationGroup(value);
      return value;
   } 

   
   /********************************************************************
    * <pre>
    *              many                       many
    * Drug ----------------------------------- PharmaceuticalForm
    *              drug                   pharmaceuticalForm
    * </pre>
    */
   
   public static final String PROPERTY_PHARMACEUTICALFORM = "pharmaceuticalForm";

   @ManyToMany(cascade=CascadeType.MERGE) 
   @JoinTable(name="drug_pharmaceutical_form", joinColumns=@JoinColumn(name="iddrug"), inverseJoinColumns=@JoinColumn(name="idpharmaceutical_form"))
   private Set<PharmaceuticalForm> pharmaceuticalForm = null;

   public Set<PharmaceuticalForm> getPharmaceuticalForm()
   {
      if (this.pharmaceuticalForm == null)
      {
         return PharmaceuticalFormSet.EMPTY_SET;
      }
   
      return this.pharmaceuticalForm;
   }

   public Drug withPharmaceuticalForm(PharmaceuticalForm... value)
   {
      if(value==null){
         return this;
      }
      for (PharmaceuticalForm item : value)
      {
         if (item != null)
         {
            if (this.pharmaceuticalForm == null)
            {
               this.pharmaceuticalForm = new PharmaceuticalFormSet();
            }
            
            boolean changed = this.pharmaceuticalForm.add (item);

            if (changed)
            {
               item.withDrug(this);
               firePropertyChange(PROPERTY_PHARMACEUTICALFORM, null, item);
            }
         }
      }
      return this;
   } 

   public Drug withoutPharmaceuticalForm(PharmaceuticalForm... value)
   {
      for (PharmaceuticalForm item : value)
      {
         if ((this.pharmaceuticalForm != null) && (item != null))
         {
            if (this.pharmaceuticalForm.remove(item))
            {
               item.withoutDrug(this);
               firePropertyChange(PROPERTY_PHARMACEUTICALFORM, item, null);
            }
         }
      }
      return this;
   }

   public PharmaceuticalForm createPharmaceuticalForm()
   {
      PharmaceuticalForm value = new PharmaceuticalForm();
      withPharmaceuticalForm(value);
      return value;
   } 

   
   /********************************************************************
    * <pre>
    *              many                       many
    * Drug ----------------------------------- AdverseEffect
    *              drug                   adverseEffects
    * </pre>
    */
   
   public static final String PROPERTY_ADVERSEEFFECTS = "adverseEffects";

   @ManyToMany(cascade=CascadeType.ALL)
   @JoinTable(name="drug_adverse_effect", joinColumns=@JoinColumn(name="iddrug"), inverseJoinColumns=@JoinColumn(name="idadverse_effect"))
   private Set<AdverseEffect> adverseEffects = null;

   public Set<AdverseEffect> getAdverseEffects()
   {
      if (this.adverseEffects == null)
      {
         return AdverseEffectSet.EMPTY_SET;
      }
   
      return this.adverseEffects;
   }

   public Drug withAdverseEffects(AdverseEffect... value)
   {
      if(value==null){
         return this;
      }
      for (AdverseEffect item : value)
      {
         if (item != null)
         {
            if (this.adverseEffects == null)
            {
               this.adverseEffects = new AdverseEffectSet();
            }
            
            boolean changed = this.adverseEffects.add (item);

            if (changed)
            {
               item.withDrug(this);
               firePropertyChange(PROPERTY_ADVERSEEFFECTS, null, item);
            }
         }
      }
      return this;
   } 

   public Drug withoutAdverseEffects(AdverseEffect... value)
   {
      for (AdverseEffect item : value)
      {
         if ((this.adverseEffects != null) && (item != null))
         {
            if (this.adverseEffects.remove(item))
            {
               item.withoutDrug(this);
               firePropertyChange(PROPERTY_ADVERSEEFFECTS, item, null);
            }
         }
      }
      return this;
   }

   public AdverseEffect createAdverseEffects()
   {
      AdverseEffect value = new AdverseEffect();
      withAdverseEffects(value);
      return value;
   } 

   
   /********************************************************************
    * <pre>
    *              one                       many
    * Drug ----------------------------------- Interaction
    *              drug                   interaction
    * </pre>
    */
   
   public static final String PROPERTY_INTERACTION = "interaction";

   @ManyToMany(cascade=CascadeType.ALL, mappedBy="drug")
   private Set<Interaction> interaction = null;

   public Set<Interaction> getInteraction()
   {
      if (this.interaction == null)
      {
         return InteractionSet.EMPTY_SET;
      }
   
      return this.interaction;
   }

   public Drug withInteraction(Interaction... value)
   {
      if(value==null){
         return this;
      }
      for (Interaction item : value)
      {
         if (item != null)
         {
            if (this.interaction == null)
            {
               this.interaction = new InteractionSet();
            }
            
            boolean changed = this.interaction.add (item);

            if (changed)
            {
               item.withDrug(this);
               firePropertyChange(PROPERTY_INTERACTION, null, item);
            }
         }
      }
      return this;
   } 

   public Drug withoutInteraction(Interaction... value)
   {
      for (Interaction item : value)
      {
         if ((this.interaction != null) && (item != null))
         {
            if (this.interaction.remove(item))
            {
               item.withoutDrug(this);
               firePropertyChange(PROPERTY_INTERACTION, item, null);
            }
         }
      }
      return this;
   }

   public Interaction createInteraction()
   {
      Interaction value = new Interaction();
      withInteraction(value);
      return value;
   } 

   
   /********************************************************************
    * <pre>
    *              one                       many
    * Drug ----------------------------------- ItemInvocation
    *              drug                   clicks
    * </pre>
    */
   
   public static final String PROPERTY_CLICKS = "clicks";

   @OneToMany(cascade=CascadeType.ALL, mappedBy="drug")
   private Set<ItemInvocation> clicks = null;

   public Set<ItemInvocation> getClicks()
   {
      if (this.clicks == null)
      {
         return ItemInvocationSet.EMPTY_SET;
      }
   
      return this.clicks;
   }

   public Drug withClicks(ItemInvocation... value)
   {
      if(value==null){
         return this;
      }
      for (ItemInvocation item : value)
      {
         if (item != null)
         {
            if (this.clicks == null)
            {
               this.clicks = new ItemInvocationSet();
            }
            
            boolean changed = this.clicks.add (item);

            if (changed)
            {
               item.withDrug(this);
               firePropertyChange(PROPERTY_CLICKS, null, item);
            }
         }
      }
      return this;
   } 

   public Drug withoutClicks(ItemInvocation... value)
   {
      for (ItemInvocation item : value)
      {
         if ((this.clicks != null) && (item != null))
         {
            if (this.clicks.remove(item))
            {
               item.setDrug(null);
               firePropertyChange(PROPERTY_CLICKS, item, null);
            }
         }
      }
      return this;
   }

   public ItemInvocation createClicks()
   {
      ItemInvocation value = new ItemInvocation();
      withClicks(value);
      return value;
   } 

   
   /********************************************************************
    * <pre>
    *              many                       many
    * Drug ----------------------------------- Disease
    *              drug                   disease
    * </pre>
    */
   
   public static final String PROPERTY_DISEASE = "disease";

   @ManyToMany(cascade=CascadeType.ALL)
   @JoinTable(name="drug_disease", joinColumns=@JoinColumn(name="iddrug"), inverseJoinColumns=@JoinColumn(name="iddisease"))
   private Set<Disease> disease = null;

   public Set<Disease> getDisease()
   {
      if (this.disease == null)
      {
         return DiseaseSet.EMPTY_SET;
      }
   
      return this.disease;
   }

   public Drug withDisease(Disease... value)
   {
      if(value==null){
         return this;
      }
      for (Disease item : value)
      {
         if (item != null)
         {
            if (this.disease == null)
            {
               this.disease = new DiseaseSet();
            }
            
            boolean changed = this.disease.add (item);

            if (changed)
            {
               item.withDrug(this);
               firePropertyChange(PROPERTY_DISEASE, null, item);
            }
         }
      }
      return this;
   } 

   public Drug withoutDisease(Disease... value)
   {
      for (Disease item : value)
      {
         if ((this.disease != null) && (item != null))
         {
            if (this.disease.remove(item))
            {
               item.withoutDrug(this);
               firePropertyChange(PROPERTY_DISEASE, item, null);
            }
         }
      }
      return this;
   }

   public Disease createDisease()
   {
      Disease value = new Disease();
      withDisease(value);
      return value;
   }
   
   /********************************************************************
    * <pre>
    *              one                       many
    * Drug	 ----------------------------------- User
    *              takingDrug                   user
    * </pre>
    */
   
   public static final String PROPERTY_USER = "user";

   @ManyToMany(cascade=CascadeType.ALL, mappedBy="takingDrug")
   private Set<User> user = null;
   
   public Set<User> getUser()
   {
      if (this.user == null)
      {
         return UserSet.EMPTY_SET;
      }
   
      return this.user;
   }

   public Drug withUser(User... value)
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
               item.withTakingDrug(this);
               firePropertyChange(PROPERTY_USER, null, item);
            }
         }
      }
      return this;
   } 

   public Drug withoutUser(User... value)
   {
      for (User item : value)
      {
         if ((this.user != null) && (item != null))
         {
            if (this.user.remove(item))
            {
               item.withoutTakingDrug(this);
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
   
   
   /********************************************************************
    * <pre>
    *              one                       many
    * Drug	 ----------------------------------- User
    *              takingDrug                   user
    * </pre>
    */
   
   public static final String PROPERTY_USERREMEMBERING = "userRemembering";

   @ManyToMany(cascade=CascadeType.ALL, mappedBy="rememberedDrug")
   private Set<User> userRemembering = null;
   
   public Set<User> getUserRemembering()
   {
      if (this.userRemembering == null)
      {
         return UserSet.EMPTY_SET;
      }
   
      return this.userRemembering;
   }

   public Drug withUserRemembering(User... value)
   {
      if(value==null){
         return this;
      }
      for (User item : value)
      {
         if (item != null)
         {
            if (this.userRemembering == null)
            {
               this.userRemembering = new UserSet();
            }
            
            boolean changed = this.userRemembering.add (item);

            if (changed)
            {
               item.withRememberedDrug(this);
               firePropertyChange(PROPERTY_USERREMEMBERING, null, item);
            }
         }
      }
      return this;
   } 

   public Drug withoutUserRemembering(User... value)
   {
      for (User item : value)
      {
         if ((this.userRemembering != null) && (item != null))
         {
            if (this.userRemembering.remove(item))
            {
               item.withoutRememberedDrug(this);
               firePropertyChange(PROPERTY_USERREMEMBERING, item, null);
            }
         }
      }
      return this;
   }

   public User createUserRemembering()
   {
      User value = new User();
      withUserRemembering(value);
      return value;
   }
}
