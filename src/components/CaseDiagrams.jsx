// Theme-aware architecture diagrams (colours come from CSS variables in CaseStudy.css).
const Defs = ({ id }) => (
  <defs>
    <marker id={id} viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto-start-reverse">
      <path d="M0 0L10 5L0 10z" className="dg-arrowhead" />
    </marker>
  </defs>
);

const Box = ({ x, y, w, h, title, sub, accent }) => (
  <g>
    <rect x={x} y={y} width={w} height={h} rx="10" className={accent ? 'dg-box dg-accent' : 'dg-box'} />
    <text x={x + w / 2} y={sub ? y + h / 2 - 3 : y + h / 2 + 5} textAnchor="middle" className="dg-title">{title}</text>
    {sub && <text x={x + w / 2} y={y + h / 2 + 15} textAnchor="middle" className="dg-sub">{sub}</text>}
  </g>
);

const Arrow = ({ d, id, dashed, both }) => (
  <path d={d} className={dashed ? 'dg-line dg-dashed' : 'dg-line'} markerEnd={`url(#${id})`} markerStart={both ? `url(#${id})` : undefined} fill="none" />
);

export const TecbooksDiagram = () => (
  <svg viewBox="0 0 800 380" role="img" aria-label="Tecbooks architecture: Next.js apps call an Express API with auth, permissions and branch access, backed by MongoDB, with a recurring worker and Socket.io notifications.">
    <Defs id="tb-a" />
    <Box x={20} y={120} w={160} h={70} title="Next.js apps" sub="Admin · Super Admin" accent />
    <rect x={250} y={20} width={300} height={290} rx="14" className="dg-group" />
    <text x={400} y={42} textAnchor="middle" className="dg-sub">Express + TypeScript API</text>
    <Box x={280} y={56} w={240} h={46} title="JWT cookie authentication" />
    <Box x={280} y={116} w={240} h={46} title="Module permissions" sub="create · read · update · delete" />
    <Box x={280} y={176} w={240} h={46} title="Branch access" />
    <Box x={280} y={236} w={240} h={46} title="24 controllers" sub="sales · purchases · accounts · stock" />
    <Arrow id="tb-a" d="M180 155 H250" />
    <Arrow id="tb-a" d="M400 102 V116" />
    <Arrow id="tb-a" d="M400 162 V176" />
    <Arrow id="tb-a" d="M400 222 V236" />
    <Box x={620} y={70} w={160} h={80} title="MongoDB" sub="43 models · sessions" accent />
    <Arrow id="tb-a" d="M550 120 H620" both />
    <Box x={620} y={190} w={160} h={70} title="Recurring worker" sub="runs daily" />
    <Arrow id="tb-a" d="M620 225 H550" />
    <Box x={250} y={330} w={300} h={40} title="Socket.io + Firebase push" />
    <Arrow id="tb-a" d="M250 350 H100 V190" dashed />
    <Arrow id="tb-a" d="M400 310 V330" dashed />
  </svg>
);

export const TecposDiagram = () => (
  <svg viewBox="0 0 800 380" role="img" aria-label="TecPos architecture: POS tills and the portal talk to a shop-PC API with a local MongoDB; a sync worker uploads changed records to the online server when the internet is available; printers receive ESC/POS bytes.">
    <Defs id="tp-a" />
    <Box x={20} y={60} w={170} h={80} title="POS tills" sub="+ back-office portal" accent />
    <Box x={20} y={240} w={170} h={70} title="Thermal printers" sub="ESC/POS · network or USB" />
    <rect x={250} y={20} width={300} height={340} rx="14" className="dg-group" />
    <text x={400} y={42} textAnchor="middle" className="dg-sub">Shop PC (works offline)</text>
    <Box x={280} y={60} w={240} h={56} title="Express 5 API" sub="JWT · roles · audit log" />
    <Box x={280} y={146} w={240} h={56} title="Local MongoDB" sub="own database per company" accent />
    <Box x={280} y={232} w={240} h={56} title="Sync worker" sub="uploads records not yet synced" />
    <Box x={280} y={308} w={240} h={40} title="Scheduled jobs + daily backups" />
    <Arrow id="tp-a" d="M190 100 H280" both />
    <Arrow id="tp-a" d="M400 116 V146" both />
    <Arrow id="tp-a" d="M400 202 V232" />
    <Arrow id="tp-a" d="M280 95 H235 V275 H190" />
    <Box x={620} y={150} w={160} h={90} title="Online server" sub="cloud copy and reports" accent />
    <Arrow id="tp-a" d="M520 260 H585 V200 H620" dashed />
    <text x={585} y={282} textAnchor="middle" className="dg-sub">only when online</text>
  </svg>
);
