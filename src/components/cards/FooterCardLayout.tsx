export function FooterCardLayout({children} : {children : React.ReactNode}){
    return <div className="flex justify-end items-center gap-x-4 px-2 w-full">
        {children}
    </div>
}
