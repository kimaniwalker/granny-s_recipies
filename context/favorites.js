import { createContext, useContext, useState, useLayoutEffect } from 'react';


const FavoritesContext = createContext();
FavoritesContext.displayName = 'FavoritesContext'

export function FavoritesWrapper({ children }) {

    const [favorites, setFavorites] = useState([])


    function removeItem(id) {
        setFavorites((currentFavorites) => currentFavorites.filter(item => item !== id))
    }
    function addItem(id) {
        setFavorites((currentFavorites) => [...currentFavorites, id])
    }
    function clearFavories() {
        setFavorites([])
    }
    function checkIfFavorited(id) {
        return favorites.includes(id)
    }


    return (
        <FavoritesContext.Provider value={{ favorites, setFavorites, removeItem, addItem, clearFavories, checkIfFavorited }} >
            {children}
        </FavoritesContext.Provider>
    );
}

export function useFavoritesContext() {
    return useContext(FavoritesContext);
}