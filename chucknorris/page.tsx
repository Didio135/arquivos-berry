"use client"

import { useEffect, useState } from "react";


const ChuckNorrisPage = () => {
  useState

  const getChuckNorris = async () => {
     // scopo 3

    const resposta = await fetch("https://api.chucknorris.io/jokes/random");
    const chuck = await resposta.json();

    const children = await getChuckNorrisChildren()

    return chuck
  }

  const getChuckNorrisChildren = async () => {
     // scopo 4

    return []
  }

  return (
    <div className="bg-white w-full h-100vh ">
      <div onClick={getChuckNorris}>Chucknorris page</div>
     
    </div>
  );
}

export default ChuckNorrisPage;