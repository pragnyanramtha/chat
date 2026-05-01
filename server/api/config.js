import { defineEventHandler } from 'h3';

export default defineEventHandler((event) => {
  const runtimeConfig = useRuntimeConfig(event);
  
  return {
    hasServerApiKey: !!runtimeConfig.hackclubApiKey
  };
});
