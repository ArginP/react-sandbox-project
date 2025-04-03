import jokeData from './jokeData.js'
import Joke from "./Joke.jsx";

export default function JokeApp() {

    const jokeElements = jokeData.map((joke) => {
        return <Joke
            setup={joke.setup}
            punchline={joke.punchline}
        />
    })
    return (
        <main>
            {jokeElements}
        </main>
    )
}
