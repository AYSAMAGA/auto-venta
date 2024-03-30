import { AbstractControl, ValidationErrors, ValidatorFn } from "@angular/forms";

export function validadorCodigo(): ValidatorFn {
  return (control: AbstractControl): ValidationErrors | null => {
    const codigoV = /[A-Z]\D{4}$/; 
    const value = control.value; 

    
    if (codigoV.test(value)) {
      return null; 
    } else {
      return { codigoValidate: true }; 
    }
  };
}
