import { useCountdown } from "../hooks/useCountdown";

export default function CountdownTimer({ className }: TCountdownTimer) {
  const { hours, minutes, seconds } = useCountdown(
    import.meta.env.VITE_TARGET_DATE_COUNTDOWN
  );

  return (
    <div
      className={` ${className} flex font-open-sans items-center space-x-2 text-lg font-bold`}
    >
      <span className="text-lg md:text-2xl xl:text-4xl">{hours}</span>
      <span className="text-lg md:text-xl font-semibold">Hrs</span>
      <span>:</span>
      <span className="text-lg md:text-2xl xl:text-4xl">{minutes}</span>
      <span className="text-lg md:text-xl font-semibold">Mins</span>
      <span>:</span>
      <span className="text-lg md:text-2xl xl:text-4xl">{seconds}</span>
      <span className="text-lg md:text-xl font-semibold">Secs</span>
    </div>
  );
}

type TCountdownTimer = {
  className?: string;
};
