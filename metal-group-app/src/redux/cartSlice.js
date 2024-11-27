import { createSlice } from '@reduxjs/toolkit'
import { v4 as uuidv4 } from 'uuid'

const isClient = typeof window !== 'undefined'

const loadCartFromLocalStorage = () => {
	if (isClient) {
		try {
			const serializedCart = localStorage.getItem('cart')
			if (serializedCart) {
				return JSON.parse(serializedCart)
			}
		} catch (e) {
			console.error('Failed to load cart from localStorage', e)
		}
	}
	return []
}

const saveCartToLocalStorage = cart => {
	if (isClient) {
		try {
			const serializedCart = JSON.stringify(cart)
			localStorage.setItem('cart', serializedCart)
		} catch (e) {
			console.error('Failed to save cart to localStorage', e)
		}
	}
}

const cartSlice = createSlice({
	name: 'cart',
	initialState: {
		items: loadCartFromLocalStorage(),
	},
	reducers: {
		addToCart: (state, action) => {
			const product = { ...action.payload, cartItemId: uuidv4() }
			const existingProductIndex = state.items.findIndex(
				item =>
					item.id === product.id &&
					item.selectedSize === product.selectedSize &&
					item.deliveryMethod === product.deliveryMethod
			)

			if (existingProductIndex !== -1) {
				state.items[existingProductIndex].quantity += product.quantity
			} else {
				state.items.push(product)
			}

			saveCartToLocalStorage(state.items)
		},
		removeFromCart: (state, action) => {
			const { cartItemId } = action.payload
			state.items = state.items.filter(item => item.cartItemId !== cartItemId)

			saveCartToLocalStorage(state.items)
		},
		clearCart: state => {
			state.items = []
			saveCartToLocalStorage(state.items)
		},
		updateCartItem: (state, action) => {
			const updatedItem = action.payload
			const index = state.items.findIndex(
				item => item.cartItemId === updatedItem.cartItemId
			)

			if (index !== -1) {
				state.items[index] = updatedItem
				saveCartToLocalStorage(state.items)
			}
		},
	},
})

export const { addToCart, removeFromCart, clearCart, updateCartItem } =
	cartSlice.actions

export default cartSlice.reducer
