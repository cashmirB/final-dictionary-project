import React from "react";
import Synonyms from "./Synonyms";

export default function Meaning(props) {
  return (
    <div className="Meaning">
      <h4>{props.meaning.partOfSpeech}</h4>
      <p>
        <strong>Definition: </strong>

        {props.meaning.definition}
      </p>

      <p>
        <strong>Example: </strong>

        {props.meaning.example}
      </p>

      <Synonyms synonyms={props.meaning.synonyms} />
    </div>
  );
}
