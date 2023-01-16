type GreetProps = {
    name: string,
    messageCount?: number,
    isLoggedIn: boolean,
}

export const  Greet = (props: GreetProps) => {
    const { messageCount = 0 } = props

    return(
        <div>
            <h1>
                {
                    props.isLoggedIn 
                        ? `Hello World ${props.name}. You have ${messageCount} unread`
                        : 'Welcome Guest'
                }
            </h1>
        </div>
    )
}