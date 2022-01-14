class LocalStore {
  setLocalStore(key: string, value: any) {
    window.localStorage.setItem(key, JSON.stringify(value))
  }
  getLocalStore(key: string) {
    const value = window.localStorage.getItem(key)
    if (value) {
      return JSON.parse(value)
    }
  }
  deleteLocalStore(key: string) {
    window.localStorage.removeItem(key)
  }
  clearLocalStore() {
    window.localStorage.clear()
  }
}

export default new LocalStore()
