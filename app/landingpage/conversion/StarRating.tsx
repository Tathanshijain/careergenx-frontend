type StarRatingProps = {
  count?: number;
  className?: string;
};

export default function StarRating({ count = 5, className }: StarRatingProps) {
  return (
    <div
      role="img"
      aria-label={`${count} out of 5 stars`}
      className={["flex items-center gap-0.5 text-amber-400", className ?? ""].join(
        " "
      )}
    >
      {Array.from({ length: count }).map((_, i) => (
        <svg
          key={i}
          viewBox="0 0 20 20"
          fill="currentColor"
          aria-hidden
          className="h-4 w-4"
        >
          <path d="M10 1.6l2.6 5.27 5.82.85-4.21 4.1.99 5.78L10 14.77l-5.2 2.83.99-5.78L1.58 7.72l5.82-.85L10 1.6z" />
        </svg>
      ))}
    </div>
  );
}
