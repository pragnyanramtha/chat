import { ref } from 'vue';

const serverConfig = ref(null);
const configLoaded = ref(false);

export function useServerConfig() {
  async function fetchConfig() {
    if (configLoaded.value) return serverConfig.value;

    try {
      const response = await fetch('/api/config');
      if (response.ok) {
        serverConfig.value = await response.json();
      }
    } catch (error) {
      console.error('Failed to fetch server config:', error);
      serverConfig.value = { hasServerApiKey: false };
    } finally {
      configLoaded.value = true;
    }

    return serverConfig.value;
  }

  return {
    serverConfig,
    configLoaded,
    fetchConfig
  };
}
