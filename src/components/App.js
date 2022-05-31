import React, { useState } from 'react'
import "../styles/App.css"

export const numbers = '0123456789'
export const upperCaseLetters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'
export const lowerCaseLetters ='abcdefghijklmnopqrstuvwxyz'
export const specialCharacters = "!'^+%&/()=?_#$½§{[]}|;:>÷`<.*-@é"


const App = () => {


  const handleGeneratePassword = () => {
   
   }


const createPassword = (characterList) => {
  console.log(characterList)
   
}

  const copyToClipboard = (password) => {
    navigator.clipboard.writeText(password)
  }



  const handleCopyPassword = (e) => {
    if (password != "") {
      copyToClipboard(password)  
    }
  }

  return (
    <div className="App">
      <div className="container">
        <div className="generator">
          <h2 className="generator__header">
           Password Generator
          </h2>
          <div className="generator__password">
            <h3 >"SHow password here"</h3>
            <button className="copy__btn">
              <i onClick={handleCopyPassword} className="far fa-clipboard"></i>
            </button>
          </div>
          <div className="form-group">
            <label htmlFor="password-strength">Password length</label>
            <input className="pw"   type="number" id="password-stregth" name="password-strength" max="26" min="8" />
          </div>
          <div className="form-group">
            <label htmlFor="uppercase-letters">Add Uppercase Letters</label>
            <input   id="uppercase-letters"  type="checkbox" name="uppercase-letters" />
          </div>
          <div className="form-group">
            <label htmlFor="lowercase-letters">Add Lowercase Letters</label>
            <input id="lowercase-letters" name="lowercase-letters" type="checkbox"  />
          </div>
          <div className="form-group">
            <label htmlFor="include-numbers">Include Numbers</label>
            <input className="numbers" name="numbers" type="checkbox" />
          </div>
          <div className="form-group">
            <label htmlFor="include-symbols">Include Symbols</label>
            <input className="symbols" type="checkbox" name="include-symbols" />
          </div>
          <button onClick={handleGeneratePassword} className="generator__btn">
            Generate Password
          </button>
        </div>
      </div>
    </div>
  )
}

export default App
