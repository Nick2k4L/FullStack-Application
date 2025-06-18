

interface MyButtonProps {
    name: string,
    onClick: React.MouseEventHandler<HTMLButtonElement>

}


function MyButton({name, onClick}: MyButtonProps){
    return (
        <button onClick={onClick}>
            {name}
        </button>
    )
}

export default MyButton
