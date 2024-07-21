
import { create } from 'zustand';
import { auth } from './firebase';

export const useUserStore = create((set) => ({
    currentUser: null,
    isLoading: true,
    fetchUserInfo: async (userID) => {
       
        set({ isLoading: true });
        try {
            
            const authUser = auth.currentUser;
            if(!authUser) return  set({ currentUser:null, isLoading: false  });
            
            return set({ currentUser: authUser ? authUser : false, isLoading: false });
            
        } catch (error) {
            console.error(error);
            set({ currentUser:null, isLoading: false  });
        }
    }
}));