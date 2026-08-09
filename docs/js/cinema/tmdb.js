// =====================================================
// NEWSOS TMDB SERVICE
// The Movie Database API
// =====================================================

const TMDB = {

    async importMovie(tmdbId) {

        try {

            const response = await fetch(

                `${NewsOS.api.tmdb.apiBaseUrl}/movie/${tmdbId}`,

                {

                    headers: {

                        Authorization: `Bearer ${NewsOS.api.tmdb.token}`,

                        "Content-Type": "application/json"

                    }

                }

            );

            if (!response.ok) {

                throw new Error(
                    `TMDb Error: ${response.status}`
                );

            }

            return await response.json();

        }

        catch (error) {

            console.error(
                "TMDb Import Failed:",
                error
            );

            return null;

        }

    }

};