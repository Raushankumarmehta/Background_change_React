import React, { useState } from 'react'

function Bg_change() {
    const [color, setColor] = useState("olive")

    return (

        <div className='' style={{ height: '100vh', width: '100', backgroundColor: color }}>

            <div className='Btn1'>
                <button  onClick={() => setColor("Blue")} type="button" class="btn btn-primary">Blue</button>
                <button onClick={() => setColor("Grey")} type="button" class="btn btn-secondary">Grey</button>
                <button onClick={() => setColor("Green")}  type="button" class="btn btn-success">Green</button>
                <button onClick={() => setColor("Red")} type="button" class="btn btn-danger">Red</button>
                <button onClick={() => setColor("Yellow")} type="button" class="btn btn-warning">Yellow</button>
                <button onClick={() => setColor("SkyBlue")}  type="button" class="btn btn-info">Sky_Blue</button>
                <button onClick={() => setColor("White")} type="button" class="btn btn-light">White</button>
                <button onClick={() => setColor("Black")} type="button" class="btn btn-dark">Black</button>
                

            </div>


        </div>


    )
}

export default Bg_change
