import { AnnotationTypeRegistry } from 'chartjs-plugin-annotation';

export type AnnotationType = keyof AnnotationTypeRegistry;

export type AnnotationOptions<TYPE extends AnnotationType = AnnotationType> = {
  [key in TYPE]: { type: key } & AnnotationTypeRegistry[key];
}[TYPE];
