export const useAuth = defineStore('auth', () => {
  const auth = ref(false);

  return { auth };
});
