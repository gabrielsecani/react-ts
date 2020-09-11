import React, { Component, useState, useEffect } from "react";

interface InputProps {
  valor: string;
  mudou: React.Dispatch<string>
}

export default (props: InputProps) => {
  const [val, setVal] = useState(props.valor);
  useEffect(() => {
    if (props.mudou) {
      props.mudou(val);
    }
  });
  // const setValor = v => {
  //   setVal(v);
  // };
  const estilo = { width: "90%" };
  return (
    <div>
      <label>{val}</label>
      <input
        style={estilo}
        value={val}
        onChange={e => setVal(e.target.value)}
      />
    </div>
  );
};
