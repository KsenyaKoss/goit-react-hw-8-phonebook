export const selectUser = state => state.auth.user
export const selectIsLoggedIn = state => state.auth.isLoggedIn
export const selectContacts = state => state.contacts.contacts
export const selectFilter = state => state.contacts.filter
export const selectIsLoading = state => state.contacts.contacts.isLoading

export const selectFilteredContacts = state => {
	const {items} = selectContacts(state)
	const filter = selectFilter(state)
	return items.filter(contact => contact.name.toLowerCase().includes(filter.toLowerCase()))
}