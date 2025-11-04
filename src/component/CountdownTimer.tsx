import './CountDownDate.css'

import { useCountdown } from "../custom-hook/useCountdown";

export default function CountdownTimer(
    { targetDate }: { targetDate: Date }
) {
    const TIME_LABEL: string[] = ['DAYS', 'HOURS', 'MONTHS', 'SECONDS'];
    const times: number[] = useCountdown(targetDate);

    return (
        <>
            {
                times.reduce((accumulator, currentValue) => accumulator + currentValue, 0) <= 0 ? (
                    <>
                        Now
                    </>
                ) : (
                    <>
                        <div className="flex justify-between md:w-4xl text-center text-white items-center">
                            {
                                times.map((item, index) => (
                                    <>
                                        <div className="countdown-date">
                                            <p key={index}>{item}</p>
                                            <h1>
                                                {TIME_LABEL[index]}
                                            </h1>
                                        </div>
                                    </>
                                ))
                            }
                        </div>
                    </>
                )
            }
        </>
    )
}