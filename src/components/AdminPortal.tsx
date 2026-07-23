import { useEffect, useState } from 'react';
import {
  supabase,
  isSupabaseConfigured,
  ADMIN_PASSWORD,
  OFFER_TABLE,
  OFFER_BUCKET,
  OFFER_ROW_ID,
  getCurrentOffer,
} from '../lib/supabase';

export default function AdminPortal({ onClose }: { onClose: () => void }) {
  const [authed, setAuthed] = useState(false);
  const [pw, setPw] = useState('');
  const [pwError, setPwError] = useState(false);

  const [text, setText] = useState('');
  const [file, setFile] = useState<File | null>(null);
  const [preview, setPreview] = useState<string | null>(null);
  const [currentImg, setCurrentImg] = useState<string | null>(null);
  const [active, setActive] = useState(true);
  const [status, setStatus] = useState<string>('');
  const [busy, setBusy] = useState(false);

  // Load current offer once logged in.
  useEffect(() => {
    if (!authed) return;
    getCurrentOffer().then((o) => {
      if (o) {
        setText(o.text || '');
        setActive(o.active);
        setCurrentImg(o.image_url);
      }
    });
  }, [authed]);

  const login = () => {
    if (pw === ADMIN_PASSWORD) {
      setAuthed(true);
      setPwError(false);
    } else {
      setPwError(true);
    }
  };

  const onPick = (f: File | null) => {
    setFile(f);
    setPreview(f ? URL.createObjectURL(f) : null);
  };

  const save = async () => {
    if (!supabase) {
      setStatus('Backend not configured yet.');
      return;
    }
    setBusy(true);
    setStatus('Saving…');
    try {
      let imageUrl = currentImg;

      if (file) {
        const ext = file.name.split('.').pop() || 'jpg';
        const path = `offer-${Date.now()}.${ext}`;
        const { error: upErr } = await supabase.storage
          .from(OFFER_BUCKET)
          .upload(path, file, { upsert: true, cacheControl: '3600' });
        if (upErr) throw upErr;
        const { data: pub } = supabase.storage.from(OFFER_BUCKET).getPublicUrl(path);
        imageUrl = pub.publicUrl;
      }

      const { error: dbErr } = await supabase.from(OFFER_TABLE).upsert({
        id: OFFER_ROW_ID,
        image_url: imageUrl,
        text: text.trim() || null,
        active,
        updated_at: new Date().toISOString(),
      });
      if (dbErr) throw dbErr;

      setCurrentImg(imageUrl);
      setStatus('Saved! The offer is now live.');
    } catch (e: any) {
      setStatus('Error: ' + (e?.message || 'could not save'));
    } finally {
      setBusy(false);
    }
  };

  return (
    <div className="admin" role="dialog" aria-modal="true" aria-label="Admin portal" onClick={onClose}>
      <div className="admin__card" onClick={(e) => e.stopPropagation()}>
        <button className="admin__close" onClick={onClose} aria-label="Close">×</button>

        {!authed ? (
          <div className="admin__login">
            <p className="eyebrow" style={{ marginBottom: '0.6rem' }}>Admin</p>
            <h3 className="display" style={{ fontSize: '1.6rem', marginBottom: '1.25rem', color: 'var(--ink)' }}>
              Offer Portal
            </h3>
            <input
              className="admin__input"
              type="password"
              placeholder="Password"
              value={pw}
              onChange={(e) => setPw(e.target.value)}
              onKeyDown={(e) => e.key === 'Enter' && login()}
            />
            {pwError && <p className="admin__err">Wrong password.</p>}
            <button className="btn btn--solid" style={{ marginTop: '1rem' }} onClick={login}>
              Log in
            </button>
          </div>
        ) : (
          <div className="admin__panel">
            <p className="eyebrow" style={{ marginBottom: '0.6rem' }}>Offer Portal</p>
            <h3 className="display" style={{ fontSize: '1.6rem', marginBottom: '1.25rem', color: 'var(--ink)' }}>
              Update the pop-up offer
            </h3>

            {!isSupabaseConfigured && (
              <p className="admin__err" style={{ marginBottom: '1rem' }}>
                Backend not connected yet — uploads won’t save until Supabase keys are added.
              </p>
            )}

            <label className="admin__label">Offer image</label>
            <input
              className="admin__file"
              type="file"
              accept="image/*"
              onChange={(e) => onPick(e.target.files?.[0] || null)}
            />
            {(preview || currentImg) && (
              <img className="admin__preview" src={preview || currentImg || ''} alt="Offer preview" />
            )}

            <label className="admin__label" style={{ marginTop: '1rem' }}>
              Offer text (optional)
            </label>
            <textarea
              className="admin__input"
              rows={3}
              placeholder="e.g. Diwali Special — 20% off making charges this week!"
              value={text}
              onChange={(e) => setText(e.target.value)}
            />

            <label className="admin__check">
              <input type="checkbox" checked={active} onChange={(e) => setActive(e.target.checked)} />
              Show this offer to visitors
            </label>

            <button className="btn btn--solid" style={{ marginTop: '1rem' }} disabled={busy} onClick={save}>
              {busy ? 'Saving…' : 'Save offer'}
            </button>
            {status && <p className="admin__status">{status}</p>}
          </div>
        )}
      </div>
    </div>
  );
}
