import { characters } from "./data.js";

const btnGenerate = document.getElementById('btn-generate')
const passwordOne = document.getElementById('password-one');
const passwordTwo = document.getElementById('password-two');
const range = document.getElementById('range')
const rangeValue = document.getElementById('range-value')

range.addEventListener('mousemove', ()=>{
    rangeValue.innerHTML = range.value
})


function getRandomCharacter() 
{
    let randomIndex = Math.floor(Math.random() * characters.length);
    return characters[randomIndex];
}

function generateRandomPassword()
{
    let password = "";
    const passwordLength = range.value

    for(let i = 0; i < passwordLength; i++)
    {
        password += getRandomCharacter();
    }
    return password;
}

function render(param) 
{  
    passwordOne.textContent = generateRandomPassword();
    passwordOne.innerHTML += `<span><i class="ri-file-copy-line" id="copy-1"></i></span>`
    document.getElementById('copy-1').addEventListener('click', async() => 
    {
       const text = passwordOne.textContent
       /* navigator.clipboard.writeText(text);*/
        try 
        {
            await navigator.clipboard.writeText(text);
            alert("Text copied to clipboard!");
        } catch (err) {
            console.error("Failed to copy text: ", err);
        }
        
    })

    passwordTwo.textContent = generateRandomPassword();
    passwordTwo.innerHTML += `<span><i class="ri-file-copy-line" id="copy-2"></i></span>`
    document.getElementById('copy-2').addEventListener('click', async() => 
    {
       const text = passwordTwo.textContent
       /* navigator.clipboard.writeText(text);*/
        try 
        {
            await navigator.clipboard.writeText(text);
            alert("Text copied to clipboard!");
        } catch (err) {
            console.error("Failed to copy text: ", err);
        }
        
    })
}
btnGenerate.addEventListener('click', render)

