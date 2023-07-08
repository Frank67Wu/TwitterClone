type MessageTextBoxProps = {
    self: boolean
}

export function MessageTextBox({self} : MessageTextBoxProps) {
    const colorClasses = self ? "bg-blue-400 text-white" : "bg-gray-200 text-black" 
    const positionClasses = self ? "ml-auto" : "mr-auto"
    return (
    <div className={`${colorClasses} ${positionClasses} rounded-2xl px-2 py-1.5 mb-2 text-xs max-w-[225px] break-words`}>
        <h1>
            Example Text alksdjflkasjdfkasdjflksjdflkjdsjfsdkflkdsjfldksjflsdjflsdjf
        </h1>
    </div>
    )
}