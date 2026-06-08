interface WaveDividerProps {
  fill?: string
  className?: string
}

export default function WaveDivider({ fill = '#FFFFFF', className = '' }: WaveDividerProps) {
  return (
    <div className={`w-full overflow-hidden leading-none ${className}`} style={{ height: '28px' }} aria-hidden="true">
      <svg
        viewBox="0 0 1200 30"
        preserveAspectRatio="none"
        style={{ width: '100%', height: '100%', display: 'block' }}
      >
        <path
          d="M0,15 C200,30 400,0 600,15 C800,30 1000,0 1200,15 L1200,30 L0,30 Z"
          fill={fill}
        />
      </svg>
    </div>
  )
}
