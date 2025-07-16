import { useState } from "react";

interface UseLocalStorageReturn<T>
  extends Array<T | ((value: T | ((val: T) => T)) => void) | (() => void)> {
  0: T;
  1: (value: T | ((val: T) => T)) => void;
  2: () => void;
  storedValue: T;
  setValue: (value: T | ((val: T) => T)) => void;
  removeValue: () => void;
}

const useLocalStorage = <T>(): UseLocalStorageReturn<T> => {
  return;
};

/*
-> Here UseLocalStorageReturn is hybrid object - array strucutre so we can access value by passing array (by []) / object (by .) accessing methods.

-> sometimes we do setValue(1) and sometime setValue(prev=>prev+1), so to satisfy that bothe condition structure is like that 'setValue: (value: T | ((val: T) => T)) => void;'

*/
