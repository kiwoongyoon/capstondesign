import React, { useState } from 'react';
import MapContainer from "pages/Counsel/mapContainer";
import Button from "@mui/material/Button";
function LandingPage() {
  const [InputText, setInputText] = useState('')
  const [Place, setPlace] = useState('')

  const onChange = (e) => {
    setInputText(e.target.value)
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    setPlace(InputText)
    setInputText('')
  }

  return (
    <>
    
      <form className="inputForm" onSubmit={handleSubmit}   
      style={{
        margin: "0px 0px 10px 0px",

      }}>
        <input placeholder="검색어를 입력하세요" onChange={onChange} value={InputText} 
         class="btn btn-primary placeholder col-4 mt-1" 
        />
        <Button class="btn btn-primary mt-1" type="submit">검색</Button>
      </form>

      <MapContainer searchPlace={Place} />
    </>
  )
}

export default LandingPage