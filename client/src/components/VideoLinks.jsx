import { useLanguage } from '../contexts/LanguageContext';

const getYouTubeId = (url) => {
  if (!url) return null;
  const match = url.match(/(?:youtube\.com\/watch\?v=|youtu\.be\/|youtube\.com\/embed\/)([^&\n?#]+)/);
  return match ? match[1] : null;
};

const getThumbnail = (video) => {
  const ytId = getYouTubeId(video.url);
  if (ytId) return `https://img.youtube.com/vi/${ytId}/hqdefault.jpg`;
  return video.thumbnail || null;
};

export default function VideoLinks({ videoLinks = [] }) {
  const languageState = useLanguage?.();
  const isTurkish = languageState?.isTurkish ?? languageState?.language === 'tr' ?? true;

  if (!Array.isArray(videoLinks) || videoLinks.length === 0) return null;

  return (
    <div style={{ margin: '2rem 0' }}>
      <h3 style={{
        fontSize: '1.1rem', fontWeight: 700, color: '#1e293b',
        marginBottom: '1rem', display: 'flex', alignItems: 'center', gap: '8px',
      }}>
        📺 {isTurkish ? 'Videolar' : 'Videos'}
      </h3>

      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fill, minmax(240px, 1fr))',
        gap: '1rem',
      }}>
        {videoLinks.map((video, idx) => {
          const thumb = getThumbnail(video);
          return (
            <div
              key={video.url || idx}
              onClick={() => window.open(video.url, '_blank', 'noopener,noreferrer')}
              style={{
                borderRadius: '12px', overflow: 'hidden', cursor: 'pointer',
                background: '#fff', border: '1px solid #e2e8f0',
                boxShadow: '0 2px 8px rgba(0,0,0,0.08)',
                transition: 'transform 0.2s, box-shadow 0.2s',
              }}
              onMouseEnter={e => {
                e.currentTarget.style.transform = 'translateY(-4px)';
                e.currentTarget.style.boxShadow = '0 8px 24px rgba(0,0,0,0.15)';
              }}
              onMouseLeave={e => {
                e.currentTarget.style.transform = 'translateY(0)';
                e.currentTarget.style.boxShadow = '0 2px 8px rgba(0,0,0,0.08)';
              }}
            >
              {/* Thumbnail */}
              <div style={{
                position: 'relative', aspectRatio: '16/9',
                background: '#0f172a', overflow: 'hidden',
              }}>
                {thumb ? (
                  <img
                    src={thumb} alt={video.title || ''}
                    style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }}
                    onError={e => { e.target.style.display = 'none'; }}
                  />
                ) : (
                  <div style={{
                    width: '100%', height: '100%',
                    background: 'linear-gradient(135deg, #1e1b4b, #312e81)',
                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                    fontSize: '3rem',
                  }}>🎬</div>
                )}

                {/* ✅ Play butonu overlay */}
                <div style={{
                  position: 'absolute', inset: 0,
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  background: 'rgba(0,0,0,0.25)',
                }}>
                  <div style={{
                    width: '52px', height: '52px', borderRadius: '50%',
                    background: '#ff0000',
                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                    boxShadow: '0 4px 16px rgba(0,0,0,0.4)',
                  }}>
                    <div style={{
                      width: 0, height: 0,
                      borderTop: '10px solid transparent',
                      borderBottom: '10px solid transparent',
                      borderLeft: '18px solid white',
                      marginLeft: '4px',
                    }} />
                  </div>
                </div>

                {/* YouTube etiketi */}
                <div style={{
                  position: 'absolute', bottom: '8px', right: '8px',
                  background: '#ff0000', color: 'white',
                  fontSize: '0.6rem', fontWeight: 900,
                  padding: '2px 6px', borderRadius: '4px', letterSpacing: '0.05em',
                }}>
                  YouTube
                </div>
              </div>

              {/* Başlık */}
              <div style={{ padding: '10px 12px 12px' }}>
                <p style={{
                  margin: 0, fontSize: '0.88rem', fontWeight: 600,
                  color: '#1e293b', lineHeight: 1.4,
                  display: '-webkit-box',
                  WebkitLineClamp: 2,
                  WebkitBoxOrient: 'vertical',
                  overflow: 'hidden',
                }}>
                  {video.title || (isTurkish ? 'Videoyu İzle' : 'Watch Video')}
                </p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}