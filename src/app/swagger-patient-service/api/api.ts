export * from './DiagnosisApi';
import { DiagnosisApi }  from './DiagnosisApi';
export * from './EvaluationApi';
import { EvaluationApi }  from './EvaluationApi';
export * from './MedicationApi';
import { MedicationApi }  from './MedicationApi';
export * from './PatientApi';
import { PatientApi }  from './PatientApi';
export const APIS = [ DiagnosisApi, EvaluationApi, MedicationApi, PatientApi, ];
