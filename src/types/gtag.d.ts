declare global {
  interface Window {
    gtag?: (
      command: 'config' | 'event',
      targetId: string,
      config?: Record<string, string | number | boolean | null> | {
        page_path: string;
      }
    ) => void;
  }
}

export {};