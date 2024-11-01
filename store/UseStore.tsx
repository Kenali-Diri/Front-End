import { create } from 'zustand';

interface GlobalState {
    protocol: string;
    portNumber: string;
    url: string;
    authUrl: string;
    email: string;
    password: string;
    setEmail: (email: string) => void;
    setPassword: (password: string) => void;
}

const protocol = process.env.NEXT_PUBLIC_PROTOCOL || 'https';
const portNumber = process.env.NEXT_PUBLIC_PORT || '5125';
const authUrl = `${protocol}://localhost:${portNumber}/api/Users/Login`;

const useStore = create<GlobalState>((set) => ({
    protocol,
    portNumber,
    url: 'http://localhost:5215/api/LevelModules',
    authUrl,
    email: '',
    password: '',
    setEmail: (email) => set({ email }),
    setPassword: (password) => set({ password }),
}));

export default useStore;
