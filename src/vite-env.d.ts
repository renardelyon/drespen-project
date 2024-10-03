/// <reference types="vite/client" />
interface ImportMetaEnv {
readonly VITE_TARGET_DATE_COUNTDOWN: string;
readonly VITE_EVENT_CAROUSEL_INTERVAL: number;
}

interface ImportMeta {
readonly env: ImportMetaEnv;
}