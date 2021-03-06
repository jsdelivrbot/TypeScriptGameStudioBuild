/**
 * TextProducer is a way to tell a game to run code in order to generate some text.  It is the way
 * we can display text that changes over time.
 */
interface TextProducer {
    /**
     * Create some text to display
     *
     * @return The text that should be displayed
     */
    makeText(): string;
}
