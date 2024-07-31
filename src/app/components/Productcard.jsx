import React from 'react'

const styles = {
  fontFamily: "sans-serif",



}

const Productcard = ({icon, product_name, desc}) => {
  return (
    <div className="bg-black text-left p-5 flex flex-col gap-3 rounded-3xl" style={styles}>
      <img src={icon} alt="icon" />
      <h2>{product_name}</h2>
      <p>{desc}</p>
    </div>
  )
}

export default Productcard
