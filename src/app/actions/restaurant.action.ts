import { Action } from '@ngrx/store';
import { Restaurant } from 'src/app/restaurants/models/restaurant.model';

export enum RestaurantActionTypes {
    LOAD_RESTAURANT = '[RESTAURANT] Load',
    LOAD_RESTAURANT_SUCCESS = '[RESTAURANT] Load Success',
    LOAD_RESTAURANT_FAILURE = '[RESTAURANT] Load Failure',
    LOAD_SEARCH = '[SEARCH] Search',
    LOAD_SEARCH_REFINE = '[SEARCH] Search Refine',
    LOAD_SEARCH_SUCCESS = '[SEARCH] Search Success',
    LOAD_SEARCH_RESET = '[SEARCH] Search Reset',
    ADD_FAVOURITE = '[FAVOURITE] Add Favourite',
    REMOVE_FAVOURITE = '[FAVOURITE] Remove Favourite',
}

export class LoadRestaurant implements Action {
    readonly type = RestaurantActionTypes.LOAD_RESTAURANT;
}

export class LoadRestaurantSuccess implements Action {
    readonly type = RestaurantActionTypes.LOAD_RESTAURANT_SUCCESS;
    constructor(
        public payload: Array<Restaurant>
    ) {}
}

export class LoadRestaurantFailure implements Action {
    readonly type = RestaurantActionTypes.LOAD_RESTAURANT_FAILURE;
    constructor(
        public payload: Error
    ) {}
}

export class LoadSearch implements Action {
    readonly type = RestaurantActionTypes.LOAD_SEARCH; 
    constructor(
        public payload: string
    ) {}
}

export class LoadSearchRefine implements Action {
    readonly type = RestaurantActionTypes.LOAD_SEARCH_REFINE; 
    constructor(
        public payload: string
    ) {}
}

export class LoadSearchSuccess implements Action {
    readonly type = RestaurantActionTypes.LOAD_SEARCH_SUCCESS;
    constructor(
        public payload: Array<Restaurant>
    ) {}
}

export class LoadSearchReset implements Action {
    readonly type = RestaurantActionTypes.LOAD_SEARCH_RESET;
}

export class AddFavourite implements Action {
    readonly type = RestaurantActionTypes.ADD_FAVOURITE;
    constructor(
        public payload: Restaurant
    ) {}
}

export class RemoveFavourite implements Action {
    readonly type = RestaurantActionTypes.REMOVE_FAVOURITE;
    constructor(
        public payload: Restaurant
    ) {}
}

export type Actions = LoadRestaurant | LoadRestaurantSuccess | LoadRestaurantFailure | AddFavourite | RemoveFavourite | LoadSearch | LoadSearchRefine | LoadSearchSuccess | LoadSearchReset;