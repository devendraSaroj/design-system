/**
 * By mapping a key to never we are essentially omitting the property from the mapped type.
 */
type PickMatching<T, V> = {
  [K in keyof T as T[K] extends V ? K : never]: T[K];
};

export type ExtractMethods<T> = Omit<
  PickMatching<T, Function | undefined>,
  'download' | 'inlist'
>;
