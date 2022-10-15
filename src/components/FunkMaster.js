import './FunkMaster.css';

import React, {useState, useEffect} from 'react'
import { doc, updateDoc, getDoc, arrayUnion } from 'firebase/firestore';
import { useAuth } from '../context';
import { db } from './firebaseconfig';
import { useNavigate } from 'react-router-dom';

const gameHistory = []



const FunkMaster = ({id, owned, close, expires}) => {

    const [spin, setSpin] = useState(false)
    const [ring1, setRing1] = useState()
    const [ring2, setRing2] = useState()
    const [ring3, setRing3] = useState()
    const [price, setPrice] = useState()
    const [input, setInput] = useState(10)
    const [realBet, setRealBet] = useState()
    const [jackpot, setJackpot] = useState(0)
    const [balance, setBalance] = useState()
    const [havecard,sethavecard] = useState('')
    const {user} = useAuth()
    const navBack = useNavigate()
    
    let iid = user.uid
    const updateUser = async function(iid, gameHistory)  {
        const userDoc = doc(db,"userinformation",iid)
        const newFields = {gameHistory: arrayUnion(...gameHistory)}
        await updateDoc(userDoc,newFields)
    }
    let winning = 0

    const updateBalance = async function(iid, balance)  {
        const userDoc = doc(db,"userinformation",iid)
        const newFields = {balance: balance}
        await updateDoc(userDoc,newFields)
    }

    useEffect(()=>{
        const docref =  doc(db,"userinformation",iid)
        getDoc(docref)
        .then((data)=>{
        setBalance(data.data().balance)
        sethavecard(data.data().haveCard)
        })  
       },[user])
    

    useEffect(() => {
        win()
    }, [ring3])


 function row1() {

    if (!spin) {
    return (
        <>
        <div className="ringEnd">🎻</div>
        <div className="ringEnd">🥁</div>
        <div className="ringEnd">🎸</div>
        <div className="ringEnd">🎷</div>
        </>
            )
    } else if (spin && ring1 === undefined) {
    return (
        <>
        <div className="ringMoving">🎻</div>
        <div className="ringMoving">🥁</div>
        <div className="ringMoving">🎸</div>
        <div className="ringMoving">🎷</div>
        </>
            )
    } else if (ring1 >= 1 && ring1 <= 50 ) {
    return (
        <>
        <div className="ringEnd">🎻</div>
        <div className="ringEnd">🥁</div>
        <div className="ringEnd">🎸</div>
        <div className="ringEnd">🎷</div>
        </>
            )  
    } else if (ring1 > 50 && ring1 <= 75) {
        return (
            <>
            <div className="ringEnd">🥁</div>
            <div className="ringEnd">🎸</div>
            <div className="ringEnd">🎷</div>
            <div className="ringEnd">🎻</div>
            </>
                )  
        } else if (ring1 > 75 && ring1 <= 95) {
            return (
                <>
                <div className="ringEnd">🎸</div>
                <div className="ringEnd">🎷</div>
                <div className="ringEnd">🎻</div>
                <div className="ringEnd">🥁</div>
                </>
                    )  
            } else if (ring1 > 95 && ring1 <= 100) {
                return (
                    <>
                    <div className="ringEnd">🎷</div>
                    <div className="ringEnd">🎻</div>
                    <div className="ringEnd">🥁</div>
                    <div className="ringEnd">🎸</div>
                    </>
                        )  
                }
 }

 function row2() {

    if (!spin) {
    return (
        <>
        <div className="ringEnd">🎷</div>
        <div className="ringEnd">🎻</div>
        <div className="ringEnd">🥁</div>
        <div className="ringEnd">🎸</div>
        </>
            )
    } else if (spin && ring2 === undefined) {
    return (
        <>
        <div className="ringMoving">🎻</div>
        <div className="ringMoving">🥁</div>
        <div className="ringMoving">🎸</div>
        <div className="ringMoving">🎷</div>
        </>
            )
    } else if (ring2 >= 1 && ring2 <= 50 ) {
        return (
            <>
            <div className="ringEnd">🎻</div>
            <div className="ringEnd">🥁</div>
            <div className="ringEnd">🎸</div>
            <div className="ringEnd">🎷</div>
            </>
                )  
        } else if (ring2 > 50 && ring2 <= 75) {
            return (
                <>
                <div className="ringEnd">🥁</div>
                <div className="ringEnd">🎸</div>
                <div className="ringEnd">🎷</div>
                <div className="ringEnd">🎻</div>
                </>
                    )  
            } else if (ring2 > 75 && ring2 <= 95) {
                return (
                    <>
                    <div className="ringEnd">🎸</div>
                    <div className="ringEnd">🎷</div>
                    <div className="ringEnd">🎻</div>
                    <div className="ringEnd">🥁</div>
                    </>
                        )  
                } else if (ring2 > 95 && ring2 <= 100) {
                    return (
                        <>
                        <div className="ringEnd">🎷</div>
                        <div className="ringEnd">🎻</div>
                        <div className="ringEnd">🥁</div>
                        <div className="ringEnd">🎸</div>
                        </>
                            )  
                    }

 }

 function row3() {

    if (!spin) {
    return (
        <>
        <div className="ringEnd">🎷</div>
        <div className="ringEnd">🎻</div>
        <div className="ringEnd">🥁</div>
        <div className="ringEnd">🎸</div>
        </>
            )
    } else if (spin && ring3 === undefined) {
    return (
        <>
        <div className="ringMoving">🎻</div>
        <div className="ringMoving">🥁</div>
        <div className="ringMoving">🎸</div>
        <div className="ringMoving">🍋</div>
        <div className="ringMoving">🍍</div>
        <div className="ringMoving">🎷</div>
        </>
            )
    } else if (ring3 >= 1 && ring3 <= 50 ) {
        return (
            <>
            <div className="ringEnd">🎻</div>
            <div className="ringEnd">🥁</div>
            <div className="ringEnd">🎸</div>
            <div className="ringEnd">🎷</div>
            </>
                )  
        } else if (ring3 > 50 && ring3 <= 75) {
            return (
                <>
                <div className="ringEnd">🥁</div>
                <div className="ringEnd">🎸</div>
                <div className="ringEnd">🎷</div>
                <div className="ringEnd">🎻</div>
                </>
                    )  
            } else if (ring3 > 75 && ring3 <= 95) {
                return (
                    <>
                    <div className="ringEnd">🎸</div>
                    <div className="ringEnd">🎷</div>
                    <div className="ringEnd">🎻</div>
                    <div className="ringEnd">🥁</div>
                    </>
                        )  
                } else if (ring3 > 95 && ring3 <= 100) {
                    return (
                        <>
                        <div className="ringEnd">🎷</div>
                        <div className="ringEnd">🎻</div>
                        <div className="ringEnd">🥁</div>
                        <div className="ringEnd">🎸</div>
                        </>
                            )  
                    }
     }



 function rand() {
      setRing1(Math.floor(Math.random() * (100 - 1) + 1))
      setTimeout(function(){setRing2(Math.floor(Math.random() * (100 - 1) + 1))}, 1000)
      setTimeout(function(){setRing3(Math.floor(Math.random() * (100 - 1) + 1))}, 2000)
    }

function play() {
    if (ring3 > 1 || !spin){
    if (input <= balance && input >= 1){
    setRealBet(input)
    setSpin(true)
    setRing1()
    setRing2()
    setRing3()
    setBalance(balance - input)
    setJackpot(jackpot + (input / 2))
    setTimeout(function(){
   rand()
    }, 2000)
} else {
    setPrice(10)
}

}
}


function win() {
    
    if (ring1 <= 50 && ring2 <= 50 && ring3 <= 50 && ring1 !== undefined) {
        setPrice(1)
        winning = input * 15
        setBalance(balance + winning)
    } else if (ring1 > 50 && ring1 <= 75 && ring2 > 50 && ring2 <= 75 && ring3 > 50 && ring3 <= 75 && ring1 !== undefined) {
        setPrice(2)
        winning = input * 20
        setBalance(balance + winning)
    } else if (ring1 > 75 && ring1 <= 95 && ring2 > 75 && ring2 <= 95 && ring3 > 75 && ring3 <= 95 && ring1 !== undefined) {
        setPrice(3)
        winning = input * 25
        setBalance(balance + winning)
    } else if (ring1 > 95 && ring1 <= 100 && ring2 > 95 && ring2 <= 100 && ring3 > 95 && ring3 <= 100 && ring1 !== undefined) {
        setPrice(4)
        winning = jackpot
        setBalance(balance + winning)
        setJackpot(0)
    } else {
        setPrice(0)
        winning = 0
    } 
    
    ring3 && historyRecorder(winning)
   
}

function historyRecorder(){
    gameHistory.push({
        Date: new Date().toLocaleString(),
        Bet: realBet,
        Win: winning,
        AfterBalance: balance+winning,
        Game: "Funk Master"
    })
    updateBalance(iid,balance+winning)
    updateUser(iid,gameHistory)
}

function premio() {
    if (price === 1 && ring3 > 1) {
        return (
        <p className="priceInd">{"🥁 X15 You've won " + (realBet * 15) + "֏!"}</p>
        )
    } else if (price === 2 && ring3 > 1) {
        return (
            <p className="priceInd">{"🎸 X20 You've won " + (realBet * 20) + "֏!"}</p>
            )
    } else if (price === 3 && ring3 > 1) {
        return (
            <p className="priceInd">{"🎷 X25 You've won " + (realBet * 25) + "֏!"}</p>
            )
    } else if (price === 4 && ring3 > 1) {
        return (
            <p className="priceInd">{"🎻 Jackpot! You've won: " + (jackpot) + "֏!"}</p>
            )
    } else if (price === 0 && ring3 > 1) {
        return (
            <p className="priceInd">😧 ¡So close! But no luck...</p>
            )
    } else if (price === 10) {
        return (
            <p className="priceInd">🥶 <span style={{color: `red`}}>Not enough funds</span> </p>
            )
    } else { 
        return (
             <p className="priceInd"> <span style={{color: `white`}}> Get 3X 🎻 - Win Jackpot  </span> </p>

            )
    }
}

function numChecker(e) {
    const value = e.target.value;
    const regex = /^[0-9]+$/;
    if ((value.match(regex) && parseInt(value) >= 0 ) || value === "") {
        setInput(value);
    }
}

function deposit(){
    setBalance(balance + 1000)
    updateBalance(iid,balance + 1000)
}

    return (
        <div className = 'funkmaster'>
                <div className="fullSlot1">
        <h1 className="casinoName1">funk master</h1>
        {/* <h3 className='casinoName'>Get 3 X 🎻 =>Win Jackpot</h3>/ */}
        <h1 className="price1">{"Jackpot: " + jackpot + "֏"}</h1>
        <div className="slot">
        <div className="row">
        {row1()}
        </div>
        <div className="row">
        {row2()}
        </div>
        <div className="row">
        {row3()}
        </div>
        </div>
        <h1 className="price1">
        {premio()}
        </h1>
        <div className="slotFoot">
        <input value={input} step={10} type="number" onChange={(e) => numChecker(e)} className="betInput" placeholder=""></input>
        <button className="spinButton1" onClick={() => play()}>Spin</button>
        </div>
        <h1 className="price1">{"Available balance: " + Math.round((balance * 100)) / 100 + "֏"}</h1>
        <br/>
        {havecard?<button onClick={deposit} className="buyMoreButton1">Deposit 1000 ֏</button>:
        <button className="buyMoreButton1" onClick={()=>{
            navBack("/card")
        }}>Attach Bankcard</button>
        }
        <button onClick={() => navBack(-1)} className="buyMoreButton1">Close Game</button>

        </div>
        </div>
        
        
    )
}

export default FunkMaster;
