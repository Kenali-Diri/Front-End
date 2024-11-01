import { create } from 'zustand';

interface GlobalState {
    protocol: string;
    portNumber: string;
    url: string;
    authUrl: string;
}

const protocol = process.env.NEXT_PUBLIC_PROTOCOL || 'https';
const portNumber = process.env.NEXT_PUBLIC_PORT || '5125';
const authUrl = `${protocol}://localhost:${portNumber}/api/Users/Login`;

const UseStore = create<GlobalState>((set) => ({
    protocol,
    portNumber,
    url: 'http://localhost:5215/api/LevelModules',
    authUrl, // This now correctly uses the template literal value
}));

export default UseStore;
