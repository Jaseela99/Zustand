import create from "zustand";
import {devtools,persist} from "zustand/middleware"
let settingsStore=((set)=>({
    dark:false,
    toggleDarkMode:()=>set((state)=>({dark:!state.dark}))
}))
let peopleStore=((set)=>({
    //state
    people: ['jaseela','jaseena'],
    //function to update state
    addPerson: (person)=>
    set((state)=>({people:[...state.people,person] })),
   
}))
 peopleStore=devtools(peopleStore)
 settingsStore=persist(settingsStore,{name:"user_settings"})
 settingsStore=devtools(settingsStore)

export const usePeopleStore=create(peopleStore)
export const useSettingsStore=create(settingsStore)

