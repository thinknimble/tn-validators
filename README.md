# Change Log
#### v1.1.0release date *06/13/2021* #### 
- MustMatchValidator updated to take in reference form and matcher is now a string 
  - For backward compatibility change matcher to string of field name and pass form as variable to parameters
  - e.g when calling the add validator method on the form `this.form.addValidator('<toFieldName>', new MustMatchValidator({matcher:'<matchingFieldName>', form:'<form>'}))
#### v1.1.1release date *07/20/2021* #### 
- MinDateValidator added to enforce minimum dates
- MaxDateValidator added to enforce maximum dates
- Required Validator will now validate array.length 