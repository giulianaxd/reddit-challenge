import { API_HOST } from "../utils/constants";

export const getPostsNew = async () => {
    try {
        const url = `${API_HOST}/new.json`;
        const response = await fetch(url);
        const result = await response.json();
        console.log("new")
        return result;
    } catch {
        throw error;
    }
}

export const getPostsTop = async () => {
    try {
        const url = `${API_HOST}/top.json`;
        const response = await fetch(url);
        const result = await response.json();
        console.log("top")
        return result;
    } catch {
        throw error;
    }
}

export const getPostsPopular = async () => {
    try {
        const url = `${API_HOST}/controversial.json`;
        const response = await fetch(url);
        const result = await response.json();
        console.log("contro")
        return result;
    } catch {
        throw error;
    }
}

export const getPostsHot = async () => {
    try {
        const url = `${API_HOST}/hot.json`;
        const response = await fetch(url);
        const result = await response.json();
        console.log("hot")
        return result;
    } catch {
        throw error;
    }
}