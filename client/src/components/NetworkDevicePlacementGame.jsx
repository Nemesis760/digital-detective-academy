import { useState } from 'react';

const DATA_TR = {
  devices: [
    { id: 'modem',    name: 'Modem',           emoji: '📡', desc: 'İnternet sinyalini dijital veriye çevirir.' },
    { id: 'router',   name: 'Router',          emoji: '📶', desc: 'Wi-Fi yayar ve ağ trafiğini yönetir.' },
    { id: 'switch',   name: 'Switch',          emoji: '🔌', desc: 'Birden fazla cihazı kablolu olarak aynı ağa bağlar.' },
    { id: 'ethernet', name: 'Ethernet Kablosu', emoji: '🔗', desc: 'Cihazları fiziksel kablo ile birbirine bağlar.' },
  ],
  slots: [
    { id: 'modem',    hint: 'İnternet sinyalini alır ve dönüştürür',  icon: '🌐' },
    { id: 'router',   hint: 'Wi-Fi yayar ve trafiği yönetir',         icon: '📡' },
    { id: 'switch',   hint: 'Çok sayıda cihazı kablolu bağlar',       icon: '🖥️' },
    { id: 'ethernet', hint: 'Fiziksel kablo ile veri taşır',          icon: '🔗' },
  ],
  title:    'Ağ Cihazlarını Yerleştir',
  subtitle: 'İpucunu oku, doğru cihazı seç, konuma yerleştir!',
  doneMsg:  '🎉 Tüm cihazları doğru yerleştirdin!',
  tryAgain: '🔄 Tekrar Dene',
  selectMsg: '👇 Önce aşağıdan bir cihaz seç',
  correct: '✅ Doğru!',
  wrong:   '❌ Yanlış, tekrar dene!',
};

const DATA_EN = {
  devices: [
    { id: 'modem',    name: 'Modem',           emoji: '📡', desc: 'Converts the internet signal into digital data.' },
    { id: 'router',   name: 'Router',          emoji: '📶', desc: 'Broadcasts Wi-Fi and manages network traffic.' },
    { id: 'switch',   name: 'Switch',          emoji: '🔌', desc: 'Connects multiple devices via cable to the same network.' },
    { id: 'ethernet', name: 'Ethernet Cable',  emoji: '🔗', desc: 'Physically connects devices to each other with a cable.' },
  ],
  slots: [
    { id: 'modem',    hint: 'Receives and converts the internet signal', icon: '🌐' },
    { id: 'router',   hint: 'Broadcasts Wi-Fi and manages traffic',      icon: '📡' },
    { id: 'switch',   hint: 'Connects many devices via cable',           icon: '🖥️' },
    { id: 'ethernet', hint: 'Carries data through a physical cable',     icon: '🔗' },
  ],
  title:    'Place the Network Devices',
  subtitle: 'Read the hint, select a device, then click the correct slot!',
  doneMsg:  '🎉 You placed all devices correctly!',
  tryAgain: '🔄 Try Again',
  selectMsg: '👇 Select a device below first',
  correct: '✅ Correct!',
  wrong:   '❌ Wrong, try again!',
};

export default function NetworkDevicePlacementGame({ isTurkish }) {
  const data = isTurkish ? DATA_TR : DATA_EN;
  const [placed, setPlaced]       = useState({});   // slotId → deviceId
  const [selected, setSelected]   = useState(null); // deviceId
  const [flash, setFlash]         = useState(null); // { slotId, correct }
  const [done, setDone]           = useState(false);

  const placedDevices = new Set(Object.values(placed));

  const handleSlotClick = (slotId) => {
    if (done) return;
    if (!selected) { triggerFlash(slotId, null); return; }
    const correct = selected === slotId;
    if (correct) {
      const next = { ...placed, [slotId]: selected };
      setPlaced(next);
      setSelected(null);
      triggerFlash(slotId, true);
      if (Object.keys(next).length === data.slots.length) {
        setTimeout(() => setDone(true), 700);
      }
    } else {
      triggerFlash(slotId, false);
    }
  };

  const triggerFlash = (slotId, correct) => {
    setFlash({ slotId, correct });
    setTimeout(() => setFlash(null), 700);
  };

  const reset = () => {
    setPlaced({});
    setSelected(null);
    setFlash(null);
    setDone(false);
  };

  const getSlotBg = (slot) => {
    if (placed[slot.id]) return 'linear-gradient(135deg,#d1fae5,#a7f3d0)';
    const f = flash?.slotId === slot.id;
    if (f && flash.correct === false) return 'linear-gradient(135deg,#fee2e2,#fca5a5)';
    if (f && flash.correct === null)  return 'linear-gradient(135deg,#fef9c3,#fde68a)';
    return 'linear-gradient(135deg,#f0f4ff,#ede9fe)';
  };

  const getSlotBorder = (slot) => {
    if (placed[slot.id]) return '2.5px solid #10b981';
    const f = flash?.slotId === slot.id;
    if (f && flash.correct === false) return '2.5px solid #ef4444';
    if (f && flash.correct === null)  return '2.5px solid #f59e0b';
    return '2.5px dashed rgba(99,102,241,.35)';
  };

  return (
    <div style={{ fontFamily: 'inherit', width: '100%', maxWidth: 700, margin: '0 auto' }}>

      {/* ── DONE SCREEN ── */}
      {done && (
        <div style={{
          background: 'linear-gradient(135deg,#d1fae5,#ecfdf5)',
          border: '2px solid #10b981', borderRadius: 20, padding: '28px 24px',
          textAlign: 'center', marginBottom: 16,
        }}>
          <div style={{ fontSize: '3rem', marginBottom: 8 }}>🏆</div>
          <h3 style={{ color: '#065f46', fontWeight: 900, fontSize: '1.4rem', margin: '0 0 8px' }}>
            {data.doneMsg}
          </h3>
          <div style={{ display: 'flex', gap: 10, justifyContent: 'center', flexWrap: 'wrap', margin: '16px 0' }}>
            {data.devices.map(d => (
              <div key={d.id} style={{
                background: 'white', border: '2px solid #10b981', borderRadius: 12,
                padding: '8px 14px', fontSize: '.85rem', fontWeight: 700,
              }}>
                {d.emoji} {d.name}: <span style={{ color: '#374151', fontWeight: 600 }}>{d.desc}</span>
              </div>
            ))}
          </div>
          <button onClick={reset} style={{
            padding: '10px 28px', borderRadius: 999, border: 'none',
            background: 'linear-gradient(135deg,#6366f1,#8b5cf6)', color: 'white',
            fontWeight: 800, fontSize: '1rem', cursor: 'pointer',
            boxShadow: '0 4px 14px rgba(99,102,241,.35)',
          }}>
            {data.tryAgain}
          </button>
        </div>
      )}

      {!done && (
        <>
          {/* ── NETWORK DIAGRAM ── */}
          <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 0, marginBottom: 20 }}>

            {/* Cloud */}
            <div style={{
              background: 'linear-gradient(135deg,#e0f2fe,#bae6fd)',
              border: '2px solid #38bdf8', borderRadius: 999,
              padding: '8px 24px', fontWeight: 800, color: '#0369a1', fontSize: '1rem',
            }}>
              ☁️ {isTurkish ? 'İnternet' : 'Internet'}
            </div>

            {/* Connector */}
            <div style={{ width: 3, height: 24, background: 'linear-gradient(#6366f1,#8b5cf6)' }} />

            {/* Slots 1–3 (vertical chain) */}
            {data.slots.slice(0, 3).map((slot, i) => (
              <div key={slot.id} style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                <SlotBox
                  slot={slot}
                  placed={placed[slot.id]}
                  device={data.devices.find(d => d.id === placed[slot.id])}
                  flash={flash}
                  getBg={getSlotBg}
                  getBorder={getSlotBorder}
                  onClick={() => handleSlotClick(slot.id)}
                  isTurkish={isTurkish}
                />
                {i < 2 && <div style={{ width: 3, height: 20, background: 'linear-gradient(#6366f1,#8b5cf6)' }} />}
              </div>
            ))}

            {/* Switch branches */}
            <div style={{ display: 'flex', alignItems: 'flex-start', gap: 0, position: 'relative', width: '100%', justifyContent: 'center', marginTop: 0 }}>
              <div style={{ display: 'flex', gap: 16 }}>
                {['💻','🖥️','🖨️'].map((icon, i) => (
                  <div key={i} style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                    <div style={{ width: 3, height: 18, background: '#a5b4fc' }} />
                    <div style={{
                      background: 'linear-gradient(135deg,#e0e7ff,#c7d2fe)',
                      border: '1.5px solid #818cf8', borderRadius: 10,
                      padding: '6px 10px', fontSize: '1.2rem', fontWeight: 700,
                    }}>{icon}</div>
                  </div>
                ))}
              </div>
            </div>

            {/* Ethernet slot — separate row */}
            <div style={{ marginTop: 20, width: '100%', display: 'flex', justifyContent: 'center' }}>
              <SlotBox
                slot={data.slots[3]}
                placed={placed[data.slots[3].id]}
                device={data.devices.find(d => d.id === placed[data.slots[3].id])}
                flash={flash}
                getBg={getSlotBg}
                getBorder={getSlotBorder}
                onClick={() => handleSlotClick(data.slots[3].id)}
                isTurkish={isTurkish}
                label={isTurkish ? '(Cihazlar arası bağlantı)' : '(Device connection)'}
              />
            </div>
          </div>

          {/* ── DEVICE TRAY ── */}
          <div style={{
            background: 'linear-gradient(135deg,#f0f4ff,#faf5ff)',
            border: '2px solid rgba(99,102,241,.2)', borderRadius: 16,
            padding: '14px 16px',
          }}>
            <p style={{ margin: '0 0 10px', fontWeight: 700, color: '#374151', fontSize: '.88rem' }}>
              {selected
                ? (isTurkish ? `"${data.devices.find(d=>d.id===selected)?.name}" seçildi → şimdi bir konuma tıkla` : `"${data.devices.find(d=>d.id===selected)?.name}" selected → click a slot`)
                : data.selectMsg}
            </p>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: 10 }}>
              {data.devices.map(device => {
                const isPlaced   = placedDevices.has(device.id);
                const isSelected = selected === device.id;
                return (
                  <button
                    key={device.id}
                    onClick={() => !isPlaced && setSelected(isSelected ? null : device.id)}
                    disabled={isPlaced}
                    style={{
                      padding: '10px 16px', borderRadius: 12, border: 'none', cursor: isPlaced ? 'default' : 'pointer',
                      fontWeight: 800, fontSize: '.9rem',
                      background: isPlaced
                        ? '#d1fae5'
                        : isSelected
                        ? 'linear-gradient(135deg,#6366f1,#8b5cf6)'
                        : 'white',
                      color: isPlaced ? '#065f46' : isSelected ? 'white' : '#1e1b4b',
                      border: isSelected ? '2px solid #4f46e5' : '2px solid rgba(99,102,241,.25)',
                      boxShadow: isSelected ? '0 4px 14px rgba(99,102,241,.4)' : '0 2px 8px rgba(0,0,0,.06)',
                      transform: isSelected ? 'translateY(-2px)' : 'none',
                      transition: 'all .15s',
                      opacity: isPlaced ? 0.6 : 1,
                      textDecoration: isPlaced ? 'line-through' : 'none',
                    }}
                  >
                    {device.emoji} {device.name} {isPlaced ? '✓' : ''}
                  </button>
                );
              })}
            </div>
          </div>

          {/* Flash message */}
          {flash && (
            <div style={{
              marginTop: 10, padding: '8px 14px', borderRadius: 10, fontWeight: 800,
              background: flash.correct === true  ? '#d1fae5'
                        : flash.correct === false ? '#fee2e2'
                        : '#fef9c3',
              color:      flash.correct === true  ? '#065f46'
                        : flash.correct === false ? '#991b1b'
                        : '#92400e',
              textAlign: 'center', fontSize: '.95rem',
              transition: 'all .2s',
            }}>
              {flash.correct === true  ? data.correct
             : flash.correct === false ? data.wrong
             : data.selectMsg}
            </div>
          )}
        </>
      )}
    </div>
  );
}

function SlotBox({ slot, placed, device, getBg, getBorder, onClick, isTurkish, label }) {
  return (
    <button
      onClick={onClick}
      style={{
        width: 240, minHeight: 68, borderRadius: 14,
        background: getBg(slot), border: getBorder(slot),
        cursor: 'pointer', padding: '10px 14px',
        display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center',
        gap: 4, transition: 'all .2s', boxShadow: '0 3px 10px rgba(0,0,0,.07)',
      }}
    >
      {placed ? (
        <>
          <span style={{ fontSize: '1.3rem' }}>{device?.emoji}</span>
          <span style={{ fontWeight: 900, color: '#065f46', fontSize: '.95rem' }}>{device?.name}</span>
          <span style={{ fontSize: '.7rem', color: '#059669', fontWeight: 600 }}>✓ {isTurkish ? 'Yerleştirildi' : 'Placed'}</span>
        </>
      ) : (
        <>
          <span style={{ fontSize: '1.1rem' }}>{slot.icon} ❓</span>
          <span style={{ fontSize: '.78rem', fontWeight: 700, color: '#4b5563', textAlign: 'center' }}>
            {slot.hint}
          </span>
          {label && <span style={{ fontSize: '.7rem', color: '#9ca3af' }}>{label}</span>}
        </>
      )}
    </button>
  );
}
