import {useEffect, useState} from 'react';

export default function AppContador(){
    let [homem,setHomem] = useState(0);
    let [mulher,setMulher] = useState(0);
    let [count,setCount] = useState(0);

    function somaHomem() {
        setHomem(homem + 1);
        setCount(count + 1);
    }
    function subtraiHomem() {
        setHomem(homem - 1);
        setCount(count - 1);
    }
    function somaMulher() {
        setMulher(mulher + 1)
        setCount(count + 1);
    }
    function subtraiMulher() {
        setMulher(mulher -1);
        setCount(count - 1);
    }

    function totalPessoas(homem, mulher, setCount ){
        setCount(homem + mulher);
    }

    useEffect(function totalPessoasEffect() {
        totalPessoas(homem,mulher, setCount);
    }, [homem, mulher, setCount]);

    function resetContador() {
        setHomem(0);
        setMulher(0);
        setCount(0);
    }

    const H = {
        name: 'Hedy lamarr',
        imageUrl: 'https://i.pinimg.com/564x/91/91/14/919114b8e96e6bd764d76f3680166959.jpg',
        imageSize: 100,
        };

    const M = {
        name: 'Hedy lamarr',
        imageUrl: 'https://i.pinimg.com/originals/50/59/af/5059afaccfbcf16bca2b371b9383a890.jpg',
        imageSize: 100,
    };

    return(
        <>
    <div class='tela'>    
        <div class='totalizador'>
          <h2>Total Geral: {count}</h2>
        </div>
        
       <div class='homem'>
            <img
             src={H.imageUrl}
             style={{
                width:H.imageSize,
                height: H.imageSize}}
             />
            
            <button class='incremento' onClick={somaHomem}>+</button>
            <div>
                <p>Total Homem</p>
                <p>{homem}</p>
            </div>
            
            <button class='decremento' onClick={subtraiHomem} disabled={homem<=0}>-</button>
        </div>
        <div class='mulher'>
           
            <img
                src={M.imageUrl}
                style={{
                    width:M.imageSize,
                    height: M.imageSize}}
             />
            <button class='incremento' onClick={somaMulher}>+</button>
            <div>
               <p>Total Mulher </p>
                <p> {mulher}</p>
            </div>    
            <button class='decremento'onClick={subtraiMulher} disabled={mulher<=0}>-</button>
        </div>
        <div>
            <button class='reset' onClick={resetContador}>Reset</button>
        </div>
    </div>    
        </>
    );

}