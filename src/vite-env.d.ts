/// <reference types="vite/client" />
interface ImportMetaEnv {
readonly VITE_TARGET_DATE_COUNTDOWN: string;
}

interface ImportMeta {
readonly env: ImportMetaEnv;
}