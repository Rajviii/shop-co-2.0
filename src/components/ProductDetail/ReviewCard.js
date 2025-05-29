export default function ReviewCard({ name, text, stars, date }) {
return (
    <div className="bg-white p-4 rounded shadow">
            <div className="mt-2 text-yellow-500">{"★".repeat(stars)}</div>
            <div className="flex items-center">
                <p className="text-xl font-semibold text-black">{name}</p>
                <svg
                    className="ml-2 w-5 h-5 text-green-500"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    viewBox="0 0 24 24"
                >
                    <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="2" fill="white" />
                    <path d="M9 12l2 2 4-4" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
            </div>
            <p className="text-lg text-black">{text}</p>
            <p className="text-xs mt-1 text-gray-500">Posted on {date}</p>
    </div>
);
}
