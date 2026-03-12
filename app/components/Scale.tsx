export default function Scale() {
    return (
        <div className={"grid grid-cols-6 gap-y-4 items-center"}>
            <div className={"col-span-2 text-xl"}>Test: </div>
            <div className={"col-span-4 flex items-center h-full gap-x-4"}>
                {Array.from({length: 6}).map((item, i) => (
                    <div key={`${i}-0-circle`} className={`h-full max-h-full aspect-square ${i < 3 ? "bg-white" : "bg-gray-500"} rounded-[50%]`}></div>))}
            </div>
            <div className={"col-span-2 text-xl"}>Test: </div>
            <div className={"col-span-4 flex items-center h-full gap-x-4"}>
                {Array.from({length: 6}).map((item, i) => (
                    <div key={`${i}-1-circle`} className={`h-full max-h-full aspect-square ${i < 5 ? "bg-white" : "bg-gray-500"} rounded-[50%]`}></div>))}
            </div>
            <div className={"col-span-2 text-xl"}>Test: </div>
            <div className={"col-span-4 flex items-center h-full gap-x-4"}>
                {Array.from({length: 6}).map((item, i) => (
                    <div key={`${i}-1-circle`} className={`h-full max-h-full aspect-square ${i < 4 ? "bg-white" : "bg-gray-500"} rounded-[50%]`}></div>))}
            </div>
            <div className={"col-span-2 text-xl"}>Test: </div>
            <div className={"col-span-4 flex items-center h-full gap-x-4"}>
                {Array.from({length: 6}).map((item, i) => (
                    <div key={`${i}-1-circle`} className={`h-full max-h-full aspect-square ${i < 5 ? "bg-white" : "bg-gray-500"} rounded-[50%]`}></div>))}
            </div>
        </div>
    )
}