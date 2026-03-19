import {
  Area,
  AreaChart,
  CartesianGrid,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from 'recharts'

const data = Array.from({ length: 12 }).map((_, i) => {
  const month = i + 1
  const value = Math.round(6 + month * month * 1.7)
  return { month, value }
})

export function MiniRoiPreview() {
  return (
    <div className="h-56 w-full rounded-2xl bg-black/20 p-4 ring-1 ring-white/10">
      <ResponsiveContainer width="100%" height="100%">
        <AreaChart data={data} margin={{ top: 10, right: 10, left: -6, bottom: 0 }}>
          <defs>
            <linearGradient id="roiFill" x1="0" y1="0" x2="0" y2="1">
              <stop offset="5%" stopColor="rgba(255,90,31,0.45)" />
              <stop offset="95%" stopColor="rgba(255,90,31,0.02)" />
            </linearGradient>
          </defs>
          <CartesianGrid stroke="rgba(255,255,255,0.08)" vertical={false} />
          <XAxis
            dataKey="month"
            stroke="rgba(255,255,255,0.35)"
            tick={{ fontSize: 11 }}
            tickLine={false}
            axisLine={false}
          />
          <YAxis
            stroke="rgba(255,255,255,0.35)"
            tick={{ fontSize: 11 }}
            tickLine={false}
            axisLine={false}
            width={30}
          />
          <Tooltip
            contentStyle={{
              background: 'rgba(10,12,26,0.92)',
              border: '1px solid rgba(255,255,255,0.12)',
              borderRadius: 12,
              color: 'rgba(255,255,255,0.9)',
              fontSize: 12,
            }}
            labelStyle={{ color: 'rgba(255,255,255,0.65)' }}
          />
          <Area
            type="monotone"
            dataKey="value"
            stroke="rgba(255,90,31,0.9)"
            strokeWidth={2}
            fill="url(#roiFill)"
            dot={false}
          />
        </AreaChart>
      </ResponsiveContainer>
    </div>
  )
}

