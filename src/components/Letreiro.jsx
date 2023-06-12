import React, { useEffect, useState } from "react";

export function Letreiro() {

    const [text, setText] = useState('');

    useEffect(() => {
        const frase = () => {
            let i = 0;
            let x = 0;
            let mensagem = "Venha estudar na FATEC!"

            const interval = setInterval(() => {
                let texto = '';
                for (x = 0; x < i; x++) {
                    texto += mensagem[x]
                }
                setText(texto)
                i++;
                if (i > mensagem.length) {
                    clearInterval(interval)
                }

            }, 100)
        }
    
        frase();

    }, [])
    
    return (
    <div class="let">
    <h1> {text}</h1>
    </div>
    )
}

export default Letreiro;