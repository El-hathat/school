const setSessionValue = (key, value) => {
  if (typeof window !== 'undefined') {
    sessionStorage.setItem(key, value);
  }
};

const removeSession = () => {
  if (typeof window !== 'undefined') {
    sessionStorage.clear();
  }
};

const getSessionValue = (key) => {
  if (typeof window !== 'undefined') {
    return sessionStorage.getItem(key);
  }
  return null;
};


export default {
  setSessionValue,
  getSessionValue,
  removeSession
}