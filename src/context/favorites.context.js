import {createContext, useState} from "react";

export const FavoritesContext = createContext({
    favorites: [],
    totalFavorites: 0,
    addFavorite: (item) => {},
    removeFavorite: (meetupId) => {},
    checkIsFavorite: (meetupId) => {},
});

export function FavoritesContextProvider(props) {
    const [userFavorites, setUserFavorites] = useState([]);

    const addFavoriteHandler = (item) => {
        setUserFavorites(state => state.concat(item));
    }

    const removeFavoriteHandler = (meetupId) => {
        setUserFavorites(state =>
            state.filter(meetup => meetup.id !== meetupId)
        )
    }

    const itemIsFavoriteHandler = (meetupId) => userFavorites.some(meetup => meetup.id === meetupId)


    const context = {
        favorites: userFavorites,
        totalFavorites: userFavorites.length,
        addFavorite: addFavoriteHandler,
        removeFavorite: removeFavoriteHandler,
        checkIsFavorite: itemIsFavoriteHandler,
    }

    return (
        <FavoritesContext.Provider value={context}>
            {props.children}
        </FavoritesContext.Provider>
    )
}
