import React from "react"
import "./Quote.css"

export const QuoteCard = ({ quote }) => (
    <section className="quote">
        <h3 className="quote__text">"{quote.text}"</h3>
        { quote.author ? <div className="quote__author">-{quote.author}</div> : <div className="quote__author">-Anonymous</div> }
    </section>
)
