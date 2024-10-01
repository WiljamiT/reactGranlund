import { NumberTicker } from "./magicui/number-ticker";
 
export function NumberTickerDemo() {
  return (
    <p className="whitespace-pre-wrap text-8xl font-medium tracking-tighter text-black dark:text-white">
      <NumberTicker value={30} decimalPlaces={0} />
    </p>
  );
}