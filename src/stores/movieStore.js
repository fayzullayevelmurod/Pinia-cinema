import {defineStore} from 'pinia';

export const useMovieStore = defineStore("movieStore", {
    state: () => ({
        movies: [
            {
                id: 1,
                original_title: "Spider-Man",
                overview: 
                    "Spider-Man is a superhero appearing in American comic books published by Marvel Comics. Created by writer-editor Stan Lee and artist Steve Ditko, he first appeared in the anthology comic book Amazing Fantasy #15 (August 1962) in the Silver Age of Comic Books. He has been featured in comic books, television shows, films, video games, novels, and plays.",
                poster_path: "",
                relase_date: "2023-03-21",
                isWatched: false
            },
            {
                id: 2,
                original_title: "The Betman",
                overview:
                "The Batman is a 2022 American superhero film based on the DC Comics character Batman. Produced by Warner Bros. Pictures, DC Films, 6th & Idaho, and Dylan Clark Productions, and distributed by Warner Bros.",
                poster_path: "",
                relase_date: "2023-05-25",
                isWatched: true
            }

        ],
        activeTab: 1,
    }),
    getters: {
        watchedMovies() {
            return this.movies.filter((el) => el.isWatched);
        },
        totalCountMovies() {
            return this.movies.length
        }
    },
    actions : {
        setActiveTab(id) {
            this.activeTab = id;
        }
    }
})