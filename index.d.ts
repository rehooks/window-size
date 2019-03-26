interface WindowSize {
  innerHeight: number | undefined,
  innerWidth: number | undefined,
  outerHeight: number | undefined,
  outerWidth: number | undefined,
}

export default function useWindowSize(): WindowSize;
