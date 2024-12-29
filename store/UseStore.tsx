import { create } from 'zustand';

interface GlobalState {
    protocol: string;
    portNumber: string;
    url: string;
    authUrl: string;
    email: string;
    password: string;
    userId: number | null; // Add userId
    setEmail: (email: string) => void;
    setPassword: (password: string) => void;
    setUserId: (userId: number) => void;
    setUrl: () => void;
}

const useStore = create<GlobalState>((set) => ({
    protocol: process.env.NEXT_PUBLIC_PROTOCOL || 'http',
    portNumber: process.env.NEXT_PUBLIC_PORT || '5125',
    url: '',
    authUrl: '',
    email: '',
    password: '',
    userId: null,
    setEmail: (email) => set({ email }),
    setPassword: (password) => set({ password }),
    setUserId: (userId) => set({ userId }),
    setUrl: () => {
        set((state) => ({
            url: `${state.protocol}://localhost:${state.portNumber}`,
            authUrl: `${state.protocol}://localhost:${state.portNumber}/api/Auth/Login`,
        }));
    },
}));

export default useStore;
