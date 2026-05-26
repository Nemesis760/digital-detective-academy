import React, { useEffect, useMemo, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Lock,
  Key,
  RefreshCw,
  CheckCircle2,
  XCircle,
  Eye,
  EyeOff,
  ShieldCheck,
  AlertTriangle,
} from "lucide-react";

const StrongPasswordGame = ({ isTurkish }) => {
  const [password, setPassword] = useState("");
  const [show, setShow] = useState(false);
  const [strength, setStrength] = useState(0);
  const [feedback, setFeedback] = useState([]);
  const [warnings, setWarnings] = useState([]);

  const t = useMemo(
    () => ({
      title: isTurkish ? "Güçlü Parola Oluşturucu" : "Strong Password Builder",
      subtitle: isTurkish
        ? "Hedef: En az 12 karakter + büyük/küçük harf + rakam + sembol."
        : "Goal: 12+ characters + upper/lowercase + number + symbol.",
      placeholder: isTurkish ? "Parolanı buraya yaz..." : "Type your password here...",
      strengthLabel: isTurkish ? "Parola Gücü:" : "Password Strength:",
      weak: isTurkish ? "Zayıf" : "Weak",
      medium: isTurkish ? "Orta" : "Medium",
      veryStrong: isTurkish ? "Çok Güçlü" : "Very Strong",
      show: isTurkish ? "Göster" : "Show",
      hide: isTurkish ? "Gizle" : "Hide",
      generate: isTurkish ? "Örnek Üret" : "Generate Example",
      warningsTitle: isTurkish ? "Riskli İşaretler" : "Risky Signs",
      success: isTurkish
        ? "Harika! Çok güçlü bir parola oluşturdun."
        : "Great! You built a very strong password.",
      passphraseHint: isTurkish
        ? "İpucu: 3 kelime + sayı + sembol (şifre cümlesi) hem güçlü hem hatırlaması kolay olabilir."
        : "Tip: 3 words + numbers + symbols (a passphrase) can be strong and easier to remember.",
      criteria: {
        length: isTurkish ? "En az 12 karakter" : "At least 12 characters",
        upper: isTurkish ? "Büyük harf (A-Z)" : "Uppercase letter (A-Z)",
        lower: isTurkish ? "Küçük harf (a-z)" : "Lowercase letter (a-z)",
        number: isTurkish ? "Rakam (0-9)" : "Number (0-9)",
        symbol: isTurkish ? "Sembol (!, @, #, ...)" : "Symbol (!, @, #, ...)",
      },
    }),
    [isTurkish]
  );

  useEffect(() => {
    evaluatePassword(password);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [password]);

  const evaluatePassword = (pwd) => {
    const fb = [
      { id: "length", met: pwd.length >= 12, text: t.criteria.length },
      { id: "upper", met: /[A-Z]/.test(pwd), text: t.criteria.upper },
      { id: "lower", met: /[a-z]/.test(pwd), text: t.criteria.lower },
      { id: "number", met: /[0-9]/.test(pwd), text: t.criteria.number },
      { id: "symbol", met: /[^A-Za-z0-9]/.test(pwd), text: t.criteria.symbol },
    ];

    setFeedback(fb);
    setStrength(fb.filter((f) => f.met).length);

    const warn = [];
    const lower = (pwd || "").toLowerCase();

    if (pwd.length > 0 && pwd.length < 8) warn.push(isTurkish ? "Çok kısa." : "Too short.");
    if (/^(12345|123456|00000|qwert)/i.test(lower))
      warn.push(isTurkish ? "Çok tahmin edilebilir." : "Too predictable.");
    if (/password|parola|sifre|admin/i.test(lower))
      warn.push(isTurkish ? "‘password/şifre’ gibi kelimeler risklidir." : "Words like 'password' are risky.");
    if (/(19|20)\d{2}/.test(lower))
      warn.push(isTurkish ? "Doğum yılı gibi sayılar kolay tahmin edilir." : "Birth years are easy to guess.");

    setWarnings(warn);
  };

  const getStrengthColor = () => {
    if (strength <= 2) return "bg-red-500";
    if (strength <= 4) return "bg-yellow-500";
    return "bg-green-500";
  };

  const getStrengthText = () => {
    if (strength === 0) return "";
    if (strength <= 2) return t.weak;
    if (strength <= 4) return t.medium;
    return t.veryStrong;
  };

  const generateExample = () => {
    const trWords = ["KEDI", "BULUT", "OKUL", "KILIT", "GUVEN", "SIFRE"];
    const enWords = ["CLOUD", "LOCK", "SMART", "SAFE", "TRUST", "GUARD"];
    const pool = isTurkish ? trWords : enWords;

    const pick = () => pool[Math.floor(Math.random() * pool.length)];
    const num = String(Math.floor(10 + Math.random() * 90));
    const sym = ["!", "@", "#", "$"][Math.floor(Math.random() * 4)];

    const example = `${pick()}-${pick()}${num}${sym}${pick().toLowerCase()}`;
    setPassword(example);
    setShow(true);
  };

  return (
    <div className="p-6 bg-white rounded-xl shadow-lg border-2 border-blue-100 max-w-2xl mx-auto my-8">
      <div className="flex items-start gap-3 mb-2">
        <div className="p-3 bg-blue-600 rounded-lg text-white">
          <Lock size={24} />
        </div>
        <div>
          <h2 className="text-2xl font-bold text-slate-800">{t.title}</h2>
          <p className="text-sm text-slate-600 mt-1">{t.subtitle}</p>
        </div>
      </div>

      <div className="relative mt-6 mb-3">
        <input
          type={show ? "text" : "password"}
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder={t.placeholder}
          className="w-full p-4 pr-24 text-lg border-2 border-slate-200 rounded-xl focus:border-blue-500 focus:outline-none transition-all font-mono"
          autoComplete="off"
        />

        <div className="absolute right-3 top-1/2 -translate-y-1/2 flex items-center gap-2">
          <button
            type="button"
            onClick={() => setShow((s) => !s)}
            className="px-3 py-2 rounded-lg bg-slate-100 hover:bg-slate-200 text-slate-700 text-sm font-semibold"
            title={show ? t.hide : t.show}
          >
            {show ? <EyeOff size={18} /> : <Eye size={18} />}
          </button>

          <div className="text-slate-400">
            <Key size={20} />
          </div>
        </div>
      </div>

      <div className="flex items-center justify-between gap-3 mb-6">
        <p className="text-xs text-slate-600">{t.passphraseHint}</p>
        <button
          type="button"
          onClick={generateExample}
          className="flex items-center gap-2 px-4 py-2 rounded-lg bg-blue-600 text-white font-semibold hover:bg-blue-700 transition-colors"
        >
          <RefreshCw size={18} />
          {t.generate}
        </button>
      </div>

      <div className="mb-6">
        <div className="flex justify-between items-end mb-2">
          <span className="text-sm font-semibold text-slate-600">{t.strengthLabel}</span>
          <motion.span
            key={strength}
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            className={`text-sm font-bold px-3 py-1 rounded-full text-white ${getStrengthColor()}`}
          >
            {getStrengthText()}
          </motion.span>
        </div>
        <div className="h-3 w-full bg-slate-100 rounded-full overflow-hidden">
          <motion.div
            className={`h-full ${getStrengthColor()}`}
            initial={{ width: 0 }}
            animate={{ width: `${(strength / 5) * 100}%` }}
            transition={{ type: "spring", stiffness: 100 }}
          />
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {feedback.map((item) => (
          <motion.div
            key={item.id}
            className={`flex items-center gap-3 p-3 rounded-lg border-2 transition-colors ${
              item.met ? "bg-green-50 border-green-200 text-green-700" : "bg-slate-50 border-slate-100 text-slate-500"
            }`}
            animate={{ scale: item.met ? 1.02 : 1 }}
          >
            {item.met ? <CheckCircle2 size={20} /> : <XCircle size={20} />}
            <span className="text-sm font-medium">{item.text}</span>
          </motion.div>
        ))}
      </div>

      {warnings.length > 0 && (
        <div className="mt-6 p-4 rounded-xl border-2 border-amber-200 bg-amber-50 text-amber-900">
          <div className="flex items-center gap-2 font-bold mb-2">
            <AlertTriangle size={18} />
            <span>{t.warningsTitle}</span>
          </div>
          <ul className="list-disc pl-5 text-sm">
            {warnings.map((w, idx) => (
              <li key={`warn-${idx}`}>{w}</li>
            ))}
          </ul>
        </div>
      )}

      <AnimatePresence>
        {strength === 5 && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0 }}
            className="mt-6 p-4 bg-green-600 text-white rounded-xl flex items-center gap-4 shadow-lg"
          >
            <ShieldCheck size={32} />
            <p className="font-bold text-lg">{t.success}</p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default StrongPasswordGame;
